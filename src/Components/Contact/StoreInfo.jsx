import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaCar,
  FaWifi,
  FaArrowRight,
} from "react-icons/fa";

import useReveal from "../../Hooks/UseReveal";
import useStaggerReveal from "../../Hooks/useStaggerReveal";

const storeInfo = [
  {
    id: 1,
    icon: FaMapMarkerAlt,
    title: "Visit Our Café",
    value: "245 Coffee Street, Suite 100",
    description: "New York, NY 10001 - Heart of Downtown",
    href: "https://www.google.com/maps/search/?api=1&query=245+Coffee+Street+New+York+NY+10001",
    external: true,
  },
  {
    id: 2,
    icon: FaPhoneAlt,
    title: "Call Us Direct",
    value: "+1 (555) 123-4567",
    description: "Mon - Sun | 8:00 AM - 10:00 PM",
    href: "tel:+15551234567",
  },
  {
    id: 3,
    icon: FaEnvelope,
    title: "Email Us",
    value: "hello@auracoffee.com",
    description: "Instant support within 24 hours guaranteed",
    href: "mailto:hello@auracoffee.com",
  },
  {
    id: 4,
    icon: FaClock,
    title: "Opening Hours",
    value: "Everyday Open",
    description: "08:00 AM - 10:00 PM EST",
  },
  {
    id: 5,
    icon: FaCar,
    title: "Valet Parking",
    value: "Free Reserved Parking",
    description: "Complimentary space for all café guests",
  },
  {
    id: 6,
    icon: FaWifi,
    title: "High-Speed WiFi",
    value: "Gigabit Wireless Network",
    description: "Perfect workspace for remote productivity",
  },
];

// Moves the soft spotlight inside a card to follow the cursor
const handleMouseMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();

  e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);

  e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
};

const StoreInfo = () => {
  useReveal(".store-info");
  useStaggerReveal(".store-info", ".store-card");

  return (
    <section className="store-info relative overflow-hidden border-t border-white/5 bg-[#431602] py-28">
      {/* Component-scoped keyframes */}
      <style>{`
        @keyframes storeOrbA {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(60px, -40px, 0) scale(1.15);
          }
        }

        @keyframes storeOrbB {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(-70px, 30px, 0) scale(1.1);
          }
        }

        .store-orb-a {
          animation: storeOrbA 16s ease-in-out infinite;
        }

        .store-orb-b {
          animation: storeOrbB 20s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .store-orb-a,
          .store-orb-b {
            animation: none;
          }
        }
      `}</style>

      {/* =========================
          AMBIENT BACKGROUND
      ========================== */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="store-orb-a absolute -left-24 top-10 h-96 w-96 rounded-full bg-amber-500/20 blur-[120px]" />

        <div className="store-orb-b absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-orange-700/20 blur-[140px]" />

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
        {/* =========================
            HEADING
        ========================== */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Visit Our Coffee House
          </h2>

          <p className="mt-5 text-base leading-8 text-zinc-400">
            We'd love to welcome you. Visit our café, enjoy freshly brewed
            artisanal coffee, and experience a warm atmosphere crafted for
            coffee lovers.
          </p>
        </div>

        {/* =========================
            CARDS
        ========================== */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {storeInfo.map((item) => {
            const Icon = item.icon;

            const Tag = item.href ? "a" : "div";

            const linkProps = item.href
              ? {
                  href: item.href,
                  ...(item.external && {
                    target: "_blank",
                    rel: "noreferrer",
                  }),
                }
              : {};

            return (
              <Tag
                key={item.id}
                {...linkProps}
                onMouseMove={handleMouseMove}
                className="store-card group block rounded-[28px] outline-none"
              >
                {/* =========================
                    CARD
                ========================== */}
                <div
                  className="
                    relative
                    h-full
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-white
                    bg-[#431602]
                    p-8
                    backdrop-blur-xl

                    shadow-[0_8px_32px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.08)]

                    transition-all
                    duration-500
                    ease-out

                    group-hover:-translate-y-1.5

                    group-hover:border-white

                    group-hover:shadow-[0_0_20px_rgba(255,255,255,0.7)]

                    group-hover:bg-white/[0.04]

                    group-focus-visible:ring-2
                    group-focus-visible:ring-white/60

                    motion-reduce:transition-none
                    motion-reduce:group-hover:translate-y-0
                  "
                >
                  {/* =========================
                      WHITE CURSOR LIGHT
                  ========================== */}
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                    style={{
                      background:
                        "radial-gradient(320px circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.14), transparent 60%)",
                    }}
                  />

                  {/* =========================
                      GLASS EDGE HIGHLIGHT
                  ========================== */}
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      inset-x-8
                      top-0
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      via-white/40
                      to-transparent
                    "
                  />

                  <div className="relative">
                    {/* =========================
                        TOP ROW
                    ========================== */}
                    <div className="flex items-start justify-between">
                      {/* Icon */}
                      <div
                        className="
                          flex
                          h-14
                          w-14
                          items-center
                          justify-center
                          rounded-2xl

                          border
                          border-white/20

                          bg-white/[0.05]

                          text-white

                          backdrop-blur-md

                          transition-all
                          duration-500

                          group-hover:scale-110
                          group-hover:-rotate-6

                          group-hover:border-white/40

                          group-hover:shadow-[0_0_20px_rgba(255,255,255,0.35)]

                          motion-reduce:transition-none
                          motion-reduce:group-hover:scale-100
                          motion-reduce:group-hover:rotate-0
                        "
                      >
                        <Icon className="text-xl" />
                      </div>

                      {/* Arrow */}
                      {item.href && (
                        <span
                          aria-hidden="true"
                          className="
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-full

                            border
                            border-white/20

                            bg-white/5

                            text-xs
                            text-white

                            -translate-x-2
                            opacity-0

                            transition-all
                            duration-500

                            group-hover:translate-x-0
                            group-hover:-rotate-45
                            group-hover:opacity-100

                            motion-reduce:transition-none
                          "
                        >
                          <FaArrowRight />
                        </span>
                      )}
                    </div>

                    {/* =========================
                        TITLE
                    ========================== */}
                    <h3 className="mt-8 text-sm font-medium text-zinc-300">
                      {item.title}
                    </h3>

                    {/* =========================
                        VALUE
                    ========================== */}
                    <p className="mt-1.5 text-xl font-semibold tracking-tight text-white">
                      {item.value}
                    </p>

                    {/* =========================
                        DESCRIPTION
                    ========================== */}
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                      {item.description}
                    </p>

                    {/* =========================
                        BOTTOM LINE
                    ========================== */}
                    <div
                      className="
                        mt-7
                        h-px
                        w-10
                        bg-gradient-to-r
                        from-white/70
                        to-transparent

                        transition-all
                        duration-700

                        group-hover:w-full

                        motion-reduce:transition-none
                      "
                    />
                  </div>
                </div>
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StoreInfo;
