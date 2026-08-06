import { useLayoutEffect } from "react";
import { heroAnimation } from "../../../Animation/Hero";
import useMouseParallax from "../../../Hooks/useMouseParallax";

import HeroContent from "./HeroContent";
import LazyVideo from "../../Comman/LazyVideo";
import heroVideo from "../../../assets/videos/Gallery_Video1.mp4";

const Hero = () => {
  useMouseParallax();

  useLayoutEffect(() => {
    heroAnimation();
  }, []);

  return (
    <section className="relative min-h-[100dvh] sm:min-h-screen overflow-hidden flex items-start sm:items-center justify-center pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-6 sm:pb-12 lg:pb-20 bg-[#0F0E0D]">
      {/* Fullscreen Ambient Video Background */}
      <LazyVideo
        src={heroVideo}
        priority
        className="absolute inset-0 w-full h-full object-cover scale-100 sm:scale-105"
      />

      {/* Dark Ambient Overlay - Mobile pe thoda zyada dark for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 sm:bg-gradient-to-r sm:from-black/30 sm:via-black/40 sm:to-black/55" />

      {/* Decorative Golden Glow */}
      <div className="absolute top-10 sm:top-28 left-2 sm:left-10 w-40 sm:w-96 h-40 sm:h-96 rounded-full bg-amber-500/15 blur-[100px] sm:blur-[150px] pointer-events-none" />

      <div className="relative z-10 page-container w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-16 items-start sm:items-center">
        <HeroContent />
      </div>
    </section>
  );
};

export default Hero;
