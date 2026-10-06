import { useState, useEffect, useRef, useCallback } from "react";
import testimonials from "../../Data/Testimonials";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

/* ------------------------------------------------------------------
   Same token system as WhyChooseUs / Footer:
   bg #120F0C · card #1C1712 · caramel #C68A4E · cream #F3EAD9
   display: 'Fraunces'   body: 'Manrope'
------------------------------------------------------------------- */

const FONT_IMPORT =
  "@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,500&family=Manrope:wght@400;500;600;700&display=swap');";

const SLIDE_DURATION = 6000;

/* Local scroll-reveal — swap back for your own useReveal hook if you'd
   rather keep that; kept inline so this file runs standalone. */
function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView];
}

const Testimonials = () => {
  const [sectionRef, sectionInView] = useInView(0.15);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;

  const goTo = useCallback(
    (idx, dir) => {
      setDirection(dir);
      setCurrentIndex((idx + total) % total);
    },
    [total],
  );

  const nextSlide = useCallback(
    () => goTo(currentIndex + 1, "next"),
    [currentIndex, goTo],
  );
  const prevSlide = () => goTo(currentIndex - 1, "prev");

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(nextSlide, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [nextSlide, paused]);

  const active = testimonials[currentIndex];

  return (
    <section
      ref={sectionRef}
      className="testimonials h-screen section-y relative overflow-hidden border-t border-zinc-800 bg-[#431602] text-zinc-300"
    >
      <style>{`
        ${FONT_IMPORT}
        .testimonials { font-family: 'Manrope', sans-serif; }

        @keyframes cardIn {
          from { opacity: 0; transform: translateY(14px) scale(0.985); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes cardInReverse {
          from { opacity: 0; transform: translateY(-14px) scale(0.985); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .slide-next { animation: cardIn 0.55s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .slide-prev { animation: cardInReverse 0.55s cubic-bezier(0.22, 1, 0.36, 1) both; }

        @keyframes fillBar {
          from { width: 0%; }
          to   { width: 100%; }
        }
        .pour-bar { animation: fillBar ${SLIDE_DURATION}ms linear forwards; }
        .pour-bar.paused { animation-play-state: paused; }

        @keyframes starPop {
          0%   { transform: scale(0); opacity: 0; }
          70%  { transform: scale(1.15); opacity: 1; }
          100% { transform: scale(1); }
        }
        .star-pop { animation: starPop 0.4s ease-out both; }

        @media (prefers-reduced-motion: reduce) {
          .slide-next, .slide-prev, .pour-bar, .star-pop { animation: none !important; }
        }
      `}</style>

      {/* ambient glow, consistent with the rest of the page */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-24 h-[380px] w-[560px] -translate-x-1/2 rounded-full opacity-[0.10] blur-[110px]"
        style={{ background: "#0F0E0D" }}
      />

      <div className="page-container relative z-10">
        <div
          className="mx-auto mb-10 max-w-2xl text-center transition-all duration-700 ease-out sm:mb-12 md:mb-16"
          style={{
            opacity: sectionInView ? 1 : 0,
            transform: sectionInView ? "translateY(0)" : "translateY(18px)",
          }}
        >
          <p className="text-xs font-semibold uppercase tracking-[3px] text-[#C68A4E] sm:tracking-[5px] sm:text-sm">
            Customer Reviews
          </p>
          <h2
            className="mt-2 text-2xl text-white sm:mt-3 sm:text-3xl md:text-4xl lg:text-5xl"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
          >
            What Coffee Lovers Say
          </h2>
          <p className="mt-3 px-2 text-sm leading-relaxed text-zinc-400 sm:mt-4 sm:text-base">
            Discover real experiences from our daily guests, home brewers, and
            coffee connoisseurs.
          </p>
        </div>

        <div
          className="relative mx-auto max-w-4xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            key={currentIndex}
            className={`relative overflow-hidden rounded-2xl border border-zinc-700/60 bg-[#431602] p-6 shadow-2xl shadow-black/80 sm:rounded-3xl sm:p-8 md:p-12 ${
              direction === "next" ? "slide-next" : "slide-prev"
            }`}
          >
            <Quote
              className="pointer-events-none absolute left-5 top-5 h-10 w-10 text-[#C68A4E]/15 sm:left-8 sm:top-8 sm:h-14 sm:w-14"
              fill="currentColor"
              strokeWidth={0}
            />

            <div className="relative z-10 mb-4 flex gap-1 text-[#C68A4E] sm:mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="star-pop h-4 w-4 sm:h-[18px] sm:w-[18px]"
                  fill="currentColor"
                  strokeWidth={0}
                  style={{ animationDelay: `${i * 70}ms` }}
                />
              ))}
            </div>

            <p className="relative z-10 mb-6 text-base font-light italic leading-relaxed text-zinc-100 sm:mb-8 sm:text-lg md:text-xl lg:text-2xl">
              &ldquo;{active.review}&rdquo;
            </p>

            <div className="flex flex-col gap-3 border-t border-zinc-800 pt-5 sm:flex-row sm:items-center sm:justify-between sm:pt-6">
              <div>
                <h4
                  className="text-lg text-white sm:text-xl"
                  style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
                >
                  {active.name}
                </h4>
                <span className="text-xs font-medium text-[#C68A4E] sm:text-sm">
                  {active.role}
                </span>
              </div>
              <span className="font-mono text-[10px] text-zinc-500 sm:text-xs">
                Verified Customer #{currentIndex + 1}
              </span>
            </div>

            {/* pour-timer — fills over the autoplay interval, pauses on hover */}
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/5">
              <div
                key={`bar-${currentIndex}`}
                className={`pour-bar h-full bg-[#C68A4E] ${paused ? "paused" : ""}`}
              />
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:mt-8 sm:flex-row">
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() =>
                    goTo(idx, idx > currentIndex ? "next" : "prev")
                  }
                  className={`h-2 rounded-full transition-all duration-300 sm:h-2.5 ${
                    idx === currentIndex
                      ? "w-6 bg-[#C68A4E] sm:w-8"
                      : "w-2 bg-zinc-700 hover:bg-zinc-500 sm:w-2.5"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={prevSlide}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-[#161512] text-white transition-all hover:border-[#C68A4E] hover:bg-[#C68A4E] hover:text-black sm:h-12 sm:w-12"
                aria-label="Previous review"
              >
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              <button
                onClick={nextSlide}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-[#161512] text-white transition-all hover:border-[#C68A4E] hover:bg-[#C68A4E] hover:text-black sm:h-12 sm:w-12"
                aria-label="Next review"
              >
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
