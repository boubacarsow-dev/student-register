const teacherbtn = document.getElementById("teach");
const studentbtn = document.getElementById("kids");

teacherbtn.addEventListener("click", () => {
    window.location.href = "loginform.html";
});

studentbtn.addEventListener("click", () => {
    window.location.href = "studentform.html";
});

