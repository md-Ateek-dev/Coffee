import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useReveal = (selector) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(selector, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        clearProps: "transform,opacity",
        scrollTrigger: {
          trigger: selector,
          start: "top 92%",
          once: true,
        },
      });
    });

    return () => ctx.revert();
  }, [selector]);
};

export default useReveal;