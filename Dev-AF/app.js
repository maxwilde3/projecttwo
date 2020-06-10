// csv data
var csvdata = "2016_DOE_High_School_Directory.csv";

// Use this link to get the geojson data.
var link = "nyc_school_districts.geojson";


// Grab the name of the school, lattitude, and longitude from csvdata
d3.csv(csvdata, function(d) {
    return {
       school: d.school_name
    };
}, function(error, rows) {
    console.log(rows);

});
