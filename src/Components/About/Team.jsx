import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// ---- Rotary Roast palette (from the design brief) ----
const COLORS = {
  bg: "zinc-900", // background of the section
  surface: "#211B16",
  primary: "#E8A64B", // active border / glow
  secondary: "#C77D30",
  textOnPhoto: "#F5EDE4",
};

const team = [
  {
    id: 1,
    name: "James Carter",
    role: "Head Barista & Roaster",
    img: "https://i.pravatar.cc/500?img=12",
  },
  {
    id: 2,
    name: "Sophia Miller",
    role: "Master Cupper & Blender",
    img: "https://i.pravatar.cc/500?img=47",
  },
  {
    id: 3,
    name: "Daniel Wilson",
    role: "Bean Sourcing Director",
    img: "https://i.pravatar.cc/500?img=14",
  },
  {
    id: 4,
    name: "Emma Johnson",
    role: "Café Experience Manager",
    img: "https://i.pravatar.cc/500?img=45",
  },
  {
    id: 5,
    name: "Oliver Vance",
    role: "Executive Pastry Chef",
    img: "https://i.pravatar.cc/500?img=51",
  },
  {
    id: 6,
    name: "Mia Roberts",
    role: "Quality Control Specialist",
    img: "https://i.pravatar.cc/500?img=32",
  },
  {
    id: 7,
    name: "Ethan Davis",
    role: "Latte Art Champion",
    img: "https://i.pravatar.cc/500?img=15",
  },
  {
    id: 8,
    name: "Chloe Bennet",
    role: "Sensory & Cupping Lead",
    img: "https://i.pravatar.cc/500?img=48",
  },
];

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const listener = (e) => setReduced(e.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);
  return reduced;
}

