import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for pinned horizontal scrolling using GSAP ScrollTrigger
 * @param {Object} options
 * @param {number} options.extraHeight Multiplier for scroll distance (default: 1)
 * @param {number} options.itemCount Number of items (triggers re-init when changed)
 * @returns {Object} { sectionRef, trackRef, progress, currentIndex, totalItems, scrollNext, scrollPrev }
 */
export const useHorizontalScroll = ({ extraHeight = 1, itemCount = 0 } = {}) => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const itemsCount = track.children ? track.children.length : 0;
    setTotalItems(itemsCount);

    const calculateDistance = () => {
      return Math.max(0, track.scrollWidth - window.innerWidth);
    };

    const ctx = gsap.context(() => {
      const distance = calculateDistance();

      if (distance <= 0) {
        gsap.set(track, { x: 0 });
        return;
      }

      gsap.to(track, {
        x: () => -calculateDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${calculateDistance() * extraHeight}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const currentProgress = self.progress;
            setProgress(currentProgress);

            if (itemsCount > 0) {
              const idx = Math.min(
                Math.floor(currentProgress * itemsCount),
                itemsCount - 1
              );
              setCurrentIndex(idx);
            }
          },
        },
      });
    }, section);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
      ctx.revert();
    };
  }, [extraHeight, itemCount]);

  const scrollNext = () => {
    if (!sectionRef.current || !trackRef.current) return;
    const itemsCount = trackRef.current.children ? trackRef.current.children.length : 1;
    const nextIdx = Math.min(currentIndex + 1, itemsCount - 1);
    const targetProgress = nextIdx / (itemsCount - 1 || 1);

    const st = ScrollTrigger.getAll().find(
      (trigger) => trigger.trigger === sectionRef.current
    );
    if (st) {
      const targetScroll = st.start + (st.end - st.start) * targetProgress;
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  const scrollPrev = () => {
    if (!sectionRef.current || !trackRef.current) return;
    const itemsCount = trackRef.current.children ? trackRef.current.children.length : 1;
    const prevIdx = Math.max(currentIndex - 1, 0);
    const targetProgress = prevIdx / (itemsCount - 1 || 1);

    const st = ScrollTrigger.getAll().find(
      (trigger) => trigger.trigger === sectionRef.current
    );
    if (st) {
      const targetScroll = st.start + (st.end - st.start) * targetProgress;
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  return {
    sectionRef,
    trackRef,
    progress,
    currentIndex,
    totalItems,
    scrollNext,
    scrollPrev,
  };
};

export default useHorizontalScroll;
