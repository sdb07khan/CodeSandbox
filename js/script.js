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

  // const circleRevealAnimation = gsap.timeline({
  //   defaults: {
  //     ease: "power1.out", // Add easing for smoother transitions
  //   },
  // });

  // circleRevealAnimation
  //   .to(".circleAnimation", { scale: 2, duration: 0.4 })
  //   .to(".imageBox:nth-child(1)", { opacity: 0, duration: 0.4 }, "<")
  //   .to(".circleAnimation", { scale: 1.25, duration: 0.4 })
  //   .to(".imageBox:nth-child(2)", { opacity: 1, duration: 0.4 }, "<")
  //   .to(".circleAnimation", { scale: 0.5, duration: 0.4 })
  //   .to(".imageBox:nth-child(2)", { opacity: 0, duration: 0.4 }, "<")
  //   .to(".circleAnimation", { scale: 1.25, duration: 0.4 })
  //   .to(".imageBox:nth-child(3)", { opacity: 1, duration: 0.4 }, "<")
  //   .to(".circleAnimation", { scale: 2, duration: 0.4 })
  //   .to(".imageBox:nth-child(3)", { opacity: 0, duration: 0.4 }, "<")
  //   .to(".circleAnimation", { scale: 2.5, duration: 0.4 })
  //   .to(".imageBox:nth-child(4)", { opacity: 1, duration: 0.4 }, "<")
  //   .to(".circleAnimation", { scale: 3, duration: 0.4 })
  //   .to(".imageBox:nth-child(4)", { opacity: 0, duration: 0.4 }, "<")
  //   .to(".circleAnimation", { scale: 2, duration: 0.4 })
  //   .to(".imageBox:nth-child(5)", { opacity: 1, duration: 0.4 }, "<")
  //   .to(".circleAnimation", { scale: 1, duration: 0.4 })
  //   .to(".imageBox:nth-child(5)", { opacity: 0, duration: 0.4 }, "<")
  //   .to(".circleAnimation", { scale: 1.5, duration: 0.4 })
  //   .to(".imageBox:nth-child(6)", { opacity: 1, duration: 0.4 }, "<")
  //   .to(".circleAnimation", { scale: 2, duration: 0.4 })
  //   .to(".imageBox:nth-child(6)", { opacity: 0, duration: 0.4 }, "<")
  //   .to(".circleAnimation", { scale: 3, duration: 0.4 })
  //   .to(".imageBox:nth-child(7)", { opacity: 1, duration: 0.4 }, "<")
  //   .to(".circleAnimation", { scale: 4, duration: 0.4 })
  //   .to(".imageBox:nth-child(7)", { opacity: 0, duration: 0.4 }, "<")
  //   .to(".circleAnimation", { scale: 5, duration: 0.4 })
  //   .to(".imageBox:nth-child(8)", { opacity: 1, duration: 0.4 }, "<")
  //   .to(".circleAnimation", { scale: 6, duration: 0.4 })
  //   .to(".imageBox:nth-child(8)", { opacity: 0, duration: 0.4 }, "<")
  //   .to(".circleAnimation", { scale: 4.5, duration: 0.4 })
  //   .to(".imageBox:nth-child(9)", { opacity: 1, duration: 0.4 }, "<")
  //   .to(".circleAnimation", { scale: 3, duration: 0.4 })
  //   .to(".imageBox:nth-child(9)", { opacity: 0, duration: 0.4 }, "<")
  //   .to(".circleAnimation", { scale: 4.5, duration: 0.4 })
  //   .to(".imageBox:nth-child(10)", { opacity: 1, duration: 0.4 }, "<")
  //   .to(".circleAnimation", { scale: 6, duration: 0.4 })
  //   .to(".imageBox:nth-child(10)", { opacity: 0, duration: 0.4 }, "<");

  // ScrollTrigger.create({
  //   animation: circleRevealAnimation,
  //   trigger: ".animationContainer",
  //   start: "top top",
  //   end: "+=1200%",
  //   pin: ".animationContainer",
  //   toggleActions: "play reverse none reverse",
  //   scrub: 1,
  // });

  const circleRevealAnimation = gsap.timeline({
    defaults: {
      ease: "power1.out", // Add easing for smoother transitions
    },
  });

  circleRevealAnimation
    .to(".circleAnimation", { scale: 1.5, duration: 0.5 })
    .to(".imageBox:nth-child(1)", { opacity: 0, duration: 0.5 }, "<")
    .to(".imageBox:nth-child(2)", { opacity: 1, duration: 0.5 }, "<")
    .to(".circleAnimation", { scale: 0.5, duration: 0.5 })
    .to(".imageBox:nth-child(2)", { opacity: 0, duration: 0.5 }, "<")
    .to(".imageBox:nth-child(3)", { opacity: 1, duration: 0.5 }, "<")
    .to(".circleAnimation", { scale: 2, duration: 0.5 })
    .to(".imageBox:nth-child(3)", { opacity: 0, duration: 0.5 }, "<")
    .to(".imageBox:nth-child(4)", { opacity: 1, duration: 0.5 }, "<")
    .to(".circleAnimation", { scale: 3, duration: 0.5 })
    .to(".imageBox:nth-child(4)", { opacity: 0, duration: 0.5 }, "<")
    .to(".imageBox:nth-child(5)", { opacity: 1, duration: 0.5 }, "<")
    .to(".circleAnimation", { scale: 1, duration: 0.5 })
    .to(".imageBox:nth-child(5)", { opacity: 0, duration: 0.5 }, "<")
    .to(".imageBox:nth-child(6)", { opacity: 1, duration: 0.5 }, "<")
    .to(".circleAnimation", { scale: 2, duration: 0.5 })
    .to(".imageBox:nth-child(6)", { opacity: 0, duration: 0.5 }, "<")
    .to(".imageBox:nth-child(7)", { opacity: 1, duration: 0.5 }, "<")
    .to(".circleAnimation", { scale: 4, duration: 0.5 })
    .to(".imageBox:nth-child(7)", { opacity: 0, duration: 0.5 }, "<")
    .to(".imageBox:nth-child(8)", { opacity: 1, duration: 0.5 }, "<")
    .to(".circleAnimation", { scale: 6, duration: 0.5 })
    .to(".imageBox:nth-child(8)", { opacity: 0, duration: 0.5 }, "<")
    .to(".imageBox:nth-child(9)", { opacity: 1, duration: 0.5 }, "<")
    .to(".circleAnimation", { scale: 3, duration: 0.5 })
    .to(".imageBox:nth-child(9)", { opacity: 0, duration: 0.5 }, "<")
    .to(".imageBox:nth-child(10)", { opacity: 1, duration: 0.5 }, "<")
    .to(".circleAnimation", { scale: 6, duration: 0.5 })
    .to(".imageBox:nth-child(10)", { opacity: 0, duration: 0.5 }, "<");

  ScrollTrigger.create({
    animation: circleRevealAnimation,
    trigger: ".animationContainer",
    start: "top top",
    end: "+=1300%",
    pin: ".animationContainer",
    toggleActions: "play reverse none reverse",
    scrub: 1,
  });

  //Square Animation HIGHLIGHT

  const squareRevealAnimation = gsap.timeline({
    duration: 10,
    ease: "power2.out",
  });

  squareRevealAnimation
    .to(".squareAnimation", { scale: 1.7 })
    .to(".squareImageBox:nth-child(1)", { opacity: 0, duration: 0.4 }, "<")
    .to(".squareAnimation", { scale: 1.6 })
    .to(".squareImageBox:nth-child(2)", { opacity: 0, duration: 0.4 }, "<")
    .to(".squareAnimation", { scale: 1.5 })
    .to(".squareImageBox:nth-child(3)", { opacity: 0, duration: 0.4 }, "<")
    .to(".squareAnimation", { scale: 1.45 })
    .to(".squareImageBox:nth-child(4)", { opacity: 0, duration: 0.4 }, "<")
    .to(".squareAnimation", { scale: 1.4 })
    .to(".squareImageBox:nth-child(5)", { opacity: 0, duration: 0.4 }, "<")
    .to(".squareAnimation", { scale: 1.3 })
    .to(".squareImageBox:nth-child(6)", { opacity: 0, duration: 0.4 }, "<")
    .to(".squareAnimation", { scale: 1.25 })
    .to(".squareImageBox:nth-child(7)", { opacity: 0, duration: 0.4 }, "<")
    .to(".squareAnimation", { scale: 1.22 })
    .to(".squareImageBox:nth-child(8)", { opacity: 0, duration: 0.4 }, "<")
    .to(".squareAnimation", { scale: 1.2 })
    .to(".cloudTextBox1", {
      zIndex: 0,
      scrollTrigger: { trigger: ".cloudTextBox1", start: "top center" },
    })
    .to(".textHeading", { scale: 0.95, duration: 4 }, "<")
    .to(".word1", { opacity: 1, duration: 4 }, "<")
    .to(".squareImageBox:nth-child(9)", { opacity: 0 }, "<")
    .to(".squareAnimation", { scale: 1.18 })
    .to(".word2", { opacity: 1, duration: 4 }, "<")
    .to(".squareImageBox:nth-child(10)", { opacity: 0 }, "<")
    .to(".squareAnimation", { scale: 1.15 })
    .to(".word3", { opacity: 1, duration: 4 }, "<")
    .to(".squareImageBox:nth-child(11)", { opacity: 0 }, "<")
    .to(".squareAnimation", { scale: 1.125 })
    .to(".word1", { opacity: 0, duration: 4 }, "<")
    .to(".squareImageBox:nth-child(12)", { opacity: 0 }, "<")
    .to(".squareAnimation", { scale: 1.03125 })
    .to(".word2", { opacity: 0, duration: 4 }, "<")
    .to(".squareImageBox:nth-child(13)", { opacity: 0 }, "<")
    .to(".squareAnimation", { scale: 0.9375 })
    .to(".word3", { opacity: 0, duration: 4 }, "<")
    .to(".squareImageBox:nth-child(14)", { opacity: 0 }, "<")
    .to(".squareAnimation", { scale: 0.9 })
    .to(".squareImageBox:nth-child(15)", { opacity: 0 }, "<")
    .to(".squareAnimation", { scale: 0.85 })
    .to(
      ".squareImageBox:nth-child(16)",
      { opacity: 0, ease: "power2.out", duration: 4 },
      "<"
    )
    .to(
      ".codePictureBox1",
      {
        zIndex: 1,
        opacity: 1,
        ease: "power2.out",
      },
      "<"
    )
    .to(".codePictureBox2", { scale: 0.85, duration: 6 }, "<")
    .to(".codePictureBox1", {
      zIndex: -1,
      opacity: 0,
      ease: "power2.out",
      duration: 3,
    })
    .to(
      ".microBox1",
      {
        zIndex: 0,
        opacity: 1,
        ease: "power2.out",
      },
      "<"
    )
    .to(".microBox3", { y: "-10%", delay: 2, duration: 8 }, "<")
    .to(".microBox1", {
      zIndex: -1,
      opacity: 0,
      ease: "power2.out",
      duration: 3,
    })
    .to(
      ".anyBox1",
      {
        zIndex: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 0.5,
        delay: 3,
      },
      "<"
    )

    .to(".bottomLine", { opacity: 1, scaleX: 1, duration: 1 })
    .to(".anyText1", { opacity: 1, x: 0, duration: 6 })
    .to(".anyText2", { opacity: 1, x: 0, duration: 6 })
    .to(".anyBox1", {
      zIndex: -1,
      opacity: 0,
      ease: "power2.out",
      duration: 0.5,
    })
    .to(
      ".downloadBox1",
      {
        zIndex: 1,
        opacity: 1,
        ease: "power2.out",
        duration: 3,
      },
      "<"
    )
    .to(".downloadBox3", { y: "-100%", duration: 30 })
    .to(".downloadBox1", {
      zIndex: -1,
      ease: "power2.out",
      duration: 0.5,
    });

  ScrollTrigger.create({
    animation: squareRevealAnimation,
    trigger: ".animationContainer",
    start: "top top",
    end: "+=1100%",
    // pin: ".animationContainer",
    toggleActions: "play reverse none reverse",
    scrub: 0.5,
  });

  const animationContainer = document.querySelector(".animationContainer");
  const mediaQuery = window.matchMedia("(max-width: 1000px)");

  function handleScreenSizeChange(mediaQuery) {
    if (mediaQuery.matches) {
      // Pause the animation if the screen size is below 1000px
      squareRevealAnimation.pause();
    } else {
      // Resume or restart the animation if the screen size is above 1000px
      squareRevealAnimation.play();
    }
  }

  handleScreenSizeChange(mediaQuery); // Check the initial screen size

  mediaQuery.addEventListener("change", handleScreenSizeChange); // Listen for screen size changes
});
