window.addEventListener("DOMContentLoaded", function () {
  let burger = document.getElementById("burger");
  let menu = document.querySelector(".header__menuh");

  burger.addEventListener("click", function () {
    menu.classList.add("menu_open");
  });
});
