import {
  FaFlag,
  FaStore,
  FaUsers,
  FaGlobe,
  FaCoffee,
} from "react-icons/fa";

import useReveal from "../../Hooks/UseReveal";
import useStaggerReveal from "../../Hooks/useStaggerReveal";

const timeline = [
  {
    id: 1,
    year: "2018",
    icon: <FaFlag />,
    title: "Aura Coffee Founded",
    description:
      "Started with a vision to serve premium handcrafted coffee.",
  },
  {
    id: 2,
    year: "2019",
    icon: <FaStore />,
    title: "First Coffee Shop",
    description:
      "Opened our first flagship café with locally roasted beans.",
  },
  {
    id: 3,
    year: "2021",
    icon: <FaUsers />,
    title: "10,000+ Customers",
    description:
      "Built a strong community of loyal coffee lovers.",
  },
  {
    id: 4,
    year: "2023",
    icon: <FaGlobe />,
    title: "Global Coffee Farms",
    description:
      "Partnered with ethical coffee farms across multiple countries.",
  },
  {
    id: 5,
    year: "2026",
    icon: <FaCoffee />,
    title: "50,000+ Cups Served",
    description:
      "Reached an exciting milestone while maintaining premium quality.",
  },
];

const Timeline = () => {
  useReveal(".timeline");
  useStaggerReveal(".timeline", ".timeline-card");

  return (
    <section className="timeline py-24 bg-[#0F0E0D]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto mb-20">

          <span className="uppercase tracking-[5px] text-amber-500">
            Our Journey
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Milestones That Define Us
          </h2>

          <p className="mt-6 text-zinc-400 leading-8">
            Every milestone reflects our passion for crafting memorable
            coffee experiences and building lasting relationships.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative">

          {/* Center Line */}

          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-zinc-700 -translate-x-1/2" />

          <div className="space-y-16">

            {timeline.map((item, index) => (

              <div
                key={item.id}
                className={`timeline-card relative flex flex-col lg:flex-row items-center gap-10 ${
                  index % 2 ? "lg:flex-row-reverse" : ""
                }`}
              >

                {/* Card */}

                <div className="lg:w-1/2">

                  <div className="bg-[#181715] rounded-3xl border border-zinc-800 hover:border-amber-500 transition-all duration-300 p-8">

                    <span className="text-amber-500 font-semibold">
                      {item.year}
                    </span>

                    <div className="w-16 h-16 rounded-full bg-amber-500 text-black flex items-center justify-center text-2xl mt-5">

                      {item.icon}

                    </div>

                    <h3 className="text-3xl font-bold mt-6">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-zinc-400 leading-7">
                      {item.description}
                    </p>

                  </div>

                </div>

                {/* Timeline Dot */}

                <div className="relative z-10 w-7 h-7 rounded-full bg-amber-500 border-4 border-[#0F0E0D]" />

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

export default Timeline;