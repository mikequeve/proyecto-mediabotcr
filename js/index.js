import accordionEffect from "./efecto_acordion.js";
import circularText from "./texto_circular.js";
import hamburguerMenu from "./menu_hamburguesa.js";
import contactForm from "./envio_y_validacion_formulario.js";
import scrollSpy from "./scroll_espia.js";
import scrollTopBtn from "./boton_ir_arriba.js";
import loaderAnimation from "./loader.js";
import customCursor from "./custom-cursor.js";
import translateBtn from "./translate-button.js";

document.addEventListener("DOMContentLoaded", (e) => {
  loaderAnimation();

  hamburguerMenu(".menu-list", ".menu-link", ".menu-btn");

  translateBtn();

  circularText();

  accordionEffect();

  contactForm();

  //scrollSpy();

  scrollTopBtn(".scroll-btn");

  customCursor();
});
