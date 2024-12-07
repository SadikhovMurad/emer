"use strict";

const formore = document.getElementById("forMoreButton");
const cards = document.getElementById("cardSection");

formore.addEventListener("click", function () {
  if (formore.textContent == "For More") {
    cards.style.height = "auto";
    formore.textContent = "Close";
  } else if (formore.textContent == "Close") {
    cards.style.height = "20vw";
    cards.style.transitionDuration = "0.4s";
    formore.textContent = "For More";
  }
});
