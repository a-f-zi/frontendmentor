const err = document.getElementsByClassName("error");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("submit");

fname.addEventListener("invalid", (e) => {
  err[0].classList.remove("hidden");
  err[1].classList.remove("hidden");
});

fname.addEventListener("input", (e) => {
  err[0].classList.add("hidden");
  err[1].classList.add("hidden");
});

lname.addEventListener("invalid", (e) => {
  err[2].classList.remove("hidden");
  err[3].classList.remove("hidden");
});

lname.addEventListener("input", (e) => {
  err[2].classList.add("hidden");
  err[3].classList.add("hidden");
});

email.addEventListener("invalid", (e) => {
  err[4].classList.remove("hidden");
  err[5].classList.remove("hidden");
  email.placeholder = "email@example/com";
  email.classList.add("placeholder-themeRed");
});

email.addEventListener("input", (e) => {
  err[4].classList.add("hidden");
  err[5].classList.add("hidden");
  email.placeholder = "Email Address";
  email.classList.remove("placeholder-themeRed");
});

password.addEventListener("invalid", (e) => {
  err[6].classList.remove("hidden");
  err[7].classList.remove("hidden");
});

password.addEventListener("input", (e) => {
  err[6].classList.add("hidden");
  err[7].classList.add("hidden");
});

submit.addEventListener("onclick", (e) => {
  e.preventDefault();
});
