import { useLayoutEffect } from "react";
import { heroAnimation } from "../../../Animation/Hero";
import useMouseParallax from "../../../Hooks/useMouseParallax";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import ScrollIndicator from "./ScrollIndicator";

const Hero = () => {
  useMouseParallax();

  useLayoutEffect(() => {
    heroAnimation();
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center pt-36 pb-20 sm:pt-40 lg:pt-48 lg:pb-28 bg-[#0F0E0D]">
      <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
        <HeroContent />
        <HeroImage />
      </div>
      <ScrollIndicator />
    </section>
  );
};

export default Hero;