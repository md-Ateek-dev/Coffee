import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import useReveal from "../../Hooks/UseReveal";
import LazyVideo from "../Comman/LazyVideo";
import HeroVideo from "../../assets/videos/Gallery_Video4.mp4";

const ShopHero = () => {
  useReveal(".shop-hero");

  return (
    <section className="shop-hero relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#0F0E0D] pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
      <LazyVideo
        src={HeroVideo}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute top-16 sm:top-20 right-8 sm:right-20 w-56 sm:w-96 h-56 sm:h-96 bg-amber-500/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 text-center page-container max-w-4xl">
        <span className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-amber-500 text-black font-bold text-xs sm:text-sm mb-4 sm:mb-6 shadow-lg shadow-amber-500/20">
          <FaShoppingBag />
          Premium Collection
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-tight">
          Specialty Coffee Shop
        </h1>

        <p className="mt-4 sm:mt-6 max-w-2xl mx-auto text-white leading-relaxed sm:leading-8 text-sm sm:text-base md:text-lg font-light px-2">
          Discover freshly roasted micro-lot beans, handcrafted specialty
          beverages, and premium brewing accessories curated for true coffee
          lovers.
        </p>

        <div className="flex justify-center items-center gap-2 sm:gap-3 mt-6 sm:mt-8 text-xs sm:text-sm font-semibold text-zinc-300">
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
