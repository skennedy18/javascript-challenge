// from data.js
const tableData = data;

// YOUR CODE HERE!
// Select tbody
var tbody = d3.select("tbody");

// Create function to display data table 
function DataTable(data){
    // Clears table before rendering and appends table
    tbody.text("");
    data.forEach(Row => {console.table(Row);
        let row = tbody.append("tr");

       console.table(Object.values(Row));
       Object.values(Row).forEach((val) => {
           let cell = row.append("td");
           cell.text(val);
       });
    });
}

// Event handeler call this function to filter the data
function EventHandler(){
    d3.event.preventrefresh() 
    
    //Grabs input value and filters data
    let date = d3.select("#datetime").property("value");
    let filtertableData = tableData;

    // Filters the data down when the datetime column matches the filtered value
    if (date){
        filtertableData = filtertableData.filter((row) => row.datetime === date);
            }

    DataTable(filtertableData);
}

d3.selectAll("#filter-btn").on("click", EventHandler);
DataTable(tableData);