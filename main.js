// ждём, пока всё загрузится
document.addEventListener("DOMContentLoaded", function () {
  const animated = document.querySelectorAll(".fade-in");

  function showOnScroll() {
    const trigger = window.innerHeight * 0.9;

    animated.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < trigger) {
        el.classList.add("show");
      }
    });
  }

  // показать то, что уже в зоне видимости
  showOnScroll();

  window.addEventListener("scroll", showOnScroll);
});
