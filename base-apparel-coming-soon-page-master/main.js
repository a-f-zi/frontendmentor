let email = document.getElementById("email");
let errorIcon = document.getElementById("error");
let errorText = document.getElementById("error-text");
let button = document.querySelector("button");
let form = document.querySelector("form");
let message = document.getElementById("message");
let input = document.querySelector("input");

email.oninvalid = function () {
  errorIcon.style.display = "flex";
  errorText.style.display = "block";
  input.style.borderColor = "hsl(0, 93%, 68%)";
};

email.oninput = function () {
  errorIcon.style.display = "none";
  errorText.style.display = "none";
  input.style.borderColor = "hsl(0, 36%, 70%)";
};

form.onsubmit = (event) => {
  event.preventDefault();
  message.style.display = "block";
  message.innerHTML = "Email address submited";
  form.style.display = "none";
};
