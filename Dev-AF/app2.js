function filterYears(testdata) {
    return testdata.Year = 2017;
}

d3.csv("passratebyboroughbyyear.csv")
    .then(function (eladata) {
        console.log(eladata);

        // Grab borough and percentpass from csvdata
        var amount = eladata.length;
        var borough = eladata.map(data => data.Borough);
        var percentpass = eladata.map(data => data.percentpass);
        var eladata2017 = eladata.filter(filterYears);

        // Check to make sure your are filtering your movies.
        console.log(eladata2017);


        console.log(amount);
        console.log(borough);
        console.log(percentpass);

        var trace1 = {
            x: borough,
            y: percentpass,
            type: "bar"
        };
        var data = [trace1];

        // NOTE: xaxis & yaxis
        var layout = {
            title: "ELA Pass Rate 2017 by Borough",
            xaxis: { title: "Borough" },
            yaxis: { title: "% Pass" }
        };

        Plotly.newPlot("map", data, layout);

    });