const d = document;

export default function scrollSpy() {
  const $sections = d.querySelectorAll("section[data-scroll-spy]");
  const cb = (entries) => { //cb = callback que recibe la funcion IntersectionObserver
    //console.log(entries);
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      if (entry.isIntersecting) {
        d.querySelector(`a[data-scroll-spy][href="#${id}"`).classList.add(
          "is-active"
        );
      } else {
        d.querySelector(`a[data-scroll-spy][href="#${id}"`).classList.remove(
          "is-active"
        );
      }
    });
  };  
  const observer = new IntersectionObserver(cb, {
    threshold: [0.5, 0.35] //cuando el contenido tenga el 20% visible. va de 0 a 1.
  });

  $sections.forEach(el => observer.observe(el));
}
