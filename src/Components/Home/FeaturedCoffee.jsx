import { useRef, useEffect } from "react";
import products from "../../Data/Products";
import useReveal from "../../Hooks/UseReveal";
import ProductCard from "../Comman/ProductCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const FeaturedCoffee = () => {
  useReveal(".featured");
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: 350, behavior: "smooth" });
      }
    }
  };

  // Automatic right-to-left sliding timer
  useEffect(() => {
    const timer = setInterval(() => {
      scrollRight();
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="featured py-28 bg-[#0F0E0D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="uppercase tracking-[5px] text-amber-500 font-semibold text-sm">
              Featured Coffee
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-white mt-2">
              Crafted For Every Taste
            </h2>
            <p className="text-zinc-300 mt-3 max-w-xl text-base">
              Discover our signature coffee collection made with premium beans and unforgettable roast profiles.
            </p>
          </div>

          {/* Right-to-Left Slide Arrows */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border border-zinc-700 bg-[#1a1815] text-white flex items-center justify-center hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all shadow-lg"
              aria-label="Previous Coffee"
            >
              <FaChevronLeft size={16} />
            </button>
            <button
              onClick={scrollRight}
              className="w-12 h-12 rounded-full border border-zinc-700 bg-[#1a1815] text-white flex items-center justify-center hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all shadow-lg"
              aria-label="Next Coffee"
            >
              <FaChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Automatic Horizontal Sliding Track */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory py-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="w-[280px] sm:w-[320px] md:w-[350px] shrink-0 snap-start"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCoffee;