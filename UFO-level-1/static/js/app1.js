// Starter Code
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
    });
};

// Select the submit button
var submit = d3.select("#filter-btn");

//Click event of datetime filter
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




