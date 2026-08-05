import { FaCoffee, FaLeaf, FaAward } from "react-icons/fa";
import useReveal from "../../Hooks/UseReveal";
import useStaggerReveal from "../../Hooks/useStaggerReveal";
import LazyVideo from "../Comman/LazyVideo";
import OurStoryImage from "../../assets/videos/Gallery_Video1.mp4";

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
    <section className="our-story section-y bg-[#181715]">
      <div className="page-container">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          <div className="relative">
            <LazyVideo
              src={OurStoryImage}
              className="rounded-2xl sm:rounded-3xl w-full min-h-[260px] sm:min-h-[360px] lg:min-h-[480px] max-h-[650px] object-cover"
            />

            <div className="absolute -bottom-4 right-2 sm:-bottom-6 sm:right-4 lg:-bottom-8 lg:-right-8 bg-amber-500 text-black rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-xl">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold">8+</h3>
              <p className="mt-1 sm:mt-2 font-medium text-sm sm:text-base">
                Years of Experience
              </p>
            </div>
          </div>

          <div>
            <span className="uppercase tracking-[3px] sm:tracking-[5px] text-amber-500 text-xs sm:text-sm font-semibold">
              Our Story
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 sm:mt-5 leading-tight">
              Passion For Coffee,
              <br className="hidden sm:block" />
              Crafted With Care
            </h2>

            <p className="mt-5 sm:mt-8 text-zinc-400 leading-relaxed sm:leading-8 text-sm sm:text-base">
              Aura Coffee began with a simple mission—to serve coffee that
              brings people together. Every bean is ethically sourced,
              expertly roasted, and brewed to deliver an unforgettable
              coffee experience.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="story-card bg-[#22201E] rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-zinc-800 hover:border-amber-500 transition-all duration-300"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-amber-500 text-black flex items-center justify-center text-xl sm:text-2xl">
                    {feature.icon}
                  </div>
                  <h3 className="mt-4 sm:mt-6 text-base sm:text-xl font-semibold">
                    {feature.title}
                  </h3>
                  <p className="mt-2 sm:mt-3 text-zinc-400 text-xs sm:text-sm leading-relaxed">
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
