import products from "../../../../Data/Products";
import ShowcaseCard from "./ShowcaseCard";
import useHorizontalScroll from "../../../../Hooks/useHorizontalScroll";
import { FaChevronLeft, FaChevronRight, FaCompass } from "react-icons/fa";

const HorizontalShowcase = () => {
  const { sectionRef, trackRef, currentIndex, scrollNext, scrollPrev } =
    useHorizontalScroll({ extraHeight: 0.7 });

  return (
    <section
      ref={sectionRef}
      className="horizontal-section relative bg-[#0B0A09] overflow-hidden border-t border-b border-zinc-800/60"
    >
      {/* Sticky Fullscreen Container */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-between py-6 relative">
        {/* Section Header */}
        <div className="max-w-7xl w-full mx-auto px-6 flex items-center justify-between z-10 pt-2">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-1.5">
              <FaCompass /> Collection
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Featured Roasts Showcase
            </h2>
          </div>

          {/* Navigation Controls & Counter */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block text-xs font-mono text-zinc-400 bg-zinc-900/90 px-3.5 py-1.5 rounded-full border border-zinc-800">
              <span className="text-amber-400 font-bold">
                {String(currentIndex + 1).padStart(2, "0")}
              </span>{" "}
              / {String(products.length).padStart(2, "0")}
            </div>

            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={scrollPrev}
                disabled={currentIndex === 0}
                className="w-10 h-10 rounded-full bg-[#181715] border border-zinc-700/80 text-white flex items-center justify-center hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-md"
                aria-label="Previous Coffee"
              >
                <FaChevronLeft size={14} />
              </button>
              <button
                onClick={scrollNext}
                disabled={currentIndex >= products.length - 1}
                className="w-10 h-10 rounded-full bg-[#181715] border border-zinc-700/80 text-white flex items-center justify-center hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-md"
                aria-label="Next Coffee"
              >
                <FaChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Pinned Horizontal Track */}
        <div className="w-full overflow-hidden my-auto py-2">
          <div
            ref={trackRef}
            className="horizontal-track flex gap-6 px-6 md:px-16 items-center w-max transition-transform duration-100 ease-out"
          >
            {products.map((product) => (
              <ShowcaseCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Mobile Navigation Controls Below Cards */}
        <div className="sm:hidden flex items-center justify-center gap-3 my-2 z-10">
          <button
            onClick={scrollPrev}
            disabled={currentIndex === 0}
            className="w-9 h-9 rounded-full bg-[#181715] border border-zinc-700/80 text-white flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-md"
            aria-label="Previous Coffee"
          >
            <FaChevronLeft size={14} />
          </button>
          <div className="text-xs font-mono text-zinc-400 bg-zinc-900/90 px-3 py-1 rounded-full border border-zinc-800">
            <span className="text-amber-400 font-bold">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>{" "}
            / {String(products.length).padStart(2, "0")}
          </div>
          <button
            onClick={scrollNext}
            disabled={currentIndex >= products.length - 1}
            className="w-9 h-9 rounded-full bg-[#181715] border border-zinc-700/80 text-white flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-md"
            aria-label="Next Coffee"
          >
            <FaChevronRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HorizontalShowcase;
