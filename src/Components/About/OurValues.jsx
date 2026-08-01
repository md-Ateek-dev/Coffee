import {
  FaLeaf,
  FaAward,
  FaUsers,
  FaCoffee,
  FaGlobe,
  FaLightbulb,
} from "react-icons/fa";

import useReveal from "../../Hooks/UseReveal";
import useStaggerReveal from "../../Hooks/useStaggerReveal";

const values = [
  {
    id: 1,
    icon: <FaLeaf />,
    title: "Sustainability",
    description:
      "We source our coffee responsibly, ensuring zero-waste eco practices while protecting rainforest bio-systems.",
  },
  {
    id: 2,
    icon: <FaAward />,
    title: "Artisanal Quality",
    description:
      "Every single coffee bean is hand-picked, cupped, and small-batch roasted to unlock distinct flavor notes.",
  },
  {
    id: 3,
    icon: <FaUsers />,
    title: "Community Warmth",
    description:
      "Creating welcoming spaces and meaningful human connections through every warm cup we serve.",
  },
  {
    id: 4,
    icon: <FaCoffee />,
    title: "Barista Craft",
    description:
      "Every beverage is precision brewed and milk-textured by certified master baristas.",
  },
  {
    id: 5,
    icon: <FaGlobe />,
    title: "Ethical Direct Trade",
    description:
      "Partnering directly with smallholder farming families at fair prices above market standard.",
  },
  {
    id: 6,
    icon: <FaLightbulb />,
    title: "Roasting Innovation",
    description:
      "Combining heritage roasting traditions with data-driven thermal profiling for consistency.",
  },
];

const OurValues = () => {
  useReveal(".our-values");
  useStaggerReveal(".our-values", ".value-card");

  return (
    <section className="our-values py-24 bg-[#0F0E0D]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="uppercase tracking-[5px] text-amber-500 font-semibold text-sm">
            Our Core Values
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            What Defines Aura Coffee
          </h2>
          <p className="mt-4 text-zinc-300 leading-8 text-base">
            These guiding principles inspire every decision we make—from selecting micro-lot beans to creating memorable experiences for our guests.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.id}
              className="
                value-card
                group
                bg-[#1a1815]
                border
                border-zinc-700/70
                rounded-3xl
                p-8
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-amber-500
                hover:shadow-xl
                hover:shadow-amber-500/10
              "
            >
              <div
                className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-amber-500/20
                  text-amber-400
                  border
                  border-amber-500/30
                  flex
                  items-center
                  justify-center
                  text-2xl
                  transition-transform
                  duration-500
                  group-hover:rotate-12
                  group-hover:scale-110
                "
              >
                {value.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                {value.title}
              </h3>

              <p className="mt-3 text-zinc-300 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;