// Declare variables

let menuBtn = document.getElementById("open-btn"),
  closeBtn = document.getElementById("close-btn"),
  menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.style.setProperty("display", "block");
});

closeBtn.addEventListener("click", () => {
  menu.style.setProperty("display", "none");
});

menuBtn.addEventListener("blur", () => {
  menu.style.setProperty("display", "none");
});
