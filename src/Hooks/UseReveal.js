// import { useLayoutEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const useReveal = (selector) => {
//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       const targets = typeof selector === "string" ? gsap.utils.toArray(selector) : selector;
//       if (!targets || targets.length === 0) return;

//       gsap.fromTo(
//         targets,
//         {
//           opacity: 0,
//           y: 35,
//         },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.75,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: targets[0] || selector,
//             start: "top 90%",
//             end: "bottom 10%",
//             toggleActions: "play reverse play reverse",
//           },
//         }
//       );
//     });

//     return () => ctx.revert();
//   }, [selector]);
// };

// export default useReveal;


import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useReveal = (selector) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const targets =
        typeof selector === "string"
          ? gsap.utils.toArray(selector)
          : selector;

      if (!targets || targets.length === 0) return;

      gsap.fromTo(
        targets,
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: targets[0],
            start: "top 85%",
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [selector]);
};

export default useReveal;