import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import useReveal from "../../Hooks/UseReveal";

import HeroVideo from "../../assets/videos/Gallery_Video4.mp4";
const ShopHero = () => {
  useReveal(".shop-hero");

  return (
    <section className="shop-hero relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F0E0D] pt-28 pb-16 lg:pt-36 lg:pb-24">
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
      <div className="absolute top-20 right-20 w-96 h-96 bg-amber-500/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500 text-black font-bold text-sm mb-6 shadow-lg shadow-amber-500/20">
          <FaShoppingBag />
          Premium Collection
        </span>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
          Specialty Coffee Shop
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-zinc-300 leading-8 text-lg font-light">
          Discover freshly roasted micro-lot beans, handcrafted specialty beverages, and premium brewing accessories curated for true coffee lovers.
        </p>

        {/* Breadcrumb */}
        <div className="flex justify-center items-center gap-3 mt-8 text-sm font-semibold text-zinc-300">
          <Link to="/" className="hover:text-amber-400 transition-colors">
            Home
          </Link>
          <span className="text-zinc-600">/</span>
          <span className="text-amber-400">Shop</span>
        </div>
      </div>
    </section>
  );
};

export default ShopHero;