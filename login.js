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
document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  const formData = new URLSearchParams();
  formData.append('username', username);
  formData.append('password', password);

  try {
    const response = await fetch('login.php', {
      method: 'POST',
      body: formData,
    });

    const text = await response.text();

    if (response.ok) {
      alert(text);  // show backend message (you can customize UI instead)
      if (text.includes('successful')) {
        // Redirect or do something on successful login
        window.location.href = 'dashboard.html';  // change this as needed
      }
    } else {
      alert('Error: ' + text);
    }
  } catch (error) {
    alert('Network error: ' + error.message);
  }
});
