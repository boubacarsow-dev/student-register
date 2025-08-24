const addbtn = document.getElementById("add");
const table = document.getElementById("studentTable");


addbtn.addEventListener("click", () => {
const name = document.getElementById("student").value;
const course = document.getElementById("course").value;
const instructor = document.getElementById("instructor").value;
const grade = document.getElementById("grade").value;

if (course === "" || name === "" || instructor === "" || grade === "") {
    alert("All fields are required.");
    return; 
}
alert("Student added successfully!");

const row = document.createElement("tr");

[name, course, instructor, grade].forEach(text => {
    const cell = document.createElement("td");
    cell.textContent = text;
    cell.style.border = "1px solid black";
    cell.style.padding = "8px";     
    cell.style.textAlign = "center";
    cell.style.fontFamily = "Arial, sans-serif";
    cell.style.fontSize = "14px";
    cell.style.backgroundColor = "#f9f9f9";
    
    row.appendChild(cell);
      
});

table.appendChild(row);

});






