document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the input values
    let newUsername = document.getElementById("newUsername").value;
    let newPassword = document.getElementById("newPassword").value;

    // Basic validation
    if (newUsername.trim() !== "" && newPassword.trim() !== "") {
        alert("Sign-up successful! Redirecting to home page...");
        window.location.href = "home.html";  // Redirect to home page
    } else {
        alert("Please enter a valid username and password.");
    }
});
