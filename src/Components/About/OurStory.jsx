import { FaCoffee, FaLeaf, FaAward } from "react-icons/fa";

import useReveal from "../../Hooks/UseReveal";
import useStaggerReveal from "../../Hooks/useStaggerReveal";

import storyImage from "../../assets/images/about/About.jpg";

const features = [
  {
    id: 1,
    icon: <FaCoffee />,
    title: "Premium Beans",
    description: "Carefully sourced Arabica beans from the world's best farms.",
  },
  {
    id: 2,
    icon: <FaLeaf />,
    title: "Organic Ingredients",
    description: "Fresh, natural ingredients without compromising quality.",
  },
  {
    id: 3,
    icon: <FaAward />,
    title: "Award Winning",
    description: "Recognized for exceptional coffee quality and craftsmanship.",
  },
];

const OurStory = () => {
  useReveal(".our-story");
  useStaggerReveal(".our-story", ".story-card");

  return (
    <section className="our-story py-24 bg-[#181715]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}

          <div className="relative">

            <img
              src={storyImage}
              alt="Our Story"
              className="rounded-3xl w-full h-[650px] object-cover"
            />

            <div className="absolute -bottom-8 -right-8 bg-amber-500 text-black rounded-3xl p-8 shadow-xl">

              <h3 className="text-5xl font-bold">
                8+
              </h3>

              <p className="mt-2 font-medium">
                Years of Experience
              </p>

            </div>

          </div>

          {/* Content */}

          <div>

            <span className="uppercase tracking-[5px] text-amber-500">
              Our Story
            </span>

            <h2 className="text-5xl font-bold mt-5 leading-tight">
              Passion For Coffee,
              <br />
              Crafted With Care
            </h2>

            <p className="mt-8 text-zinc-400 leading-8">
              Aura Coffee began with a simple mission—to serve coffee that
              brings people together. Every bean is ethically sourced,
              expertly roasted, and brewed to deliver an unforgettable
              coffee experience.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-12">

              {features.map((feature) => (

                <div
                  key={feature.id}
                  className="story-card bg-[#22201E] rounded-2xl p-6 border border-zinc-800 hover:border-amber-500 transition-all duration-300"
                >

                  <div className="w-14 h-14 rounded-full bg-amber-500 text-black flex items-center justify-center text-2xl">

                    {feature.icon}

                  </div>

                  <h3 className="mt-6 text-xl font-semibold">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-zinc-400 text-sm leading-6">
                    {feature.description}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default OurStory;