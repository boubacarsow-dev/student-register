const logoutbtn = document.getElementById("logout");
logoutbtn.addEventListener("click", () => { 
    sessionStorage.removeItem("loginuser");
    window.location.href = "index.html";
});