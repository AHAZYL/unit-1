// Log a message to the console to confirm that the JavaScript file has loaded
console.log("JS loaded");

// Define an array of objects that stores city names and populations
var cityPop = [
    {
        city: 'Madison',
        population: 233209
    },
    {
        city: 'Milwaukee',
        population: 594833
    },
    {
        city: 'Green Bay',
        population: 104057
    },
    {
        city: 'Superior',
        population: 27244
    }
];


// Initialize functions
function initialize(){

    // Create the initial table
    createTable();

    addColumns(cityPop);   // Add an additional column that categorizes cities by size

    addEvents();   // Add mouseover and click event listeners to the table
}

// Function to create an HTML table
function createTable(){

    var table = document.createElement("table");  // Create the table element
    var headerRow = document.createElement("tr");  // Create the header row

    headerRow.insertAdjacentHTML("beforeend", "<th>City</th><th>Population</th>");   // Add column headers for City and Population

    table.appendChild(headerRow);  // Append the header row to the table

    // Loop through the cityPop to create one row per city
    for (var i = 0; i < cityPop.length; i++){

        var row = document.createElement("tr");   // Create a new table row

        // Insert city name and population into table cells
        row.insertAdjacentHTML(
            "beforeend",
            "<td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td>"
        );


        table.appendChild(row);   // Append the completed row to the table
    }

    // Append the completed table to the div with id "mydiv" in index.html
    document.querySelector("#mydiv").appendChild(table);
}

// Function to add a new column indicating city size
function addColumns(cityPop){

    // Select all table rows and loop through them
    document.querySelectorAll("tr").forEach(function(row, i){

        // Add a header cell for the new column in the first row
        if (i === 0){
            row.insertAdjacentHTML("beforeend", "<th>City Size</th>");
        } else {

            var citySize;  // Variable to store city size category

            // Determine city size based on population
            if (cityPop[i-1].population < 100000){
                citySize = "Small";
            } else if (cityPop[i-1].population < 500000){
                citySize = "Medium";
            } else {
                citySize = "Large";
            }

            // Append the city size value to the row
            row.insertAdjacentHTML("beforeend", "<td>" + citySize + "</td>");
        }
    });
}

// Function to add interactive events to the table
function addEvents(){

    // Add a mouseover event that changes the table text color to a random RGB color
    document.querySelector("table").addEventListener("mouseover", function(){

        var color = "rgb(";

        // Generate three random values for red, green, and blue
        for (var i = 0; i < 3; i++){
            var random = Math.round(Math.random() * 255);
            color += random;
            color += (i < 2) ? "," : ")";
        }

        this.style.color = color;    // Apply the random color to the table text
    });

    // Add a click event that displays an alert when the table is clicked
    document.querySelector("table").addEventListener("click", function(){
        alert("Hey, you clicked me!");
    });
}

// Run the initialize function
document.addEventListener("DOMContentLoaded", initialize);