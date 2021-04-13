// Starter Code
<<<<<<< HEAD
const tableData = data;
//var tableData = data;
const tbody = d3.select("tbody");
// console.log(tableData);
// Display the entire dataset as default
function buildData(data) {
    tbody.html("");
    data.forEach((report) => {
        console.log(report);
        const row = tbody.append('tr');


        Object.values(report).forEach((value) => {
        
            let cell = row.append('td');
              cell.text(value);
        });
=======

var tableData = data;
var tbody  = d3.select("tbody");
 console.log(tableData);
// Display the entire dataset as default
tableData.forEach((report) => {
    console.log(report);
    var row = tbody.append('tr');

    Object.entries(report).forEach(([key, value])=> {
        console.log(key, value);
        var cell = row.append('td').text(report);
        cell.text(value);
>>>>>>> 5f4020ee25d39b8cfe9b85a403d83c7ca50befd7
    });
};

// Select the submit button
var submit = d3.select("#filter-btn");

//Click event of datetime filter
<<<<<<< HEAD
function buttonClick() {
    // button.on("click", function(event){
    //d3.select("tbody").html("");
    //d3.event.preventDefault();
    //Get the value property of the input element
    var dateTime = d3.select("#datetime").property("value");
    let filteredData = tableData;
    console.log(filteredData);

    // Display the filtereddataset
    // filteredDataset.forEach((report) => {
        //var row = tbody.append('tr');

        //Object.defineProperties(report).forEach(([key, value]) => {
            //console.log(key, value);
            //var cell = row.append('td').text(report);
            //cell.text(value);
    if (dateTime) {
        filteredData= filteredData.filter(row => row.datetime === dateTime);
          };
    buildData(filteredData);         
        }
        
d3.selectAll("#filter-btn").on("click",buttonClick);
buildData(tableData);


=======
button on click="myFunction()";
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
>>>>>>> 5f4020ee25d39b8cfe9b85a403d83c7ca50befd7


