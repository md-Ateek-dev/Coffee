import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useStaggerReveal = (container, items, staggerDelay = 0.08) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const targets = typeof items === "string" ? gsap.utils.toArray(items) : items;
      if (!targets || targets.length === 0) return;

      gsap.fromTo(
        targets,
        {
          opacity: 0,
          y: 35,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          stagger: staggerDelay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 88%",
            end: "bottom 12%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [container, items, staggerDelay]);
};

export default useStaggerReveal;


