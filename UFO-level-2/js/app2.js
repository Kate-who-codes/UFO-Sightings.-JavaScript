// From given starter code data.js
var tableData = data;

//Get a reference to the table body
var tbody = d3.select("tbody");

//Display the entire dataset as default

tableData.forEach((report) => {
    console.log(report);
    var row = tbody.append('tr');

    Object.entries(report).forEach(([key, value]) => {
        console.log(report);
        var cell = tbody.append('td');
        cell.text(value);   
    });
});

// Select the submit button in the html file
var clickHandler = d3.select("#filter-btn");

// Click event
clickHandler.on("click", function() {
  
// Remove existing table
d3.slect("tbody").html("");

// Prevent page from refreshing
d3.eventpreventDefault();

//Get the value property of the input elements and set all text to lowercase
var dateTime = d3.select("#dateTime").property("value");

var selectedCountry = d3.select("#country").property("value").toLowerCase();


var selectedState = d3.select("#state").property("value").toLowerCase();

var selectedCity = d3.select("#city").property("value").toLowerCase();

var selectedShape = d3.select("#shape").property("value").toLowerCase();

// Set tableData as filteredData
filteredData= tableData;

if (dateTime) {
    filteredData = filteredData.filter(record => record.datetime === dateTime);
}
if (selectedCountry) {
    filteredData = filtredData.filter(record => record.country === selectedCountry);
}
if (selectedCity) {
    filteredData = filteredData.filter(record => record.city === selectedCity);
}
if (slectedShape) {
    filteredData = filtered.Data.filter(record => record.shape === selectedShape);
}   

// Display the filtered dataset
filteredData.forEach((report) => {
    var row = tbody.append('tr');

    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        var cell =row.append('td');
        cell.text(value);
    });
});
});
