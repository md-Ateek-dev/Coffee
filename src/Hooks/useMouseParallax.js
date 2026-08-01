import { useEffect } from "react";

const useMouseParallax = () => {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-speed]");

    const handleMouseMove = (e) => {
      const x = (window.innerWidth / 2 - e.clientX) / 40;
      const y = (window.innerHeight / 2 - e.clientY) / 40;

      elements.forEach((el) => {
        const speed = Number(el.dataset.speed);

        el.style.transform = `translate(${x * speed}px, ${
          y * speed
        }px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
};

export default useMouseParallax;