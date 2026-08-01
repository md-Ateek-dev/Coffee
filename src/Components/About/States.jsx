import {
  FaCoffee,
  FaUsers,
  FaGlobe,
  FaAward,
} from "react-icons/fa";

import Counter from "../../Animation/Counter";
import useReveal from "../../Hooks/UseReveal";
import useStaggerReveal from "../../Hooks/useStaggerReveal";

const stats = [
  {
    id: 1,
    icon: <FaCoffee />,
    value: 50000,
    suffix: "+",
    title: "Cups Served Daily",
    desc: "Handcrafted espresso & specialty brews",
  },
  {
    id: 2,
    icon: <FaUsers />,
    value: 12000,
    suffix: "+",
    title: "Happy Guests",
    desc: "Loyal coffee enthusiasts worldwide",
  },
  {
    id: 3,
    icon: <FaGlobe />,
    value: 25,
    suffix: "+",
    title: "Direct Trade Farms",
    desc: "Highland sustainable bean partners",
  },
  {
    id: 4,
    icon: <FaAward />,
    value: 18,
    suffix: "",
    title: "Industry Awards",
    desc: "Recognized for roasting excellence",
  },
];

const Stats = () => {
  useReveal(".stats");
  useStaggerReveal(".stats", ".stat-card");

  return (
    <section className="stats py-24 bg-[#0F0E0D] border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="uppercase tracking-[5px] text-amber-500 font-semibold text-sm">
            Our Achievements
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Coffee By The Numbers
          </h2>
          <p className="mt-4 text-zinc-300 leading-8 text-base">
            Every number reflects our commitment to sustainable sourcing, master roasting, and total guest delight.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.id}
              className="
                stat-card
                group
                rounded-3xl
                bg-[#1a1815]
                border
                border-zinc-700/70
                p-8
                text-center
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
                  w-20
                  h-20
                  rounded-2xl
                  bg-amber-500/20
                  text-amber-400
                  border
                  border-amber-500/30
                  flex
                  items-center
                  justify-center
                  text-3xl
                  mx-auto
                  group-hover:scale-110
                  group-hover:rotate-12
                  transition-transform
                "
              >
                {item.icon}
              </div>

              <div className="mt-6 text-4xl sm:text-5xl font-extrabold text-white">
                <Counter end={item.value} />
                <span className="text-amber-500">{item.suffix}</span>
              </div>

              <h3 className="mt-3 text-xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-zinc-400 text-xs leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;