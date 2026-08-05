import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCamera, FaChevronLeft, FaChevronRight, FaTimes, FaExpand } from "react-icons/fa";
import { useHorizontalScroll } from "../../Hooks/useHorizontalScroll";

import coffee1 from "../../assets/images/gallery/coffee-1.webp";
import coffee2 from "../../assets/images/gallery/coffee-2.webp";
import coffee3 from "../../assets/images/gallery/coffee-3.webp";
import coffee4 from "../../assets/images/gallery/coffee-4.webp";

const coffeeMoments = [
  {
    id: 1,
    title: "Morning Espresso Ritual",
    image: coffee1,
    category: "Espresso",
    desc: "Single-origin roast with dense, golden crema.",
  },
  {
    id: 2,
    title: "Master Barista Pour",
    image: coffee2,
    category: "Latte Art",
    desc: "Handcrafted velvety microfoam poured with skill.",
  },
  {
    id: 3,
    title: "Highland Harvest Beans",
    image: coffee3,
    category: "Coffee Beans",
    desc: "Hand-picked arabica cherries from sustainable farms.",
  },
  {
    id: 4,
    title: "Cozy Café Ambiance",
    image: coffee4,
    category: "Atmosphere",
    desc: "Warm lighting, soft music, and fresh coffee aroma.",
  },
  {
    id: 5,
    title: "Artisan Cold Brew",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=800&auto=format&fit=crop",
    category: "Cold Brew",
    desc: "Slow drip 18-hour cold steeping for exceptionally smooth notes.",
  },
  {
    id: 6,
    title: "Fresh Baked Pastries",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop",
    category: "Bakery",
    desc: "Buttery, flaky pastries baked fresh every morning at dawn.",
  },
];

const CoffeeMoments = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const {
    sectionRef,
    trackRef,
    currentIndex,
    scrollNext,
    scrollPrev,
  } = useHorizontalScroll({ extraHeight: 0.7 });

  return (
    <section
      ref={sectionRef}
      className="coffee-moments-horizontal relative bg-[#0B0A09] overflow-hidden border-t border-b border-zinc-800/60"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-between py-6 relative">
        {/* Heading */}
        <div className="max-w-7xl w-full mx-auto px-6 flex items-center justify-between z-10 pt-2">
          <div>
            <span className="uppercase tracking-[4px] text-amber-500 font-semibold text-xs">
              Moments In Motion
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-1">
              Every Cup Has A Story
            </h2>
          </div>

          {/* Controls & Counter */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block text-xs font-mono text-zinc-400 bg-zinc-900/90 px-3.5 py-1.5 rounded-full border border-zinc-800">
              <span className="text-amber-400 font-bold">
                0{currentIndex + 1}
              </span>{" "}
              / 0{coffeeMoments.length}
            </div>

            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={scrollPrev}
                disabled={currentIndex === 0}
                className="w-10 h-10 rounded-full bg-[#181715] border border-zinc-700/80 text-white flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-md"
                aria-label="Previous Moment"
              >
                <FaChevronLeft size={14} />
              </button>
              <button
                onClick={scrollNext}
                disabled={currentIndex >= coffeeMoments.length - 1}
                className="w-10 h-10 rounded-full bg-[#181715] border border-zinc-700/80 text-white flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-md"
                aria-label="Next Moment"
              >
                <FaChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Pinned Horizontal Gallery Track */}
        <div className="w-full overflow-hidden my-auto py-2">
          <div
            ref={trackRef}
            className="flex gap-6 md:gap-8 px-6 md:px-16 items-center w-max transition-transform duration-100 ease-out"
          >
            {coffeeMoments.map((item, idx) => (
              <div
                key={item.id}
                className="w-[260px] sm:w-[310px] md:w-[350px] bg-[#161513] rounded-2xl overflow-hidden border border-zinc-800/90 hover:border-amber-500/80 transition-all duration-300 shadow-xl group shrink-0 relative flex flex-col justify-between"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/3] bg-[#0f0e0d]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161513] via-transparent to-transparent" />

                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 bg-amber-500 text-black px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                    {item.category}
                  </span>

                  {/* Expand Lightbox Button */}
                  <button
                    onClick={() => setSelectedImage(item)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md text-white flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all shadow-md"
                    aria-label="Expand image"
                  >
                    <FaExpand size={11} />
                  </button>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-1.5 text-amber-400 text-[11px] font-bold mb-1">
                      <FaCamera />
                      <span>Shot #{idx + 1}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-zinc-400 text-xs mt-1.5 leading-relaxed line-clamp-2">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                    <span className="text-[10px] text-zinc-500 font-mono uppercase">
                      GALLERY ITEM
                    </span>
                    <Link
                      to="/shop"
                      className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 hover:gap-1.5 transition-all"
                    >
                      <span>Explore</span>
                      <FaArrowRight size={10} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Controls Below Cards */}
        <div className="sm:hidden flex items-center justify-center gap-3 my-2 z-10">
          <button
            onClick={scrollPrev}
            disabled={currentIndex === 0}
            className="w-9 h-9 rounded-full bg-[#181715] border border-zinc-700/80 text-white flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-md"
            aria-label="Previous Moment"
          >
            <FaChevronLeft size={14} />
          </button>
          <div className="text-xs font-mono text-zinc-400 bg-zinc-900/90 px-3.5 py-1.5 rounded-full border border-zinc-800">
            <span className="text-amber-400 font-bold">
              0{currentIndex + 1}
            </span>{" "}
            / 0{coffeeMoments.length}
          </div>
          <button
            onClick={scrollNext}
            disabled={currentIndex >= coffeeMoments.length - 1}
            className="w-9 h-9 rounded-full bg-[#181715] border border-zinc-700/80 text-white flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-md"
            aria-label="Next Moment"
          >
            <FaChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-6">
          <div className="relative max-w-3xl w-full bg-[#181715] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/80 text-white flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all"
            >
              <FaTimes />
            </button>
            <div className="aspect-[16/10] overflow-hidden bg-black">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <span className="text-amber-500 font-bold uppercase tracking-widest text-xs">
                {selectedImage.category}
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                {selectedImage.title}
              </h3>
              <p className="text-zinc-400 mt-2 text-sm">
                {selectedImage.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CoffeeMoments;