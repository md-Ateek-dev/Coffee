import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useReveal = (selector, deps = []) => {
  useLayoutEffect(() => {
    let ctx;

    // Small delay ensures DOM + images are painted before GSAP measures positions
    const timeout = setTimeout(() => {
      ctx = gsap.context(() => {
        const targets =
          typeof selector === "string"
            ? gsap.utils.toArray(selector)
            : selector;

        if (!targets || targets.length === 0) return;

        targets.forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 1, y: 35 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              clearProps: "opacity,transform",
              scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "play none none none",
                once: true,
                invalidateOnRefresh: true,
              },
            }
          );
        });

        // Recalculate trigger positions after images/fonts finish loading
        const refresh = () => ScrollTrigger.refresh();
        window.addEventListener("load", refresh);

        return () => window.removeEventListener("load", refresh);
      });

      // Force one refresh right after setup, fixes wrong trigger positions on first mount
      ScrollTrigger.refresh();
    }, 50);

    return () => {
      clearTimeout(timeout);
      if (ctx) ctx.revert();
    };
  }, deps);
};

export default useReveal;