let loginForm = document.querySelector("#loginForm");
// let input = document.querySelector("#username");
let usernameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");

let usernameInputValue = usernameInput.value;
let passwordInputBValue = passwordInput.value;

usernameInputValue.text("Fred");
usernameInputValue.innerHTML("<h1></h1>");

console.log(usernameInputValue);

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (usernameInputValue === "") {
    alert("No username value");
  }

  if (passwordInputBValue === "") {
    alert("No password value");
  }
});
