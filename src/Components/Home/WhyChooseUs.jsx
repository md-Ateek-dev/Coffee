import { useEffect, useRef, useState } from "react";
import { Coffee, Leaf, Award, Globe2 } from "lucide-react";

/* ------------------------------------------------------------------
   Design tokens
   bg          #120F0C   near-black roasted espresso
   card        #1C1712   roasted-bean brown
   card-hover  #241C15
   caramel     #C68A4E   toasted-sugar accent (signature color)
   caramel-deep#8B5A2C   crema shadow
   cream       #F3EAD9   milk-foam text
   muted       #9C9182   warm ash gray
   display type: "Fraunces"  (warm, characterful serif w/ italics)
   body type:    "Manrope"   (rounded geometric sans)
------------------------------------------------------------------- */

const FONT_IMPORT =
  "@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,500&family=Manrope:wght@400;500;600;700&display=swap');";

const features = [
  {
    icon: Coffee,
    title: "Premium Beans",
    description: "We carefully select only the finest Arabica beans.",
  },
  {
    icon: Leaf,
    title: "Freshly Roasted",
    description: "Roasted in small batches for maximum freshness.",
  },
  {
    icon: Award,
    title: "Expert Baristas",
    description: "Crafted with passion by experienced coffee experts.",
  },
  {
    icon: Globe2,
    title: "Sustainable Farming",
    description: "Supporting farmers with ethical sourcing practices.",
  },
];

/* Lightweight scroll-reveal — swap for your own useReveal/useStaggerReveal
   hooks if you'd rather keep those; logic kept local so this file runs
   standalone. */
function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView];
}

function FeatureCard({ icon: Icon, title, description, delay, inView }) {
  return (
    <div
      className="feature-card group relative rounded-[1.75rem] border border-white/[0.06] bg-[#431602] p-7 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#3f1d0f]/40 hover:bg-[#2f0f01]"
      style={{
        transitionDelay: inView ? `${delay}ms` : "0ms",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transitionProperty: "opacity, transform",
        transitionDuration: "700ms",
      }}
    >
      {/* icon ring — the slow-rotating dashed border nods to a roasting drum */}
      <div className="relative flex h-16 w-16 items-center justify-center">
        <span className="roast-ring absolute inset-0 rounded-full border border-dashed border-[#C68A4E]/35 transition-colors duration-500 group-hover:border-[#C68A4E]/70" />
        <span className="absolute inset-[6px] rounded-full bg-[#15120E] transition-colors duration-500 group-hover:bg-[#1a1510]" />
        <Icon
          className="relative h-6 w-6 text-[#c07123] transition-transform duration-500 group-hover:scale-110"
          strokeWidth={1.75}
        />
      </div>

      <h3
        className="mt-6 text-2xl text-[#F3EAD9]"
        style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
      >
        {title}
      </h3>

      <p className="mt-3 leading-relaxed text-[#9C9182]">{description}</p>

      {/* pour-line accent: fills left→right on hover */}
      <span className="absolute bottom-0 left-7 right-7 h-px overflow-hidden">
        <span className="block h-full w-full origin-left scale-x-0 bg-gradient-to-r from-[#d66f08] to-transparent transition-transform duration-500 ease-out group-hover:scale-x-100" />
      </span>
    </div>
  );
}

/* Hand-drawn cup + rising steam — the section's one signature flourish */
function SteamingCup() {
  return (
    <svg
      viewBox="0 0 320 320"
      className="w-56 sm:w-64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* saucer */}
      <ellipse cx="160" cy="248" rx="92" ry="10" fill="#0F0C09" />
      <ellipse cx="160" cy="244" rx="92" ry="10" fill="#241C15" />

      {/* cup body */}
      <path
        d="M84 150h152l-10 74c-2 16-16 28-32 28h-78c-16 0-30-12-32-28l-10-74Z"
        fill="#1C1712"
        stroke="#C68A4E"
        strokeOpacity="0.35"
        strokeWidth="1.5"
      />
      {/* coffee surface */}
      <ellipse cx="160" cy="152" rx="76" ry="12" fill="#3A2314" />
      <ellipse cx="160" cy="150" rx="76" ry="12" fill="#5C3A1E" />

      {/* handle */}
      <path
        d="M236 168c26 0 42 16 42 36s-16 36-42 36"
        stroke="#C68A4E"
        strokeOpacity="0.5"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* steam wisps */}
      <g stroke="#C68A4E" strokeWidth="3" strokeLinecap="round" fill="none">
        <path className="steam steam-1" d="M130 132C122 108 142 100 134 78" />
        <path className="steam steam-2" d="M162 132C154 104 176 96 166 70" />
        <path className="steam steam-3" d="M194 132C186 108 206 100 198 78" />
      </g>
    </svg>
  );
}

