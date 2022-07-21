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
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});
var swiper = new Swiper(".applied-swiper", {
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
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});
