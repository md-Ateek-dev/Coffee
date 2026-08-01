import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";

import useReveal from "../../Hooks/UseReveal";

import HeroVideo from "../../assets/videos/Gallery_Video5.mp4";

const AboutHero = () => {
  useReveal(".about-hero");

  return (
    <section className="about-hero relative min-h-screen overflow-hidden flex items-center bg-[#0F0E0D] pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* Background Video */}
      <video
        src={HeroVideo}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Amber Glow */}
      <div className="absolute top-24 left-24 w-80 h-80 rounded-full bg-amber-500/20 blur-[130px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <span className="uppercase tracking-[6px] text-amber-500 font-bold text-sm">
            Crafting Quality Since 2018
          </span>

          <h1 className="mt-4 text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-white tracking-tight">
            Brewing Stories,
            <br />
            One Cup At A Time
          </h1>

          <p className="mt-6 text-zinc-300 text-lg leading-8 font-light">
            At Aura Coffee, every cup tells a story. From carefully sourced highland beans to expertly crafted espresso, we believe specialty coffee is more than a drink—it's a sensory experience shared with passionate people.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-8">
            <Link
              to="/shop"
              className="px-8 py-4 rounded-full bg-amber-500 text-black font-bold hover:bg-amber-400 hover:scale-105 transition-all shadow-lg shadow-amber-500/20"
            >
              Explore Coffee
            </Link>

            <Link
              to="/contact"
              className="px-8 py-4 rounded-full border border-zinc-700 text-white font-semibold hover:border-amber-500 hover:text-amber-400 transition-all bg-black/30 backdrop-blur-md"
            >
              Contact Us
            </Link>
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center gap-3 mt-8 text-sm font-semibold text-zinc-300">
            <Link to="/" className="hover:text-amber-400 transition-colors">
              Home
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-amber-400">About Us</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <FaArrowDown className="text-amber-500 text-xl" />
      </div>
    </section>
  );
};

export default AboutHero;