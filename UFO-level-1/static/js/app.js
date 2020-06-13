// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// Function Build Table
function buildTable(data){
    // Clearing Existing Data
    tbody.html("");
    // For Each To Loop Through
    data.forEach((report) => {
        // Append Table Row to Table Body
        let row = tbody.append("tr");
        // Iterate Through Values
        Object.values(report).forEach((value) => {
            // Append Cell to Row for Each Value
            let cell = row.append("td");
            cell.text(value);
        });
    })
}

// Build Table
buildTable(tableData);


// Create Function
function handleClick(){
    // Prevent Page from Refreshing
    d3.event.preventDefault();
    // Select HTML Input Element & Get Value Property
    let datetime = d3.select("#datetime").property("value");
    // Set New Data Variable
    let filterData = tableData;
    // Check if a Date was Entered
    if(datetime) {
        // Apply Filter to the Table Data
        filterData = filterData.filter((row) => row.datetime === datetime);
    }
    // Build Table with Filtered Data
    buildTable(filterData);
}
// On Function
d3.selectAll("#filter-btn").on("click", handleClick);