import { Link } from "react-router-dom";
import { FaImages } from "react-icons/fa";
import useReveal from "../../Hooks/UseReveal";

import heroVideo from "../../assets/videos/gallery_Video2.mp4";
// import posterImg from "../../assets/images/gallery/gallery-hero.webp";

const GalleryHero = () => {
  useReveal(".gallery-hero");

  return (
    <section className="gallery-hero relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F0E0D] pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* Background Video */}
      <video
        src={heroVideo}
        // poster={posterImg}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Amber Glow */}
      <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-amber-500/20 blur-[140px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500 text-black font-bold text-sm mb-6 shadow-lg shadow-amber-500/20">
          <FaImages />
          Coffee Moments
        </span>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
          Visual Gallery
        </h1>

        <p className="mt-6 text-zinc-300 leading-8 text-lg font-light max-w-2xl mx-auto">
          Explore our vibrant café spaces, handcrafted pour-overs, artisan roasting moments, and the warm community shared over coffee.
        </p>

        <div className="flex justify-center items-center gap-3 mt-8 text-sm font-semibold text-zinc-300">
          <Link to="/" className="hover:text-amber-400 transition-colors">
            Home
          </Link>
          <span className="text-zinc-600">/</span>
          <span className="text-amber-400">Gallery</span>
        </div>
      </div>
    </section>
  );
};

export default GalleryHero;