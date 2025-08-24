// const loginuser = sessionStorage.getItem("loginuser");

// if (loginuser) {

//     const user = JSON.parse(loginuser);
//     document.getElementById('welcomeMessage').textContent = "Welcome, " + user.username +"!";

// }else {
//     window.location.href = "loginform.html";
// }

const welcomeMessage = document.getElementById("welcomeMessage");
const username = localStorage.getItem("userData") || "Guest";
welcomeMessage.textContent = `Welcome, ${userData.username}!`;

