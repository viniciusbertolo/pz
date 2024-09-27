const loader = ".loader",
      loaderCounter = $(".loader__container__counter"),
      loaderLayer = $(".loader__layer");

// Timer
let counter = 0;
const loaderTimer = setInterval(function() {
  counter++;
  const tl = anime.timeline();
  tl.add({
    targets: ".loader__layer",
    duration: 0,
    width: counter + "%"
  });
  if(counter == 100){
  clearInterval(loaderTimer);
    tl.add({
      targets: [".loader", ".loader__layer", ".loader__container"],
      duration: 700,
      visibility: "hidden",
      translateY: "-100%",
      easing: 'easeInExpo',
      delay: 300
    });
  }
  loaderCounter.html(counter + '%');
  // loaderLayer.css({width: counter + "%"});
}, 15);