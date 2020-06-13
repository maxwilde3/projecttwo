// Creating map object
var myMap = L.map("map", {
    center: [40.71, -74.01], // [Latitude, Longitude] (alphabetic order)
    zoom: 11
  });

  /*
  Step 2: Adding a "Tile Layer" (the background map image) to our map
  - We use the addTo method to add objects to our map
  - Mapbox tile styles: https://docs.mapbox.com/api/maps/#mapbox-styles
  */
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11', // light-v10, streets-v11
      tileSize: 512,
      zoomOffset: -1,
      accessToken: "pk.eyJ1IjoiYWZvcnNoZWUwMDEiLCJhIjoiY2thdHBnd2N6MHQ3dzJ6cGIyc2IyZjhrOSJ9.iXMoE7Wn_tLQlMxsg3i8DQ"
  }).addTo(myMap);

  // link for geojson
var link = "nyc_school_districts.geojson";

// Grabbing GeoJSON data
d3.json(link, function(data) {
  // Creating a GeoJSON layer with the retrieved data
  L.geoJson(data).addTo(myMap);
});


// load data
d3.csv("2016_DOE_High_School_Directory.csv")
    .then(function(locationdata) {
        console.log(locationdata);

        // Grab the name of the school, lattitude, and longitude from csvdata
    var amount = locationdata.length;
    var school = locationdata.map(data => data.school_name);
    var latitude = locationdata.map(data => data.Latitude);
    var longitude = locationdata.map(data => data.Longitude);
    console.log(amount);
    console.log(school);
    console.log(latitude);
    console.log(longitude);
    
    var i;
    for (i = 0; i< amount; i++) {

      var marker = L.marker([latitude[i], longitude[i]]).addTo(myMap);
      marker.bindPopup(school[i]);

     

    }
  
    });
    
