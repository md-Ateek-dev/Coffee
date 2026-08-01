import { FaArrowDown } from "react-icons/fa";

const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">

      <span className="text-xs uppercase tracking-[5px] text-zinc-400">
        Scroll
      </span>

      <FaArrowDown className="mt-3 text-amber-500" />

    </div>
  );
};

export default ScrollIndicator;