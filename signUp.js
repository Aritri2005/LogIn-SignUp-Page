document.getElementById("signUpForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let contactNo = document.getElementById("contactNo").value.trim();
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;

    let nameError = document.getElementById("name-error");
    let emailError = document.getElementById("email-error");
    let contactError = document.getElementById("contact-error");
    let passwordError = document.getElementById("password1-error");
    let confirmPasswordError = document.getElementById("password2-error");

    let isValid = true;

    if (username === "") {
        nameError.textContent = "Username is required.";
        nameError.style.color = "red";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Enter a valid email.";
        emailError.style.color = "red";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    contactNo = contactNo.replace(/\s+/g, ""); 
    let contactPattern = /^\+91[6-9]\d{9}$/;
    if (!contactPattern.test(contactNo)) {
        contactError.textContent = "Enter a valid Indian number (e.g., +91 9876543210).";
        contactError.style.color = "red";
        isValid = false;
    } else {
        contactError.textContent = "";
    }
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password1)) {
        passwordError.textContent = "Must include uppercase, lowercase, number & special character (8+ chars).";
        passwordError.style.color = "red";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }


    if (password2 !== password1) {
        confirmPasswordError.textContent = "Passwords do not match.";
        confirmPasswordError.style.color = "red";
        isValid = false;
    } else {
        confirmPasswordError.textContent = "";
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let emailExists = users.some(user => user.email === email);
    let usernameExists = users.some(user => user.username === username);

    if (emailExists) {
        emailError.textContent = "This email is already registered.";
        emailError.style.color = "red";
        isValid = false;
    }

    if (usernameExists) {
        nameError.textContent = "This username is already taken.";
        nameError.style.color = "red";
        isValid = false;
    }

    if (isValid) {
        users.push({ username, email, contactNo, password: password1 });
        localStorage.setItem("users", JSON.stringify(users));

        alert("Sign Up Successful! Redirecting to login...");
        window.location.href = "login.html"; 
    }
});
