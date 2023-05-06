let rating = document.getElementById("rating");
let form = document.getElementById("form");
let selectedValue = document.querySelectorAll('input[type=radio]');

for(let i = 0; i < selectedValue.length; i++) {
  selectedValue[i].addEventListener("click", function(){rating.innerHTML = i+1;});
}


function submitRating(e) {
  if(e.preventDefault) e.preventDefault();
  document.getElementById("main-card").style.display = "none";
  document.getElementById("feedback-card").classList.remove("hidden");
  return false;
}

if(form.attachEvent) {
  form.attachEvent("submit", submitRating);
} else {
  form.addEventListener("submit", submitRating);
}