let text = document.getElementById("error");
let input = document.querySelector("input[type='email']");
let submit = document.querySelector("input[type='submit']");
let heading = document.querySelector("h1");
let form = document.querySelector("form");
let paragraph = document.querySelector(".content > p");

input.addEventListener('invalid', (event) => {
  text.innerHTML = "Please provide a valid email address";
});

function logSubmit(event) {
  paragraph.innerHTML = "Thank you for subscribing";
  let x = input.value;
  heading.innerHTML = x;
  form.style.display = "none";
  event.preventDefault();
}

form.addEventListener("submit", logSubmit);

console.log(form);
console.log(paragraph);