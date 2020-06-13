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
        // `Object.values` & `forEach` to Iterate Through Values
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
    // Select HTML Input Element & Get the Value Property
    let datetime = d3.select("#datetime").property("value");
    let city = d3.select("#cityname").property("value");
    let state = d3.select("#statename").property("value");
    let country = d3.select("#countryname").property("value");
    let shape = d3.select("#shapename").property("value");
    // Set New Data Variable
    let filterData = tableData;
    // Check if a Date was Entered
    if(datetime) {
        // Apply Filter to the Table Data to Only Keep Rows Where Value Matches the Filter Value
        filterData = filterData.filter((row) => row.datetime === datetime)
    }
    // Check if a City was Entered
    if(city) {
        // Apply Filter to the Table Data to Only Keep Rows Where Value Matches the Filter Value
        filterData = filterData.filter((row) => row.city === city)
    }
    // Check if a State was Entered
    if(state) {
        // Apply Filter to the Table Data to Only Keep Rows Where Value Matches the Filter Value
        filterData = filterData.filter((row) => row.state === state)
    }
    // Check if a Country was Entered
    if(country) {
        // Apply Filter to the Table Data to Only Keep Rows Where Value Matches the Filter Value
        filterData = filterData.filter((row) => row.country === country)
    }
    // Check if a shape was Entered
    if(shape) {
        // Apply Filter to the Table Data to Only Keep Rows Where Value Matches the Filter Value
        filterData = filterData.filter((row) => row.shape === shape)
    }
    // Check if a Date & City were Entered
    if(datetime && city) {
        // Apply Filter to the Table Data to Only Keep Rows Where Value Matches the Filter Value
        filterData = filterData.filter((row) => row.datetime === datetime)
        filterData = filterData.filter((row) => row.city === city)
    }
    // Check if a Date & State were Entered
    if(datetime && state) {
        // Apply Filter to the Table Data to Only Keep Rows Where Value Matches the Filter Value
        filterData = filterData.filter((row) => row.datetime === datetime)
        filterData = filterData.filter((row) => row.state === state)
    }
    // Check if a Date & Country were Entered
    if(datetime && country) {
        // Apply Filter to the Table Data to Only Keep Rows Where Value Matches the Filter Value
        filterData = filterData.filter((row) => row.datetime === datetime)
        filterData = filterData.filter((row) => row.country === country)
    }
    // Check if a Date & Shape were Entered
    if(datetime && shape) {
        // Apply Filter to the Table Data to Only Keep Rows Where Value Matches the Filter Value
        filterData = filterData.filter((row) => row.datetime === datetime)
        filterData = filterData.filter((row) => row.shape === shape)
    }
    // Check if a City & State were Entered
    if(city && state) {
        // Apply Filter to the Table Data to Only Keep Rows Where Value Matches the Filter Value
        filterData = filterData.filter((row) => row.city === city)
        filterData = filterData.filter((row) => row.state === state)
    }
    // Check if a City & Country were Entered
    if(city && country) {
        // Apply Filter to the Table Data to Only Keep Rows Where Value Matches the Filter Value
        filterData = filterData.filter((row) => row.city === city)
        filterData = filterData.filter((row) => row.country === country)
    }
    // Check if a City & Shape were Entered
    if(city && shape) {
        // Apply Filter to the Table Data to Only Keep Rows Where Value Matches the Filter Value
        filterData = filterData.filter((row) => row.city === city)
        filterData = filterData.filter((row) => row.shape === shape)
    }
    // Check if a State & Country were Entered
    if(state && country) {
        // Apply Filter to the Table Data to Only Keep Rows Where Value Matches the Filter Value
        filterData = filterData.filter((row) => row.state === state)
        filterData = filterData.filter((row) => row.country === country)
    }
    // Check if a State & Shape were Entered
    if(state && shape) {
        // Apply Filter to the Table Data to Only Keep Rows Where Value Matches the Filter Value
        filterData = filterData.filter((row) => row.state === state)
        filterData = filterData.filter((row) => row.shape === shape)
    }
    // Check if a Country & Shape were Entered
    if(country && shape) {
        // Apply Filter to the Table Data to Only Keep Rows Where Value Matches the Filter Value
        filterData = filterData.filter((row) => row.country === country)
        filterData = filterData.filter((row) => row.shape === shape)
    }
    // Check if a Date , City , & State were Entered
    if(datetime && city && state) {
        // Apply Filter to the Table Data to Only Keep Rows Where Value Matches the Filter Value
        filterData = filterData.filter((row) => row.datetime === datetime)
        filterData = filterData.filter((row) => row.city === city)
        filterData = filterData.filter((row) => row.state === state)
    }
    // Check if a Date , City , & Country were Entered
    if(datetime && city && country) {
        // Apply Filter to the Table Data to Only Keep Rows Where Value Matches the Filter Value
        filterData = filterData.filter((row) => row.datetime === datetime)
        filterData = filterData.filter((row) => row.city === city)
        filterData = filterData.filter((row) => row.country === country)
    }
    // Check if a Date , City , & Shape were Entered
    if(datetime && city && shape) {
        // Apply Filter to the Table Data to Only Keep Rows Where Value Matches the Filter Value
        filterData = filterData.filter((row) => row.datetime === datetime)
        filterData = filterData.filter((row) => row.city === city)
        filterData = filterData.filter((row) => row.shape === shape)
    }
    // Check if a Date , State , & Country were Entered
    if(datetime && state && country) {
        // Apply Filter to the Table Data to Only Keep Rows Where Value Matches the Filter Value
        filterData = filterData.filter((row) => row.datetime === datetime)
        filterData = filterData.filter((row) => row.state === state)
        filterData = filterData.filter((row) => row.country === country)
    }
    // Check if a Date , State , & Shape were Entered
    if(datetime && state && shape) {
        // Apply Filter to the Table Data to Only Keep Rows Where Value Matches the Filter Value
        filterData = filterData.filter((row) => row.datetime === datetime)
        filterData = filterData.filter((row) => row.state === state)
        filterData = filterData.filter((row) => row.shape === shape)
    }
    // Check if a Date , Country , & Shape were Entered
    if(datetime && country && shape) {
        // Apply Filter to the Table Data to Only Keep Rows Where Value Matches the Filter Value
        filterData = filterData.filter((row) => row.datetime === datetime)
        filterData = filterData.filter((row) => row.country === country)
        filterData = filterData.filter((row) => row.shape === shape)
    }
    // Check if a City , State , & Country were Entered
    if(city && state && country) {
        // Apply Filter to the Table Data to Only Keep Rows Where Value Matches the Filter Value
        filterData = filterData.filter((row) => row.city === city)
        filterData = filterData.filter((row) => row.state === state)
        filterData = filterData.filter((row) => row.country === country)
    }
    // Check if a City , State , & Shape were Entered
    if(city && state && shape) {
        // Apply Filter to the Table Data to Only Keep Rows Where Value Matches the Filter Value
        filterData = filterData.filter((row) => row.city === city)
        filterData = filterData.filter((row) => row.state === state)
        filterData = filterData.filter((row) => row.shape === shape)
    }
    // Check if a State , Country , & Shape were Entered
    if(state && country && shape) {
        // Apply Filter to the Table Data to Only Keep Rows Where Value Matches the Filter Value
        filterData = filterData.filter((row) => row.state === state)
        filterData = filterData.filter((row) => row.country === country)
        filterData = filterData.filter((row) => row.shape === shape)
    }
    // Check if a Date , City , State , & Country were Entered
    if(datetime && city && state && country) {
        // Apply Filter to the Table Data to Only Keep Rows Where Value Matches the Filter Value
        filterData = filterData.filter((row) => row.datetime === datetime)
        filterData = filterData.filter((row) => row.city === city)
        filterData = filterData.filter((row) => row.state === state)
        filterData = filterData.filter((row) => row.country === country)
    }
    // Check if a Date , City , Country , & Shape were Entered
    if(datetime && city && state && shape) {
        // Apply Filter to the Table Data to Only Keep Rows Where Value Matches the Filter Value
        filterData = filterData.filter((row) => row.datetime === datetime)
        filterData = filterData.filter((row) => row.city === city)
        filterData = filterData.filter((row) => row.state === state)
        filterData = filterData.filter((row) => row.shape === shape)
    }
    // Check if a Date , City , Country , & Shape were Entered
    if(datetime && city && country && shape) {
        // Apply Filter to the Table Data to Only Keep Rows Where Value Matches the Filter Value
        filterData = filterData.filter((row) => row.datetime === datetime)
        filterData = filterData.filter((row) => row.city === city)
        filterData = filterData.filter((row) => row.country === country)
        filterData = filterData.filter((row) => row.shape === shape)
    }
    // Check if a Date , State , Country , & Shape were Entered
    if(datetime && state && country && shape) {
        // Apply Filter to the Table Data to Only Keep Rows Where Value Matches the Filter Value
        filterData = filterData.filter((row) => row.datetime === datetime)
        filterData = filterData.filter((row) => row.state === state)
        filterData = filterData.filter((row) => row.country === country)
        filterData = filterData.filter((row) => row.shape === shape)
    }
    // Check if a City , State , Country , & Shape were Entered
    if(city && state && country && shape) {
        // Apply Filter to the Table Data to Only Keep Rows Where Value Matches the Filter Value
        filterData = filterData.filter((row) => row.city === city)
        filterData = filterData.filter((row) => row.state === state)
        filterData = filterData.filter((row) => row.country === country)
        filterData = filterData.filter((row) => row.shape === shape)
    }
    // Check if All Filters were Entered
    if(datetime && city && state && country && shape) {
        // Apply Filter to the Table Data to Only Keep Rows Where Value Matches the Filter Value
        filterData = filterData.filter((row) => row.datetime === datetime)
        filterData = filterData.filter((row) => row.city === city)
        filterData = filterData.filter((row) => row.state === state)
        filterData = filterData.filter((row) => row.country === country)
        filterData = filterData.filter((row) => row.shape === shape)
    }
    // Build Table with Filtered Data
    buildTable(filterData);
}
// On Function
d3.selectAll("#filter-btn").on("click", handleClick);


