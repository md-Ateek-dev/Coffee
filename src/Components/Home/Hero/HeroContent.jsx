import { Link } from "react-router-dom";
import HeroStats from "./HeroStates";
import MagneticButton from "../../Comman/MagneticButton";
const HeroContent = () => {
  return (
    <div className="z-10">

      {/* Subtitle */}
      <p className="hero-subtitle uppercase tracking-[6px] text-amber-500 mb-5">
        Premium Coffee Experience
      </p>

      {/* Heading */}
<h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">        Brewed
        <br />
        for Every
        <br />
        Beautiful Morning
      </h1>

      {/* Description */}
<p className="hero-text text-zinc-400 mt-6 md:mt-8 max-w-lg leading-7 md:leading-8">        Discover handcrafted coffee made from carefully selected beans that
        bring warmth, aroma and unforgettable taste to every cup.
      </p>

      {/* Buttons */}
<div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4">
        <Link to="/shop">
  <MagneticButton
    className="hero-btn px-8 py-4 rounded-full bg-amber-500 text-black font-semibold hover:bg-amber-400 transition"
  >
    Shop Now
  </MagneticButton>
</Link>

       <Link to="/menu">
  <MagneticButton
    className="hero-btn px-8 py-4 rounded-full border border-white/20 hover:border-amber-500 transition"
  >
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