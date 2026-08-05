import React from "react";
import useReveal from "../../Hooks/UseReveal";
import useStaggerReveal from "../../Hooks/useStaggerReveal";
import {
  FaSeedling,
  FaHandPaper,
  FaFire,
  FaBlender,
  FaCoffee,
  FaMugHot,
} from "react-icons/fa";

const process = [

  {
    icon: <FaSeedling />,
    title: "Bean Selection",
    description: "Only premium Arabica beans are selected from trusted farms.",
  },
  {
    icon: <FaHandPaper />,
    title: "Hand Picking",
    description:
      "Every cherry is carefully picked at the perfect stage of ripeness.",
  },
  {
    icon: <FaFire />,
    title: "Roasting",
    description: "Expert roasting brings out rich aroma and balanced flavor.",
  },
  {
    icon: <FaBlender />,
    title: "Grinding",
    description: "Fresh grinding preserves natural oils and enhances taste.",
  },
  {
    icon: <FaCoffee />,
    title: "Brewing",
    description: "Coffee is brewed with precision for a smooth experience.",
  },
  {
    icon: <FaMugHot />,
    title: "Serving",
    description: "Every cup is served fresh with exceptional quality.",
  },
];

export default function CoffeeProcess() {
  useReveal(".process-section");
  useStaggerReveal(".process-section", ".process-card", 0.12);

  return (
    <section className="process-section py-24 bg-[#181715] text-white">

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="uppercase tracking-[5px] text-amber-500">
            Coffee Journey
          </span>
          <h2 className="text-5xl font-bold mt-4">From Farm To Cup</h2>
          <p className="mt-6 text-zinc-400 leading-8">
            Every cup follows a handcrafted journey from bean selection to
            serving.
          </p>
        </div>

        <div className="relative">
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
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
              />
              {Array.from({ length: 18 }).map((_, i) => {
                const y = 90 + i * 95;
                const left = i % 2 === 0;
                return <g key={i} />;
              })}
            </svg>
          </div>

          {process.map((step, index) => (
            <div
              key={step.title}
              className={`relative grid lg:grid-cols-2 gap-12 items-center mb-16 ${
                index % 2 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative">
                <div
                  className={`hidden lg:block absolute top-1/2 ${
                    index % 2 ? "-left-10" : "-right-10"
                  } w-10 h-[3px] bg-zinc-600`}
                />
                <div className="process-card bg-[#22201E] border border-zinc-800 rounded-3xl p-8 hover:border-amber-500 transition-all duration-300">

                  <div className="w-16 h-16 rounded-full bg-amber-500 text-black flex items-center justify-center text-2xl">
                    {step.icon}
                  </div>
                  <h3 className="text-3xl font-bold mt-8">{step.title}</h3>
                  <p className="mt-5 text-zinc-400 leading-8">
                    {step.description}
                  </p>
                </div>
              </div>

              <div className="hidden lg:flex justify-center">
                {/* Numbering of cards */}
                {/* <div className="w-20 h-20 rounded-full bg-[#181715] border-4 border-green-600 flex items-center justify-center text-amber-400 font-bold">
                  {String(index + 1).padStart(2, "0")}
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
