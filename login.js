document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent actual form submission

    // Get the input values
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Check if fields are not empty (you can add real authentication here)
    if (username.trim() !== "" && password.trim() !== "") {
        alert("Login successful! Redirecting to home page...");
        window.location.href = "home.html";  // Redirect to home page
    } else {
        alert("Please enter a valid username and password.");
    }
});
