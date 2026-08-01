import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCamera, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import useReveal from "../../Hooks/UseReveal";

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
];

const CoffeeMoments = () => {
  useReveal(".coffee-moments");
  const [activeTab, setActiveTab] = useState(0);

  const prevTab = () => {
    setActiveTab((prev) => (prev - 1 + coffeeMoments.length) % coffeeMoments.length);
  };

  const nextTab = () => {
    setActiveTab((prev) => (prev + 1) % coffeeMoments.length);
  };

  return (
    <section className="coffee-moments py-24 bg-[#0F0E0D]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="uppercase tracking-[5px] text-amber-500 font-semibold text-sm">
            Coffee Moments
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Every Cup Has A Story
          </h2>
          <p className="mt-4 text-zinc-300 leading-8 text-base">
            Explore our curated gallery moments capturing peak roast perfection, barista craftsmanship, and cozy lounge spaces.
          </p>
        </div>

        {/* Carousel Showcase Controls */}
        <div className="flex items-center justify-between mb-8">
          <span className="text-zinc-400 font-medium text-sm">
            Featured Moment <strong className="text-amber-400">#{activeTab + 1}</strong> of {coffeeMoments.length}
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={prevTab}
              className="w-10 h-10 rounded-full border border-zinc-700 bg-[#161512] text-white flex items-center justify-center hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all"
            >
              <FaChevronLeft size={14} />
            </button>
            <button
              onClick={nextTab}
              className="w-10 h-10 rounded-full border border-zinc-700 bg-[#161512] text-white flex items-center justify-center hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all"
            >
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Grid Cards - High Contrast */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {coffeeMoments.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={`
                moment-card
                group
                cursor-pointer
                overflow-hidden
                rounded-3xl
                bg-[#1a1815]
                border
                transition-all
                duration-500
                ${
                  idx === activeTab
                    ? "border-amber-500 shadow-xl shadow-amber-500/10 scale-[1.02]"
                    : "border-zinc-700/60 hover:border-amber-500/60"
                }
              `}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="bg-amber-500 text-black px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold mb-2">
                  <FaCamera />
                  <span>Curated Moment</span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>

                <p className="mt-2 text-zinc-300 text-sm line-clamp-2">
                  {item.desc}
                </p>

                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-amber-400 hover:gap-3 transition-all"
                >
                  Explore Brews <FaArrowRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoffeeMoments;