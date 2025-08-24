const signbtn = document.getElementById('signupbtn');
signbtn.addEventListener('click', function(e) {
    e.preventDefault();
    


    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (username === "" || email === "" || password === "") {
        alert("Sign up was unsuccessful: All fields are required.");
        return;
    }
    if (!email.includes("@")) {
        alert("Sign up was unsuccessful: Invalid email format.");
        return;
    }

    let userData = [];
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
        try {
            userData = JSON.parse(storedUserData);
        } catch (error) {
            console.error("Invalid JSON in localStorage:", error);
            userData = [];
        }
    }
    

    const user = {
            username: username,
            email: email,
            password: password
        };  


        userData.push(user);

    localStorage.setItem("userData", JSON.stringify(userData));
        alert("Sign up was a success!");
        window.location.href = 'loginform.html';

 

});

// You can add more functionality as needed
