import {
  GiCoffeeBeans,
} from "react-icons/gi";

import {
  FaFire,
  FaMugHot,
  FaSmile,
} from "react-icons/fa";
import useReveal from "../../Hooks/UseReveal";
const process = [
  {
    id: "01",
    title: "Coffee Farm",
    icon: <GiCoffeeBeans />,
    description:
      "Fresh coffee beans are carefully selected from sustainable farms.",
  },
  {
    id: "02",
    title: "Roasting",
    icon: <FaFire />,
    description:
      "Each batch is roasted with precision for a rich aroma and flavor.",
  },
  {
    id: "03",
    title: "Brewing",
    icon: <FaMugHot />,
    description:
      "Our expert baristas craft every cup with passion and care.",
  },
  {
    id: "04",
    title: "Enjoy",
    icon: <FaSmile />,
    description:
      "Take a moment to relax and enjoy the perfect coffee experience.",
  },
];

const CoffeeJourney = () => {
  useReveal(".journey");
  return (
    <section className="journey py-28 bg-[#181715]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-amber-500">
            Our Process
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mt-4">
            From Farm To Your Cup
          </h2>

          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto">
            Every bean follows a carefully crafted journey before
            becoming your favorite coffee.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {process.map((item) => (

            <div
              key={item.id}
              className="rounded-3xl bg-[#22201E] p-8 border border-white/10 hover:border-amber-500 transition"
            >

              <div className="text-5xl text-amber-500">
                {item.icon}
              </div>

              <span className="block mt-6 text-sm text-zinc-500">
                {item.id}
              </span>

              <h3 className="text-2xl font-semibold mt-3">
                {item.title}
              </h3>

              <p className="text-zinc-400 mt-4 leading-7">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default CoffeeJourney;