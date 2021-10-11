window.addEventListener("scroll", function () {
  function fade(direction) {
    let fade = document.querySelectorAll(".fade_" + direction);

    for (let i = 0; i < fade.length; i++) {
      let altura = window.innerHeight / 1.3;
      let distancia = fade[i].getBoundingClientRect().top;

      // console.log(altura);
      // console.log(distancia);

      fade[i].classList.add("transform_" + direction);

      if (distancia <= altura) {
        fade[i].classList.add("aparece");
      } else {
        fade[i].classList.remove("aparece");
      }
    }
  }
  fade("up");
  fade("down");
  fade("right");
  fade("left");
});
