// swiper
let swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  // slidesPerView: 1,
  // slidePerGroup: 3,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

// nav
// burger
let burger = document.querySelector('.header__burger');
let nav = document.querySelector('.header__nav');
let navLinks = document.querySelectorAll('.nav__link');

burger.addEventListener('click', function() {
  burger.classList.toggle('header__burger--active');

  nav.classList.toggle('header__nav--active');

  // document.body.classList.toggle('stop-scroll');
})

navLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('header__burger--active');

    nav.classList.remove('header__nav--active');

    // document.body.classList.remove('stop-scroll');
  })
})

// search

let btn = document.querySelector('.header__menu-btn');
let search = document.querySelector('.header__search');
let searchClosed = document.querySelector('.header__closed');

btn.addEventListener('click', function () {
  search.classList.add('header__search--active');

  btn.classList.add('header__button--active');

  // document.body.classList.toggle('stop-scroll');
})

searchClosed.addEventListener('click', function () {
  search.classList.remove('header__search--active');

  btn.classList.remove('header__button--active');

  // document.body.classList.remove('stop-scroll');
})

// tabs

let tabsBtn = document.querySelectorAll('.how-work__steps-item-link');
let tabsItem = document.querySelectorAll('.how__step');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('how__item--active') });
    e.currentTarget.classList.add('how__item--active');

    tabsItem.forEach(function (element) { element.classList.remove('how__step--active') });

    document.querySelector(`[data-target="${path}"]`).classList.add('how__step--active');
  });
})

// accordion

new Accordion('.accordion-container');
