document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    // Prevent form submission
    event.preventDefault();

    // Get input values
    let username = document.getElementById("username");
    let password = document.getElementById("password");

    let usernameValue = username.value;
    let passwordValue = password.value;

    // Validate input
    let usernameError = document.getElementById("usernameError");
    let passwordError = document.getElementById("passwordError");

    if (usernameValue === "") {
      // Display username error message
      usernameError.style.display = "block";
      usernameError.style.color = "red";
    } else {
      // Hide username error message
      usernameError.style.display = "none";
    }

    if (passwordValue === "") {
      // Display password error message
      passwordError.style.display = "block";
      passwordError.style.color = "red";
    } else {
      // Hide password error message
      passwordError.style.display = "none";
    }

    // Submit the form if both fields are filled
    if (usernameValue !== "" && passwordValue !== "") {
      this.submit(); // Submit the form
    }
  });
