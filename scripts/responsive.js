const button = document.querySelector(".paty");
const menu = document.querySelector(".index__header__navbar");
console.log({ menu });
button.addEventListener("click", () => {
  console.log("uwu");
  menu.classList.toggle("hidden");
});
