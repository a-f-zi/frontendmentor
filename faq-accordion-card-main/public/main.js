let tp = document.getElementsByClassName("top");
let bt = document.getElementsByClassName("bottom");
let img = document.getElementsByClassName("img");

for (let i = 0; i < tp.length; i++) {
  tp[i].addEventListener("click", () => {
    bt[i].classList.toggle("hidden");
    tp[i].classList.toggle("font-bold");
    img[i].classList.toggle("rotate-180");
  });
}
