import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const horizontalScroll = (section, track) => {
  if (!section || !track) return;

  const distance = track.scrollWidth - window.innerWidth;

  gsap.to(track, {
    x: -distance,
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: () => `+=${distance}`,
      pin: true,
      scrub: 1,
      invalidateOnRefresh: true,
    },
  });
};