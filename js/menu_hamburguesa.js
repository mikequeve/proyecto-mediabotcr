export default function hamburguerMenu(menuList, menuLink, menuBtn) {
  document.addEventListener('click', (e) => {
    if (e.target.matches(menuBtn) || e.target.matches(`${menuBtn} *`)) {
      document.querySelector(menuList).classList.toggle("active");
      document.querySelector(menuBtn).classList.toggle("is-active");
    }
    if (e.target.matches(menuLink)) {
      document.querySelector(menuList).classList.remove("active");
      document.querySelector(menuBtn).classList.remove("is-active");
    }
  });

  window.addEventListener("scroll", (e) => {
    const $header = document.querySelector(".header");
    $header.classList.toggle("sticky", window.scrollY > 80);
  });
}