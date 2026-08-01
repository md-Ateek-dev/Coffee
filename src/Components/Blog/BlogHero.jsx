import { Link } from "react-router-dom";
import { FaArrowRight, FaBookOpen } from "react-icons/fa";
import useReveal from "../../Hooks/UseReveal";

import HeroVideo from "../../assets/videos/Gallery_Video2.mp4";

const BlogHero = () => {
  useReveal(".blog-hero");

  return (
    <section className="blog-hero relative min-h-screen flex items-center overflow-hidden bg-[#0F0E0D] pt-28 pb-16 lg:pt-36 lg:pb-24">
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

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500 text-black font-bold text-sm mb-6 shadow-lg shadow-amber-500/20">
          <FaBookOpen />
          Coffee Journal
        </span>

        <h1 className="mt-4 text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-white tracking-tight max-w-4xl">
          Stories, Brewing Tips &
          <span className="text-amber-400"> Coffee Culture</span>
        </h1>

        <p className="mt-6 text-zinc-300 text-lg leading-8 max-w-2xl font-light">
          Discover expert pour-over tutorials, roasting science, highland coffee farm origin stories, and everything that makes every cup extraordinary.
        </p>

        <div className="flex flex-wrap gap-5 mt-8">
          <Link
            to="/shop"
            className="px-8 py-4 rounded-full bg-amber-500 text-black font-bold hover:bg-amber-400 hover:scale-105 transition-all shadow-lg shadow-amber-500/20"
          >
            Shop Coffee
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-zinc-700 bg-black/40 backdrop-blur-md text-white font-semibold hover:border-amber-500 hover:text-amber-400 transition-all"
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