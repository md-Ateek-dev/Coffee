import { Link } from "react-router-dom";
import HeroStats from "./HeroStates";
import MagneticButton from "../../Comman/MagneticButton";

const HeroContent = () => {
  return (
    <div className="z-10 text-left">
      {/* Subtitle Badge */}
      <span className="hero-subtitle inline-block uppercase tracking-[5px] text-amber-400 font-bold text-xs sm:text-sm bg-amber-500/10 border border-amber-500/30 px-4 py-2 rounded-full mb-6">
        ☕ Premium Coffee Experience
      </span>

      {/* Heading */}
      <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
        Brewed <br />
        <span className="text-amber-400">For Every</span> <br />
        Beautiful Morning
      </h1>

      {/* Description */}
      <p className="hero-text text-zinc-300 mt-6 text-base sm:text-lg leading-relaxed max-w-xl font-light">
        Discover handcrafted specialty coffee made from ethically sourced micro-lot highland beans. Unforgettable aroma, velvety texture, and master roasting in every cup.
      </p>

      {/* Buttons */}
      <div className="mt-8 sm:mt-10 flex flex-wrap gap-4 items-center">
        <Link to="/shop">
          <MagneticButton className="hero-btn px-8 py-4 rounded-full bg-amber-500 text-black font-bold hover:bg-amber-400 hover:scale-105 transition-all shadow-lg shadow-amber-500/20 text-sm">
            Shop Specialty Coffee
          </MagneticButton>
        </Link>

        <Link to="/menu">
          <MagneticButton className="hero-btn px-8 py-4 rounded-full border border-zinc-700 text-white font-semibold hover:border-amber-500 hover:text-amber-400 transition-all bg-black/40 backdrop-blur-md text-sm">
            Explore Menu
          </MagneticButton>
        </Link>
      </div>

      {/* Stats */}
      <HeroStats />
    </div>
  );
};

export default HeroContent;