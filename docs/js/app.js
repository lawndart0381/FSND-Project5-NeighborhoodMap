/* ---Model--- */

// Data from data.js
var courses = courses;

// Data construct for a course in courses
var Course = function(data) {
	"use strict";
	this.club =  ko.observable(data.Club);
	this.rank = ko.observable(data.Rank);
	this.address = ko.observable(data.Address);
	this.city = ko.observable(data.City);
	this.stateabbr = ko.observable(data.StateAbbr);
	this.zip = ko.observable(data.Zip);
	this.state = ko.observable(data.State);
	this.lat = ko.observable(data.lat);
	this.lng = ko.observable(data.lng);
	this.marker = ko.observable();
};

/* ---ViewModel--- */

// Initialize google map
var map;
function initializeMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 4,
		center: {lat: 39.842286, lng: -97.646484},
		mapTypeControl: false,
	});

	// Initialize Knockout after map is initialized
	ko.applyBindings(new ViewModel());
}
// Display an error if the map does not load
function gmapError() {
	"use strict";
	document.getElementById('gmapError').innerHTML = "<h1>Google Maps did not" +
	"load. Please refresh the page and/or check your internet connection!</h1>"
};

var ViewModel = function() {
	var self = this;

	// Store course data in the courseList array.
	this.courseList = ko.observableArray();
	courses.forEach(function(courseItem) {
		self.courseList.push(new Course(courseItem));
	});

	// Create the google maps info window
	var infoWindow = new google.maps.InfoWindow();
	var getInfoWindow;

	// Create the markers for the map
	var icon = "img/golf.png";
	var marker;

	self.courseList().forEach(function(courseItem) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(courseItem.lat(), courseItem.lng()),
			club: courseItem.club(),
			city: courseItem.city(),
			state: courseItem.state(),
			map: map,
			icon: icon,
		});
		courseItem.marker = marker;

		// Event listener for a marker being clicked
		google.maps.event.addListener(courseItem.marker, 'click', function() {
			infoWindow.open(map, this);
			// Get courseItem info and call Weather Underground for weather
			getInfoWindow = jQuery(document).ready(function($) {
				$.ajax({
					url: 'http://api.wunderground.com/api/d0d755cd50c01c50/'
					+ 'geolookup/conditions/q/' + courseItem.lat() + "," +
					courseItem.lng() + '.json',
					dataType: "jsonp",
					success: function(parsed_json) {
						var temp_f =
							parsed_json['current_observation']['temp_f'];
						var weather =
							parsed_json['current_observation']['weather'];
						infoWindow.setContent('<div class="info"><strong>'
							+ courseItem.club()
							+ '</strong>' + '<p>' + courseItem.city() + ', '
							+ courseItem.state() + '</p>'
							+ '<p><strong>Ranked number ' + courseItem.rank()
							+ ' in the state!</strong></p>'
							+ '<p>Current Temperature: ' + temp_f + '° F </p>'
							+ '<p>Current Weather: ' + weather + '</p>'
							+ '<hr>'
							+ '<p>Weather info brought to you by:</p>'
							+ '<img src="img/wundergroundLogo.png"'
							+ 'alt="Weather Underground Logo"></div>');
					},
					error: function(XMLHttpRequest, textStatus, errorThrown) {
						alert("Weather Underground failed to load, try again.");
					},
				});
			});

			// Animate the marker and set a timeout
			courseItem.marker.setAnimation(google.maps.Animation.BOUNCE);
			setTimeout(function() {
				courseItem.marker.setAnimation(null);
			}, 6000);

			// Zoom in on the course with satellite view
			map.setCenter(courseItem.marker.getPosition());
			map.setZoom(18);
			map.setMapTypeId('satellite');
		});
	});

	// Open the course info window when it is clicked from the list.
	self.showCourse = function(courseItem) {
		google.maps.event.trigger(courseItem.marker, 'click');
	}

	// Reset the map if user clicks the reset button.
	var resetButton = document.getElementById('reset');
	resetButton.onclick = reloadPage;
	function reloadPage(){
		window.location.reload();
	}

	// Make the markers and list visible
	self.visible = ko.observableArray();
	self.courseList().forEach(function(course) {
		self.visible.push(course);
	});

	// Search by Course, City, or State and filter courses and markers
	self.searchInput = ko.observable('');
	self.filterCourses = function() {
		var userInput = self.searchInput().toLowerCase();
		self.visible.removeAll();
		self.courseList().forEach(function(course) {
			course.marker.setVisible(false);
			if (course.club().toLowerCase().indexOf(userInput) >= 0) {
				self.visible.push(course);
			} else if (course.city().toLowerCase().indexOf(userInput) >= 0) {
				self.visible.push(course);
			} else if (course.state().toLowerCase().indexOf(userInput) >= 0) {
				self.visible.push(course);
			}
		});
		self.visible().forEach(function(course) {
			course.marker.setVisible(true);
		});
	};
};
