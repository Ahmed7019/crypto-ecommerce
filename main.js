// Declare variables

let menuBtn = document.getElementById("open-btn"),
  closeBtn = document.getElementById("close-btn"),
  menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.style.setProperty("display", "block");
  menu.style.setProperty("animation", "trasopacity .5s forwards");
});

closeBtn.addEventListener("click", () => {
  menu.style.setProperty("display", "none");
  menu.style.setProperty("transition", "all 1s");
});

// menuBtn.addEventListener("blur", () => {
//   menu.style.setProperty("display", "none");
// });
