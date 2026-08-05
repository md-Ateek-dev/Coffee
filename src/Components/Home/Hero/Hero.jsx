import { useLayoutEffect } from "react";
import { heroAnimation } from "../../../Animation/Hero";
import useMouseParallax from "../../../Hooks/useMouseParallax";

import HeroContent from "./HeroContent";
// import HeroImage from "./HeroImage";
// import ScrollIndicator from "./ScrollIndicator";

import LazyVideo from "../../Comman/LazyVideo";
import heroVideo from "../../../assets/videos/Gallery_Video1.mp4";
// import coffeeCup from "../../../assets/images/hero/coffee-cup.png";

const Hero = () => {
  useMouseParallax();

  useLayoutEffect(() => {
    heroAnimation();
  }, []);

  return (
    <section className="relative min-h-[85vh] sm:min-h-screen overflow-hidden flex items-center justify-center pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 bg-[#0F0E0D]">
      {/* Fullscreen Ambient Video Background */}
      <LazyVideo
        src={heroVideo}
        priority
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      {/* Dark Ambient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/40 to-black/55" />

      {/* Decorative Golden Glow */}
      <div className="absolute top-20 sm:top-28 left-4 sm:left-10 w-56 sm:w-96 h-56 sm:h-96 rounded-full bg-amber-500/15 blur-[150px] pointer-events-none" />

      <div className="relative z-10 page-container grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
        <HeroContent />
        {/* <HeroImage /> */}
      </div>

      {/* Smooth Scroll Indicator */}
      {/* <ScrollIndicator /> */}
    </section>
  );
};

export default Hero;
