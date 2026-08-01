import { FaTrophy, FaMedal, FaStar, FaAward } from "react-icons/fa";
import useReveal from "../../Hooks/UseReveal";

const awardsData = [
  {
    id: 1,
    year: "2025",
    title: "Best Specialty Coffee Roaster",
    organization: "Global Coffee Association",
    icon: <FaTrophy className="text-amber-500 text-3xl" />,
    description: "Awarded for exceptional bean selection, sustainable farming partnerships, and roasting precision.",
  },
  {
    id: 2,
    year: "2024",
    title: "Gold Barista Excellence",
    organization: "World Coffee Championship",
    icon: <FaMedal className="text-amber-500 text-3xl" />,
    description: "Recognized for artisanal espresso craft, signature drink creation, and customer satisfaction.",
  },
  {
    id: 3,
    year: "2023",
    title: "Eco-Friendly Business of the Year",
    organization: "Sustainable Roasters Guild",
    icon: <FaStar className="text-amber-500 text-3xl" />,
    description: "Honored for 100% direct trade practices, biodegradable packaging, and carbon-neutral logistics.",
  },
  {
    id: 4,
    year: "2022",
    title: "Top Coffee Lounge Experience",
    organization: "Culinary & Hospitality Design",
    icon: <FaAward className="text-amber-500 text-3xl" />,
    description: "Celebrated for architectural beauty, immersive sensory ambiance, and warm hospitalities.",
  },
];

const Awards = () => {
  useReveal(".awards-section");

  return (
    <section className="awards-section py-24 bg-[#0F0E0D]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="uppercase tracking-[5px] text-amber-500 text-sm font-semibold">
            Recognitions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Awards & Accolades
          </h2>
          <p className="mt-6 text-zinc-400 leading-8">
            Our passion for coffee craftsmanship has earned us national and international recognition over the years.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awardsData.map((award) => (
            <div
              key={award.id}
              className="bg-[#181715] border border-zinc-800 rounded-3xl p-8 hover:border-amber-500/50 transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {award.icon}
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-500">
                {award.year}
              </span>
              <h3 className="text-xl font-bold text-white mt-2 mb-3">
                {award.title}
              </h3>
              <p className="text-sm font-medium text-zinc-400 mb-4">
                {award.organization}
              </p>
              <p className="text-xs text-zinc-500 leading-6">
                {award.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
