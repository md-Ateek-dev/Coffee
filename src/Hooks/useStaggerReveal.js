import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useStaggerReveal = (container, items, staggerDelay = 0.08, options = {}) => {
  const { reverseOnLeave = false, deps = [] } = options;

  useLayoutEffect(() => {
    // container ref abhi null ho sakta hai agar element mount nahi hua
    const containerEl =
      container && container.current !== undefined ? container.current : container;

    if (!containerEl) return;

    let ctx;
    const timeout = setTimeout(() => {
      ctx = gsap.context(() => {
        const targets =
          typeof items === "string" ? gsap.utils.toArray(items) : items;

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
            clearProps: "opacity,transform",
            scrollTrigger: {
              trigger: containerEl,
              start: "top 88%",
              // reverse sirf tab jab explicitly chaho, warna content
              // scroll-up pe wapas gayab ho jayega
              toggleActions: reverseOnLeave
                ? "play none none reverse"
                : "play none none none",
              once: !reverseOnLeave,
              invalidateOnRefresh: true,
            },
          }
        );

        const refresh = () => ScrollTrigger.refresh();
        window.addEventListener("load", refresh);
        return () => window.removeEventListener("load", refresh);
      }, containerEl);

      ScrollTrigger.refresh();
    }, 50);

    return () => {
      clearTimeout(timeout);
      if (ctx) ctx.revert();
    };
  }, [container, items, staggerDelay, reverseOnLeave, ...deps]);
};

export default useStaggerReveal;