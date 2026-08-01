import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useStaggerReveal = (container, items) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(items, {
        y: 40,
        opacity: 0,
        scale: 0.98,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
        clearProps: "transform,opacity",
        scrollTrigger: {
          trigger: container,
          start: "top 92%",
          once: true,
        },
      });
    });

    return () => ctx.revert();
  }, [container, items]);
};

export default useStaggerReveal;