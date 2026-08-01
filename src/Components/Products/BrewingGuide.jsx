import {
  FaSeedling,
  FaFire,
  FaCoffee,
  FaMugHot,
} from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: <FaSeedling />,
    title: "Select Premium Beans",
    description:
      "We carefully choose high-quality Arabica beans from trusted farms.",
  },
  {
    id: 2,
    icon: <FaFire />,
    title: "Perfect Roasting",
    description:
      "Beans are roasted at the ideal temperature to preserve aroma and flavor.",
  },
  {
    id: 3,
    icon: <FaCoffee />,
    title: "Fresh Brewing",
    description:
      "Every cup is brewed fresh using purified water and precise timing.",
  },
  {
    id: 4,
    icon: <FaMugHot />,
    title: "Serve & Enjoy",
    description:
      "Served hot with rich crema and exceptional taste.",
  },
];

const BrewingGuide = () => {
  return (
    <section className="py-24 bg-[#0F0E0D]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="uppercase tracking-[5px] text-amber-500">
            Brewing Process
          </p>

          <h2 className="text-5xl font-bold mt-4">
            How We Prepare Your Coffee
          </h2>

          <p className="mt-6 text-zinc-400 max-w-3xl mx-auto">
            Every coffee goes through a carefully crafted process
            to ensure exceptional taste and aroma.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative">

          {/* Vertical Line */}

          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-zinc-700 lg:left-1/2 lg:-translate-x-1/2" />

          <div className="space-y-16">

            {steps.map((step, index) => (

              <div
                key={step.id}
                className={`
                  relative
                  flex
                  flex-col
                  lg:flex-row
                  items-center
                  gap-8
                  ${
                    index % 2 !== 0
                      ? "lg:flex-row-reverse"
                      : ""
                  }
                `}
              >

                {/* Content */}

                <div className="lg:w-1/2">

                  <div className="bg-[#181715] rounded-3xl p-8 border border-zinc-800 hover:border-amber-500 transition">

                    <div className="w-16 h-16 rounded-full bg-amber-500 text-black flex items-center justify-center text-2xl mb-6">
                      {step.icon}
                    </div>

                    <h3 className="text-2xl font-bold">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-zinc-400 leading-7">
                      {step.description}
                    </p>

                  </div>

                </div>

                {/* Timeline Dot */}

                <div className="relative z-10 w-6 h-6 rounded-full bg-amber-500 border-4 border-[#0F0E0D]" />

                {/* Empty Side */}

                <div className="hidden lg:block lg:w-1/2" />

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default BrewingGuide;