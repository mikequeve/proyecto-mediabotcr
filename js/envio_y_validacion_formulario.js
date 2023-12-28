const d = document;

export default function contactForm() {
  const $form = d.querySelector(".contact-form"),
    $inputs = d.querySelectorAll(".contact-form[required]");
  //console.log($inputs);
  $inputs.forEach((input) => {
    const $span = d.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("contact-form-error", "none");
    input.insertAdjacentElement("afterend", $span);
  });

  d.addEventListener("keyup", (e) => {
    if (e.target.matches(".contact-form [required]")) {
      //capturar en la variable input el elemento en el que se haya desencadenado el evento y su atributo pattern o data-pattern
      let $input = e.target,
        pattern = $input.pattern || $input.dataset.pattern;
      //console.log($input, pattern);

      //Si existe patron asignado y el input.value no está vacío.
      if (pattern && $input.value !== "") {
        let regex = new RegExp(pattern); //regular expression

        //se debe utilizar la expresion exec en las expresiones regulares.
        return !regex.exec($input.value)
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }

      //Si NO existe patron asignado
      if (!pattern) {
        return $input.value === ""
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }
    }
  });

  d.addEventListener("submit", (e) => {
    e.preventDefault();
    const $formBtn = d.querySelector(".form-btn"),
      $response = d.querySelector(".contact-form-response");

    $formBtn.textContent = "Sending...";

    fetch("send_mail.php", {
      method: "POST",
      body: new FormData(e.target),
      mode: "cors", //Cross Origin Resource Sharing (Intercambio de Recursos de Origen Cruzado)
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        console.log(json);
        $formBtn.textContent = "Enviado";
        $response.classList.remove("none");
        $response.innerHTML = `<p>${json.message}</p>`;
        $form.reset();
      })
      .catch((err) => {
        console.log(err);
        let message =
          err.statusText ||
          "Ocurrió un error al enviar el formulario, intenta nuevamente";
        $response.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
      })
      .finally(() =>
        setTimeout(() => {
          $response.classList.add("none");
          $response.innerHTML = "";
        }, 3000)
      );
  });
}
