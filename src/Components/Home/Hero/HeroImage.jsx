import heroCoffee from "../../../assets/images/hero/coffee-cup.png";
import FloatingBeans from "./FloatingBeans";

const HeroImage = () => {
  return (
    <div className="relative flex justify-center items-center mt-12 sm:mt-16 lg:mt-20">
      {/* Background Glow */}
      <div
        data-speed="1"
        className="hero-glow absolute w-[360px] sm:w-[440px] h-[360px] sm:h-[440px] rounded-full bg-amber-500/20 blur-[130px] pointer-events-none"
      />

      {/* Steam */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 pointer-events-none">
        <span className="steam steam-1"></span>
        <span className="steam steam-2"></span>
        <span className="steam steam-3"></span>
      </div>

      {/* Coffee Cup - Shifted comfortably lower */}
      <img
        src={heroCoffee}
        alt="Coffee Cup"
        data-speed="2"
        className="hero-image relative z-10 w-[80%] sm:w-[70%] lg:w-full max-w-md mx-auto translate-y-8 sm:translate-y-12 lg:translate-y-16"
      />

      <FloatingBeans />
    </div>
  );
};

export default HeroImage;