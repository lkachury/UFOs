// Imprt the data from data.js
const tableData = data;

// Reference the HTML table using D3
var tbody = d3.select("tbody");

// Create a new function 
function buildTable(data) {
    // Clear the existing data to create a fresh table in which to insert data
    tbody.html("");
    // Add the forEach Function
    data.forEach((dataRow) => {
        // Create a variable that will append a row to the table body
        let row = tbody.append("tr");
        // Loop Through Data Rows
        Object.values(dataRow).forEach((val) => {
            // Append each value of the object to a cell in the table
            let cell = row.append("td");
            // Add the values
            cell.text(val);
        });
    });
}

// Create a function to handle what to do after an input is given
function handleClick() {
    // Create a couple of variables to hold the date data
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // Use the "If" Statement to check if a date was entered and filter the data using that date
    if (date) {
        // Apply `filter` to the table data to only keep the rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Build the Filtered Table 
    buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the final table when the page loads
buildTable(tableData);