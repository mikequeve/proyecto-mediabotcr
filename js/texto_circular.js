export default function circularText() {
  const $text = document.querySelector(".text-btn p");
  $text.innerHTML = $text.innerText
    .split("")
    .map(
      (char, i) =>
        `<span style="transform: rotate(${i * 8.6}deg)">${char}</span>`
    )
    .join("");
}
