import { useLayoutEffect } from "react";
import { heroAnimation } from "../../../Animation/Hero";
import useMouseParallax from "../../../Hooks/useMouseParallax";

import HeroContent from "./HeroContent";
// import HeroImage from "./HeroImage";
import ScrollIndicator from "./ScrollIndicator";

import heroVideo from "../../../assets/videos/Gallery_Video1.mp4";
// import coffeeCup from "../../../assets/images/hero/coffee-cup.png";

const Hero = () => {
  useMouseParallax();

  useLayoutEffect(() => {
    heroAnimation();
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center pt-32 sm:pt-36 lg:pt-40 pb-20 bg-[#0F0E0D]">
      {/* Fullscreen Ambient Video Background */}
      <video
        src={heroVideo}
        // poster={coffeeCup}
        className="absolute inset-0 w-full h-full object-cover scale-105"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark Ambient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/75" />

      {/* Decorative Golden Glow */}
      <div className="absolute top-28 left-10 w-96 h-96 rounded-full bg-amber-500/15 blur-[150px] pointer-events-none" />

      {/* Main Hero Container Grid */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <HeroContent />
        {/* <HeroImage /> */}
      </div>

      {/* Smooth Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
};

export default Hero;