/* --- Golf Course Data --- */
var courses = [
 {
   "Club": "Shoal Creek",
   "Rank": 1,
   "Address": "100 New Williamsburg Dr",
   "City": " Shoal Creek",
   "StateAbbr": " AL ",
   "Zip": 35242,
   "State": "Alabama",
   "lat": 33.438469,
   "lng": -86.613547
 },
 {
   "Club": "Country Club of Birmingham",
   "Rank": 2,
   "Address": "3325 Country Club Rd #500",
   "City": " Mountain Brook",
   "StateAbbr": " AL ",
   "Zip": 35213,
   "State": "Alabama",
   "lat": 33.49761,
   "lng": -86.767534
 },
 {
   "Club": "The Ledges Country Club",
   "Rank": 3,
   "Address": "32 Castle Down Dr",
   "City": " Huntsville",
   "StateAbbr": " AL ",
   "Zip": 35802,
   "State": "Alabama",
   "lat": 34.671298,
   "lng": -86.519313
 },
 {
   "Club": "Turtle Point Yacht & Country Club",
   "Rank": 4,
   "Address": "1000 Club Dr",
   "City": " Killen",
   "StateAbbr": " AL ",
   "Zip": 35645,
   "State": "Alabama",
   "lat": 34.846541,
   "lng": -87.545507
 },
 {
   "Club": "Kiva Dunes Golf Course",
   "Rank": 5,
   "Address": "815 Plantation Rd",
   "City": " Gulf Shores",
   "StateAbbr": " AL ",
   "Zip": 36542,
   "State": "Alabama",
   "lat": 30.234849,
   "lng": -87.889635
 },
 {
   "Club": "Anchorage Golf Course",
   "Rank": 1,
   "Address": "3651 O'Malley Rd",
   "City": " Anchorage",
   "StateAbbr": " AK ",
   "Zip": 99507,
   "State": "Alaska",
   "lat": 61.126367,
   "lng": -149.814914
 },
 {
   "Club": "Moose Run Golf Course",
   "Rank": 2,
   "Address": "27000 Arctic Valley Rd",
   "City": " Anchorage",
   "StateAbbr": " AK ",
   "Zip": 99505,
   "State": "Alaska",
   "lat": 61.233248,
   "lng": -149.667331
 },
 {
   "Club": "The Estancia Club",
   "Rank": 1,
   "Address": "27998 N 99th Pl",
   "City": " Scottsdale",
   "StateAbbr": " AZ",
   "Zip": 85262,
   "State": "Arizona",
   "lat": 33.738311,
   "lng": -111.865406
 },
 {
   "Club": "Forest Highlands Golf Club",
   "Rank": 2,
   "Address": "2425 William Palmer",
   "City": " Flagstaff",
   "StateAbbr": " AZ",
   "Zip": 86001,
   "State": "Arizona",
   "lat": 35.103782,
   "lng": -111.704258
 },
 {
   "Club": "The Stone Canyon Club",
   "Rank": 3,
   "Address": "14200 Hohokam Village Pl",
   "City": " Oro Valley",
   "StateAbbr": " AZ",
   "Zip": 85755,
   "State": "Arizona",
   "lat": 32.467013,
   "lng": -110.987164
 },
 {
   "Club": "TPC Scottsdale",
   "Rank": 4,
   "Address": "17020 N Hayden Rd",
   "City": " Scottsdale",
   "StateAbbr": " AZ",
   "Zip": 85255,
   "State": "Arizona",
   "lat": 33.640576,
   "lng": -111.908868
 },
 {
   "Club": "Whisper Rock Golf Club",
   "Rank": 5,
   "Address": "32002 N Old Bridge Rd",
   "City": " Scottsdale",
   "StateAbbr": " AZ",
   "Zip": 85266,
   "State": "Arizona",
   "lat": 33.777935,
   "lng": -111.911716
 },
 {
   "Club": "The Alotian Club",
   "Rank": 1,
   "Address": "101 Alotian Dr",
   "City": " Roland",
   "StateAbbr": " AR ",
   "Zip": 72135,
   "State": "Arkansas",
   "lat": 34.857447,
   "lng": -92.57698
 },
 {
   "Club": "Blessings Golf Club",
   "Rank": 2,
   "Address": "5826 Clear Creek Blvd",
   "City": " Fayetteville",
   "StateAbbr": " AR ",
   "Zip": 72704,
   "State": "Arkansas",
   "lat": 36.132894,
   "lng": -94.201116
 },
 {
   "Club": "Diamante Golf Club",
   "Rank": 3,
   "Address": "2000 Country Club Dr",
   "City": " Hot Springs Village",
   "StateAbbr": " AR ",
   "Zip": 71909,
   "State": "Arkansas",
   "lat": 34.643717,
   "lng": -92.866994
 },
 {
   "Club": "The Country Club Of Little Rock",
   "Rank": 4,
   "Address": "4200 Country Club Blvd",
   "City": " Little Rock",
   "StateAbbr": " AR ",
   "Zip": 72207,
   "State": "Arkansas",
   "lat": 34.772674,
   "lng": -92.321756
 },
 {
   "Club": "Texarkana Country Club",
   "Rank": 5,
   "Address": "1 Country Club Ln",
   "City": " Texarkana",
   "StateAbbr": " AR ",
   "Zip": 71854,
   "State": "Arkansas",
   "lat": 33.406379,
   "lng": -94.017803
 },
 {
   "Club": "Cypress Point Club",
   "Rank": 1,
   "Address": "3150 17 Mile Dr",
   "City": " Pebble Beach",
   "StateAbbr": " CA",
   "Zip": 93953,
   "State": "California",
   "lat": 36.580225,
   "lng": -121.974105
 },
 {
   "Club": "Pebble Beach Golf Links",
   "Rank": 2,
   "Address": "1700 17 Mile Dr",
   "City": " Pebble Beach",
   "StateAbbr": " CA",
   "Zip": 93953,
   "State": "California",
   "lat": 36.568806,
   "lng": -121.950624
 },
 {
   "Club": "Los Angeles Country Club",
   "Rank": 3,
   "Address": "10101 Wilshire Blvd",
   "City": " Los Angeles",
   "StateAbbr": " CA",
   "Zip": 90024,
   "State": "California",
   "lat": 34.069431,
   "lng": -118.42329
 },
 {
   "Club": "Riviera Country Club",
   "Rank": 4,
   "Address": "1250 Capri Dr",
   "City": " Pacific Palisades",
   "StateAbbr": " CA",
   "Zip": 90272,
   "State": "California",
   "lat": 34.049795,
   "lng": -118.501338
 },
 {
   "Club": "The Olympic Club",
   "Rank": 5,
   "Address": "599 Skyline Blvd",
   "City": " San Francisco",
   "StateAbbr": " CA",
   "Zip": 94132,
   "State": "California",
   "lat": 37.709092,
   "lng": -122.493611
 },
 {
   "Club": "Castle Pines Golf Club",
   "Rank": 1,
   "Address": "1000 Hummingbird Dr",
   "City": " Castle Rock",
   "StateAbbr": " CO ",
   "Zip": 80108,
   "State": "Colorado",
   "lat": 39.440704,
   "lng": -104.898653
 },
 {
   "Club": "Ballyneal Golf Club",
   "Rank": 2,
   "Address": "1 Ballyneal Ln",
   "City": " Holyoke",
   "StateAbbr": " CO ",
   "Zip": 80734,
   "State": "Colorado",
   "lat": 40.419397,
   "lng": -102.262787
 },
 {
   "Club": "Cherry Hills Country Club",
   "Rank": 3,
   "Address": "4125 S University Blvd",
   "City": " Cherry Hills Village",
   "StateAbbr": " CO ",
   "Zip": 80113,
   "State": "Colorado",
   "lat": 39.64293,
   "lng": -104.962558
 },
 {
   "Club": "Colorado Golf Club",
   "Rank": 4,
   "Address": "8000 Preservation Trail",
   "City": " Parker",
   "StateAbbr": " CO ",
   "Zip": 80134,
   "State": "Colorado",
   "lat": 39.476607,
   "lng": -104.735425
 },
 {
   "Club": "Sanctuary",
   "Rank": 5,
   "Address": "7549 N Daniels Park Rd",
   "City": " Sedalia",
   "StateAbbr": " CO ",
   "Zip": 80135,
   "State": "Colorado",
   "lat": 39.472271,
   "lng": -104.919491
 },
 {
   "Club": "The Stanwich Club",
   "Rank": 1,
   "Address": "888 North Street",
   "City": " Greenwich",
   "StateAbbr": " CT ",
   "Zip": 6831,
   "State": "Connecticut",
   "lat": 41.124594,
   "lng": -73.623955
 },
 {
   "Club": "Country Club Of Fairfield",
   "Rank": 2,
   "Address": "936 Sasco Hill Rd",
   "City": " Fairfield",
   "StateAbbr": " CT ",
   "Zip": 6824,
   "State": "Connecticut",
   "lat": 41.127213,
   "lng": -73.273867
 },
 {
   "Club": "The Course At Yale",
   "Rank": 3,
   "Address": "200 Conrad Dr",
   "City": " New Haven",
   "StateAbbr": " CT ",
   "Zip": 6515,
   "State": "Connecticut",
   "lat": 41.317632,
   "lng": -72.98444
 },
 {
   "Club": "Wee Burn Country Club",
   "Rank": 4,
   "Address": "410 Hollow Tree Ridge Rd",
   "City": " Darien",
   "StateAbbr": " CT ",
   "Zip": 6820,
   "State": "Connecticut",
   "lat": 41.089152,
   "lng": -73.500336
 },
 {
   "Club": "Tamarack Country Club",
   "Rank": 5,
   "Address": "55 Locust Rd",
   "City": " Greenwich",
   "StateAbbr": " CT ",
   "Zip": 6831,
   "State": "Connecticut",
   "lat": 41.094281,
   "lng": -73.709821
 },
 {
   "Club": "Wilmington Country Club",
   "Rank": 1,
   "Address": "4825 Kennett Pike",
   "City": " Wilmington",
   "StateAbbr": " DE ",
   "Zip": 19807,
   "State": "Delaware",
   "lat": 39.796684,
   "lng": -75.597557
 },
 {
   "Club": "Bayside Resort Golf Club",
   "Rank": 2,
   "Address": "31806 Lake View Dr",
   "City": " Selbyville",
   "StateAbbr": " DE ",
   "Zip": 19975,
   "State": "Delaware",
   "lat": 38.46535,
   "lng": -75.11212
 },
 {
   "Club": "The Peninsula",
   "Rank": 3,
   "Address": "32981 Peninsula Esplanade",
   "City": " Millsboro",
   "StateAbbr": " DE ",
   "Zip": 19966,
   "State": "Delaware",
   "lat": 38.608525,
   "lng": -75.164953
 },
 {
   "Club": "Wilmington Country Club",
   "Rank": 4,
   "Address": "4825 Kennett Pike",
   "City": " Wilmington",
   "StateAbbr": " DE ",
   "Zip": 19807,
   "State": "Delaware",
   "lat": 39.796684,
   "lng": -75.597557
 },
 {
   "Club": "Baywood Greens Golf Club",
   "Rank": 5,
   "Address": "32267 Clubhouse Way",
   "City": " Long Neck",
   "StateAbbr": " DE ",
   "Zip": 19966,
   "State": "Delaware",
   "lat": 38.644082,
   "lng": -75.187636
 },
 {
   "Club": "Seminole Golf Club",
   "Rank": 1,
   "Address": "901 Seminole Blvd",
   "City": " Juno Beach",
   "StateAbbr": " FL ",
   "Zip": 33408,
   "State": "Florida",
   "lat": 26.860068,
   "lng": -80.047339
 },
 {
   "Club": "TPC Sawgrass",
   "Rank": 2,
   "Address": "110 Championship Way",
   "City": " Ponte Vedra Beach",
   "StateAbbr": " FL ",
   "Zip": 32082,
   "State": "Florida",
   "lat": 30.199025,
   "lng": -81.394832
 },
 {
   "Club": "Calusa Pines Golf Club",
   "Rank": 3,
   "Address": "2000 Calusa Pines Dr",
   "City": " Naples",
   "StateAbbr": " FL ",
   "Zip": 34120,
   "State": "Florida",
   "lat": 26.26384,
   "lng": -81.6664
 },
 {
   "Club": "Streamsong",
   "Rank": 4,
   "Address": "3000 Dunes Pass",
   "City": " Bowling Green",
   "StateAbbr": " FL ",
   "Zip": 33834,
   "State": "Florida",
   "lat": 27.677899,
   "lng": -81.932454
 },
 {
   "Club": "Jupiter Hills Club",
   "Rank": 5,
   "Address": "11800 SE Hill Club Terrace",
   "City": " Tequesta",
   "StateAbbr": " FL ",
   "Zip": 33469,
   "State": "Florida",
   "lat": 26.982387,
   "lng": -80.095385
 },
 {
   "Club": "Augusta National Golf Club",
   "Rank": 1,
   "Address": "2604 Washington Rd",
   "City": " Augusta",
   "StateAbbr": " GA ",
   "Zip": 30904,
   "State": "Georgia",
   "lat": 33.502137,
   "lng": -82.022628
 },
 {
   "Club": "Peachtree Golf Club",
   "Rank": 2,
   "Address": "4600 Peachtree Rd NE",
   "City": " Atlanta",
   "StateAbbr": " GA ",
   "Zip": 30319,
   "State": "Georgia",
   "lat": 33.881935,
   "lng": -84.323636
 },
 {
   "Club": "East Lake Golf Club",
   "Rank": 3,
   "Address": "2575 Alston Dr SE",
   "City": " Atlanta",
   "StateAbbr": " GA ",
   "Zip": 30317,
   "State": "Georgia",
   "lat": 33.743698,
   "lng": -84.302743
 },
 {
   "Club": "Atlanta Athletic Club",
   "Rank": 4,
   "Address": "1930 Bobby Jones Dr",
   "City": " Johns Creek",
   "StateAbbr": " GA ",
   "Zip": 30097,
   "State": "Georgia",
   "lat": 34.003031,
   "lng": -84.192349
 },
 {
   "Club": "Ocean Forest Golf Club",
   "Rank": 5,
   "Address": "200 Ocean Rd",
   "City": " Sea Island",
   "StateAbbr": " GA ",
   "Zip": 31561,
   "State": "Georgia",
   "lat": 31.212673,
   "lng": -81.3202
 },
 {
   "Club": "Nanea Golf Club",
   "Rank": 1,
   "Address": "72-2921 Kaupulehu Rd",
   "City": " Holualoa",
   "StateAbbr": " HI ",
   "Zip": 96725,
   "State": "Hawaii",
   "lat": 19.782544,
   "lng": -155.95829
 },
 {
   "Club": "Prince Golf Course",
   "Rank": 2,
   "Address": "91-1200 Fort Weaver Rd",
   "City": " Ewa Beach",
   "StateAbbr": " HI ",
   "Zip": 96706,
   "State": "Hawaii",
   "lat": 21.328471,
   "lng": -158.009173
 },
 {
   "Club": "Kapalua",
   "Rank": 3,
   "Address": "2000 Plantation Club Dr",
   "City": " Lahaina",
   "StateAbbr": " HI ",
   "Zip": 96761,
   "State": "Hawaii",
   "lat": 21.007118,
   "lng": -156.640267
 },
 {
   "Club": "Hualalai Golf Course",
   "Rank": 4,
   "Address": "72-104 Kualua Pl",
   "City": " Kailua-Kona",
   "StateAbbr": " HI ",
   "Zip": 96740,
   "State": "Hawaii",
   "lat": 19.818569,
   "lng": -155.984894
 },
 {
   "Club": "The Club At Hokuli'a",
   "Rank": 5,
   "Address": "81-6636 Pu'u Ohau Place",
   "City": " Kealakekua",
   "StateAbbr": " HI ",
   "Zip": 96750,
   "State": "Hawaii",
   "lat": 19.507141,
   "lng": -155.947195
 },
 {
   "Club": "Gozzer Ranch Golf & Lake Club",
   "Rank": 1,
   "Address": "5945 S Buckrail Rd",
   "City": " Harrison",
   "StateAbbr": " ID ",
   "Zip": 83833,
   "State": "Idaho",
   "lat": 47.617144,
   "lng": -116.766211
 },
 {
   "Club": "The Golf Club At Black Rock",
   "Rank": 2,
   "Address": "18168 S Kimberlite Dr",
   "City": " Coeur d'Alene",
   "StateAbbr": " ID ",
   "Zip": 83814,
   "State": "Idaho",
   "lat": 47.511333,
   "lng": -116.870375
 },
 {
   "Club": "Huntsman Springs Golf Club",
   "Rank": 3,
   "Address": "501 Huntsman Springs Dr",
   "City": " Driggs",
   "StateAbbr": " ID ",
   "Zip": 83422,
   "State": "Idaho",
   "lat": 43.738585,
   "lng": -111.117275
 },
 {
   "Club": "The Club At Rock Creek",
   "Rank": 4,
   "Address": "24623 S Loffs Bay Rd",
   "City": " Coeur d'Alene",
   "StateAbbr": " ID ",
   "Zip": 83814,
   "State": "Idaho",
   "lat": 47.522502,
   "lng": -116.874152
 },
 {
   "Club": "Headwaters Club At Teton Springs",
   "Rank": 5,
   "Address": "21 Warm Creek Ln",
   "City": " Victor",
   "StateAbbr": " ID ",
   "Zip": 83455,
   "State": "Idaho",
   "lat": 43.577982,
   "lng": -111.110358
 },
 {
   "Club": "Chicago Golf Club",
   "Rank": 1,
   "Address": "25W253 Warrenville Rd",
   "City": " Wheaton",
   "StateAbbr": " IL ",
   "Zip": 60189,
   "State": "Illinois",
   "lat": 41.849424,
   "lng": -88.115692
 },
 {
   "Club": "Butler National Golf Club",
   "Rank": 2,
   "Address": "2616 York Rd",
   "City": " Oak Brook",
   "StateAbbr": " IL ",
   "Zip": 60523,
   "State": "Illinois",
   "lat": 41.84054,
   "lng": -87.933299
 },
 {
   "Club": "Medinah Country Club",
   "Rank": 3,
   "Address": "6N001 Medinah Rd",
   "City": " Medinah",
   "StateAbbr": " IL ",
   "Zip": 60157,
   "State": "Illinois",
   "lat": 41.96638,
   "lng": -88.048044
 },
 {
   "Club": "Canyata Golf Club",
   "Rank": 4,
   "Address": "18240 E 2150th Rd",
   "City": " Marshall",
   "StateAbbr": " IL ",
   "Zip": 62441,
   "State": "Illinois",
   "lat": 39.470634,
   "lng": -87.699362
 },
 {
   "Club": "Shoreacres",
   "Rank": 5,
   "Address": "1561 Shore Acres Dr",
   "City": " Lake Bluff",
   "StateAbbr": " IL ",
   "Zip": 60044,
   "State": "Illinois",
   "lat": 42.297883,
   "lng": -87.835822
 },
 {
   "Club": "Victoria National Golf Club",
   "Rank": 1,
   "Address": "Victoria National Blvd",
   "City": " Boonville",
   "StateAbbr": " IN ",
   "Zip": 47601,
   "State": "Indiana",
   "lat": 38.00077,
   "lng": -87.346448
 },
 {
   "Club": "Crooked Stick Golf Club",
   "Rank": 2,
   "Address": "1964 Burning Tree Ln",
   "City": " Carmel",
   "StateAbbr": " IN ",
   "Zip": 46032,
   "State": "Indiana",
   "lat": 39.946347,
   "lng": -86.193051
 },
 {
   "Club": "The Pete Dye Course At French Lick Resort",
   "Rank": 3,
   "Address": "1082 Taggart Ln",
   "City": " West Baden Springs",
   "StateAbbr": " IN ",
   "Zip": 47469,
   "State": "Indiana",
   "lat": 38.573337,
   "lng": -86.636956
 },
 {
   "Club": "Sycamore Hills Golf Club Fort Wayne",
   "Rank": 4,
   "Address": "11836 Covington Rd",
   "City": " Fort Wayne",
   "StateAbbr": " IN ",
   "Zip": 46814,
   "State": "Indiana",
   "lat": 41.06355,
   "lng": -85.295871
 },
 {
   "Club": "Wolf Run Golf Club",
   "Rank": 5,
   "Address": "601 S County Rd #900",
   "City": " Zionsville",
   "StateAbbr": " IN ",
   "Zip": 46077,
   "State": "Indiana",
   "lat": 40.032254,
   "lng": -86.28874
 },
 {
   "Club": "The Harvester Golf Club",
   "Rank": 1,
   "Address": "1102 330th St",
   "City": " Rhodes",
   "StateAbbr": " IA ",
   "Zip": 50234,
   "State": "Iowa",
   "lat": 41.876895,
   "lng": -93.210984
 },
 {
   "Club": "Des Moines Golf & Country Club North",
   "Rank": 2,
   "Address": "1600 Jordan Creek Pkwy",
   "City": " West Des Moines",
   "StateAbbr": " IA ",
   "Zip": 50266,
   "State": "Iowa",
   "lat": 41.595199,
   "lng": -93.818393
 },
 {
   "Club": "Des Moines Golf & Country Club South",
   "Rank": 3,
   "Address": "1600 Jordan Creek Pkwy",
   "City": " Des Moines",
   "StateAbbr": " IA ",
   "Zip": 50321,
   "State": "Iowa",
   "lat": 41.592193,
   "lng": -93.818521
 },
 {
   "Club": "Glen Oaks Country Club",
   "Rank": 4,
   "Address": "1401 Glen Oaks Dr",
   "City": " West Des Moines",
   "StateAbbr": " IA ",
   "Zip": 50266,
   "State": "Iowa",
   "lat": 41.548625,
   "lng": -93.781371
 },
 {
   "Club": "Wakonda Club",
   "Rank": 5,
   "Address": "3915 Fleur Dr",
   "City": " Des Moines",
   "StateAbbr": " IA ",
   "Zip": 50321,
   "State": "Iowa",
   "lat": 41.550493,
   "lng": -93.641689
 },
 {
   "Club": "Prairie Dunes Country Club",
   "Rank": 1,
   "Address": "4812 East 30th Avenue",
   "City": " Hutchinson",
   "StateAbbr": " KS ",
   "Zip": 67502,
   "State": "Kansas",
   "lat": 38.091449,
   "lng": -97.847988
 },
 {
   "Club": "Flint Hills National Golf Club",
   "Rank": 2,
   "Address": "1 S Flint Hills National Blvd",
   "City": " Andover",
   "StateAbbr": " KS ",
   "Zip": 67002,
   "State": "Kansas",
   "lat": 37.643505,
   "lng": -97.124548
 },
 {
   "Club": "Shadow Glen Golf Club",
   "Rank": 3,
   "Address": "26000 Shadow Glen St",
   "City": " Olathe",
   "StateAbbr": " KS ",
   "Zip": 66061,
   "State": "Kansas",
   "lat": 38.938402,
   "lng": -94.888177
 },
 {
   "Club": "Hallbrook Country Club Leawood",
   "Rank": 4,
   "Address": "11300 Overbrook Rd",
   "City": " Leawood",
   "StateAbbr": " KS ",
   "Zip": 66211,
   "State": "Kansas",
   "lat": 38.924584,
   "lng": -94.611175
 },
 {
   "Club": "Wolf Creek Golf Links",
   "Rank": 5,
   "Address": "18695 S Lackman Rd",
   "City": " Olathe",
   "StateAbbr": " KS ",
   "Zip": 66062,
   "State": "Kansas",
   "lat": 38.79027,
   "lng": -94.756004
 },
 {
   "Club": "Valhalla Golf Club",
   "Rank": 1,
   "Address": "15503 Shelbyville Rd",
   "City": " Louisville",
   "StateAbbr": " KY ",
   "Zip": 40245,
   "State": "Kentucky",
   "lat": 38.242613,
   "lng": -85.471988
 },
 {
   "Club": "The Club At Olde Stone",
   "Rank": 2,
   "Address": "950 Village Way",
   "City": " Bowling Green",
   "StateAbbr": " KY ",
   "Zip": 42103,
   "State": "Kentucky",
   "lat": 36.908163,
   "lng": -86.384474
 },
 {
   "Club": "Hurstbourne Country Club",
   "Rank": 3,
   "Address": "9000 Hurstbourne Club Ln",
   "City": " Louisville",
   "StateAbbr": " KY ",
   "Zip": 40222,
   "State": "Kentucky",
   "lat": 38.240572,
   "lng": -85.590793
 },
 {
   "Club": "Big Spring Country Club",
   "Rank": 4,
   "Address": "5901 Dutchmans Ln",
   "City": " Louisville",
   "StateAbbr": " KY ",
   "Zip": 40205,
   "State": "Kentucky",
   "lat": 38.231944,
   "lng": -85.648172
 },
 {
   "Club": "Triple Crown Country Club",
   "Rank": 5,
   "Address": "10644 Triple Crown Blvd",
   "City": " Union",
   "StateAbbr": " KY ",
   "Zip": 41091,
   "State": "Kentucky",
   "lat": 38.919743,
   "lng": -84.646497
 },
 {
   "Club": "The Country Club of Louisiana",
   "Rank": 1,
   "Address": "18400 Boulevard Louisiane",
   "City": "Baton Rouge",
   "StateAbbr": "LA",
   "Zip": 70810,
   "State": "Louisiana",
   "lat": 30.334463,
   "lng": -91.029979
 },
 {
   "Club": "Squire Creek Country Club",
   "Rank": 2,
   "Address": "289 Squire Creek Pkwy",
   "City": " Choudrant",
   "StateAbbr": " LA ",
   "Zip": 71227,
   "State": "Louisiana",
   "lat": 32.571905,
   "lng": -92.513113
 },
 {
   "Club": "Oakbourne Country Club",
   "Rank": 3,
   "Address": "3700 E Simcoe St",
   "City": " Lafayette",
   "StateAbbr": " LA ",
   "Zip": 70501,
   "State": "Louisiana",
   "lat": 30.21678,
   "lng": -91.978245
 },
 {
   "Club": "The Bluffs On Thompson Creek",
   "Rank": 4,
   "Address": "14233 Sunrise Way",
   "City": " St Francisville",
   "StateAbbr": " LA ",
   "Zip": 70775,
   "State": "Louisiana",
   "lat": 30.803581,
   "lng": -91.244806
 },
 {
   "Club": "Koasati Pines Golf Club",
   "Rank": 5,
   "Address": "300 Koasati Dr",
   "City": " Kinder",
   "StateAbbr": " LA ",
   "Zip": 70648,
   "State": "Louisiana",
   "lat": 30.5558,
   "lng": -92.8096
 },
 {
   "Club": "Belgrade Lakes Golf Club",
   "Rank": 1,
   "Address": "Country Club Rd",
   "City": " Belgrade Lakes",
   "StateAbbr": " ME ",
   "Zip": 4918,
   "State": "Maine",
   "lat": 44.518186,
   "lng": -69.883513
 },
 {
   "Club": "Sugarloaf Golf Club",
   "Rank": 2,
   "Address": "5071 West Mountain Road",
   "City": " Carrabassett Valley",
   "StateAbbr": " ME ",
   "Zip": 4947,
   "State": "Maine",
   "lat": 45.064153,
   "lng": -70.33544
 },
 {
   "Club": "Sunday River Golf Club",
   "Rank": 3,
   "Address": "18 Championship Dr",
   "City": " Newry",
   "StateAbbr": " ME ",
   "Zip": 4261,
   "State": "Maine",
   "lat": 44.487687,
   "lng": -70.887559
 },
 {
   "Club": "Kebo Valley Golf Club",
   "Rank": 4,
   "Address": "136 Eagle Lake Rd",
   "City": " Bar Harbor",
   "StateAbbr": " ME ",
   "Zip": 4609,
   "State": "Maine",
   "lat": 44.380119,
   "lng": -68.219915
 },
 {
   "Club": "Portland Country Club",
   "Rank": 5,
   "Address": "11 Foreside Rd",
   "City": " Falmouth",
   "StateAbbr": " ME ",
   "Zip": 4105,
   "State": "Maine",
   "lat": 43.708031,
   "lng": -70.228049
 },
 {
   "Club": "Congressional Country Club",
   "Rank": 1,
   "Address": "8500 River Rd",
   "City": " Bethesda",
   "StateAbbr": " MD ",
   "Zip": 20817,
   "State": "Maryland",
   "lat": 38.996253,
   "lng": -77.176433
 },
 {
   "Club": "Baltimore Country Club",
   "Rank": 2,
   "Address": "11500 Mays Chapel Rd",
   "City": " Lutherville-Timonium",
   "StateAbbr": " MD ",
   "Zip": 21093,
   "State": "Maryland",
   "lat": 39.441173,
   "lng": -76.664245
 },
 {
   "Club": "Caves Valley Golf Club",
   "Rank": 3,
   "Address": "2910 Blendon Rd",
   "City": " Owings Mills",
   "StateAbbr": " MD ",
   "Zip": 21117,
   "State": "Maryland",
   "lat": 39.4519,
   "lng": -76.74454
 },
 {
   "Club": "Bulle Rock",
   "Rank": 4,
   "Address": "320 Blenhiem Ln",
   "City": " Havre De Grace",
   "StateAbbr": " MD ",
   "Zip": 21078,
   "State": "Maryland",
   "lat": 39.540043,
   "lng": -76.132405
 },
 {
   "Club": "Four Streams",
   "Rank": 5,
   "Address": "19501 Darnestown Rd",
   "City": " Poolesville",
   "StateAbbr": " MD ",
   "Zip": 20837,
   "State": "Maryland",
   "lat": 39.179408,
   "lng": -77.40035
 },
 {
   "Club": "The Country Club",
   "Rank": 1,
   "Address": "191 Clyde St",
   "City": " Chestnut Hill",
   "StateAbbr": " MA ",
   "Zip": 2467,
   "State": "Massachusetts",
   "lat": 42.314817,
   "lng": -71.147826
 },
 {
   "Club": "Old Sandwich Golf Club",
   "Rank": 2,
   "Address": "247 Old Sandwich Road",
   "City": " Plymouth",
   "StateAbbr": " MA ",
   "Zip": 2360,
   "State": "Massachusetts",
   "lat": 41.904803,
   "lng": -70.606808
 },
 {
   "Club": "Kittansett Club",
   "Rank": 3,
   "Address": "11 Point Rd",
   "City": " Marion",
   "StateAbbr": " MA ",
   "Zip": 2738,
   "State": "Massachusetts",
   "lat": 41.677558,
   "lng": -70.717375
 },
 {
   "Club": "Boston Golf Club",
   "Rank": 4,
   "Address": "19 Old County Rd",
   "City": " Hingham",
   "StateAbbr": " MA ",
   "Zip": 2043,
   "State": "Massachusetts",
   "lat": 42.189986,
   "lng": -70.897522
 },
 {
   "Club": "Myopia Hunt Club",
   "Rank": 5,
   "Address": "435 Bay Rd",
   "City": " South Hamilton",
   "StateAbbr": " MA ",
   "Zip": 1982,
   "State": "Massachusetts",
   "lat": 42.609235,
   "lng": -70.858828
 },
 {
   "Club": "Crystal Downs Country Club",
   "Rank": 1,
   "Address": "249 Crystal Downs Dr",
   "City": " Frankfort",
   "StateAbbr": " MI ",
   "Zip": 49635,
   "State": "Michigan",
   "lat": 44.70236,
   "lng": -86.234567
 },
 {
   "Club": "Oakland Hills Country Club",
   "Rank": 2,
   "Address": "3951 W Maple Rd",
   "City": " Bloomfield Hills",
   "StateAbbr": " MI ",
   "Zip": 48301,
   "State": "Michigan",
   "lat": 42.544872,
   "lng": -83.277027
 },
 {
   "Club": "Arcadia Bluffs Golf Club",
   "Rank": 3,
   "Address": "14710 Northwood Hwy",
   "City": " Arcadia",
   "StateAbbr": " MI ",
   "Zip": 49613,
   "State": "Michigan",
   "lat": 44.456655,
   "lng": -86.24252
 },
 {
   "Club": "Kingsley Club",
   "Rank": 4,
   "Address": "600 Niblick Trl",
   "City": " Kingsley",
   "StateAbbr": " MI ",
   "Zip": 49649,
   "State": "Michigan",
   "lat": 44.60504,
   "lng": -85.563377
 },
 {
   "Club": "Forest Dunes Golf Club",
   "Rank": 5,
   "Address": "6376 Forest Dunes Dr",
   "City": " Roscommon",
   "StateAbbr": " MI ",
   "Zip": 48653,
   "State": "Michigan",
   "lat": 44.591891,
   "lng": -84.529416
 },
 {
   "Club": "Interlachen Country Club",
   "Rank": 1,
   "Address": "6200 Interlachen Blvd",
   "City": " Minneapolis",
   "StateAbbr": " MN ",
   "Zip": 55436,
   "State": "Minnesota",
   "lat": 44.915193,
   "lng": -93.37999
 },
 {
   "Club": "Spring Hill Golf Club",
   "Rank": 2,
   "Address": "725 County Rd 6",
   "City": " Wayzata",
   "StateAbbr": " MN ",
   "Zip": 55391,
   "State": "Minnesota",
   "lat": 44.993893,
   "lng": -93.540575
 },
 {
   "Club": "Hazeltine National Golf Club",
   "Rank": 3,
   "Address": "1900 Hazeltine Blvd",
   "City": " Chaska",
   "StateAbbr": " MN ",
   "Zip": 55318,
   "State": "Minnesota",
   "lat": 44.831372,
   "lng": -93.583927
 },
 {
   "Club": "The Quarry At Giants Ridge",
   "Rank": 4,
   "Address": "5893 Giants Ridge Rd",
   "City": " Aurora",
   "StateAbbr": " MN ",
   "Zip": 55705,
   "State": "Minnesota",
   "lat": 47.540606,
   "lng": -92.289017
 },
 {
   "Club": "White Bear Yacht Club",
   "Rank": 5,
   "Address": "56 Dellwood Ave",
   "City": " Dellwood",
   "StateAbbr": " MN ",
   "Zip": 55110,
   "State": "Minnesota",
   "lat": 45.089864,
   "lng": -92.974112
 },
 {
   "Club": "Fallen Oak Golf Club Saucier",
   "Rank": 1,
   "Address": "24400 MS-15",
   "City": " Saucier",
   "StateAbbr": " MS ",
   "Zip": 39574,
   "State": "Mississippi",
   "lat": 30.645899,
   "lng": -88.905564
 },
 {
   "Club": "Old Waverly Golf Club",
   "Rank": 2,
   "Address": "Magnolia Dr",
   "City": " West Point",
   "StateAbbr": " MS ",
   "Zip": 39773,
   "State": "Mississippi",
   "lat": 33.574305,
   "lng": -88.607201
 },
 {
   "Club": "Annandale Golf Club",
   "Rank": 3,
   "Address": "1 Annandale Golf Club Dr",
   "City": " Madison",
   "StateAbbr": " MS ",
   "Zip": 39110,
   "State": "Mississippi",
   "lat": 32.496914,
   "lng": -90.197001
 },
 {
   "Club": "Dancing Rabbit Golf Club Azaleas",
   "Rank": 4,
   "Address": "13541 MS-16",
   "City": " Choctaw",
   "StateAbbr": " MS ",
   "Zip": 39350,
   "State": "Mississippi",
   "lat": 32.772031,
   "lng": -89.213271
 },
 {
   "Club": "Grand Bear Golf Course",
   "Rank": 5,
   "Address": "12040 Grand Way Blvd",
   "City": " Saucier",
   "StateAbbr": " MS ",
   "Zip": 39574,
   "State": "Mississippi",
   "lat": 30.509669,
   "lng": -89.05906
 },
 {
   "Club": "Bellerive Country Club",
   "Rank": 1,
   "Address": "12925 Ladue Rd",
   "City": " St. Louis",
   "StateAbbr": " MO ",
   "Zip": 63141,
   "State": "Missouri",
   "lat": 38.659606,
   "lng": -90.482916
 },
 {
   "Club": "Boone Valley Golf Club",
   "Rank": 2,
   "Address": "1319 Schluersburg Rd",
   "City": " Augusta",
   "StateAbbr": " MO ",
   "Zip": 63332,
   "State": "Missouri",
   "lat": 38.627943,
   "lng": -90.87514
 },
 {
   "Club": "St Louis Country Club",
   "Rank": 3,
   "Address": "400 Barnes Rd",
   "City": " St. Louis",
   "StateAbbr": " MO ",
   "Zip": 63124,
   "State": "Missouri",
   "lat": 38.650612,
   "lng": -90.379071
 },
 {
   "Club": "Dalhousie Golf Club",
   "Rank": 4,
   "Address": "4700 Cords Way",
   "City": " Cape Girardeau",
   "StateAbbr": " MO ",
   "Zip": 63701,
   "State": "Missouri",
   "lat": 37.269723,
   "lng": -89.595453
 },
 {
   "Club": "The Club At Porto Cima",
   "Rank": 5,
   "Address": "133 Club House Dr",
   "City": " Sunrise Beach",
   "StateAbbr": " MO ",
   "Zip": 65079,
   "State": "Missouri",
   "lat": 38.172179,
   "lng": -92.650104
 },
 {
   "Club": "Rock Creek Cattle Co",
   "Rank": 1,
   "Address": "105 Pauly Drive",
   "City": " Deer Lodge",
   "StateAbbr": " MT ",
   "Zip": 59722,
   "State": "Montana",
   "lat": 46.482359,
   "lng": -112.830012
 },
 {
   "Club": "The Stock Farm Club",
   "Rank": 2,
   "Address": "1428 Stock Farm Rd",
   "City": " Hamilton",
   "StateAbbr": " MT ",
   "Zip": 59840,
   "State": "Montana",
   "lat": 46.255888,
   "lng": -114.054399
 },
 {
   "Club": "Wilderness Club",
   "Rank": 3,
   "Address": "1885 Sophie Lake Rd",
   "City": " Eureka",
   "StateAbbr": " MT ",
   "Zip": 59917,
   "State": "Montana",
   "lat": 48.931205,
   "lng": -115.144637
 },
 {
   "Club": "Yellowstone Club",
   "Rank": 4,
   "Address": "1 Yellowstone Club Trail",
   "City": " Big Sky",
   "StateAbbr": " MT ",
   "Zip": 59716,
   "State": "Montana",
   "lat": 45.258586,
   "lng": -111.370929
 },
 {
   "Club": "The Reserve At Moonlight Basin",
   "Rank": 5,
   "Address": "3327 Black Otter Rd",
   "City": " Gallatin Gateway",
   "StateAbbr": " MT ",
   "Zip": 59730,
   "State": "Montana",
   "lat": 45.265616,
   "lng": -111.301967
 },
 {
   "Club": "Sand Hills Golf Club",
   "Rank": 1,
   "Address": "36410 Sand Hills Rd",
   "City": " Mullen",
   "StateAbbr": " NE ",
   "Zip": 69152,
   "State": "Nebraska",
   "lat": 41.86733,
   "lng": -101.094655
 },
 {
   "Club": "Dismal River Golf Club Red",
   "Rank": 2,
   "Address": "83040 Dismal River Trl",
   "City": " Mullen",
   "StateAbbr": " NE ",
   "Zip": 69152,
   "State": "Nebraska",
   "lat": 41.868346,
   "lng": -101.269355
 },
 {
   "Club": "The Prairie Club Dunes",
   "Rank": 3,
   "Address": "88897 State Highway 97",
   "City": " Valentine",
   "StateAbbr": " NE ",
   "Zip": 69201,
   "State": "Nebraska",
   "lat": 42.723659,
   "lng": -100.831138
 },
 {
   "Club": "Omaha Country Club",
   "Rank": 4,
   "Address": "6900 Country Club Rd",
   "City": " Omaha",
   "StateAbbr": " NE ",
   "Zip": 68152,
   "State": "Nebraska",
   "lat": 41.329939,
   "lng": -96.017892
 },
 {
   "Club": "Dismal River Club White",
   "Rank": 5,
   "Address": "83040 Dismal River Trl",
   "City": " Mullen",
   "StateAbbr": " NE ",
   "Zip": 69152,
   "State": "Nebraska",
   "lat": 41.852301,
   "lng": -101.264935
 },
 {
   "Club": "Shadow Creek",
   "Rank": 1,
   "Address": "3 Shadow Creek Dr",
   "City": " North Las Vegas",
   "StateAbbr": " NV ",
   "Zip": 89081,
   "State": "Nevada",
   "lat": 36.25843,
   "lng": -115.107303
 },
 {
   "Club": "Clear Creek",
   "Rank": 2,
   "Address": "199 Old Clear Creek Rd",
   "City": " Carson City",
   "StateAbbr": " NV ",
   "Zip": 89705,
   "State": "Nevada",
   "lat": 39.098363,
   "lng": -119.834879
 },
 {
   "Club": "Southern Highlands Golf Club",
   "Rank": 3,
   "Address": "1 Robert Trent Jones Ln",
   "City": " Las Vegas",
   "StateAbbr": " NV ",
   "Zip": 89141,
   "State": "Nevada",
   "lat": 35.972332,
   "lng": -115.193549
 },
 {
   "Club": "The Golf Club at Southshore",
   "Rank": 4,
   "Address": "100 Strada Di Circolo",
   "City": " Henderson",
   "StateAbbr": " NV ",
   "Zip": 89011,
   "State": "Nevada",
   "lat": 36.103461,
   "lng": -114.91416
 },
 {
   "Club": "Wolf Creek Golf Club",
   "Rank": 5,
   "Address": "403 Paradise Pkwy",
   "City": " Mesquite",
   "StateAbbr": " NV ",
   "Zip": 89027,
   "State": "Nevada",
   "lat": 36.83107,
   "lng": -114.06096
 },
 {
   "Club": "Baker Hill Golf Club",
   "Rank": 1,
   "Address": "101 Baker Hill Rd",
   "City": " Newbury",
   "StateAbbr": " NH ",
   "Zip": 3255,
   "State": "New Hampshire",
   "lat": 43.369845,
   "lng": -72.024594
 },
 {
   "Club": "The Golf Club of New England",
   "Rank": 2,
   "Address": "167 Winnicutt Rd",
   "City": " Stratham",
   "StateAbbr": " NH ",
   "Zip": 3885,
   "State": "New Hampshire",
   "lat": 43.011561,
   "lng": -70.864822
 },
 {
   "Club": "Lake Winnipesaukee Golf Club",
   "Rank": 3,
   "Address": "1 Lake Winnipesaukee Dr",
   "City": " Wolfeboro",
   "StateAbbr": " NH ",
   "Zip": 3894,
   "State": "New Hampshire",
   "lat": 43.549046,
   "lng": -71.139221
 },
 {
   "Club": "Lake Sunapee Country Club",
   "Rank": 4,
   "Address": "289 Country Club Ln",
   "City": " New London",
   "StateAbbr": " NH ",
   "Zip": 3257,
   "State": "New Hampshire",
   "lat": 43.404193,
   "lng": -71.950989
 },
 {
   "Club": "Portsmouth Country Club",
   "Rank": 5,
   "Address": "80 Country Club Ln",
   "City": " Greenland",
   "StateAbbr": " NH ",
   "Zip": 3840,
   "State": "New Hampshire",
   "lat": 43.047418,
   "lng": -70.829129
 },
 {
   "Club": "Pine Valley Golf Club",
   "Rank": 1,
   "Address": "1 E Atlantic Ave",
   "City": " Pine Valley",
   "StateAbbr": " NJ ",
   "Zip": 8021,
   "State": "New Jersey",
   "lat": 39.792158,
   "lng": -74.97147
 },
 {
   "Club": "Baltusrol Golf Club",
   "Rank": 2,
   "Address": "201 Shunpike Rd",
   "City": " Springfield Township",
   "StateAbbr": " NJ ",
   "Zip": 7081,
   "State": "New Jersey",
   "lat": 40.705022,
   "lng": -74.327986
 },
 {
   "Club": "Somerset Hills Country Club",
   "Rank": 3,
   "Address": "180 Mine Mt Rd",
   "City": " Bernardsville",
   "StateAbbr": " NJ ",
   "Zip": 7924,
   "State": "New Jersey",
   "lat": 40.725876,
   "lng": -74.584078
 },
 {
   "Club": "Plainfield Country Club",
   "Rank": 4,
   "Address": "1591 Woodland Ave",
   "City": " Edison",
   "StateAbbr": " NJ ",
   "Zip": 8820,
   "State": "New Jersey",
   "lat": 40.594328,
   "lng": -74.391074
 },
 {
   "Club": "Ridgewood Country Club",
   "Rank": 5,
   "Address": "96 W Midland Ave",
   "City": " Paramus",
   "StateAbbr": " NJ ",
   "Zip": 7652,
   "State": "New Jersey",
   "lat": 40.947656,
   "lng": -74.077955
 },
 {
   "Club": "Paa-Ko Ridge Golf Club",
   "Rank": 1,
   "Address": "1 Club House Dr",
   "City": " Sandia Park",
   "StateAbbr": " NM ",
   "Zip": 87047,
   "State": "New Mexico",
   "lat": 35.207445,
   "lng": -106.317967
 },
 {
   "Club": "The Club At Las Campanas",
   "Rank": 2,
   "Address": "132 Clubhouse Dr",
   "City": " Santa Fe",
   "StateAbbr": " NM ",
   "Zip": 87506,
   "State": "New Mexico",
   "lat": 35.714686,
   "lng": -106.056171
 },
 {
   "Club": "Rainmakers Golf Club Alto",
   "Rank": 3,
   "Address": "164 Rainmakers Dr",
   "City": " Alto",
   "StateAbbr": " NM ",
   "Zip": 88312,
   "State": "New Mexico",
   "lat": 33.432811,
   "lng": -105.588194
 },
 {
   "Club": "Twin Warriors Golf Club",
   "Rank": 4,
   "Address": "1301 Tuyuna Trail",
   "City": " Bernalillo",
   "StateAbbr": " NM ",
   "Zip": 87004,
   "State": "New Mexico",
   "lat": 35.351229,
   "lng": -106.548538
 },
 {
   "Club": "Black Mesa Golf Club",
   "Rank": 5,
   "Address": "115 NM-399",
   "City": " Espanola",
   "StateAbbr": " NM ",
   "Zip": 87532,
   "State": "New Mexico",
   "lat": 35.970128,
   "lng": -106.060079
 },
 {
   "Club": "Shinnecock Hills Golf Club",
   "Rank": 1,
   "Address": "200 Tuckahoe Rd",
   "City": " Southampton",
   "StateAbbr": " NY ",
   "Zip": 11968,
   "State": "New York",
   "lat": 40.894164,
   "lng": -72.439787
 },
 {
   "Club": "National Golf Links of America",
   "Rank": 2,
   "Address": "149 Sebonac Inlet Rd",
   "City": " Southampton",
   "StateAbbr": " NY ",
   "Zip": 11968,
   "State": "New York",
   "lat": 40.904997,
   "lng": -72.44535
 },
 {
   "Club": "Winged Foot Golf Club",
   "Rank": 3,
   "Address": "851 Fenimore Rd",
   "City": " Mamaroneck",
   "StateAbbr": " NY ",
   "Zip": 10543,
   "State": "New York",
   "lat": 40.957671,
   "lng": -73.753485
 },
 {
   "Club": "Fishers Island Club",
   "Rank": 4,
   "Address": "20449 E Main Rd",
   "City": " Fishers Island",
   "StateAbbr": " NY ",
   "Zip": 6390,
   "State": "New York",
   "lat": 41.279934,
   "lng": -71.948771
 },
 {
   "Club": "Friars Head Golf Club",
   "Rank": 5,
   "Address": "3000 Sound Ave",
   "City": " Riverhead",
   "StateAbbr": " NY ",
   "Zip": 11901,
   "State": "New York",
   "lat": 40.965358,
   "lng": -72.725673
 },
 {
   "Club": "Wade Hampton Golf Club",
   "Rank": 1,
   "Address": "68 Golf Drive",
   "City": "Cashiers",
   "StateAbbr": " NC",
   "Zip": 28717,
   "State": "North Carolina",
   "lat": 35.099862,
   "lng": -83.074003
 },
 {
   "Club": "Pinehurst Resort No 2",
   "Rank": 2,
   "Address": "80 Carolina Vista Dr",
   "City": " Pinehurst",
   "StateAbbr": " NC ",
   "Zip": 28374,
   "State": "North Carolina",
   "lat": 35.195787,
   "lng": -79.473687
 },
 {
   "Club": "Diamond Creek Golf Club",
   "Rank": 3,
   "Address": "Dobbins Rd",
   "City": " Banner Elk",
   "StateAbbr": " NC ",
   "Zip": 28604,
   "State": "North Carolina",
   "lat": 36.152568,
   "lng": -81.835495
 },
 {
   "Club": "Eagle Point Golf Club",
   "Rank": 4,
   "Address": "8131 Bald Eagle Ln",
   "City": " Wilmington",
   "StateAbbr": " NC ",
   "Zip": 28411,
   "State": "North Carolina",
   "lat": 34.28378,
   "lng": -77.758918
 },
 {
   "Club": "Mountaintop Golf & Lake Club",
   "Rank": 5,
   "Address": "34 High Mountain Dr",
   "City": " Cashiers",
   "StateAbbr": " NC ",
   "Zip": 28717,
   "State": "North Carolina",
   "lat": 35.106156,
   "lng": -83.15857
 },
 {
   "Club": "Hawktree Golf Club",
   "Rank": 1,
   "Address": "3400 Burnt Creek Loop",
   "City": " Bismarck",
   "StateAbbr": " ND ",
   "Zip": 58503,
   "State": "North Dakota",
   "lat": 46.895786,
   "lng": -100.844312
 },
 {
   "Club": "The Links of North Dakota",
   "Rank": 2,
   "Address": "5153 109th Ave NW",
   "City": " Ray",
   "StateAbbr": " ND ",
   "Zip": 58849,
   "State": "North Dakota",
   "lat": 48.161784,
   "lng": -103.046174
 },
 {
   "Club": "Bully Pulpit Golf Course",
   "Rank": 3,
   "Address": "3731 Bible Camp Rd",
   "City": " Medora",
   "StateAbbr": " ND ",
   "Zip": 58645,
   "State": "North Dakota",
   "lat": 46.873289,
   "lng": -103.530342
 },
 {
   "Club": "Minot Country Club",
   "Rank": 4,
   "Address": "1912 Valley Bluff Dr.",
   "City": " Minot",
   "StateAbbr": " ND ",
   "Zip": 58701,
   "State": "North Dakota",
   "lat": 48.196255,
   "lng": -101.261794
 },
 {
   "Club": "Fargo Country Club",
   "Rank": 5,
   "Address": "509 26th Ave S",
   "City": " Fargo",
   "StateAbbr": " ND ",
   "Zip": 58103,
   "State": "North Dakota",
   "lat": 46.840586,
   "lng": -96.79025
 },
 {
   "Club": "Muirfield Village Golf Club",
   "Rank": 1,
   "Address": "5750 Memorial Dr",
   "City": " Dublin",
   "StateAbbr": " OH ",
   "Zip": 43017,
   "State": "Ohio",
   "lat": 40.140481,
   "lng": -83.140923
 },
 {
   "Club": "The Golf Club",
   "Rank": 2,
   "Address": "4522 Kitzmiller Rd",
   "City": " New Albany",
   "StateAbbr": " OH ",
   "Zip": 43054,
   "State": "Ohio",
   "lat": 40.066528,
   "lng": -82.785944
 },
 {
   "Club": "Camargo Club",
   "Rank": 3,
   "Address": "Camargo Club Dr",
   "City": " Cincinnati",
   "StateAbbr": " OH ",
   "Zip": 45243,
   "State": "Ohio",
   "lat": 39.174601,
   "lng": -84.3362
 },
 {
   "Club": "Scioto Country Club",
   "Rank": 4,
   "Address": "2196 Riverside Dr",
   "City": " Columbus",
   "StateAbbr": " OH ",
   "Zip": 43221,
   "State": "Ohio",
   "lat": 40.003806,
   "lng": -83.075061
 },
 {
   "Club": "Double Eagle Club",
   "Rank": 5,
   "Address": "6025 Cheshire Rd",
   "City": " Galena",
   "StateAbbr": " OH ",
   "Zip": 43021,
   "State": "Ohio",
   "lat": 40.243183,
   "lng": -82.949696
 },
 {
   "Club": "Southern Hills Country Club",
   "Rank": 1,
   "Address": "2636 E 61st St",
   "City": " Tulsa",
   "StateAbbr": " OK ",
   "Zip": 74136,
   "State": "Oklahoma",
   "lat": 36.07009,
   "lng": -95.945458
 },
 {
   "Club": "Oak Tree National",
   "Rank": 2,
   "Address": "1515 Oak Tree Dr",
   "City": " Edmond",
   "StateAbbr": " OK ",
   "Zip": 73025,
   "State": "Oklahoma",
   "lat": 35.719288,
   "lng": -97.505379
 },
 {
   "Club": "Karsten Creek Golf Club",
   "Rank": 3,
   "Address": "1800 S Memorial Dr",
   "City": " Stillwater",
   "StateAbbr": " OK ",
   "Zip": 74074,
   "State": "Oklahoma",
   "lat": 36.102168,
   "lng": -97.185445
 },
 {
   "Club": "The Patriot Golf Club",
   "Rank": 4,
   "Address": "5790 N Patriot Dr",
   "City": " Owasso",
   "StateAbbr": " OK ",
   "Zip": 74055,
   "State": "Oklahoma",
   "lat": 36.238618,
   "lng": -95.772553
 },
 {
   "Club": "Oak Tree Country Club",
   "Rank": 5,
   "Address": "700 West Country Club Drive",
   "City": " Edmond",
   "StateAbbr": " OK ",
   "Zip": 73025,
   "State": "Oklahoma",
   "lat": 35.716426,
   "lng": -97.493443
 },
 {
   "Club": "Brandon Dunes Golf Resort",
   "Rank": 1,
   "Address": "57744 Round Lake Road",
   "City": " Bandon",
   "StateAbbr": " OR ",
   "Zip": 97411,
   "State": "Oregon",
   "lat": 43.188198,
   "lng": -124.389902
 },
 {
   "Club": "Old Macdonald",
   "Rank": 2,
   "Address": "57744 Round Lake Road",
   "City": " Bandon",
   "StateAbbr": " OR ",
   "Zip": 97411,
   "State": "Oregon",
   "lat": 43.208187,
   "lng": -124.388763
 },
 {
   "Club": "Bandon Trails",
   "Rank": 3,
   "Address": "57744 Round Lake Road",
   "City": " Bandon",
   "StateAbbr": " OR ",
   "Zip": 97411,
   "State": "Oregon",
   "lat": 43.179332,
   "lng": -124.385405
 },
 {
   "Club": "Eugene Country Club",
   "Rank": 4,
   "Address": "255 Country Club Rd",
   "City": " Eugene",
   "StateAbbr": " OR ",
   "Zip": 97401,
   "State": "Oregon",
   "lat": 44.063672,
   "lng": -123.086634
 },
 {
   "Club": "Pronghorn Club",
   "Rank": 5,
   "Address": "5600 Pronghorn Club Drive",
   "City": " Bend",
   "StateAbbr": " OR ",
   "Zip": 97701,
   "State": "Oregon",
   "lat": 44.186542,
   "lng": -121.174159
 },
 {
   "Club": "Oakmont Country Club",
   "Rank": 1,
   "Address": "1233 Hulton Rd",
   "City": " Oakmont",
   "StateAbbr": " PA ",
   "Zip": 15139,
   "State": "Pennsylvania",
   "lat": 40.525895,
   "lng": -79.826879
 },
 {
   "Club": "Merion Golf Club",
   "Rank": 2,
   "Address": "450 Ardmore Ave",
   "City": " Ardmore",
   "StateAbbr": " PA ",
   "Zip": 19003,
   "State": "Pennsylvania",
   "lat": 40.001869,
   "lng": -75.311804
 },
 {
   "Club": "Aronimink Golf Club",
   "Rank": 3,
   "Address": "3600 St Davids Rd",
   "City": " Newtown Square",
   "StateAbbr": " PA ",
   "Zip": 19073,
   "State": "Pennsylvania",
   "lat": 40.011648,
   "lng": -75.408987
 },
 {
   "Club": "Laurel Valley Golf Club",
   "Rank": 4,
   "Address": "175 Palmer Drive",
   "City": " Ligonier",
   "StateAbbr": " PA ",
   "Zip": 15658,
   "State": "Pennsylvania",
   "lat": 40.22885,
   "lng": -79.236038
 },
 {
   "Club": "Philadelphia Cricket Club",
   "Rank": 5,
   "Address": "6025 W Valley Green Rd",
   "City": " Flourtown",
   "StateAbbr": " PA ",
   "Zip": 19031,
   "State": "Pennsylvania",
   "lat": 40.10809,
   "lng": -75.224107
 },
 {
   "Club": "Newport Country Club",
   "Rank": 1,
   "Address": "280 Harrison Ave",
   "City": " Newport",
   "StateAbbr": " RI ",
   "Zip": 2840,
   "State": "Rhode Island",
   "lat": 41.46219,
   "lng": -71.346942
 },
 {
   "Club": "Wannamoisett Country Club",
   "Rank": 2,
   "Address": "96 Hoyt Ave",
   "City": " Rumford",
   "StateAbbr": " RI ",
   "Zip": 2916,
   "State": "Rhode Island",
   "lat": 41.844698,
   "lng": -71.358278
 },
 {
   "Club": "Shelter Harbor Golf Club",
   "Rank": 3,
   "Address": "1 Golf Club Dr",
   "City": " Charlestown",
   "StateAbbr": " RI ",
   "Zip": 2813,
   "State": "Rhode Island",
   "lat": 41.35703,
   "lng": -71.731108
 },
 {
   "Club": "The Misquamicut Club",
   "Rank": 4,
   "Address": "60 Ocean View Hwy",
   "City": " Westerly",
   "StateAbbr": " RI ",
   "Zip": 2891,
   "State": "Rhode Island",
   "lat": 41.321614,
   "lng": -71.833362
 },
 {
   "Club": "The Carnegie Abbey Club",
   "Rank": 5,
   "Address": "125 Corys Ln",
   "City": " Portsmouth",
   "StateAbbr": " RI ",
   "Zip": 2871,
   "State": "Rhode Island",
   "lat": 41.602387,
   "lng": -71.264834
 },
 {
   "Club": "The Ocean Course",
   "Rank": 1,
   "Address": "1000 Ocean Course Dr",
   "City": " Johns Island",
   "StateAbbr": " SC ",
   "Zip": 29455,
   "State": "South Carolina",
   "lat": 32.611878,
   "lng": -80.023319
 },
 {
   "Club": "Yeamans Hall Club",
   "Rank": 2,
   "Address": "900 Yeamans Hall Rd",
   "City": " Hanahan",
   "StateAbbr": " SC ",
   "Zip": 29410,
   "State": "South Carolina",
   "lat": 32.925224,
   "lng": -79.984681
 },
 {
   "Club": "Sage Valley Golf Club",
   "Rank": 3,
   "Address": "2240 Sage Valley Dr",
   "City": " Graniteville",
   "StateAbbr": " SC ",
   "Zip": 29829,
   "State": "South Carolina",
   "lat": 33.60527,
   "lng": -81.8263
 },
 {
   "Club": "Harbour Town Golf Links",
   "Rank": 4,
   "Address": "11 Lighthouse Ln",
   "City": " Hilton Head Island",
   "StateAbbr": " SC ",
   "Zip": 29928,
   "State": "South Carolina",
   "lat": 32.135488,
   "lng": -80.810181
 },
 {
   "Club": "Kiawah Island Club",
   "Rank": 5,
   "Address": "10 River Course Ln",
   "City": " Johns Island",
   "StateAbbr": " SC ",
   "Zip": 29455,
   "State": "South Carolina",
   "lat": 32.611793,
   "lng": -80.099381
 },
 {
   "Club": "Sutton Bay Golf Course",
   "Rank": 1,
   "Address": "Sutton Bay Trail",
   "City": " Agar",
   "StateAbbr": " SD",
   "Zip": 57520,
   "State": "South Dakota",
   "lat": 44.8905805,
   "lng": -100.3543458
 },
 {
   "Club": "The Golf Club At Red Rock",
   "Rank": 2,
   "Address": "6520 Birkdale Dr",
   "City": " Rapid City",
   "StateAbbr": " SD ",
   "Zip": 57702,
   "State": "South Dakota",
   "lat": 44.022311,
   "lng": -103.301083
 },
 {
   "Club": "Dakota Dunes Country Club",
   "Rank": 3,
   "Address": "960 Dakota Dunes Blvd",
   "City": " Dakota Dunes",
   "StateAbbr": " SD ",
   "Zip": 57049,
   "State": "South Dakota",
   "lat": 42.48499,
   "lng": -96.491806
 },
 {
   "Club": "Minnehaha Country Club",
   "Rank": 4,
   "Address": "3101 W 22nd St",
   "City": " Sioux Falls",
   "StateAbbr": " SD ",
   "Zip": 57104,
   "State": "South Dakota",
   "lat": 43.531127,
   "lng": -96.765839
 },
 {
   "Club": "Hart Ranch Golf Course",
   "Rank": 5,
   "Address": "23645 Clubhouse Drive",
   "City": " Rapid City",
   "StateAbbr": " SD ",
   "Zip": 57702,
   "State": "South Dakota",
   "lat": 43.979018,
   "lng": -103.237578
 },
 {
   "Club": "The Honors Course",
   "Rank": 1,
   "Address": "9603 Lee Hwy",
   "City": " Ooltewah",
   "StateAbbr": " TN ",
   "Zip": 37363,
   "State": "Tennessee",
   "lat": 35.087286,
   "lng": -85.044133
 },
 {
   "Club": "The Golf Club Of Tennessee",
   "Rank": 2,
   "Address": "1000 Golf Club Dr",
   "City": " Kingston Springs",
   "StateAbbr": " TN ",
   "Zip": 37082,
   "State": "Tennessee",
   "lat": 36.068185,
   "lng": -87.090455
 },
 {
   "Club": "Spring Creek Ranch Golf Club",
   "Rank": 3,
   "Address": "149 Chinquapin Dr",
   "City": " Collierville",
   "StateAbbr": " TN ",
   "Zip": 38017,
   "State": "Tennessee",
   "lat": 35.120984,
   "lng": -89.656103
 },
 {
   "Club": "Holston Hills Country Club",
   "Rank": 4,
   "Address": "5200 Holston Hills Rd",
   "City": " Knoxville",
   "StateAbbr": " TN ",
   "Zip": 37914,
   "State": "Tennessee",
   "lat": 35.992567,
   "lng": -83.841538
 },
 {
   "Club": "TPC Southwind",
   "Rank": 5,
   "Address": "3325 Club at Southwind",
   "City": " Memphis",
   "StateAbbr": " TN ",
   "Zip": 38125,
   "State": "Tennessee",
   "lat": 35.057161,
   "lng": -89.779321
 },
 {
   "Club": "Whispering Pines Golf Club",
   "Rank": 1,
   "Address": "1532 Whispering Pines Dr",
   "City": " Trinity",
   "StateAbbr": " TX ",
   "Zip": 75862,
   "State": "Texas",
   "lat": 30.945556,
   "lng": -95.250263
 },
 {
   "Club": "Dallas National Golf Club",
   "Rank": 2,
   "Address": "1515 Knoxville St",
   "City": " Dallas",
   "StateAbbr": " TX ",
   "Zip": 75211,
   "State": "Texas",
   "lat": 32.733486,
   "lng": -96.90315
 },
 {
   "Club": "Bluejack National",
   "Rank": 3,
   "Address": "4430 S FM 1486",
   "City": " Montgomery",
   "StateAbbr": " TX ",
   "Zip": 77316,
   "State": "Texas",
   "lat": 30.317265,
   "lng": -95.791811
 },
 {
   "Club": "Preston Trail Golf Club",
   "Rank": 4,
   "Address": "17201 Preston Trail Dr",
   "City": " Dallas",
   "StateAbbr": " TX ",
   "Zip": 75248,
   "State": "Texas",
   "lat": 32.984602,
   "lng": -96.811695
 },
 {
   "Club": "Colonial Country Club",
   "Rank": 5,
   "Address": "3735 Country Club Cir",
   "City": " Fort Worth",
   "StateAbbr": " TX ",
   "Zip": 76109,
   "State": "Texas",
   "lat": 32.717048,
   "lng": -97.372756
 },
 {
   "Club": "Glenwild Golf Club",
   "Rank": 1,
   "Address": "7600 Glenwild Dr",
   "City": " Park City",
   "StateAbbr": " UT ",
   "Zip": 84098,
   "State": "Utah",
   "lat": 40.741358,
   "lng": -111.52784
 },
 {
   "Club": "Victory Ranch",
   "Rank": 2,
   "Address": "7474 Victory Club Dr",
   "City": " Heber City",
   "StateAbbr": " UT ",
   "Zip": 84032,
   "State": "Utah",
   "lat": 40.598348,
   "lng": -111.305301
 },
 {
   "Club": "Talisker Club at Tuhaye",
   "Rank": 3,
   "Address": "9875 North Tuhaye Park",
   "City": " Kamas",
   "StateAbbr": " UT ",
   "Zip": 84036,
   "State": "Utah",
   "lat": 40.625187,
   "lng": -111.371047
 },
 {
   "Club": "Red Ledges Golf Club",
   "Rank": 4,
   "Address": "205 Red Ledges Blvd",
   "City": " Heber City",
   "StateAbbr": " UT ",
   "Zip": 84032,
   "State": "Utah",
   "lat": 40.511597,
   "lng": -111.371128
 },
 {
   "Club": "Promontory Club",
   "Rank": 5,
   "Address": "9065 N Promontory Ranch Rd",
   "City": " Park City",
   "StateAbbr": " UT ",
   "Zip": 84098,
   "State": "Utah",
   "lat": 40.746225,
   "lng": -111.450752
 },
 {
   "Club": "Ekwanok Country Club",
   "Rank": 1,
   "Address": "3262 Main St",
   "City": " Manchester",
   "StateAbbr": " VT ",
   "Zip": 5254,
   "State": "Vermont",
   "lat": 43.155631,
   "lng": -73.063402
 },
 {
   "Club": "Country Club Of Vermont",
   "Rank": 2,
   "Address": "2800 Country Club Rd",
   "City": " Waterbury Center",
   "StateAbbr": " VT ",
   "Zip": 5677,
   "State": "Vermont",
   "lat": 44.354074,
   "lng": -72.734084
 },
 {
   "Club": "The Quechee Club",
   "Rank": 3,
   "Address": "3268 Quechee Main St",
   "City": " Quechee",
   "StateAbbr": " VT ",
   "Zip": 5059,
   "State": "Vermont",
   "lat": 43.657052,
   "lng": -72.440307
 },
 {
   "Club": "Dorset Field Club",
   "Rank": 4,
   "Address": "132 Church St",
   "City": " Dorset",
   "StateAbbr": " VT ",
   "Zip": 5251,
   "State": "Vermont",
   "lat": 43.255041,
   "lng": -73.101826
 },
 {
   "Club": "Vermont National Country Club",
   "Rank": 5,
   "Address": "1227 Dorset St",
   "City": " South Burlington",
   "StateAbbr": " VT ",
   "Zip": 5403,
   "State": "Vermont",
   "lat": 44.435669,
   "lng": -73.17633
 },
 {
   "Club": "Kinloch Golf Club",
   "Rank": 1,
   "Address": "100 Kinloch Ln",
   "City": " Manakin-Sabot",
   "StateAbbr": " VA ",
   "Zip": 23103,
   "State": "Virginia",
   "lat": 37.635935,
   "lng": -77.687337
 },
 {
   "Club": "The Olde Farm",
   "Rank": 2,
   "Address": "16639 Old Jonesboro Rd",
   "City": " Bristol",
   "StateAbbr": " VA ",
   "Zip": 24202,
   "State": "Virginia",
   "lat": 36.639097,
   "lng": -82.070675
 },
 {
   "Club": "Robert Trent Jones Golf Club",
   "Rank": 3,
   "Address": "1 Turtle Point Dr",
   "City": " Gainesville",
   "StateAbbr": " VA ",
   "Zip": 20155,
   "State": "Virginia",
   "lat": 38.775753,
   "lng": -77.639225
 },
 {
   "Club": "The Omni Homestead Resort",
   "Rank": 4,
   "Address": "1766 Homestead Dr",
   "City": " Hot Springs",
   "StateAbbr": " VA ",
   "Zip": 24445,
   "State": "Virginia",
   "lat": 37.996974,
   "lng": -79.830415
 },
 {
   "Club": "The Highland Course at Primland",
   "Rank": 5,
   "Address": "2000 Busted Rock Rd",
   "City": " Meadows of Dan",
   "StateAbbr": " VA ",
   "Zip": 24120,
   "State": "Virginia",
   "lat": 36.661684,
   "lng": -80.431941
 },
 {
   "Club": "Sahalee Country Club",
   "Rank": 1,
   "Address": "21200 NE Sahalee Country Club Dr",
   "City": " Sammamish",
   "StateAbbr": " WA ",
   "Zip": 98074,
   "State": "Washington",
   "lat": 47.634884,
   "lng": -122.05701
 },
 {
   "Club": "Chambers Bay",
   "Rank": 2,
   "Address": "6320 Grandview Dr W",
   "City": " University Place",
   "StateAbbr": " WA ",
   "Zip": 98467,
   "State": "Washington",
   "lat": 47.207018,
   "lng": -122.574119
 },
 {
   "Club": "Aldarra Golf Club",
   "Rank": 3,
   "Address": "29125 SE Duthie Hill Rd",
   "City": " Sammamish",
   "StateAbbr": " WA ",
   "Zip": 98075,
   "State": "Washington",
   "lat": 47.584811,
   "lng": -121.953605
 },
 {
   "Club": "Gamble Sands",
   "Rank": 4,
   "Address": "200 Sands Trail Rd",
   "City": " Brewster",
   "StateAbbr": " WA ",
   "Zip": 98812,
   "State": "Washington",
   "lat": 48.075372,
   "lng": -119.65106
 },
 {
   "Club": "Tumble Creek Club at Suncadia",
   "Rank": 5,
   "Address": "3600 Suncadia Trail",
   "City": " Cle Elum",
   "StateAbbr": " WA ",
   "Zip": 98922,
   "State": "Washington",
   "lat": 47.217076,
   "lng": -121.047234
 },
 {
   "Club": "Pikewood National Golf Club",
   "Rank": 1,
   "Address": "3055 Kingwood Pike",
   "City": " Morgantown",
   "StateAbbr": " WV ",
   "Zip": 26508,
   "State": "West Virginia",
   "lat": 39.537473,
   "lng": -79.867086
 },
 {
   "Club": "Pete Dye Golf Club",
   "Rank": 2,
   "Address": "801 Aaron Smith Drive",
   "City": " Bridgeport",
   "StateAbbr": " WV ",
   "Zip": 26330,
   "State": "West Virginia",
   "lat": 39.329318,
   "lng": -80.301027
 },
 {
   "Club": "The Greenbrier",
   "Rank": 3,
   "Address": "300 West Main Street",
   "City": " White Sulphur Springs",
   "StateAbbr": " WV ",
   "Zip": 24986,
   "State": "West Virginia",
   "lat": 37.786738,
   "lng": -80.314049
 },
 {
   "Club": "The Greenbrier Sporting Club",
   "Rank": 4,
   "Address": "1 Sporting Club Dr",
   "City": " White Sulphur Springs",
   "StateAbbr": " WV ",
   "Zip": 24986,
   "State": "West Virginia",
   "lat": 37.775614,
   "lng": -80.325673
 },
 {
   "Club": "The Resort At Glade Springs",
   "Rank": 5,
   "Address": "255 Resort Dr",
   "City": " Daniels",
   "StateAbbr": " WV ",
   "Zip": 25832,
   "State": "West Virginia",
   "lat": 37.718756,
   "lng": -81.073001
 },
 {
   "Club": "Whistling Straits",
   "Rank": 1,
   "Address": "N8501 Lakeshore Rd",
   "City": " Sheboygan",
   "StateAbbr": " WI ",
   "Zip": 53083,
   "State": "Wisconsin",
   "lat": 43.851058,
   "lng": -87.735142
 },
 {
   "Club": "Erin Hills Golf Course",
   "Rank": 2,
   "Address": "7169 County Road O",
   "City": " Hartford",
   "StateAbbr": " WI ",
   "Zip": 53027,
   "State": "Wisconsin",
   "lat": 43.245885,
   "lng": -88.398504
 },
 {
   "Club": "Milwaukee Country Club",
   "Rank": 3,
   "Address": "8000 N Range Line Rd",
   "City": " River Hills",
   "StateAbbr": " WI ",
   "Zip": 53217,
   "State": "Wisconsin",
   "lat": 43.166641,
   "lng": -87.941909
 },
 {
   "Club": "Blackwolf Run River",
   "Rank": 4,
   "Address": "1111 W Riverside Dr",
   "City": " Kohler",
   "StateAbbr": " WI ",
   "Zip": 53044,
   "State": "Wisconsin",
   "lat": 43.726896,
   "lng": -87.775884
 },
 {
   "Club": "Sentryworld Golf Course",
   "Rank": 5,
   "Address": "601 Michigan Ave N",
   "City": " Stevens Point",
   "StateAbbr": " WI ",
   "Zip": 54481,
   "State": "Wisconsin",
   "lat": 44.54525,
   "lng": -89.565662
 },
 {
   "Club": "Snake River Sporting Club",
   "Rank": 1,
   "Address": "14885 Sporting Club Road",
   "City": " Jackson",
   "StateAbbr": " WY ",
   "Zip": 83001,
   "State": "Wyoming",
   "lat": 43.2663,
   "lng": -110.777
 },
 {
   "Club": "Shooting Star Golf Club",
   "Rank": 2,
   "Address": "6765 Crystal Springs Rd",
   "City": " Teton Village",
   "StateAbbr": " WY ",
   "Zip": 83025,
   "State": "Wyoming",
   "lat": 43.577883,
   "lng": -110.82671
 },
 {
   "Club": "3 Creek Ranch Golf Club",
   "Rank": 3,
   "Address": "2800 Ranch House Cir",
   "City": " Jackson",
   "StateAbbr": " WY ",
   "Zip": 83001,
   "State": "Wyoming",
   "lat": 43.44144,
   "lng": -110.819054
 },
 {
   "Club": "Jackson Hole Golf & Tennis Club",
   "Rank": 4,
   "Address": "5000 N Spring Gulch Rd",
   "City": " Jackson",
   "StateAbbr": " WY ",
   "Zip": 83001,
   "State": "Wyoming",
   "lat": 43.564413,
   "lng": -110.751001
 },
 {
   "Club": "Teton Pines Resort & Golf Club",
   "Rank": 5,
   "Address": "3450 Clubhouse Dr",
   "City": " Wilson",
   "StateAbbr": " WY ",
   "Zip": 83014,
   "State": "Wyoming",
   "lat": 43.528489,
   "lng": -110.845428
 }
]

