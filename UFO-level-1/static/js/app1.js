// Starter Code
console.log("fff")

var tableData = data;
var tbody  = d3.select("tbody");
// console.log(tableData);
// Display the entire dataset as default
tableData.forEach((report) => {
    console.log(report);
    var row = tbody.append('tr');

    Object.defineProperties(report).forEach(([key, value])=> {
        console.log(key, value);
        var cell = row.append('td').text(report);
        cell.text(value);
    });
});

// Select the submit button
var submit = d3.select("#filter-btn");

//Click event of datetime filter
button.on("click", function(event){
     d3.select("tbody").html("");
     d3.event.preventDefault();
//Get the value property of the input element
var dateTime = d3.select("#datetime").property("value");
console.log(filteredData);

// Display the filtereddataset
filteredDataset.forEach((report) => {
    var row = tbody.append('tr');

    Object.defineProperties(report).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td').text(report);
        cell.text(value);
    });
});


});
