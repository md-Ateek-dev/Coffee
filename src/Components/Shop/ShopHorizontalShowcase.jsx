import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaFire,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaShoppingBag,
  FaPause,
  FaPlay,
  FaSyncAlt,
} from "react-icons/fa";

const ShopHorizontalShowcase = ({ products = [] }) => {
  const items = products.slice(0, 8);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const timerRef = useRef(null);

  const total = items.length;

  const nextCard = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const prevCard = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  // Auto 3D Rotation Timer
  useEffect(() => {
    if (isAutoRotating && total > 0) {
      timerRef.current = setInterval(() => {
        nextCard();
      }, 2800);
    }
    return () => clearInterval(timerRef.current);
  }, [isAutoRotating, total]);

  if (!total) return null;

  return (
    <section className="shop-3d-showcase py-20 bg-[#0A0908] relative overflow-hidden border-t border-b border-zinc-800/80 my-8">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">
              <FaSyncAlt className="animate-spin text-[10px]" style={{ animationDuration: "12s" }} /> 3D Rotating Showcase
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
              Our Coffee Collection
            </h2>
            <p className="text-zinc-400 mt-2 max-w-xl text-sm md:text-base">
              Discover our signature artisanal roasts rotating seamlessly in 3D. Click any card to bring it to center.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsAutoRotating(!isAutoRotating)}
              className={`w-11 h-11 rounded-full border border-zinc-700/80 text-white flex items-center justify-center transition-all shadow-md ${
                isAutoRotating
                  ? "bg-amber-500/20 text-amber-400 border-amber-500/50"
                  : "bg-[#161513] text-zinc-400"
              }`}
              title={isAutoRotating ? "Pause Auto Rotation" : "Start Auto Rotation"}
            >
              {isAutoRotating ? <FaPause size={12} /> : <FaPlay size={12} />}
            </button>

            <button
              onClick={prevCard}
              className="hidden sm:flex w-11 h-11 rounded-full bg-[#161513] border border-zinc-700/80 text-white items-center justify-center hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all shadow-md"
              aria-label="Previous Coffee"
            >
              <FaChevronLeft size={14} />
            </button>

            <button
              onClick={nextCard}
              className="hidden sm:flex w-11 h-11 rounded-full bg-[#161513] border border-zinc-700/80 text-white items-center justify-center hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all shadow-md"
              aria-label="Next Coffee"
            >
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* 3D Rotating Cards Stage */}
        <div
          className="relative h-[430px] sm:h-[460px] flex items-center justify-center"
          style={{ perspective: "1200px" }}
          onMouseEnter={() => setIsAutoRotating(false)}
          onMouseLeave={() => setIsAutoRotating(true)}
        >
          {items.map((item, idx) => {
            // Offset relative to active index
            let offset = idx - activeIndex;
            if (offset < -Math.floor(total / 2)) offset += total;
            if (offset > Math.floor(total / 2)) offset -= total;

            const absOffset = Math.abs(offset);

            // Compute 3D transforms based on distance from center
            const isCenter = offset === 0;
            const isVisible = absOffset <= 2; // Show 5 cards max in perspective

            if (!isVisible) return null;

            const rotateY = offset * -28; // 3D rotation angle
            const translateX = offset * 220; // X displacement
            const translateZ = -absOffset * 180; // Z depth displacement
            const scale = isCenter ? 1.05 : Math.max(0.72, 1 - absOffset * 0.15);
            const opacity = isCenter ? 1 : Math.max(0.4, 1 - absOffset * 0.35);
            const zIndex = 30 - absOffset * 10;

            return (
              <div
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`absolute w-[280px] sm:w-[320px] md:w-[350px] transition-all duration-700 ease-out cursor-pointer rounded-2xl overflow-hidden border ${
                  isCenter
                    ? "border-amber-500 shadow-2xl shadow-amber-500/20 bg-[#1A1815]"
                    : "border-zinc-800/90 bg-[#141311] hover:border-amber-500/60"
                }`}
                style={{
                  transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  opacity,
                  zIndex,
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Product Image */}
                <div className="relative overflow-hidden aspect-[16/10] bg-[#0f0e0d]">
                  <img
                    src={item.image}
                    alt={item.name || item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161513] via-transparent to-black/40" />

                  <span className="absolute top-3 left-3 bg-amber-500 text-black text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full shadow-md">
                    {item.category || "Top Roast"}
                  </span>

                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/75 backdrop-blur-md px-2.5 py-0.5 rounded-full text-amber-400 text-xs font-bold border border-zinc-700">
                    <FaStar className="text-amber-400 text-[10px]" />
                    <span>{item.rating || "4.9"}</span>
                  </div>

                  <div className="absolute bottom-2.5 right-3 bg-amber-500 text-black font-extrabold text-sm px-3 py-0.5 rounded-lg shadow-md">
                    {item.price}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                      {item.name || item.title}
                    </h3>
                    <p className="text-zinc-400 text-xs mt-1.5 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                    <span className="text-[10px] text-zinc-500 font-mono">
                      ARTISANAL SELECTION
                    </span>
                    <Link
                      to={`/product/${item.id}`}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500 text-black font-extrabold hover:bg-amber-400 transition-all text-xs shadow-md"
                    >
                      <FaShoppingBag size={10} /> Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dots Navigation & Mobile Controls */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={prevCard}
            className="sm:hidden w-10 h-10 rounded-full bg-[#161513] border border-zinc-700/80 text-white flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all shadow-md shrink-0"
            aria-label="Previous Coffee"
          >
            <FaChevronLeft size={14} />
          </button>
          <div className="flex items-center gap-2">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === activeIndex
                    ? "w-8 bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.6)]"
                    : "w-2 bg-zinc-800 hover:bg-zinc-700"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextCard}
            className="sm:hidden w-10 h-10 rounded-full bg-[#161513] border border-zinc-700/80 text-white flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all shadow-md shrink-0"
            aria-label="Next Coffee"
          >
            <FaChevronRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShopHorizontalShowcase;