var locations = [
 {
   "City": " Pebble Beach",
   "State": "California",
   "Country": "USA"
 },
 {
   "City": " Los Angeles",
   "State": "California",
   "Country": "USA"
 },
 {
   "City": " Pacific Palisades",
   "State": "California",
   "Country": "USA"
 },
 {
   "City": " San Francisco",
   "State": "California",
   "Country": "USA"
 },
 {
   "City": " Montecito",
   "State": "California",
   "Country": "USA"
 },
 {
   "City": " La Quinta",
   "State": "California",
   "Country": "USA"
 },
 {
   "City": " Scottsdale",
   "State": "Arizona",
   "Country": "USA"
 },
 {
   "City": " Flagstaff",
   "State": "Arizona",
   "Country": "USA"
 },
 {
   "City": " Oro Valley",
   "State": "Arizona",
   "Country": "USA"
 },
 {
   "City": " Carefree",
   "State": "Arizona",
   "Country": "USA"
 },
 {
   "City": " Roland",
   "State": "Arkansas",
   "Country": "USA"
 },
 {
   "City": " Fayetteville",
   "State": "Arkansas",
   "Country": "USA"
 },
 {
   "City": " Hot Springs Village",
   "State": "Arkansas",
   "Country": "USA"
 },
 {
   "City": " Little Rock",
   "State": "Arkansas",
   "Country": "USA"
 },
 {
   "City": " Texarkana",
   "State": "Arkansas",
   "Country": "USA"
 },
 {
   "City": " Rogers",
   "State": "Arkansas",
   "Country": "USA"
 },
 {
   "City": " Fort Smith",
   "State": "Arkansas",
   "Country": "USA"
 },
 {
   "City": " Anchorage",
   "State": "Alaska",
   "Country": "USA"
 },
 {
   "City": " Shoal Creek",
   "State": "Alabama",
   "Country": "USA"
 },
 {
   "City": " Mountain Brook",
   "State": "Alabama",
   "Country": "USA"
 },
 {
   "City": " Huntsville",
   "State": "Alabama",
   "Country": "USA"
 },
 {
   "City": " Killen",
   "State": "Alabama",
   "Country": "USA"
 },
 {
   "City": " Gulf Shores",
   "State": "Alabama",
   "Country": "USA"
 },
 {
   "City": " Prattville",
   "State": "Alabama",
   "Country": "USA"
 },
 {
   "City": " Opelika",
   "State": "Alabama",
   "Country": "USA"
 },
 {
   "City": " Vestavia Hills",
   "State": "Alabama",
   "Country": "USA"
 },
 {
   "City": " Birmingham",
   "State": "Alabama",
   "Country": "USA"
 },
 {
   "City": " Loxley",
   "State": "Alabama",
   "Country": "USA"
 }
];

