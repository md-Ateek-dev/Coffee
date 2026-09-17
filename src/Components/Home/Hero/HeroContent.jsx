import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HeroStats from "./HeroStates";
import MagneticButton from "../../Comman/MagneticButton";

const HeroContent = () => {
  return (
    <div className="z-10 text-left">
      {/* Subtitle Badge with Framer Motion soft pulse */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="hero-subtitle inline-flex items-center gap-2 uppercase tracking-[3px] sm:tracking-[5px] text-amber-400 font-bold text-[11px] sm:text-xs bg-amber-500/10 border border-amber-500/30 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 shadow-sm shadow-amber-500/10 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
          Premium Coffee Experience
        </span>
      </motion.div>

      {/* Responsive Fluid Heading */}
      <h1 className="hero-title text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-[1.12] tracking-tight">
        Brewed <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
          For Every
        </span>{" "}
        <br />
        Beautiful Morning
      </h1>

      {/* Description */}
      <p className="hero-text text-zinc-300 mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl font-light">
        Discover handcrafted specialty coffee made from ethically sourced
        micro-lot highland beans. Unforgettable aroma, velvety texture, and
        master roasting in every cup.
      </p>

      {/* Buttons with Framer Motion hover & tap */}
      <div className="mt-6 sm:mt-8 md:mt-10 flex flex-wrap gap-3 sm:gap-4 items-center">
        <Link to="/shop">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <MagneticButton className="hero-btn px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 text-black font-bold hover:shadow-lg hover:shadow-amber-500/25 transition-all text-xs sm:text-sm">
              Shop Specialty Coffee
            </MagneticButton>
          </motion.div>
        </Link>

        <Link to="/menu">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <MagneticButton className="hero-btn px-6 sm:px-8 py-3 sm:py-3.5 rounded-full border border-zinc-700/80 text-white font-semibold hover:border-amber-400 hover:text-amber-300 transition-all bg-black/40 backdrop-blur-md text-xs sm:text-sm">
              Explore Menu
            </MagneticButton>
          </motion.div>
        </Link>
      </div>

      {/* Stats */}
      <HeroStats />
    </div>
  );
};

export default HeroContent;
