import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import products from "../../Data/Products";
import useReveal from "../../Hooks/UseReveal";
import {
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaShoppingBag,
  FaPause,
  FaPlay,
} from "react-icons/fa";

const FeaturedCoffee = () => {
  useReveal(".featured");
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

  useEffect(() => {
    if (isAutoRotating && total > 0) {
      timerRef.current = setInterval(() => {
        nextCard();
      }, 3000);
    }
    return () => clearInterval(timerRef.current);
  }, [isAutoRotating, total]);

  return (
    <section className="featured py-24 bg-[#0F0E0D] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header with Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="uppercase tracking-[5px] text-amber-500 font-semibold text-sm">
              Featured Coffee Collection
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-white mt-2">
              Crafted For Every Taste
            </h2>
            <p className="text-zinc-400 mt-3 max-w-xl text-base">
              Discover our signature coffee collection rotating seamlessly in 3D. Click any card to bring it to center.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsAutoRotating(!isAutoRotating)}
              className={`w-12 h-12 rounded-full border border-zinc-700/80 text-white flex items-center justify-center transition-all shadow-lg ${
                isAutoRotating
                  ? "bg-amber-500/20 text-amber-400 border-amber-500/50"
                  : "bg-[#161513] text-zinc-400"
              }`}
              title={isAutoRotating ? "Pause Auto Rotation" : "Start Auto Rotation"}
            >
              {isAutoRotating ? <FaPause size={14} /> : <FaPlay size={14} />}
            </button>

            <button
              onClick={prevCard}
              className="hidden sm:flex w-12 h-12 rounded-full border border-zinc-700 bg-[#1a1815] text-white items-center justify-center hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all shadow-lg"
              aria-label="Previous Coffee"
            >
              <FaChevronLeft size={16} />
            </button>
            <button
              onClick={nextCard}
              className="hidden sm:flex w-12 h-12 rounded-full border border-zinc-700 bg-[#1a1815] text-white items-center justify-center hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all shadow-lg"
              aria-label="Next Coffee"
            >
              <FaChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* 3D Rotating Stage */}
        <div
          className="relative h-[430px] sm:h-[460px] flex items-center justify-center"
          style={{ perspective: "1200px" }}
          onMouseEnter={() => setIsAutoRotating(false)}
          onMouseLeave={() => setIsAutoRotating(true)}
        >
          {items.map((item, idx) => {
            let offset = idx - activeIndex;
            if (offset < -Math.floor(total / 2)) offset += total;
            if (offset > Math.floor(total / 2)) offset -= total;

            const absOffset = Math.abs(offset);
            const isCenter = offset === 0;
            const isVisible = absOffset <= 2;

            if (!isVisible) return null;

            const rotateY = offset * -28;
            const translateX = offset * 220;
            const translateZ = -absOffset * 180;
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
                {/* Image */}
                <div className="relative overflow-hidden aspect-[16/10] bg-[#0f0e0d]">
                  <img
                    src={item.image}
                    alt={item.name || item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161513] via-transparent to-black/40" />

                  <span className="absolute top-3 left-3 bg-amber-500 text-black text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full shadow-md">
                    {item.category || "Featured Roast"}
                  </span>

                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/75 backdrop-blur-md px-2.5 py-0.5 rounded-full text-amber-400 text-xs font-bold border border-zinc-700">
                    <FaStar className="text-amber-400 text-[10px]" />
                    <span>{item.rating || "4.9"}</span>
                  </div>

                  <div className="absolute bottom-2.5 right-3 bg-amber-500 text-black font-extrabold text-sm px-3 py-0.5 rounded-lg shadow-md">
                    {item.price}
                  </div>
                </div>

                {/* Body */}
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
                      SIGNATURE BLEND
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

        {/* Indicators & Mobile Navigation */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={prevCard}
            className="sm:hidden w-10 h-10 rounded-full border border-zinc-700 bg-[#1a1815] text-white flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all shadow-md shrink-0"
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
                aria-label={`Go to coffee ${idx + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextCard}
            className="sm:hidden w-10 h-10 rounded-full border border-zinc-700 bg-[#1a1815] text-white flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all shadow-md shrink-0"
            aria-label="Next Coffee"
          >
            <FaChevronRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCoffee;