const x = document.getElementById('addRow');
const y = document.getElementById('servicelist');
let idx = 0;

// Create table if it doesn't exist
let table = document.createElement('table');
table.id = 'serviceTable';
let thead = document.createElement('thead');
let headerRow = document.createElement('tr');
headerRow.innerHTML = `
    <th>From</th>
    <th>To</th>
    <th>Designation</th>
    <th>Status</th>
    <th>Annual Salary</th>
    <th>SG-Step "00-0"</th>
    <th>STN./Place Assignment</th>
    <th>L/V ABS W/out Pay</th>
    <th>Remarks</th>
`;
thead.appendChild(headerRow);
table.appendChild(thead);
let tbody = document.createElement('tbody');
table.appendChild(tbody);

// Only append table once
if (!y.querySelector('#serviceTable')) {
    y.appendChild(table);
}

x.addEventListener('click', () => {
    idx++;
    let row = document.createElement('tr');
    row.innerHTML = `
        <td><input type="date" id="from${idx}" placeholder="from" required></td>
        <td><input type="date" id="to${idx}" placeholder="to" required></td>
        <td><input type="text" id="field1_${idx}" placeholder="" required></td>
        <td><input type="text" id="field2_${idx}" placeholder="" required></td>
        <td><input type="text" id="field3_${idx}" placeholder="" required></td>
        <td><input type="text" id="field4_${idx}" placeholder="" required></td>
        <td><input type="text" id="field5_${idx}" placeholder="" required></td>
        <td><input type="text" id="field6_${idx}" placeholder="" required></td>
        <td><input type="text" id="field7_${idx}" placeholder="" required></td>
        <td><button type="button" class="delete-row">Delete</button></td>
    `;
    // Add delete event
    row.querySelector('.delete-row').addEventListener('click', function() {
        row.remove();
    });
    tbody.appendChild(row);
});