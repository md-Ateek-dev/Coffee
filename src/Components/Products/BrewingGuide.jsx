import { useRef, useEffect, useState } from "react";
import { FaSeedling, FaFire, FaCoffee, FaMugHot } from "react-icons/fa";
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

const StepCard = ({ step, index, isVisible }) => {
  const isEven = index % 2 === 0;

  return (
    <div
      data-index={index}
      className={`
        process-card
        relative
        transition-all
        duration-700
        ease-[cubic-bezier(0.22,1,0.36,1)]
        ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"}
      `}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      {/* Connector line for desktop */}
      <div
        className={`
          hidden
          lg:block
          absolute
          top-1/2
          -translate-y-1/2
          w-8
          h-[2px]
          bg-zinc-600
          ${isEven ? "-right-8" : "-left-8"}
        `}
      />

      <div
        className={`
          bg-[#1E1C1A]
          border
          border-zinc-800
          rounded-2xl
          sm:rounded-3xl
          p-6
          sm:p-8
          hover:border-amber-500/60
          hover:shadow-[0_20px_60px_rgba(201,155,60,0.1)]
          transition-all
          duration-500
          group
        `}
      >
        {/* Top row: Number + Icon */}
        <div className="flex items-center justify-between mb-5 sm:mb-6">
          <span className="text-4xl sm:text-5xl font-black text-zinc-800 group-hover:text-amber-500/20 transition-colors duration-500">
            {step.id}
          </span>
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-amber-500 text-black flex items-center justify-center text-lg sm:text-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-amber-500/20">
            {step.icon}
          </div>
        </div>

        {/* Subtitle */}
        <span className="inline-block text-[10px] sm:text-xs font-bold text-amber-500 uppercase tracking-[3px] mb-2">
          {step.subtitle}
        </span>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
          {step.title}
        </h3>

        {/* Description */}
        <p className="mt-3 sm:mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  );
};

const BrewingGuide = () => {
  const sectionRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.dataset.index;
          if (entry.isIntersecting) {
            setVisibleCards((prev) => ({ ...prev, [index]: true }));
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    const cards = sectionRef.current?.querySelectorAll(".process-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="process-section py-16 sm:py-20 md:py-24 lg:py-28 bg-[#181715] text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(700px,90vw)] h-[250px] sm:h-[300px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Decorative Coffee Beans */}
      <div className="absolute bottom-20 left-6 text-amber-500/5 text-[100px] pointer-events-none hidden lg:block">
        <GiCoffeeBeans />
      </div>
      <div className="absolute top-32 right-6 text-amber-500/5 text-[60px] pointer-events-none hidden lg:block rotate-45">
        <GiCoffeeBeans />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4 sm:mb-5">
            <GiCoffeeBeans className="text-[10px]" /> Brewing Process
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold mt-2 sm:mt-3 text-white leading-tight">
            How We Prepare Your Coffee
          </h2>

          <p className="mt-4 sm:mt-6 text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Every coffee goes through a carefully crafted journey from bean to
            cup — designed for exceptional taste and aroma.
          </p>
        </div>

        {/* Timeline Container */}
        <div ref={sectionRef} className="relative">
          {/* SVG Zigzag Path - Desktop Only (SOLID LINE) */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-0 bottom-0 justify-center pointer-events-none">
            <svg
              width="120"
              height="100%"
              viewBox="0 0 120 1800"
              preserveAspectRatio="none"
              className="h-full overflow-visible"
            >
              <path
                d="M60 0
                   C20 120 100 240 60 360
                   C20 480 100 600 60 720
                   C20 840 100 960 60 1080
                   C20 1200 100 1320 60 1440
                   C20 1560 100 1680 60 1800"
                stroke="#52525b"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Mobile Vertical Line */}
          <div className="lg:hidden absolute left-[19px] sm:left-[23px] top-0 bottom-0 w-[2px] bg-zinc-800 pointer-events-none" />

          {/* Steps */}
          <div className="space-y-10 sm:space-y-14 lg:space-y-0">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.id}
                  className={`
                    relative
                    lg:grid
                    lg:grid-cols-2
                    lg:gap-16
                    xl:gap-24
                    lg:items-center
                    lg:mb-20
                    last:lg:mb-0
                  `}
                >
                  {/* Mobile Timeline Dot */}
                  <div className="lg:hidden absolute left-0 top-6 sm:top-8 z-10">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#181715] border-2 border-amber-500 flex items-center justify-center">
                      <span className="text-amber-500 font-bold text-xs sm:text-sm">
                        {step.id}
                      </span>
                    </div>
                  </div>

                  {/* Desktop Center Dot */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-14 h-14 rounded-full bg-[#181715] border-[3px] border-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/20">
                      <span className="text-amber-500 font-bold text-sm">
                        {step.id}
                      </span>
                    </div>
                  </div>

                  {/* Card Side */}
                  <div
                    className={`
                      pl-14
                      sm:pl-16
                      lg:pl-0
                      ${isEven ? "lg:pr-16 xl:pr-20" : "lg:col-start-2 lg:pl-16 xl:pl-20"}
                    `}
                  >
                    <StepCard
                      step={step}
                      index={index}
                      isVisible={visibleCards[index]}
                    />
                  </div>

                  {/* Empty Side for Desktop */}
                  <div
                    className={`
                      hidden
                      lg:block
                      ${isEven ? "lg:col-start-2" : "lg:col-start-1 lg:row-start-1"}
                    `}
                  />
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
