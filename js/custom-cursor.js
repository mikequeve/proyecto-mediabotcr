export default function customCursor() {
  const $cursor = document.querySelector(".custom-cursor");

  document.addEventListener("mousemove", (e) => {
    let x = e.clientX,
      y = e.clientY;
    $cursor.style.top = y + "px";
    $cursor.style.left = x + "px";
    $cursor.style.display = "block";
  });

  document.addEventListener("mouseout", () => {
    $cursor.style.display = "none";
  });
}
