"using strict";

const menuImages = ["./images/icon-hamburger.svg", "./images/close.png"];

const hamburgerIcon = document.querySelector(".hamburger__icon__image");
const hamburger__menu = document.querySelector(".hamburger__menu");
let counter = 0;

hamburgerIcon.addEventListener("click", function () {
  hamburger__menu.classList.toggle("hamburger__menu");
  if (counter % 2 === 0) {
    hamburgerIcon.src = menuImages[1];
    hamburgerIcon.style.width = "20px";
    counter++;
  } else {
    hamburgerIcon.src = menuImages[0];
    counter++;
  }
});
