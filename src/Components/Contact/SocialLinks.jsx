import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
  FaArrowRight,
} from "react-icons/fa6";

import useReveal from "../../Hooks/UseReveal";
import useStaggerReveal from "../../Hooks/useStaggerReveal";

// `rgb` is each brand's colour as "r, g, b" so we can tint the glow with opacity
const socialLinks = [
  {
    id: 1,
    name: "Instagram",
    username: "@AuraCoffee",
    icon: FaInstagram,
    rgb: "225, 48, 108",
    link: "#",
  },
  {
    id: 2,
    name: "Facebook",
    username: "Aura Coffee",
    icon: FaFacebookF,
    rgb: "24, 119, 242",
    link: "#",
  },
  {
    id: 3,
    name: "X (Twitter)",
    username: "@AuraCoffee",
    icon: FaXTwitter,
    rgb: "113, 113, 122",
    link: "#",
  },
  {
    id: 4,
    name: "LinkedIn",
    username: "Aura Coffee",
    icon: FaLinkedinIn,
    rgb: "10, 102, 194",
    link: "#",
  },
  {
    id: 5,
    name: "YouTube",
    username: "Aura Coffee",
    icon: FaYoutube,
    rgb: "255, 0, 0",
    link: "#",
  },
];

// Moves the soft spotlight inside a card to follow the cursor
const handleMouseMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
};

const SocialLinks = () => {
  useReveal(".social-section");
  useStaggerReveal(".social-section", ".social-card");

  return (
    <section className="social-section relative overflow-hidden bg-[#431602] py-28">
      {/* Component-scoped keyframes (works with any Tailwind version) */}
      <style>{`
        @keyframes socialOrbA {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50%      { transform: translate3d(-60px, 40px, 0) scale(1.12); }
        }
        @keyframes socialOrbB {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50%      { transform: translate3d(70px, -30px, 0) scale(1.15); }
        }
        .social-orb-a { animation: socialOrbA 18s ease-in-out infinite; }
        .social-orb-b { animation: socialOrbB 22s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .social-orb-a, .social-orb-b { animation: none; }
        }
      `}</style>

      {/* Ambient background: gives the glass something to blur */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="social-orb-a absolute -right-20 top-0 h-96 w-96 rounded-full bg-amber-500/20 blur-[120px]" />
        <div className="social-orb-b absolute -left-24 bottom-0 h-[26rem] w-[26rem] rounded-full bg-orange-700/20 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Follow Aura Coffee
          </h2>
          <p className="mt-5 text-base leading-8 text-zinc-400">
            Join our community to discover new coffee recipes, behind-the-scenes
            stories, café updates and exclusive offers.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
          {socialLinks.map((social) => {
            const Icon = social.icon;

            return (
              // Outer element is what the reveal hook animates;
              // hover motion lives on the inner card so the two never fight.
              <a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`Follow Aura Coffee on ${social.name}`}
                onMouseMove={handleMouseMove}
                style={{ "--rgb": social.rgb }}
                className="social-card group block rounded-[28px] outline-none sm:last:col-span-2 xl:last:col-span-1"
              >
                <div
                  className="
                    relative h-full overflow-hidden rounded-[28px]
                    border border-white bg-white/[0.02] p-7
                    backdrop-blur-xl
                    shadow-[0_8px_32px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.08)]
                    transition-all duration-500 ease-out
                    group-hover:-translate-y-1.5
                    group-hover:border-white
                    group-hover:bg-white/[0.07]
                    group-focus-visible:ring-2 group-focus-visible:ring-amber-400/60
                    motion-reduce:transition-none
                    motion-reduce:group-hover:translate-y-0
                  "
                >
                  {/* Cursor-following spotlight, tinted with the brand colour */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none border-2 border-white/20 absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(300px circle at var(--mx, 50%) var(--my, 50%), rgba(var(--rgb), 0.22), transparent 60%)",
                    }}
                  />

                  {/* Glass edge highlight */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  />

                  <div className="relative">
                    <div className="flex items-start justify-between">
                      {/* Icon: glass at rest, fills with the brand colour on hover */}
                      <div
                        className="
                          relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl
                          border border-white bg-white/[0.06] backdrop-blur-md
                          transition-all duration-500
                          group-hover:scale-110 group-hover:-rotate-6
                          group-hover:border-white/25
                          motion-reduce:transition-none
                          motion-reduce:group-hover:scale-100
                          motion-reduce:group-hover:rotate-0
                        "
                      >
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(var(--rgb), 0.95), rgba(var(--rgb), 0.6))",
                            boxShadow: "0 0 28px rgba(var(--rgb), 0.5)",
                          }}
                        />
                        <Icon className="relative text-2xl text-amber-300 transition-colors duration-500 group-hover:text-white" />
                      </div>

                      <span
                        aria-hidden="true"
                        className="
                          flex h-9 w-9 items-center justify-center rounded-full
                          border border-white/10 bg-white/5 text-xs text-zinc-300
                          -translate-x-2 opacity-0 transition-all duration-500
                          group-hover:translate-x-0 group-hover:-rotate-45 group-hover:opacity-100
                          motion-reduce:transition-none
                        "
                      >
                        <FaArrowRight />
                      </span>
                    </div>

                    <h3 className="mt-8 text-xl font-semibold tracking-tight text-white">
                      {social.name}
                    </h3>

                    <p className="mt-1.5 text-sm text-zinc-400">
                      {social.username}
                    </p>

                    {/* Line that stretches on hover, in the brand colour */}
                    <div
                      className="mt-7 h-px w-10 transition-all duration-700 group-hover:w-full motion-reduce:transition-none"
                      style={{
                        background:
                          "linear-gradient(to right, rgba(var(--rgb), 0.9), transparent)",
                      }}
                    />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