const WhyChooseUs = () => {
  const [headerRef, headerInView] = useInView(0.3);
  const [gridRef, gridInView] = useInView(0.15);

  return (
    <section className="why-us relative overflow-hidden bg-[#431602] py-28">
      <style>{`
        ${FONT_IMPORT}

        .why-us { font-family: 'Manrope', sans-serif; }

        @keyframes steamRise {
          0%   { transform: translateY(6px) scaleY(0.9); opacity: 0; }
          20%  { opacity: 0.7; }
          70%  { opacity: 0.35; }
          100% { transform: translateY(-22px) scaleY(1.15); opacity: 0; }
        }
        .steam { transform-origin: center bottom; animation: steamRise 3.6s ease-in-out infinite; }
        .steam-1 { animation-delay: 0s; }
        .steam-2 { animation-delay: 0.9s; }
        .steam-3 { animation-delay: 1.8s; }

        @keyframes slowSpin { to { transform: rotate(360deg); } }
        .roast-ring { animation: slowSpin 14s linear infinite; }

        @media (prefers-reduced-motion: reduce) {
          .steam, .roast-ring { animation: none !important; }
        }
      `}</style>

      {/* ambient glow, the only "bold" color move on the page */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-40 h-[420px] w-[620px] -translate-x-1/2 rounded-full opacity-[0.14] blur-[110px]"
        style={{ background: "#0F0E0D" }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div
          ref={headerRef}
          className="mx-auto mb-16 max-w-2xl text-center transition-all duration-700 ease-out"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C68A4E]">
            Why Choose Us
          </p>

          <h2
            className="mt-4 text-4xl text-[#F3EAD9] sm:text-5xl"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
          >
            More Than Just{" "}
            <span
              className="italic text-[#C68A4E]"
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}
            >
              Coffee
            </span>
          </h2>

          {/* signature underline — a single unbroken stroke, like a stir of the cup */}
          <svg
            className="mx-auto mt-3 h-3 w-40 text-[#C68A4E]/60"
            viewBox="0 0 160 12"
            fill="none"
          >
            <path
              d="M2 8c20-10 40 8 60-2s40 8 60-2"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          <p className="mt-5 text-base leading-relaxed text-[#9C9182]">
            Every cup is crafted with premium ingredients, expert techniques and
            a passion for exceptional coffee.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid items-center gap-8 lg:grid-cols-3 lg:gap-10"
        >
          {/* Left column */}
          <div className="space-y-6">
            {features.slice(0, 2).map((item, i) => (
              <FeatureCard
                key={item.title}
                {...item}
                delay={i * 120}
                inView={gridInView}
              />
            ))}
          </div>

          {/* Center — cup replaces the flat product photo with a living illustration */}
          {/* ye bhi color use kr skte h background me 790D16 5E0006 */}
          <div
            className="flex justify-center rounded-[2rem] border border-white/[0.06] bg-gradient-to-b from-[#802802] to-[#2f0f01] px-6 py-14 transition-all duration-700 ease-out lg:py-20"
            style={{
              opacity: gridInView ? 1 : 0,
              transform: gridInView ? "scale(1)" : "scale(0.92)",
              transitionDelay: gridInView ? "160ms" : "0ms",
            }}
          >
            <SteamingCup />
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {features.slice(2).map((item, i) => (
              <FeatureCard
                key={item.title}
                {...item}
                delay={(i + 2) * 120}
                inView={gridInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
