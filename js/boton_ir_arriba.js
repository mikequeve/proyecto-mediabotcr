export default function scrollTopBtn(btn) {
  let $scrollBtn = document.querySelector(btn);
  window.addEventListener("scroll", (e) => { 
    let scrollTop = window.scrollY;
    if (scrollTop > 600) {
      $scrollBtn.classList.remove("hidden");
    } else {
      $scrollBtn.classList.add("hidden");
    };
  });

  document.addEventListener("click", (e) => {
    if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
      window.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    };
  });
}