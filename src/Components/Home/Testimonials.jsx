import { useState, useEffect } from "react";
import testimonials from "../../Data/Testimonials";
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";
import useReveal from "../../Hooks/UseReveal";

const Testimonials = () => {
  useReveal(".testimonials");
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = testimonials.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // Auto slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className="testimonials py-28 bg-[#0B0A0A] border-t border-zinc-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="uppercase tracking-[5px] text-amber-500 font-semibold text-sm">
            Customer Reviews
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            What Coffee Lovers Say
          </h2>
          <p className="text-zinc-300 mt-4 leading-7 text-base">
            Discover real experiences from our daily guests, home brewers, and coffee connoisseurs.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Card */}
          <div className="bg-[#1a1815] border border-zinc-700/70 rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/80 transition-all duration-500 relative">
            <FaQuoteLeft className="text-amber-500/20 text-6xl absolute top-8 left-8 pointer-events-none" />

            {/* Stars */}
            <div className="flex gap-1 text-amber-400 text-lg mb-6 relative z-10">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            {/* Review text */}
            <p className="text-zinc-100 text-xl md:text-2xl font-light italic leading-relaxed relative z-10 mb-8">
              "{testimonials[currentIndex].review}"
            </p>

            {/* User Info */}
            <div className="flex items-center justify-between border-t border-zinc-800 pt-6">
              <div>
                <h4 className="text-xl font-bold text-white">
                  {testimonials[currentIndex].name}
                </h4>
                <span className="text-amber-400 text-sm font-medium">
                  {testimonials[currentIndex].role}
                </span>
              </div>
              <span className="text-xs text-zinc-500 font-mono">
                Verified Customer #{currentIndex + 1}
              </span>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Slide Indicators */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "w-8 bg-amber-500"
                      : "w-2.5 bg-zinc-700 hover:bg-zinc-500"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-zinc-700 bg-[#161512] text-white flex items-center justify-center hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all"
                aria-label="Previous review"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-zinc-700 bg-[#161512] text-white flex items-center justify-center hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all"
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