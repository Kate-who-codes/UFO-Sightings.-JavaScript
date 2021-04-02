// Starter Code
var tableData = data;
var tbody  = d3.select("tbody");

// Display the entire dataset as default
tableData.forEach((report) => {
    console.log(report);
    var row = tbody.append('tr');

    Object.defineProperties(report).forEach(([key, value])=> {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

// Select the submit button
var submit = d3.slect("filter-btn");

//Click event of datetime filter
submit.on("click", function(){
     d3.select("tbody").html("");
     d3.event.preventDefault();
//Get the value property of the input element
var dateTime = d3.select("#datetime").property("value");
console.log(filterData);

// Display the filtereddataset
filteredDtaset.forEach((report) => {
    var row = tbody.append('tr');

    Object.defineProperties(report).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

});