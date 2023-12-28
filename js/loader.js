export default function loaderAnimation() {
  let $loader = document.getElementById("loader"),
    $percent = document.querySelector("#loader span"),
    $progress = document.querySelector("#loader .progress-bar"),
    count = 4,
    per = 3;
  window.addEventListener("load", function () {
    let loading = setInterval(animate, 50);
    function animate() {
      if (count == 100 || per == 200) {
        document.querySelector("body").classList.add("loaded");
        clearInterval(loading);
      } else {
        per = per + 3;
        count = count + 1;
        $percent.textContent = count + "%";
        $progress.style.width = per + "px";
      }
    }
  });
}

