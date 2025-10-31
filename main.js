// показать блоки при скролле
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".fade-in");

  const showOnScroll = () => {
    const trigger = window.innerHeight * 0.9;
    items.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < trigger) {
        el.classList.add("show");
      }
    });
  };

  showOnScroll();
  window.addEventListener("scroll", showOnScroll);

  // плавная прокрутка по меню
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href").substring(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
