import { useLayoutEffect } from "react";
import { heroAnimation } from "../../../Animation/Hero";
import useMouseParallax from "../../../Hooks/useMouseParallax";

import HeroContent from "./HeroContent";
import CoffeeCanvas3D from "./CoffeeCanvas3D";
import LazyVideo from "../../Comman/LazyVideo";
import heroVideo from "../../../assets/videos/Gallery_Video1.mp4";
import heroVideoWebm from "../../../assets/videos/Coffee_Animation.mp4";

const Hero = () => {
  useMouseParallax();

  useLayoutEffect(() => {
    heroAnimation();
  }, []);

  return (
    <section className="relative min-h-[100svh] overflow-hidden flex items-center justify-center pt-24 sm:pt-28 md:pt-32 pb-10 sm:pb-14 bg-[#431602]">
      {/* Fullscreen Ambient Video Background */}
      <LazyVideo
        src={heroVideoWebm}
        webmSrc={heroVideoWebm}
        priority
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Decorative Golden Glows */}
      <div className="absolute top-10 sm:top-24 left-2 sm:left-10 w-48 sm:w-96 h-48 sm:h-96 rounded-full bg-amber-500/12 blur-[100px] sm:blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-2 sm:right-10 w-60 sm:w-96 h-60 sm:h-96 rounded-full bg-amber-600/10 blur-[100px] sm:blur-[150px] pointer-events-none" />

      <div className="relative z-10 page-container w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <HeroContent />
        {/* <CoffeeCanvas3D /> */}
      </div>
    </section>
  );
};

export default Hero;
