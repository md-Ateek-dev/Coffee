import { GiCoffeeBeans } from "react-icons/gi";
import { FaFire, FaMugHot, FaSmile } from "react-icons/fa";
import processImage1 from "../../assets/images/process/Process_Image1.jpg";
import processImage2 from "../../assets/images/process/Process_Image2.jpg";
import processImage3 from "../../assets/images/process/Process_Image4.jpg";
import processImage4 from "../../assets/images/Process/Process_Image3.jpg";

const processSteps = [
  {
    id: "01",
    title: "Sourcing & Harvest",
    icon: <GiCoffeeBeans />,
    subtitle: "Organic Single-Origin",
    description:
      "Hand-picked arabica coffee cherries selected from high-altitude sustainable farms in Ethiopia.",
    image: processImage1,
  },
  {
    id: "02",
    title: "Precision Roasting",
    icon: <FaFire />,
    subtitle: "Micro-Batch Roast",
    description:
      "Roasting each batch to perfection, unlocking complex notes of rich chocolate and berries.",
    image: processImage2,
  },
  {
    id: "03",
    title: "Masterful Brewing",
    icon: <FaMugHot />,
    subtitle: "Artisan Touch",
    description:
      "Engineered extraction using calibrated water temperature for balanced flavor profiles.",
    image: processImage3,
  },
  {
    id: "04",
    title: "The Experience",
    icon: <FaSmile />,
    subtitle: "Savor Every Sip",
    description:
      "Served at ideal temperature in handcrafted ceramics for an unforgettable coffee moment.",
    image: processImage4,
  },
];

const CoffeeJourney = () => {
  return (
    <section className="bg-[#0D0C0B] py-20 border-y border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="uppercase tracking-[4px] text-amber-500 font-semibold text-xs">
            Our Craft Process
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-3">
            From Farm To Your Cup
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
            Every cup begins with carefully selected beans and ends with an
            unforgettable coffee experience. Discover the journey behind every
            sip.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step) => (
            <div
              key={step.id}
              className="bg-[#161513] rounded-2xl p-6 border border-zinc-800 hover:border-amber-500 transition-all duration-300 shadow-xl group"
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-2xl text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300">
                  {step.icon}
                </div>

                <span className="text-3xl font-bold text-zinc-700 group-hover:text-amber-500/40 transition-colors">
                  {step.id}
                </span>
              </div>

              {/* Image */}
              <div className="mt-5 rounded-xl overflow-hidden aspect-[16/10]">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="mt-5">
                <span className="text-xs uppercase tracking-wider text-amber-500 font-semibold">
                  {step.subtitle}
                </span>

                <h3 className="text-xl font-bold text-white mt-2 group-hover:text-amber-400 transition-colors">
                  {step.title}
                </h3>

                <p className="text-zinc-400 text-sm leading-6 mt-3">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoffeeJourney;
