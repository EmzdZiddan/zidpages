gsap.to(".orn1", {
  duration: 2,
  repeat:Infinity,
  rotation:360,
  scale:2,
});


let tl = gsap.timeline();

tl.from(".hero-text > *", {
  duration: 1,
  opacity: 0,
  y: 30,
  stagger: 0.2
})
.from(".zid img", {   // foto masuk setelah teks
  duration: 1.2,
  opacity: 0,
  x: 40
}, "-=2"); // mulai 0.5 detik sebelum animasi teks selesai


document.addEventListener("DOMContentLoaded", function () {
  new TypeIt("#name", {
    speed:160,
    loop:true,
  }).go();
});
