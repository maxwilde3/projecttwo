
// load data
d3.csv("data/2013-2017_Math_Test_Results-Borough.csv")
  .then(function(mathAll) {
    console.log(mathAll);

    // list of the boroughs and grades included
    var boroughs = mathAll.map(data => data.Borough);
    var grades = mathAll.map(data => data.Grade);

    var passRate = mathAll.map(data => data.Level34_percent);

    console.log("boroughs", boroughs);
    console.log("grades", grades);
    console.log("pass rate", passRate);

    mathAll.forEach(function(data) {
      data.passrate = +data.Level34_percent;  // needed to change this column name
      console.log("Borough:", data.Borough);
      console.log("Grade:", data.Grade);
      console.log("Pass Rate:", data.Level34_percent);
    });
  })
  .catch(function(error) {
    console.log(error);
  });