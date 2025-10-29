let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".menu");
let menu_btn_close = document.querySelector(".menu_btn_close");
hamburger.addEventListener("click", () => {
  menu.classList.add("menu_active");
});
menu_btn_close.addEventListener("click", () => {
  menu.classList.remove("menu_active");
});
