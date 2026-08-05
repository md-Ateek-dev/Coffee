import { FaLeaf, FaSeedling, FaGlobe, FaHandshake } from "react-icons/fa";

import useReveal from "../../Hooks/UseReveal";
import useStaggerReveal from "../../Hooks/useStaggerReveal";

import farmImage from "../../assets/images/about/Image1.jpg";

const features = [
  {
    id: 1,
    icon: <FaLeaf />,
    title: "100% Organic",
    description:
      "Grown without harmful chemicals using sustainable farming methods.",
  },
  {
    id: 2,
    icon: <FaSeedling />,
    title: "Premium Arabica",
    description: "Only carefully selected Arabica beans are harvested.",
  },
  {
    id: 3,
    icon: <FaGlobe />,
    title: "Eco Friendly",
    description: "Supporting environmentally responsible farming practices.",
  },
  {
    id: 4,
    icon: <FaHandshake />,
    title: "Fair Trade",
    description: "Working directly with farmers for ethical sourcing.",
  },
];

const CoffeeFarm = () => {
  useReveal(".coffee-farm");
  useStaggerReveal(".coffee-farm", ".farm-card");

  return (
    <section className="coffee-farm py-24 bg-[#181715]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}

          <div>
            <span className="uppercase tracking-[5px] text-amber-500">
              Coffee Farms
            </span>

            <h2 className="text-5xl font-bold mt-4 leading-tight">
              From The World's Finest Farms
            </h2>

            <p className="mt-8 text-zinc-400 leading-8">
              Our beans are sourced directly from trusted coffee farms where
              quality, sustainability and ethical farming are always the highest
              priority.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              {features.map((item) => (
                <div
                  key={item.id}
                  className="farm-card bg-[#22201E] rounded-2xl p-6 border border-zinc-800 hover:border-amber-500 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-amber-500 text-black flex items-center justify-center text-2xl">
                    {item.icon}
                  </div>

                  <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>

                  <p className="mt-3 text-zinc-400 leading-7">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}

          <div className="relative">
            <img
              src={farmImage}
              alt="Coffee Farm"
              className="rounded-3xl w-full h-[650px] object-cover"
            />

            <div className="absolute bottom-8 left-8 bg-[#0F0E0D]/90 backdrop-blur-md rounded-2xl p-6">
              <h3 className="text-4xl font-bold text-amber-500">25+</h3>

              <p className="text-zinc-300 mt-2">Partner Coffee Farms</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoffeeFarm;
