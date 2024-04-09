document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const error= document.getElementById("error");

    if (username === "" || password === "") {
        error.textContent = "Username and password are required.";
        return;
    }
 
    if (password.length < 8) {
        error.textContent = "Password must be at least 8 characters long.";
        return; 
    }

    // Clear any previous error message
    error.textContent = "";
    this.submit();
});