var stateNames = [
 {
   "StateOf": "Alabama"
 },
 {
   "StateOf": "Alaska"
 },
 {
   "StateOf": "Arizona"
 },
 {
   "StateOf": "Arkansas"
 },
 {
   "StateOf": "California"
 },
 {
   "StateOf": "Colorado"
 },
 {
   "StateOf": "Connecticut"
 },
 {
   "StateOf": "Delaware"
 },
 {
   "StateOf": "Florida"
 },
 {
   "StateOf": "Georgia"
 },
 {
   "StateOf": "Hawaii"
 },
 {
   "StateOf": "Idaho"
 },
 {
   "StateOf": "Illinois"
 },
 {
   "StateOf": "Indiana"
 },
 {
   "StateOf": "Iowa"
 },
 {
   "StateOf": "Kansas"
 },
 {
   "StateOf": "Kentucky"
 },
 {
   "StateOf": "Louisiana"
 },
 {
   "StateOf": "Maine"
 },
 {
   "StateOf": "Maryland"
 },
 {
   "StateOf": "Massachusetts"
 },
 {
   "StateOf": "Michigan"
 },
 {
   "StateOf": "Minnesota"
 },
 {
   "StateOf": "Mississippi"
 },
 {
   "StateOf": "Missouri"
 },
 {
   "StateOf": "Montana"
 },
 {
   "StateOf": "Nebraska"
 },
 {
   "StateOf": "Nevada"
 },
 {
   "StateOf": "New Hampshire"
 },
 {
   "StateOf": "New Jersey"
 },
 {
   "StateOf": "New Mexico"
 },
 {
   "StateOf": "New York"
 },
 {
   "StateOf": "North Carolina"
 },
 {
   "StateOf": "North Dakota"
 },
 {
   "StateOf": "Ohio"
 },
 {
   "StateOf": "Oklahoma"
 },
 {
   "StateOf": "Oregon"
 },
 {
   "StateOf": "Pennsylvania"
 },
 {
   "StateOf": "Rhode Island"
 },
 {
   "StateOf": "South Carolina"
 },
 {
   "StateOf": "South Dakota"
 },
 {
   "StateOf": "Tennessee"
 },
 {
   "StateOf": "Texas"
 },
 {
   "StateOf": "Utah"
 },
 {
   "StateOf": "Vermont"
 },
 {
   "StateOf": "Virginia"
 },
 {
   "StateOf": "Washington"
 },
 {
   "StateOf": "West Virginia"
 },
 {
   "StateOf": "Wisconsin"
 },
 {
   "StateOf": "Wyoming"
 }
];