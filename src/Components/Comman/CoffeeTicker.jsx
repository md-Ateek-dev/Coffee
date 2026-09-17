import { useRef } from "react";
import { FaCoffee, FaStar, FaLeaf } from "react-icons/fa";
import { GiCoffeeBeans } from "react-icons/gi";

const items = [
  { icon: FaCoffee, text: "Premium Arabica Beans" },
  { icon: FaStar, text: "Award Winning Roasters" },
  { icon: GiCoffeeBeans, text: "Ethically Sourced" },
  { icon: FaLeaf, text: "Sustainably Farmed" },
  { icon: FaCoffee, text: "Small Batch Roasted" },
  { icon: FaStar, text: "Expert Baristas" },
  { icon: GiCoffeeBeans, text: "Highland Single Origin" },
  { icon: FaLeaf, text: "Zero Compromise Quality" },
];

const MarqueeItem = ({ icon: Icon, text }) => (
  <span className="flex items-center gap-3 px-6 shrink-0">
    <span className="w-5 h-5 text-amber-500/70 shrink-0">
      <Icon size={16} />
    </span>
    <span className="text-xs font-semibold tracking-[0.2em] uppercase text-zinc-400 whitespace-nowrap">
      {text}
    </span>
    <span className="w-1 h-1 rounded-full bg-amber-500/40 mx-3 shrink-0" />
  </span>
);

const CoffeeTicker = ({ reverse = false, speed = 30 }) => {
  return (
    <div className="relative overflow-hidden py-3.5 border-y border-white/[0.05]">
      {/* fade edges */}
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#08070A] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#08070A] to-transparent z-10 pointer-events-none" />

      <div
        className={reverse ? "marquee-track-reverse" : "marquee-track"}
        style={{ animationDuration: `${speed}s` }}
      >
        {/* Doubled for seamless loop */}
        {[...items, ...items].map((item, i) => (
          <MarqueeItem key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CoffeeTicker;
