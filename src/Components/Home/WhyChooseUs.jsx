import {
  FaLeaf,
  FaMugHot,
  FaEarthAsia,
} from "react-icons/fa6";
import useReveal from "../../Hooks/UseReveal";
import useStaggerReveal from "../../Hooks/useStaggerReveal";
import { GiCoffeeBeans } from "react-icons/gi";

import coffeeImage from "../../assets/images/about/coffee.png";

const features = [
  {
    icon: <GiCoffeeBeans />,
    title: "Premium Beans",
    description:
      "We carefully select only the finest Arabica beans.",
  },
  {
    icon: <FaLeaf />,
    title: "Freshly Roasted",
    description:
      "Roasted in small batches for maximum freshness.",
  },
  {
    icon: <FaMugHot />,
    title: "Expert Baristas",
    description:
      "Crafted with passion by experienced coffee experts.",
  },
  {
    icon: <FaEarthAsia />,
    title: "Sustainable Farming",
    description:
      "Supporting farmers with ethical sourcing practices.",
  },
];

const WhyChooseUs = () => {
  useReveal(".why-us");
  useStaggerReveal(".why-us", ".feature-card");
  return (
    <section className="why-us py-28 bg-[#181715]">

      <div className="feature-card max-w-7xl mx-auto px-6">

        <div className="feature-card text-center mb-16">

          <p className="uppercase tracking-[5px] text-amber-500">
            Why Choose Us
          </p>

          <h2 className="text-5xl font-bold mt-4">
            More Than Just Coffee
          </h2>

          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto">
            Every cup is crafted with premium ingredients,
            expert techniques and a passion for exceptional coffee.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-10 items-center">

          {/* Left */}

          <div className="feature-card space-y-6">

            {features.slice(0,2).map((item,index)=>(
              <div
                key={index}
                className="bg-[#22201E] p-6 rounded-2xl border border-white/10"
              >
                <div className="text-4xl text-amber-500">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-semibold mt-5">
                  {item.title}
                </h3>

                <p className="text-zinc-400 mt-3">
                  {item.description}
                </p>
              </div>
            ))}

          </div>

          {/* Center */}

          <div className="flex justify-center">

            <img
              src={coffeeImage}
              alt="Coffee"
              className="max-w-sm w-full"
            />

          </div>

          {/* Right */}

          <div className="space-y-6">

            {features.slice(2).map((item,index)=>(
              <div
                key={index}
                className="bg-[#22201E] p-6 rounded-2xl border border-white/10"
              >
                <div className="text-4xl text-amber-500">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-semibold mt-5">
                  {item.title}
                </h3>

                <p className="text-zinc-400 mt-3">
                  {item.description}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;