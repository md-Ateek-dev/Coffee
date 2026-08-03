import { FaArrowDown } from "react-icons/fa";

const ScrollIndicator = () => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight - 80,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToNext}
      className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer group z-20 focus:outline-none"
      aria-label="Scroll down to next section"
    >
      <span className="text-xs uppercase tracking-[5px] text-zinc-400 group-hover:text-amber-400 transition-colors font-semibold">
        Scroll
      </span>
      <div className="w-8 h-8 rounded-full border border-amber-500/40 bg-black/40 backdrop-blur-md flex items-center justify-center mt-2 group-hover:bg-amber-500 group-hover:text-black transition-all">
        <FaArrowDown className="text-amber-400 group-hover:text-black text-xs" />
      </div>
    </button>
  );
};

export default ScrollIndicator;