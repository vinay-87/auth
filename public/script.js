function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var error = document.getElementById("error");

    if (username.trim() === "" || password.trim() === "") {
        error.textContent = "Username and password are required.";
        return false;
    } else if (password.length < 6) {
        error.textContent = "Password must be at least 6 characters.";
        return false;
    }
    return true;
}
