import {
  FaSeedling,
  FaFire,
  FaCoffee,
  FaMugHot,
} from "react-icons/fa";
import { GiCoffeeBeans } from "react-icons/gi";

const steps = [
  {
    id: "01",
    icon: <FaSeedling />,
    subtitle: "Origin Selection",
    title: "Select Premium Beans",
    description:
      "We carefully choose high-quality Arabica beans from trusted sustainable farms.",
  },
  {
    id: "02",
    icon: <FaFire />,
    subtitle: "Micro-Batch Roast",
    title: "Perfect Roasting",
    description:
      "Beans are roasted at the ideal temperature to preserve aroma, body, and flavor.",
  },
  {
    id: "03",
    icon: <FaCoffee />,
    subtitle: "Precision Brew",
    title: "Fresh Brewing",
    description:
      "Every cup is brewed fresh using purified water and calibrated extraction timing.",
  },
  {
    id: "04",
    icon: <FaMugHot />,
    subtitle: "Final Touch",
    title: "Serve & Enjoy",
    description:
      "Served hot with rich crema and exceptional taste in handcrafted ceramics.",
  },
];

const StepCard = ({ step }) => (
  <article className="group bg-[#141311] rounded-2xl sm:rounded-3xl border border-zinc-800/80 p-6 sm:p-8 hover:border-amber-500/50 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(201,155,60,0.08)]">
    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-amber-500 text-black flex items-center justify-center text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300">
      {step.icon}
    </div>
    <span className="inline-block mt-4 text-[10px] sm:text-[11px] font-bold text-amber-400 uppercase tracking-widest">
      {step.subtitle}
    </span>
    <h3 className="text-xl sm:text-2xl font-bold text-white mt-2 group-hover:text-amber-400 transition-colors duration-300">
      {step.title}
    </h3>
    <p className="mt-3 text-zinc-400 text-sm leading-relaxed">
      {step.description}
    </p>
  </article>
);

const TimelineDot = () => (
  <div className="w-4 h-4 rounded-full bg-amber-500 ring-4 ring-[#0A0908]" />
);

const BrewingGuide = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#0A0908] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(700px,90vw)] h-[300px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 left-10 text-amber-500/5 text-[120px] pointer-events-none hidden lg:block">
        <GiCoffeeBeans />
      </div>
      <div className="absolute top-32 right-10 text-amber-500/5 text-[80px] pointer-events-none hidden lg:block rotate-45">
        <GiCoffeeBeans />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest">
            <GiCoffeeBeans className="text-[10px]" /> Brewing Process
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-3 sm:mt-4 text-white tracking-tight">
            How We Prepare Your Coffee
          </h2>

          <p className="mt-4 sm:mt-6 text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base">
            Every coffee goes through a carefully crafted journey from bean to
            cup — designed for exceptional taste and aroma.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-zinc-700/80 -translate-x-1/2 hidden md:block" />
          <div className="absolute left-[11px] top-0 bottom-0 w-px bg-zinc-700/80 md:hidden" />

          <div className="space-y-10 sm:space-y-14 md:space-y-20">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={step.id}
                  className="relative md:grid md:grid-cols-2 md:gap-8 lg:gap-10 md:items-center"
                >
                  <div className={`hidden md:block ${isLeft ? "md:pr-6 lg:pr-8" : ""}`}>
                    {isLeft && <StepCard step={step} />}
                  </div>

                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block z-10">
                    <TimelineDot />
                  </div>

                  <div className={`hidden md:block ${!isLeft ? "md:pl-6 lg:pl-8" : ""}`}>
                    {!isLeft && <StepCard step={step} />}
                  </div>

                  <div className="md:hidden pl-8 relative">
                    <div className="absolute left-[-21px] top-8 z-10">
                      <TimelineDot />
                    </div>
                    <StepCard step={step} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrewingGuide;
