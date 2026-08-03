import heroCoffee from "../../../assets/images/hero/coffee-cup.png";
import FloatingBeans from "./FloatingBeans";

const HeroImage = () => {
  return (
    <div className="relative flex justify-center items-center mt-6 sm:mt-10 lg:mt-0">
      {/* Background Glow */}
      <div
        data-speed="1"
        className="hero-glow absolute w-[340px] sm:w-[420px] h-[340px] sm:h-[420px] rounded-full bg-amber-500/20 blur-[130px] pointer-events-none"
      />

      {/* Animated Steam */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 pointer-events-none">
        <span className="steam steam-1"></span>
        <span className="steam steam-2"></span>
        <span className="steam steam-3"></span>
      </div>

      {/* Coffee Cup Graphic */}
      <img
        src={heroCoffee}
        alt="Artisanal Coffee Cup"
        data-speed="2"
        className="hero-image relative z-10 w-[80%] sm:w-[70%] lg:w-full max-w-md mx-auto drop-shadow-[0_25px_35px_rgba(0,0,0,0.8)]"
      />

      {/* Floating Coffee Beans */}
      <FloatingBeans />
    </div>
  );
};

export default HeroImage;