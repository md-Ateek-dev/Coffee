import { useRef, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import useReveal from "../../Hooks/UseReveal";
import useStaggerReveal from "../../Hooks/useStaggerReveal";
import member1 from "../../assets/images/team/member-1.webp";
import member2 from "../../assets/images/team/member-2.webp";
import member3 from "../../assets/images/team/member-3.webp";
import member4 from "../../assets/images/team/member-4.webp";

const team = [
  {
    id: 1,
    name: "James Carter",
    role: "Head Barista & Roaster",
    image: member1,
  },
  {
    id: 2,
    name: "Sophia Miller",
    role: "Master Cupper & Blender",
    image: member2,
  },
  {
    id: 3,
    name: "Daniel Wilson",
    role: "Bean Sourcing Director",
    image: member3,
  },
  {
    id: 4,
    name: "Emma Johnson",
    role: "Café Experience Manager",
    image: member4,
  },
  {
    id: 5,
    name: "Oliver Vance",
    role: "Executive Pastry Chef",
    image: member1,
  },
  {
    id: 6,
    name: "Mia Roberts",
    role: "Quality Control Specialist",
    image: member2,
  },
  {
    id: 7,
    name: "Ethan Davis",
    role: "Latte Art Champion",
    image: member3,
  },
  {
    id: 8,
    name: "Chloe Bennet",
    role: "Sensory & Cupping Lead",
    image: member4,
  },
];

const Team = () => {
  useReveal(".team");
  useStaggerReveal(".team", ".team-card", 0.1);
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      // Loop back if reached end
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 10
      ) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: 320, behavior: "smooth" });
      }
    }
  };

  // Automatic right-to-left sliding every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      scrollRight();
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="team py-24 bg-[#0F0E0D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header with Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="uppercase tracking-[5px] text-amber-500 font-semibold text-sm">
              Meet Our Team
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
              Passion Behind Every Cup
            </h2>
            <p className="mt-3 text-zinc-300 max-w-xl text-base">
              Our experienced team of roasters, baristas, and sensory cuppers
              craft every single brew to perfection.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border border-zinc-700 bg-[#1a1815] text-white flex items-center justify-center hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all shadow-lg"
              aria-label="Previous Team Member"
            >
              <FaChevronLeft size={16} />
            </button>
            <button
              onClick={scrollRight}
              className="w-12 h-12 rounded-full border border-zinc-700 bg-[#1a1815] text-white flex items-center justify-center hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all shadow-lg"
              aria-label="Next Team Member"
            >
              <FaChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Automatic Horizontal Sliding Track */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory py-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {team.map((member) => (
            <div
              key={member.id}
              className="
                w-[280px]
                sm:w-[320px]
                shrink-0
                snap-start
                team-card
                group
                overflow-hidden
                rounded-3xl
                bg-[#1a1815]
                border
                border-zinc-700/70
                hover:border-amber-500
                hover:shadow-xl
                hover:shadow-amber-500/10
                transition-all
                duration-500
              "
            >
              {/* Image */}
              <div className="overflow-hidden aspect-[3/4]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{member.name}</h3>

                <p className="mt-1 text-amber-400 font-semibold text-xs">
                  {member.role}
                </p>

                {/* Social Buttons */}
                <div className="flex gap-3 mt-6">
                  <button className="w-9 h-9 rounded-full bg-[#11100e] text-zinc-300 hover:bg-amber-500 hover:text-black transition border border-zinc-700/60 flex items-center justify-center">
                    <FaFacebookF size={12} />
                  </button>
                  <button className="w-9 h-9 rounded-full bg-[#11100e] text-zinc-300 hover:bg-amber-500 hover:text-black transition border border-zinc-700/60 flex items-center justify-center">
                    <FaInstagram size={12} />
                  </button>
                  <button className="w-9 h-9 rounded-full bg-[#11100e] text-zinc-300 hover:bg-amber-500 hover:text-black transition border border-zinc-700/60 flex items-center justify-center">
                    <FaLinkedinIn size={12} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Navigation Controls Below Cards */}
        <div className="sm:hidden flex items-center justify-center gap-3 mt-6">
          <button
            onClick={scrollLeft}
            className="w-10 h-10 rounded-full border border-zinc-700 bg-[#1a1815] text-white flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all shadow-lg"
            aria-label="Previous Team Member"
          >
            <FaChevronLeft size={14} />
          </button>
          <button
            onClick={scrollRight}
            className="w-10 h-10 rounded-full border border-zinc-700 bg-[#1a1815] text-white flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all shadow-lg"
            aria-label="Next Team Member"
          >
            <FaChevronRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
