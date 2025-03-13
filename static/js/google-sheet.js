document.addEventListener("DOMContentLoaded", function() {
    getData();
});

const API_KEY = "AIzaSyCwqUsaXTnXhDGQg5hFWJfqPjvub7unvUw";
const SPREADSHEET_ID = "1qh29_AtmidZRa0msawB6j1t0rURoBKVQmavW0AXz6wY";

function getData() {
    const RANGE = "Sheet1!A2:C";
    const URL = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`;

    fetch(URL)
    .then(response => response.json())
    .then(data => {
        const tableBody = document.querySelector("#dataTable tbody");
        tableBody.innerHTML = "";
        let i = 1;

        if (data.values && data.values.length > 0) {
            data.values.forEach(row => {
                i++;
                if (row[1] == '0') {
                    const tr = document.createElement("tr");
                    tr.innerHTML = `
                        <td>${row[0]}</td>
                        <td>
                            <button onclick='completeTask(${i})'>Complete</button>
                            <button onclick='removeTask(${i})'>Remove</button>
                        </td>
                    `;
                    tableBody.appendChild(tr);
                }
            });
        } else {
            tableBody.innerHTML = "<tr><td colspan='2'>No data found</td></tr>";
        }
    })
    .catch(error => console.error("Error fetching data:", error));
}

function completeTask(row) {
    const RANGE = `Sheet1!B${row}3`;
    const URL = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`;

    const updatedValue = {
        values: [
            ["1"]
        ]
    };
    
    fetch(URL, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedValue)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Row updated successfully", data);
    })
    .catch(error => console.error("Error updating row:", error));
}