import { createNoise2D } from '/node_modules/simplex-noise/dist/esm/simplex-noise.js';

function animetion1(){

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const content = document.querySelector('#content');

const noise2D = createNoise2D();

for (let i = 0; i < 5000; i++) {
  const div = document.createElement('div');
  div.classList.add('circle');

  const n1 = noise2D(i * 0.003, i * 0.0033);
  const n2 = noise2D(i * 0.002, i * 0.001);
  // const n1 = Math.random(0,1)
  // const n2 = Math.random(0,1)
  const style = {
    transform: `translate(${n2 * 200}px) rotate(${n2 * 270}deg) scale(${3 + n1 * 2}, ${3 + n2 * 2})`,
    boxShadow: `0 0 0 .2px hsla(${Math.floor(i * 0.3)}, 70%, 70%, .6)`
  };

  Object.assign(div.style, style);
  content.appendChild(div);
}

const Circles = document.querySelectorAll('.circle');

const scrollerSmoother = ScrollSmoother.create({
  content: content,
  wrapper: '#wrapper',
  smooth: 50,
  effects: false
});

// Scroll-triggered animation
const main = gsap.timeline({
  scrollTrigger: {
    scrub: 0.7,
    start: "top 25%",
    end: "bottom bottom",
  }
});

Circles.forEach((circle) => {
  main.to(circle, {
    opacity: 1
  });
});

}
function animetion2() {
    gsap.utils.toArray(".box").forEach((box, i) => {
  const input = box.querySelector("input");

  ScrollTrigger.create({
    trigger: box,
    start: "top center",
    end: "+=200",
    pin: true,
    pinSpacing: false,
    scrub: true,
    markers:true,
    onEnter: () => {
      if (!input.value.trim()) {
        gsap.to(box, { backgroundColor: "rgba(255, 0, 0, 0.2)" }); // Optional red warning
      }
    },
    onLeave: () => {
      gsap.to(box, { backgroundColor: "rgba(255, 255, 255, 0.15)" });
    }
  });
});


}
animetion1()
animetion2()