import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Counter = ({ end = 0, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const obj = { val: 0 };
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      onEnter: () => {
        gsap.to(obj, {
          val: end,
          duration,
          ease: "power1.out",
          onUpdate: () => {
            setCount(Math.floor(obj.val));
          },
        });
      },
      once: true,
    });

    return () => {
      st.kill();
    };
  }, [end, duration]);

  return <span ref={elementRef}>{count.toLocaleString()}</span>;
};

export default Counter;
