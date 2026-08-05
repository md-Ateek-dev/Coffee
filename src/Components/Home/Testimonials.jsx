import { useState, useEffect } from "react";
import testimonials from "../../Data/Testimonials";
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";
import useReveal from "../../Hooks/UseReveal";

const Testimonials = () => {
  useReveal(".testimonials");
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = testimonials.length;

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + total) % total);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className="testimonials section-y bg-[#0B0A0A] border-t border-zinc-800 relative overflow-hidden">
      <div className="page-container relative z-10">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 max-w-2xl mx-auto">
          <p className="uppercase tracking-[3px] sm:tracking-[5px] text-amber-500 font-semibold text-xs sm:text-sm">
            Customer Reviews
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 sm:mt-3">
            What Coffee Lovers Say
          </h2>
          <p className="text-zinc-300 mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base px-2">
            Discover real experiences from our daily guests, home brewers, and coffee connoisseurs.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-[#1a1815] border border-zinc-700/70 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl shadow-black/80 transition-all duration-500 relative">
            <FaQuoteLeft className="text-amber-500/20 text-4xl sm:text-6xl absolute top-5 sm:top-8 left-5 sm:left-8 pointer-events-none" />

            <div className="flex gap-1 text-amber-400 text-sm sm:text-lg mb-4 sm:mb-6 relative z-10">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            <p className="text-zinc-100 text-base sm:text-lg md:text-xl lg:text-2xl font-light italic leading-relaxed relative z-10 mb-6 sm:mb-8">
              &ldquo;{testimonials[currentIndex].review}&rdquo;
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-zinc-800 pt-5 sm:pt-6">
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  {testimonials[currentIndex].name}
                </h4>
                <span className="text-amber-400 text-xs sm:text-sm font-medium">
                  {testimonials[currentIndex].role}
                </span>
              </div>
              <span className="text-[10px] sm:text-xs text-zinc-500 font-mono">
                Verified Customer #{currentIndex + 1}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 sm:mt-8">
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "w-6 sm:w-8 bg-amber-500"
                      : "w-2 sm:w-2.5 bg-zinc-700 hover:bg-zinc-500"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={prevSlide}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-zinc-700 bg-[#161512] text-white flex items-center justify-center hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all"
                aria-label="Previous review"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-zinc-700 bg-[#161512] text-white flex items-center justify-center hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all"
                aria-label="Next review"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
