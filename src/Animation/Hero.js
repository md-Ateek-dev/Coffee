import gsap from "gsap";

export const heroAnimation = () => {

  gsap.from(".hero-subtitle",{
    y:50,
    opacity:0,
    duration:1
  });

  gsap.from(".hero-title",{
    y:80,
    opacity:0,
    duration:1,
    delay:.2
  });

  gsap.from(".hero-text",{
    y:60,
    opacity:0,
    duration:1,
    delay:.5
  });

  gsap.from(".hero-btn",{
    y:40,
    opacity:0,
    stagger:.2,
    duration:1,
    delay:.8
  });

  gsap.from(".hero-image",{
    scale:.8,
    opacity:0,
    duration:1.2,
    delay:.4
  });
  
  const tl = gsap.timeline({
    defaults: {
      ease: "power3.out",
    },
  });

  tl.from(".hero-subtitle", {
    y: 40,
    opacity: 0,
    duration: 0.6,
  })

    .from(
      ".hero-title",
      {
        y: 80,
        opacity: 0,
        duration: 1,
      },
      "-=0.3"
    )

    .from(
      ".hero-text",
      {
        y: 40,
        opacity: 0,
        duration: 0.7,
      },
      "-=0.5"
    )

    .from(
      ".hero-btn",
      {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
      },
      "-=0.4"
    )

    .from(
      ".hero-stats",
      {
        y: 30,
        opacity: 0,
        duration: 0.8,
      },
      "-=0.3"
    )

    .from(
      ".hero-image",
      {
        scale: 0.8,
        rotate: -8,
        opacity: 0,
        duration: 1,
      },
      "-=0.8"
    );

  // Floating Animation
  gsap.to(".hero-image", {
    y: -15,
    duration: 2.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  
  // add new 
  
  gsap.to("[data-speed='4']",{

y:-18,

x:8,

rotation:15,

repeat:-1,

yoyo:true,

duration:2,

ease:"sine.inOut"

});

gsap.to("[data-speed='5']",{

y:15,

rotation:-20,

repeat:-1,

yoyo:true,

duration:2.8,

ease:"sine.inOut"

});

gsap.to("[data-speed='6']",{

y:-12,

x:-10,

rotation:25,

repeat:-1,

yoyo:true,

duration:2.3,

ease:"sine.inOut"

});
  
  
}