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
    .to(
      "#heroHeadingText-js .line1 .char",
      {
        autoAlpha: 1,
        stagger: 0.01,
        color: "#d6fb41",
        // ease: "expo.out",
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

        // ease: "expo.out",
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

        // ease: "expo.out",
      },
      1.2
    );

  ScrollTrigger.create({
    animation: heroTextReveal,
    trigger: ".hero",
    start: "top 50%",
    end: "70% 10%",
    toggleActions: "play none none none",
  });

  // Marquee stop on hover or click HIGHLIGHT
});
