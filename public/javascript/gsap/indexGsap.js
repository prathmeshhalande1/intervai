let colorline = gsap.timeline();
function colorlineanimetion() {
  colorline.to(".line3", {
    duration: 1,
    backgroundImage: "linear-gradient(to right,#005eea,#10b981,#8900f9,#ef5ff7,#f79102,#ff6464,#ffc6ec,#f700ff)"
  })
  colorline.to(".line3", {
    duration: 1,
    backgroundImage: "linear-gradient(to right,#f700ff,#005eea,#10b981,#8900f9,#ef5ff7,#f79102,#ff6464,#ffc6ec)"
  })
  colorline.to(".line3", {
    duration: 1,
    backgroundImage: "linear-gradient(to right,#ffc6ec,#f700ff,#005eea,#10b981,#8900f9,#ef5ff7,#f79102,#ff6464)"
  })
  colorline.to(".line3", {
    duration: 1,
    backgroundImage: "linear-gradient(to right,#ff6464,#ffc6ec,#f700ff,#005eea,#10b981,#8900f9,#ef5ff7,#f79102)"
  })
  colorline.to(".line3", {
    duration: 1,
    backgroundImage: "linear-gradient(to right,#f79102,#ff6464,#ffc6ec,#f700ff,#005eea,#10b981,#8900f9,#ef5ff7)"
  })
  colorline.to(".line3", {
    duration: 1,
    backgroundImage: "linear-gradient(to right,#ef5ff7,#f79102,#ff6464,#ffc6ec,#f700ff,#005eea,#10b981,#8900f9)"
  })
  colorline.to(".line3", {
    duration: 1,
    backgroundImage: "linear-gradient(to right,#8900f9,#ef5ff7,#f79102,#ff6464,#ffc6ec,#f700ff,#005eea,#10b981)"
  })
  colorline.to(".line3", {
    duration: 1,
    backgroundImage: "linear-gradient(to right,#10b981,#8900f9,#ef5ff7,#f79102,#ff6464,#ffc6ec,#f700ff,#005eea)"
  })
}

setInterval(() => {
  colorlineanimetion()
}, 8000);
document.querySelector('.start-btn').addEventListener('click', () => {
  alert('Starting your interview...');
});

gsap.registerPlugin(ScrollTrigger);

// Function to animate containers
function animateContainer(containerClass) {
  gsap.from(`.${containerClass}`, {
    scrollTrigger: {
      trigger: `.${containerClass}`,
      start: "top 90%",
      toggleActions: "play none none none",
    },
    y: 100,
    opacity: 0,
    duration: 2.2,
    ease: "power4.out",
  });
}

// Animate all containers (update according to your HTML structure)
[
  "container_1",
  "container_2",
  "container_3",
  "container_4",
  "container_5",
  "container_6"
].forEach(animateContainer);

// Animate the tooltip over the job card
gsap.fromTo(".job-tooltip",
  { x: -20, y: -80, opacity: 0 },
  {
    x: 0,
    y: 0,
    opacity: 1,
    duration: 2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".card-content",
      start: "top 80%",
      end: "top 50%",
      scrub: true,
      // markers: true
    },
  }
);

gsap.from(".feedback-bars", {
  scrollTrigger: {
    trigger: ".bar-container",
    start: "top 90%",
    toggleActions: "play none none none"
  },
  opacity: 0,
  y: 50,
  duration: 1.4,
  stagger: 0.2,
  ease: "power2.out"
});

var con = true
$(document).ready(() => {

  $(".burgar").click(() => {
    if (con) {
      $(".navlocation").css("display", "block")
      gsap.to(".line1", {
        transformOrigin: "20% 20%",
        rotation: 45,
        direction: 1
      })
      gsap.to(".line2", {
        transformOrigin: "20% 20%",
        rotation: -45,
        direction: 1
      })

      con = false
    } else {
      $(".navlocation").css("display", "none")

      gsap.to(".line1", {
        transformOrigin: "20% 20%",
        rotation: 0,
        direction: 1
      })
      gsap.to(".line2", {
        transformOrigin: "20% 20%",
        rotation: 0,
        direction: 1
      })
      con = true
    }
  })



})