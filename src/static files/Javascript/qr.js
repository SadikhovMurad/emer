const modal = document.getElementById("modal");
const openModalBtns = document.querySelectorAll("#openModal");
const closeModalBtn = document.getElementById("closeModal");

openModalBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add("show");
  });
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});
