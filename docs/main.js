gsap.from(".hero-text", {
  duration:  2,
  scale:1,
  opacity:0,
});

gsap.to(".orn1", {
  duration: 2,
  repeat:Infinity,
  rotation:360,
  scale:2,
});


document.addEventListener("DOMContentLoaded", function () {
  new TypeIt("#name", {
    speed:160,
    loop:true,
  }).go();
});
