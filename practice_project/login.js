const login = document.getElementById('loginbtn');
login.addEventListener('click', function(e) {
    e.preventDefault();

    const name = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (name === "" || password === "") {
        alert("Login was unsuccessful: All fields are required.");
        return;
    }
   

    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
        let userData = [];
        try {
            userData = JSON.parse(storedUserData);
        } catch (error) {
            console.error("Invalid JSON in localStorage:", error);
            alert("Login was unsuccessful: Unable to retrieve user data.");
            return;
        }

        const user = userData.find(user => user.username === name && user.password === password);
        if (user) {
            alert("Login was a success!");

        
            window.location.href = 'userScreen.html';
        } else {
            alert("Login was unsuccessful: Incorrect name or password.");
        }
    } else {
        alert("Login was unsuccessful: No users found. Please sign up first.");
    }
});