const d = document;

export default function accordionEffect() {
  let $accordions = d.querySelectorAll(".accordion");
  $accordions.forEach((accord) => { 
    accord.addEventListener('click', (e) => { 
      accord.classList.toggle("active");
    });
  });

}