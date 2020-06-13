
// load data
d3.csv("Data/math_all.csv")
  .then(function(mathAll) {
    console.log(mathAll);

    // list of the boroughs and grades included
    var boroughs = mathAll.map(data => data.borough);
    var grades = mathAll.map(data => data.grade);

    var passRate = mathAll.map(data => data.level3_4_);

    console.log("boroughs", boroughs);
    console.log("grades", grades);
    console.log("pass rate", passRate);

    mathAll.forEach(function(data) {
      data.passrate = +data.level3_4_;
      console.log("Borough:", data.borough);
      console.log("Grade:", data.grade);
      console.log("Pass Rate:", data.level3_4_);
    });
  })
  .catch(function(error) {
    console.log(error);
  });

// TO DO: plot for math by year (color-coded by borough)
// TO DO: Use one csv and filter it as needed


/* initialize a default page with one first year */
function init() {

  // select selDataset from index.html
  var selector = d3.select("#selDataset");

    // hard code the years, for now so the years fit with the rest of the pages
    academicYear = [2013, 2014, 2015, 2016, 2017]

    // append all years
    academicYear.forEach((year) => {
      selector.append("option").text(year).property("value", year);

   // });

  });
}


/* Update all of the plots any time that a new sample is selected */

// the optionChanged function will update the subject ID when selected in the dropdown
function optionChanged(newYear) {

  buildCharts(newYear); // update charts

}

init();
