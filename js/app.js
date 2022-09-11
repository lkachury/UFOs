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