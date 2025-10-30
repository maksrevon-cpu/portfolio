// анимация появления при скролле
const observers = document.querySelectorAll('.fade-in');

const onScroll = () => {
  const triggerBottom = window.innerHeight * 0.9;
  observers.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add('show');
    }
  });
};

window.addEventListener('scroll', onScroll);
window.addEventListener('load', onScroll);

// мобильное меню (если захочешь)
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

if (burger && menu) {
  burger.addEventListener('click', () => {
    menu.classList.toggle('open');
  });
}
