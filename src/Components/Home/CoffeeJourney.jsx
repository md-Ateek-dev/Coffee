import { useHorizontalScroll } from "../../Hooks/useHorizontalScroll";
import { GiCoffeeBeans } from "react-icons/gi";
import { FaFire, FaMugHot, FaSmile, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const processSteps = [
  {
    id: "01",
    title: "Sourcing & Harvest",
    icon: <GiCoffeeBeans />,
    subtitle: "Organic Single-Origin",
    description:
      "Hand-picked arabica coffee cherries selected from high-altitude sustainable farms in Ethiopia.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "02",
    title: "Precision Roasting",
    icon: <FaFire />,
    subtitle: "Micro-Batch Roast",
    description:
      "Roasting each batch to perfection, unlocking complex notes of rich chocolate and berries.",
    image: "https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "Masterful Brewing",
    icon: <FaMugHot />,
    subtitle: "Artisan Touch",
    description:
      "Engineered extraction using calibrated water temperature for balanced flavor profiles.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "04",
    title: "The Experience",
    icon: <FaSmile />,
    subtitle: "Savor Every Sip",
    description:
      "Served at ideal temperature in handcrafted ceramics for an unforgettable coffee moment.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop",
  },
];

const CoffeeJourney = () => {
  const {
    sectionRef,
    trackRef,
    currentIndex,
    scrollNext,
    scrollPrev,
  } = useHorizontalScroll({ extraHeight: 1.1 });

  return (
    <section
      ref={sectionRef}
      className="journey-horizontal relative bg-[#0D0C0B] overflow-hidden border-t border-b border-zinc-800/60"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-between py-6 relative">
        {/* Header */}
        <div className="max-w-7xl w-full mx-auto px-6 flex items-center justify-between z-10 pt-2">
          <div>
            <span className="uppercase tracking-[4px] text-amber-500 font-semibold text-xs">
              Our Craft Process
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-1">
              From Farm To Your Cup
            </h2>
          </div>

          {/* Nav buttons & Counter */}
          <div className="flex items-center gap-3">
            <div className="text-xs font-mono text-zinc-400 bg-zinc-900/90 px-3.5 py-1.5 rounded-full border border-zinc-800">
              <span className="text-amber-400 font-bold">
                0{currentIndex + 1}
              </span>{" "}
              / 0{processSteps.length}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={scrollPrev}
                disabled={currentIndex === 0}
                className="w-10 h-10 rounded-full bg-[#181715] border border-zinc-700/80 text-white flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-md"
                aria-label="Previous Step"
              >
                <FaChevronLeft size={14} />
              </button>
              <button
                onClick={scrollNext}
                disabled={currentIndex >= processSteps.length - 1}
                className="w-10 h-10 rounded-full bg-[#181715] border border-zinc-700/80 text-white flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-md"
                aria-label="Next Step"
              >
                <FaChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Process Track */}
        <div className="w-full overflow-hidden my-auto py-2">
          <div
            ref={trackRef}
            className="flex gap-6 md:gap-8 px-6 md:px-16 items-center w-max transition-transform duration-100 ease-out"
          >
            {processSteps.map((step) => (
              <div
                key={step.id}
                className="w-[280px] sm:w-[330px] md:w-[370px] bg-[#161513] rounded-2xl p-6 border border-zinc-800/90 hover:border-amber-500/80 transition-all duration-300 shadow-xl group shrink-0 flex flex-col justify-between"
              >
                {/* Step Header */}
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-500 flex items-center justify-center text-xl group-hover:bg-amber-500 group-hover:text-black transition-all duration-300">
                    {step.icon}
                  </div>
                  <span className="text-3xl font-extrabold text-zinc-700 group-hover:text-amber-500/40 transition-colors">
                    {step.id}
                  </span>
                </div>

                {/* Step Image */}
                <div className="my-4 rounded-xl overflow-hidden aspect-[16/10] relative bg-[#0f0e0d]">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161513] via-transparent to-transparent" />
                </div>

                {/* Title & Desc */}
                <div>
                  <span className="text-[11px] font-semibold text-amber-500 uppercase tracking-wider">
                    {step.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-0.5 group-hover:text-amber-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-zinc-400 text-xs mt-2 leading-relaxed line-clamp-2">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoffeeJourney;