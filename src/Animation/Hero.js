import gsap from "gsap";

export const heroAnimation = () => {
  // Clear any existing inline animations to prevent glitches
  gsap.killTweensOf([
    ".hero-subtitle",
    ".hero-title",
    ".hero-text",
    ".hero-btn",
    ".hero-stats",
    ".hero-image",
    "[data-speed='4']",
    "[data-speed='5']",
    "[data-speed='6']",
  ]);

  const tl = gsap.timeline({
    defaults: {
      ease: "power3.out",
    },
  });

  tl.from(".hero-subtitle", {
    y: 20,
    opacity: 0,
    duration: 0.45,
    clearProps: "transform,opacity",
  })
    .from(
      ".hero-title",
      {
        y: 36,
        opacity: 0,
        duration: 0.55,
        clearProps: "transform,opacity",
      },
      "-=0.25"
    )
    .from(
      ".hero-text",
      {
        y: 20,
        opacity: 0,
        duration: 0.45,
        clearProps: "transform,opacity",
      },
      "-=0.3"
    )
    .from(
      ".hero-btn",
      {
        y: 16,
        opacity: 0,
        stagger: 0.1,
        duration: 0.45,
        clearProps: "transform,opacity",
      },
      "-=0.25"
    )
    .from(
      ".hero-stats",
      {
        y: 16,
        opacity: 0,
        duration: 0.45,
        clearProps: "transform,opacity",
      },
      "-=0.25"
    )
    .from(
      ".hero-image",
      {
        scale: 0.85,
        opacity: 0,
        duration: 1,
        clearProps: "transform,opacity",
      },
      "-=0.7"
    );

  // Smooth floating coffee cup animation
  gsap.to(".hero-image", {
    y: -15,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  // Floating coffee beans animations
  gsap.to("[data-speed='4']", {
    y: -18,
    x: 8,
    rotation: 15,
    repeat: -1,
    yoyo: true,
    duration: 2.5,
    ease: "sine.inOut",
  });

  gsap.to("[data-speed='5']", {
    y: 15,
    rotation: -20,
    repeat: -1,
    yoyo: true,
    duration: 3,
    ease: "sine.inOut",
  });

  gsap.to("[data-speed='6']", {
    y: -12,
    x: -10,
    rotation: 25,
    repeat: -1,
    yoyo: true,
    duration: 2.8,
    ease: "sine.inOut",
  });
};