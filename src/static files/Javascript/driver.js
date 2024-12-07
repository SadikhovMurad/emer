const inputDivs = document.querySelectorAll(".inputStyle");
let isColor = false;

inputDivs.forEach((div) => {
  div.addEventListener("click", () => {
    if (!isColor) {
      div.classList.add("clickedInput");
      isColor = true;
    } else {
      div.classList.remove("clickedInput");
      isColor = false;
    }
  });
});
