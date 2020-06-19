// geoJSON file: https://github.com/kvn219/nyc-maps
// NYC state test scores: https://infohub.nyced.org/reports/academics/test-results
// NYC student poverty ratets: https://infohub.nyced.org/reports/school-quality/information-and-data-overview

// Load in geojson data

var geoData2 = "static/data/nyc_school_districts.geojson";

d3.json(geoData2, function(data) {

  // Create a new choropleth layer
  var geojson2 = L.choropleth(data, {

    // Define what  property in the features to use
    valueProperty: "ratio",

    // Set color scale (in hex values)
    scale: ["#ffffb2","#b10026"],

    // Number of breaks in step range
    steps: 10,

    // q for quantile, e for equidistant, k for k-means
    mode: "q",
    style: {
      // Border color
      color: "#fff",
      weight: 1,
      fillOpacity: 0.8
    },

    // Binding a pop-up to each layer
    onEachFeature: function(feature, layer) {
      layer.bindPopup("District: " + feature.properties.district +
                      "<br>Poverty Rate:<br>" +
                      feature.properties.poverty + "%" +
                      "<br>ELA Pass Rate:<br>" +
                      feature.properties.passrate + "%");
    }
  });

  createMap(geojson2);

 });

function createMap(geojson2) {
  
  console.log(geojson2);

  // Adding tile layer
  var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
      attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
      tileSize: 512,
      maxZoom: 18,
      zoomOffset: -1,
      id: "mapbox/streets-v11",
      accessToken: API_KEY
  })

  // add tile layer
  var lightmap =L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/light-v10',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: API_KEY
  })

  // base layers
  var baseMaps = {
    "Street Map": streetmap,
    "Light Map": lightmap
  };

    // overlay layer
  var overlayMaps = {
    Districts: geojson2
  };

    // create map object
  var myMap2 = L.map("map2", {
      center: [40.71, -74.01],
      zoom: 11,
      layers: [streetmap, geojson2]  // to display when page load
  });
  
    // layer control with baseMaps and overlayMaps
    L.control.layers(baseMaps, overlayMaps, {
      collapsed: false
    }).addTo(myMap2);  // add these to the map


    // Set up the legend 2
    var legend2 = L.control({ position: "bottomleft" });
  
    // legend 2
    legend2.onAdd = function() {
      var div = L.DomUtil.create("div", "info legend");
      var limits = geojson2.options.limits;
      var colors = geojson2.options.colors;
      var labels = [];
  
      // Add min & max
      var legendInfo = "<h1>Poverty-to-Score </br> Ratio</h1>"  +
        "<div class=\"labels\">" +
          "<div class=\"min\">" + limits[0] + "</div>" +
          "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
        "</div>";
  
      div.innerHTML = legendInfo;
  
      limits.forEach(function(limit, index) {
        labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
      });
  
      div.innerHTML += "<ul>" + labels.join("") + "</ul>";
      return div;
    };
  
    // Adding legend to the map
    legend2.addTo(myMap2);
  
}


