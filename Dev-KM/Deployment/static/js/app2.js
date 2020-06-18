

d3.csv("passratebyboroughbyyear.csv")
    .then(function (eladata) {
        console.log(eladata);

        // Grab borough and percentpass from csvdata
        var amount = eladata.length;
        var borough = eladata.map(data => data.Borough);
        var percentpass = eladata.map(data => data.percentpass);
        var year = eladata.map(data => data.Year);
        var number_tested =eladata.map(data => data.Number_Tested);

        // Check to make sure your are filtering your movies.
        
        console.log(amount);
        console.log(borough);
        console.log(percentpass);
        console.log(year);
        console.log(number_tested);

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

        Plotly.newPlot("bar1", data, layout);

        var trace2 = {
            x: borough,
            y: number_tested,
            type: 'bar'
        };
        var data2 = [trace2];

        var layout2 = {
            title: "Number of Students Tested in 2017",
            xaxis: { title: "Borough" },
            yaxis: { title: "Number Tested" }
        };
        
        Plotly.newPlot("bar2", data2, layout2)


    });