import { Link } from "react-router-dom";
import { FaCoffee, FaChevronDown } from "react-icons/fa";
import { useRef } from "react";
import useStaggerReveal from "../../Hooks/useStaggerReveal";
import LazyVideo from "../Comman/LazyVideo";
import HeroVideo from "../../assets/videos/Gallery_Video3.mp4";

const MenuHero = () => {
  const containerRef = useRef(null);

  useStaggerReveal(containerRef, ".hero-reveal", 0.12);

  return (
    <section className="menu-hero relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#0F0E0D] pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
      {/* Background video */}
      <LazyVideo
        src={HeroVideo}
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/35 to-[#0F0E0D]" />
      <div className="absolute top-16 sm:top-20 left-8 sm:left-20 w-56 sm:w-96 h-56 sm:h-96 bg-amber-500/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div
        ref={containerRef}
        className="relative z-10 text-center page-container max-w-4xl px-4"
      >
        <span className="hero-reveal inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-amber-500 text-black font-bold text-xs sm:text-sm mb-4 sm:mb-6 shadow-lg shadow-amber-500/20 hover:scale-105 transition-transform duration-300">
          <FaCoffee />
          Crafted Menu
        </span>

        <h1 className="hero-reveal text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-tight">
          Handcrafted Coffee
          <br />
          <span className="text-amber-500">For Every Mood</span>
        </h1>

        <p className="hero-reveal mt-4 sm:mt-6 max-w-2xl mx-auto text-white/90 leading-relaxed sm:leading-8 text-sm sm:text-base md:text-lg font-light px-2">
          From intense ristretto shots and creamy lattes to slow-steeped cold
          brews and artisan desserts, explore our full menu.
        </p>

        <div className="hero-reveal flex justify-center items-center gap-2 sm:gap-3 mt-6 sm:mt-8 text-xs sm:text-sm font-semibold text-zinc-300">
          <Link
            to="/"
            className="hover:text-amber-400 transition-colors duration-300"
          >
            Home
          </Link>
          <span className="text-zinc-600">/</span>
          <span className="text-amber-400">Menu</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 animate-bounce">
        {/* <span className="text-[10px] sm:text-xs uppercase tracking-[3px] text-zinc-400">
          Scroll
        </span> */}
        {/* <FaChevronDown className="text-amber-500 text-base sm:text-lg" /> */}
      </div>
    </section>
  );
};

export default MenuHero;
