import {
  FaSeedling,
  FaHandPaper,
  FaFire,
  FaBlender,
  FaCoffee,
  FaMugHot,
} from "react-icons/fa";

import useReveal from "../../Hooks/UseReveal";
import useStaggerReveal from "../../Hooks/useStaggerReveal";

const process = [
  {
    id: 1,
    icon: <FaSeedling />,
    title: "Bean Selection",
    description:
      "Only premium Arabica beans are selected from trusted farms.",
  },
  {
    id: 2,
    icon: <FaHandPaper />,
    title: "Hand Picking",
    description:
      "Every cherry is carefully picked at the perfect stage of ripeness.",
  },
  {
    id: 3,
    icon: <FaFire />,
    title: "Roasting",
    description:
      "Expert roasting brings out rich aroma and balanced flavor.",
  },
  {
    id: 4,
    icon: <FaBlender />,
    title: "Grinding",
    description:
      "Fresh grinding preserves natural oils and enhances taste.",
  },
  {
    id: 5,
    icon: <FaCoffee />,
    title: "Brewing",
    description:
      "Coffee is brewed with precision for a smooth experience.",
  },
  {
    id: 6,
    icon: <FaMugHot />,
    title: "Serving",
    description:
      "Every cup is served fresh with exceptional quality.",
  },
];

const CoffeeProcess = () => {
  useReveal(".coffee-process");
  useStaggerReveal(".coffee-process", ".process-card");

  return (
    <section className="coffee-process py-24 bg-[#181715]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto mb-20">

          <span className="uppercase tracking-[5px] text-amber-500">
            Coffee Journey
          </span>

          <h2 className="text-5xl font-bold mt-4">
            From Farm To Cup
          </h2>

          <p className="mt-6 text-zinc-400 leading-8">
            Every cup of Aura Coffee follows a carefully crafted journey
            to deliver freshness, aroma and exceptional taste.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative">

          {/* Center Line */}

          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-zinc-700 -translate-x-1/2" />

          {process.map((step, index) => (

            <div
              key={step.id}
              className={`
                process-card
                relative
                grid
                lg:grid-cols-2
                gap-12
                items-center
                mb-16
                ${index % 2 ? "lg:[&>*:first-child]:order-2" : ""}
              `}
            >

              {/* Card */}

              <div>

                <div className="bg-[#22201E] border border-zinc-800 rounded-3xl p-8 hover:border-amber-500 transition-all duration-300">

                  <div className="w-16 h-16 rounded-full bg-amber-500 text-black flex items-center justify-center text-2xl">

                    {step.icon}

                  </div>

                  <h3 className="text-3xl font-bold mt-8">
                    {step.title}
                  </h3>

                  <p className="mt-5 text-zinc-400 leading-8">
                    {step.description}
                  </p>

                </div>

              </div>

              {/* Number */}

              <div className="flex justify-center">

                <div className="w-24 h-24 rounded-full border-4 border-amber-500 bg-[#0F0E0D] flex items-center justify-center text-3xl font-bold text-amber-500">

                  {step.id}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default CoffeeProcess;