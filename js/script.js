gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  document.body.style.opacity = 1;

  // text reveal animation hero section HIGHLIGHT

  const heroText = new SplitType(".headingText");

  const heroTextReveal = gsap.timeline({});

  heroTextReveal.set("#heroHeadingText-js .char", {
    autoAlpha: 0,
  });

  heroTextReveal
    .to(".bgImageBox", { opacity: 1, duration: 2.5, delay: 1 })
    .to(
      "#heroHeadingText-js .line1 .char",
      {
        autoAlpha: 1,
        stagger: 0.01,
        color: "#d6fb41",
        duration: 3,
      },
      1
    )
    .to(
      "#heroHeadingText-js .line2 .char",
      {
        autoAlpha: 1,
        stagger: 0.01,
        color: "#e3ff73",
        duration: 3,
      },
      1.1
    )
    .to(
      "#heroHeadingText-js .line3 .char",
      {
        autoAlpha: 1,
        stagger: 0.01,
        color: "#f1ffb9",
        duration: 3,
      },
      1.2
    )
    .to(".paraBox", { opacity: 1, duration: 2, delay: -2 });

  ScrollTrigger.create({
    animation: heroTextReveal,
    trigger: ".hero",
    start: "top 50%",
    end: "70% 10%",
    toggleActions: "play none none none",
  });
});

//hero section links HIGHLIGHT

const heroLinkReveal = gsap.timeline();

heroLinkReveal.set(".linkContainer .linkBox", {
  autoAlpha: 0,
});

heroLinkReveal.to(".linkContainer .linkBox", {
  autoAlpha: 1,
  delay: 0.5,
  duration: 2.5,
});

ScrollTrigger.create({
  animation: heroLinkReveal,
  trigger: ".linkContainer",
  start: "top 90%",
  end: "bottom 80%",
  toggleActions: "play none none none",
});

// scroll animation HIGHLIGHT

const circleRevealAnimation = gsap.timeline({ duration: 0.5 });

circleRevealAnimation
  // .to(".circleBox", { scale: 0.5 })
  .to(".imageBox:nth-child(1)", { opacity: 0 })
  .to(".imageBox:nth-child(2)", { opacity: 1 })
  .to(".imageBox:nth-child(2)", { opacity: 0 })
  .to(".imageBox:nth-child(3)", { opacity: 1 })
  .to(".imageBox:nth-child(3)", { opacity: 0 })
  .to(".imageBox:nth-child(4)", { opacity: 1 })
  .to(".imageBox:nth-child(4)", { opacity: 0 })
  .to(".imageBox:nth-child(5)", { opacity: 1 })
  .to(".imageBox:nth-child(5)", { opacity: 0 })
  .to(".imageBox:nth-child(6)", { opacity: 1 })
  .to(".imageBox:nth-child(6)", { opacity: 0 })
  .to(".imageBox:nth-child(7)", { opacity: 1 })
  .to(".imageBox:nth-child(7)", { opacity: 0 })
  .to(".imageBox:nth-child(8)", { opacity: 1 })
  .to(".imageBox:nth-child(8)", { opacity: 0 })
  .to(".imageBox:nth-child(9)", { opacity: 1 })
  .to(".imageBox:nth-child(9)", { opacity: 0 })
  .to(".imageBox:nth-child(10)", { opacity: 1 })
  .to(".imageBox:nth-child(10)", { opacity: 0 });

ScrollTrigger.create({
  animation: circleRevealAnimation,
  trigger: ".animationContainer",
  start: "top top",
  end: "bottom bottom",
  pin: ".animationContainer",
  toggleActions: "play reverse none reverse",
  scrub: 30,
});
