import { Link } from "react-router-dom";
import { FaArrowRight, FaBookOpen } from "react-icons/fa";
import useReveal from "../../Hooks/UseReveal";
import LazyVideo from "../Comman/LazyVideo";
import HeroVideo from "../../assets/videos/Gallery_Video3.mp4";

const BlogHero = () => {
  useReveal(".blog-hero");

  return (
    <section className="blog-hero relative min-h-[85vh] sm:min-h-screen flex items-center overflow-hidden bg-[#0F0E0D] pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
      <LazyVideo
        src={HeroVideo}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 page-container">
        <span className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-amber-500 text-black font-bold text-xs sm:text-sm mb-4 sm:mb-6 shadow-lg shadow-amber-500/20">
          <FaBookOpen />
          Coffee Journal
        </span>

        <h1 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-white tracking-tight max-w-4xl">
          Stories, Brewing Tips &
          <span className="text-amber-400"> Coffee Culture</span>
        </h1>

        <p className="mt-4 sm:mt-6 text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed sm:leading-8 max-w-2xl font-light">
          Discover expert pour-over tutorials, roasting science, highland coffee
          farm origin stories, and everything that makes every cup
          extraordinary.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-5 mt-6 sm:mt-8">
          <Link
            to="/shop"
            className="text-center px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-amber-500 text-black font-bold hover:bg-amber-400 hover:scale-105 transition-all shadow-lg shadow-amber-500/20 text-sm sm:text-base"
          >
            Shop Coffee
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-zinc-700 bg-black/40 backdrop-blur-md text-white font-semibold hover:border-amber-500 hover:text-amber-400 transition-all text-sm sm:text-base"
          >
            Contact Us
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
