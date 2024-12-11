const buttonEl = document.getElementById("show");
const pEl = document.getElementById("p1");

buttonEl.addEventListener("click", () => {
  pEl.classList.toggle("hidden");
  buttonEl.textContent =
    buttonEl.textContent == "Masquer l'élément"
      ? "Afficher l'élément"
      : "Masquer l'élément";
});
