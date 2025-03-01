document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let enteredUsername = document.getElementById("username").value.trim();
    let enteredPassword = document.getElementById("password").value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let validUser = users.find(user => user.username === enteredUsername && user.password === enteredPassword);

    if (validUser) {
        alert("Login successful!");
        localStorage.setItem("loggedInUser", JSON.stringify(validUser)); 
        window.location.href = "homePage.html"; 
    } else {
        alert("Invalid username or password. Please try again.");

    }
});
