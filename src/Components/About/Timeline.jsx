import {
  FaFlag,
  FaStore,
  FaUsers,
  FaGlobe,
  FaCoffee,
  FaChevronLeft,
  FaChevronRight,
  FaHistory,
} from "react-icons/fa";
import { useHorizontalScroll } from "../../Hooks/useHorizontalScroll";
import Img1 from "../../assets/images/about/Image1.jpg";
import Img2 from "../../assets/images/about/Img6.jpg";
import Img3 from "../../assets/images/about/Img2.jpg";
import Img4 from "../../assets/images/about/Img4.jpg";
import Img5 from "../../assets/images/about/Img5.jpg";
const timelineEvents = [
  {
    id: 1,
    year: "2018",
    icon: <FaFlag />,
    title: "Aura Coffee Founded",
    subtitle: "The Origin",
    description:
      "Started with a passion to serve authentic, handcrafted coffee made from ethically sourced beans.",
    image: Img1,
  },
  {
    id: 2,
    year: "2019",
    icon: <FaStore />,
    title: "First Flagship Café",
    subtitle: "Physical Presence",
    description:
      "Opened our first sanctuary for coffee lovers, introducing signature pour-over roasts and pastries.",
    image: Img2,
  },
  {
    id: 3,
    year: "2021",
    icon: <FaUsers />,
    title: "10,000+ Coffee Lovers",
    subtitle: "Community Growth",
    description:
      "Built a thriving community of regular coffee aficionados and launched roasting workshops.",
    image: Img3,
  },
  {
    id: 4,
    year: "2023",
    icon: <FaGlobe />,
    title: "Direct Farm Partnerships",
    subtitle: "Global Sourcing",
    description:
      "Partnered directly with sustainable, fair-trade coffee farms across Ethiopia and Guatemala.",
    image: Img4,
  },
  {
    id: 5,
    year: "2026",
    icon: <FaCoffee />,
    title: "50,000+ Cups Crafted",
    subtitle: "A New Chapter",
    description:
      "Reached an inspiring milestone while continuing our commitment to sustainable roasting.",
    image: Img5,
  },
];

const Timeline = () => {
  const { sectionRef, trackRef, currentIndex, scrollNext, scrollPrev } =
    useHorizontalScroll({ extraHeight: 0.7 });

  return (
    <section
      ref={sectionRef}
      className="timeline-horizontal relative bg-[#0B0A09] overflow-hidden border-t border-b border-zinc-800/60"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-between py-6 relative">
        {/* Header */}
        <div className="max-w-7xl w-full mx-auto px-6 flex items-center justify-between z-10 pt-2">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-1.5">
              <FaHistory /> Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              Milestones That Define Us
            </h2>
          </div>

          {/* Controls & Counter */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block text-xs font-mono text-zinc-400 bg-zinc-900/90 px-3.5 py-1.5 rounded-full border border-zinc-800">
              <span className="text-amber-400 font-bold">
                0{currentIndex + 1}
              </span>{" "}
              / 0{timelineEvents.length}
            </div>

            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={scrollPrev}
                disabled={currentIndex === 0}
                className="w-10 h-10 rounded-full bg-[#181715] border border-zinc-700/80 text-white flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-md"
                aria-label="Previous Milestone"
              >
                <FaChevronLeft size={14} />
              </button>
              <button
                onClick={scrollNext}
                disabled={currentIndex >= timelineEvents.length - 1}
                className="w-10 h-10 rounded-full bg-[#181715] border border-zinc-700/80 text-white flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-md"
                aria-label="Next Milestone"
              >
                <FaChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Track */}
        <div className="w-full overflow-hidden my-auto py-2">
          <div
            ref={trackRef}
            className="flex gap-6 md:gap-8 px-6 md:px-16 items-center w-max transition-transform duration-100 ease-out"
          >
            {timelineEvents.map((item, index) => (
              <div
                key={item.id}
                className="w-[280px] sm:w-[330px] md:w-[360px] bg-[#161513] rounded-2xl p-6 border border-zinc-800/90 hover:border-amber-500/80 transition-all duration-300 shadow-xl group shrink-0 flex flex-col justify-between"
              >
                {/* Year Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-500 text-black flex items-center justify-center text-lg font-bold shadow-md">
                      {item.icon}
                    </div>
                    <div>
                      <span className="text-amber-400 font-extrabold text-xl tracking-tight">
                        {item.year}
                      </span>
                      <span className="block text-[10px] text-zinc-500 font-medium">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono text-zinc-500 border border-zinc-800 px-2.5 py-0.5 rounded-full">
                    0{index + 1}
                  </span>
                </div>

                {/* Milestone Image */}
                <div className="my-4 rounded-xl overflow-hidden aspect-[16/10] relative bg-[#0f0e0d]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161513] via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-zinc-400 text-xs leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Controls Below Cards */}
        <div className="sm:hidden flex items-center justify-center gap-3 my-2 z-10">
          <button
            onClick={scrollPrev}
            disabled={currentIndex === 0}
            className="w-9 h-9 rounded-full bg-[#181715] border border-zinc-700/80 text-white flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-md"
            aria-label="Previous Milestone"
          >
            <FaChevronLeft size={14} />
          </button>
          <div className="text-xs font-mono text-zinc-400 bg-zinc-900/90 px-3.5 py-1.5 rounded-full border border-zinc-800">
            <span className="text-amber-400 font-bold">
              0{currentIndex + 1}
            </span>{" "}
            / 0{timelineEvents.length}
          </div>
          <button
            onClick={scrollNext}
            disabled={currentIndex >= timelineEvents.length - 1}
            className="w-9 h-9 rounded-full bg-[#181715] border border-zinc-700/80 text-white flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-md"
            aria-label="Next Milestone"
          >
            <FaChevronRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
