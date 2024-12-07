window.addEventListener("scroll", function () {
  const elements = document.querySelectorAll(".fade-in-bottom");
  elements.forEach((el) => {
    if (isElementInView(el)) {
      el.classList.add("visible");
    }
  });
});

function checkElementsVisibility() {
  const elements = document.querySelectorAll(".fade-in-bottom");
  elements.forEach((el) => {
    if (isElementInView(el)) {
      el.classList.add("visible");
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const heroElement = document.querySelector(".hero");
  if (heroElement) {
    heroElement.classList.add("visible");
  }

  checkElementsVisibility();
});

function isElementInView(el) {
  const rect = el.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}
