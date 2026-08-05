import { Link } from "react-router-dom";
// import { FaArrowDown } from "react-icons/fa";
import useReveal from "../../Hooks/UseReveal";
import LazyVideo from "../Comman/LazyVideo";
import HeroVideo from "../../assets/videos/Gallery_Video5.mp4";

const AboutHero = () => {
  useReveal(".about-hero");

  return (
    <section className="about-hero relative min-h-[85vh] sm:min-h-screen overflow-hidden flex items-center bg-[#0F0E0D] pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
      <LazyVideo
        src={HeroVideo}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute top-16 sm:top-24 left-8 sm:left-24 w-48 sm:w-80 h-48 sm:h-80 rounded-full bg-amber-500/20 blur-[130px] pointer-events-none" />

      <div className="relative z-10 page-container">
        <div className="max-w-3xl">
          <span className="uppercase tracking-[3px] sm:tracking-[6px] text-amber-500 font-bold text-xs sm:text-sm">
            Crafting Quality Since 2018
          </span>

          <h1 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-white tracking-tight">
            Brewing Stories,
            <br />
            One Cup At A Time
          </h1>

          <p className="mt-4 sm:mt-6 text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed sm:leading-8 font-light">
            At Aura Coffee, every cup tells a story. From carefully sourced
            highland beans to expertly crafted espresso, we believe specialty
            coffee is more than a drink—it's a sensory experience shared with
            passionate people.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-5 mt-6 sm:mt-8">
            <Link
              to="/shop"
              className="text-center px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-amber-500 text-black font-bold hover:bg-amber-400 hover:scale-105 transition-all shadow-lg shadow-amber-500/20 text-sm sm:text-base"
            >
              Explore Coffee
            </Link>
            <Link
              to="/contact"
              className="text-center px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-zinc-700 text-white font-semibold hover:border-amber-500 hover:text-amber-400 transition-all bg-black/30 backdrop-blur-md text-sm sm:text-base"
            >
              Contact Us
            </Link>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 mt-6 sm:mt-8 text-xs sm:text-sm font-semibold text-zinc-300">
            <Link to="/" className="hover:text-amber-400 transition-colors">
              Home
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-amber-400">About Us</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        {/* <FaArrowDown className="text-amber-500 text-lg sm:text-xl" /> */}
      </div>
    </section>
  );
};

export default AboutHero;
