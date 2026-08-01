import { Link } from "react-router-dom";
import { FaArrowDown, FaCoffee } from "react-icons/fa";
import useReveal from "../../Hooks/UseReveal";

import HeroVideo from "../../assets/videos/Gallery_Video3.mp4";
// import posterBg from "../../assets/images/menu/menu-hero.webp";

const MenuHero = () => {
  useReveal(".menu-hero");

  return (
    <section className="menu-hero relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F0E0D] pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* Background Video */}
      <video
        src={HeroVideo}
        // poster={posterBg}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Amber Glow */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-amber-500/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500 text-black font-bold text-sm mb-6 shadow-lg shadow-amber-500/20">
          <FaCoffee />
          Crafted Menu
        </span>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
          Handcrafted Coffee
          <br />
          For Every Mood
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-zinc-300 leading-8 text-lg font-light">
          From intense ristretto shots and creamy lattes to slow-steeped cold brews and artisan desserts, explore our full menu.
        </p>

        {/* Breadcrumb */}
        <div className="flex justify-center items-center gap-3 mt-8 text-sm font-semibold text-zinc-300">
          <Link to="/" className="hover:text-amber-400 transition-colors">
            Home
          </Link>
          <span className="text-zinc-600">/</span>
          <span className="text-amber-400">Menu</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-amber-500 text-xl">
        <FaArrowDown />
      </div>
    </section>
  );
};

export default MenuHero;