export default function RotaryRoastTeam() {
  const total = team.length;
  const angleStep = 360 / total;
  const radius = 460; // bigger radius = flatter, gentler curve (per brief)

  const [activeIndex, setActiveIndex] = useState(0);
  const isHovering = useRef(false);
  const reducedMotion = usePrefersReducedMotion();

  const next = useCallback(
    () => setActiveIndex((p) => (p + 1) % total),
    [total],
  );
  const prev = useCallback(
    () => setActiveIndex((p) => (p - 1 + total) % total),
    [total],
  );

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHovering.current) next();
    }, 3800);
    return () => clearInterval(timer);
  }, [next]);

  const rotation = -activeIndex * angleStep;

  return (
    <section
      className="py-20 px-4 relative overflow-hidden"
      style={{ backgroundColor: COLORS.bg }}
    >
      {/* Ambient glows */}
      <div
        className="absolute top-0 left-1/4 rounded-full pointer-events-none"
        style={{
          width: 380,
          height: 380,
          background: `${COLORS.primary}1A`,
          filter: "blur(140px)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 rounded-full pointer-events-none"
        style={{
          width: 320,
          height: 320,
          background: `${COLORS.secondary}14`,
          filter: "blur(120px)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="uppercase font-semibold text-xs"
            style={{ color: COLORS.primary, letterSpacing: "5px" }}
          >
            Meet Our Team
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mt-2"
            style={{ color: COLORS.textOnPhoto }}
          >
            Passion Behind Every Cup
          </h2>
          <p
            className="mt-3 max-w-xl mx-auto text-sm sm:text-base"
            style={{ color: "#C9BFB4" }}
          >
            Our roasters, baristas, and sensory cuppers craft every single brew
            to perfection.
          </p>
        </div>

        {reducedMotion ? (
          <ReducedMotionGrid
            team={team}
            activeIndex={activeIndex}
            onPick={setActiveIndex}
          />
        ) : (
          <div
            onMouseEnter={() => (isHovering.current = true)}
            onMouseLeave={() => (isHovering.current = false)}
            className="relative flex items-center justify-center"
            style={{
              height: "clamp(380px, 52vw, 480px)",
              perspective: "1800px",
            }}
          >
            <div
              className="relative w-full h-full transition-transform duration-[900ms]"
              style={{
                transformStyle: "preserve-3d",
                transform: `translateZ(-${radius}px) rotateY(${rotation}deg)`,
                transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              {team.map((member, index) => {
                const cardAngle = index * angleStep;
                let diff = index - activeIndex;
                if (diff > total / 2) diff -= total;
                if (diff < -total / 2) diff += total;
                const isActive = diff === 0;
                const opacity =
                  Math.abs(diff) <= 2 ? 1 - Math.abs(diff) * 0.28 : 0;
                const scale = isActive ? 1 : 0.82;
                const dimmed = opacity < 0.4;

                return (
                  <div
                    key={member.id}
                    aria-hidden={dimmed ? "true" : undefined}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-[900ms]"
                    style={{
                      width: "clamp(190px, 24vw, 260px)",
                      transform: `rotateY(${cardAngle}deg) translateZ(${radius}px) scale(${scale})`,
                      opacity,
                      pointerEvents: dimmed ? "none" : "auto",
                      transitionTimingFunction:
                        "cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  >
                    <div
                      className="rounded-3xl overflow-hidden transition-all duration-500"
                      style={{
                        backgroundColor: COLORS.surface,
                        border: `1px solid ${isActive ? COLORS.primary : "#3A332C"}`,
                        boxShadow: isActive
                          ? `0 20px 40px ${COLORS.primary}40`
                          : "none",
                      }}
                    >
                      <div className="relative aspect-[3/4] overflow-hidden">
                        <img
                          src={member.img}
                          alt={member.name}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                        {/* Text only rendered on the active card — keeps side cards legible-safe */}
                        {isActive && (
                          <>
                            <div
                              className="absolute inset-0"
                              style={{
                                background:
                                  "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.1) 55%, transparent)",
                              }}
                            />
                            <div className="absolute bottom-0 left-0 w-full p-4">
                              <h3
                                className="text-base sm:text-lg font-bold leading-tight"
                                style={{ color: COLORS.textOnPhoto }}
                              >
                                {member.name}
                              </h3>
                              <p
                                className="mt-0.5 font-semibold text-xs"
                                style={{ color: COLORS.primary }}
                              >
                                {member.role}
                              </p>
                            </div>
                          </>
                        )}
                      </div>

                      {isActive && (
                        <div className="flex gap-2 justify-center py-4">
                          {[FaFacebookF, FaInstagram, FaLinkedinIn].map(
                            (Icon, i) => (
                              <button
                                key={i}
                                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 focus-visible:outline focus-visible:outline-2"
                                style={{
                                  backgroundColor: "#171310",
                                  color: "#C9BFB4",
                                  border: "1px solid #3A332C",
                                  outlineColor: COLORS.primary,
                                }}
                                aria-label={`${member.name} social link`}
                              >
                                <Icon size={13} />
                              </button>
                            ),
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Controls + Dots */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <NavButton onClick={prev} label="Previous team member">
            <ChevronLeft size={16} />
          </NavButton>

          <div className="flex gap-2">
            {team.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to team member ${i + 1}`}
                aria-current={i === activeIndex ? "true" : undefined}
                className="h-2 rounded-full transition-all duration-500 focus-visible:outline focus-visible:outline-2"
                style={{
                  width: i === activeIndex ? 32 : 8,
                  backgroundColor:
                    i === activeIndex ? COLORS.primary : "#4A4139",
                  outlineColor: COLORS.primary,
                }}
              />
            ))}
          </div>

          <NavButton onClick={next} label="Next team member">
            <ChevronRight size={16} />
          </NavButton>
        </div>
      </div>
    </section>
  );
}

function NavButton({ onClick, label, children }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 focus-visible:outline focus-visible:outline-2"
      style={{
        backgroundColor: COLORS.surface,
        color: COLORS.textOnPhoto,
        border: "1px solid #3A332C",
        outlineColor: COLORS.primary,
      }}
    >
      {children}
    </button>
  );
}

// Static, fully-legible fallback for prefers-reduced-motion: no 3D transform at all.
function ReducedMotionGrid({ team, activeIndex, onPick }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {team.map((member, i) => {
        const isActive = i === activeIndex;
        return (
          <button
            key={member.id}
            onClick={() => onPick(i)}
            className="text-left rounded-3xl overflow-hidden transition-all duration-300 focus-visible:outline focus-visible:outline-2"
            style={{
              backgroundColor: COLORS.surface,
              border: `1px solid ${isActive ? COLORS.primary : "#3A332C"}`,
              boxShadow: isActive ? `0 12px 28px ${COLORS.primary}33` : "none",
              outlineColor: COLORS.primary,
            }}
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3">
              <h3
                className="text-sm font-bold leading-tight"
                style={{ color: COLORS.textOnPhoto }}
              >
                {member.name}
              </h3>
              <p
                className="mt-0.5 font-semibold text-[11px]"
                style={{ color: COLORS.primary }}
              >
                {member.role}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
}
