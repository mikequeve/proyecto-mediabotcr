const d = document;
export default function translateBtn() {
  let $translateBtn = d.getElementById('translate-btn');

  const textsToChange = d.querySelectorAll('[data-section]');
  //console.log(textsToChange);

  const changeLanguaje = async (languaje) => {
    const resp = await fetch(`./languaje/${languaje}.json`);
    const texts = await resp.json();
    for (const textToChange of textsToChange) {
      //console.log(textToChange);
      const $section = textToChange.dataset.section,
        $value = textToChange.dataset.value;
      //console.log($section, $value);
      textToChange.innerHTML = texts[$section][$value];
    }
  };

  $translateBtn.addEventListener('click', (e) => {
    changeLanguaje(e.target.parentElement.dataset.languaje);
  });
}
