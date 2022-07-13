// * Nabvar
const nav = document.querySelector(".nav");
const navOpenBtn = document.querySelector(".navbar--open--icon");
const navCloseBtn = document.querySelector(".navbar--close--icon");
const navLinks = document.querySelectorAll(".nav__link");

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("open");
});

navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("open");
});
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

// * Swiper Js
var swiper = new Swiper(".hero-swiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
  loop: true,
  // autoplay: {
  //   delay: 2000,
  //   disableOnInteraction: false,
  // },
});
