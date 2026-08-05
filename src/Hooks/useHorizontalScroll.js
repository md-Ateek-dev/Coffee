import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Pinned horizontal scroll — optimized for Lenis + fast scroll response
 */
export const useHorizontalScroll = ({ extraHeight = 0.7, itemCount = 0 } = {}) => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const lastIndexRef = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const itemsCount = track.children ? track.children.length : 0;
    setTotalItems(itemsCount);
    lastIndexRef.current = 0;
    setCurrentIndex(0);

    const calculateDistance = () =>
      Math.max(0, track.scrollWidth - window.innerWidth);

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
          scrub: 0.45,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          fastScrollEnd: true,
          onUpdate: (self) => {
            if (itemsCount <= 0) return;

            const idx = Math.min(
              Math.floor(self.progress * itemsCount),
              itemsCount - 1
            );

            if (idx !== lastIndexRef.current) {
              lastIndexRef.current = idx;
              setCurrentIndex(idx);
            }
          },
        },
      });
    }, section);

    const refresh = () => ScrollTrigger.refresh();
    const timer = setTimeout(refresh, 300);

    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(refresh, 150);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
      ctx.revert();
    };
  }, [extraHeight, itemCount]);

  const scrollToIndex = useCallback(
    (idx) => {
      if (!sectionRef.current || !trackRef.current) return;
      const itemsCount = trackRef.current.children?.length || 1;
      const targetProgress = idx / (itemsCount - 1 || 1);

      const st = ScrollTrigger.getAll().find(
        (trigger) => trigger.trigger === sectionRef.current
      );

      if (st) {
        const targetScroll = st.start + (st.end - st.start) * targetProgress;
        window.scrollTo({ top: targetScroll, behavior: "smooth" });
      }
    },
    []
  );

  const scrollNext = useCallback(() => {
    const itemsCount = trackRef.current?.children?.length || 1;
    scrollToIndex(Math.min(lastIndexRef.current + 1, itemsCount - 1));
  }, [scrollToIndex]);

  const scrollPrev = useCallback(() => {
    scrollToIndex(Math.max(lastIndexRef.current - 1, 0));
  }, [scrollToIndex]);

  return {
    sectionRef,
    trackRef,
    currentIndex,
    totalItems,
    scrollNext,
    scrollPrev,
  };
};

export default useHorizontalScroll;
