function register() {
    let num = document.getElementById("num").value;
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let table = document.getElementById("table0");
    let row = table.insertRow(-1);
    
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    cell0.innerHTML = row.rowIndex;
    cell1.innerHTML = num;
    cell2.innerHTML = name;
    cell3.innerHTML = surname;
}
