import { useState } from "react";

import useReveal from "../../Hooks/UseReveal";
import useStaggerReveal from "../../Hooks/useStaggerReveal";

const faqs = [
  {
    id: 1,
    question: "What are your opening hours?",
    answer:
      "We're open every day from 8:00 AM to 10:00 PM, including weekends and holidays.",
  },
  {
    id: 2,
    question: "Do you offer takeaway and delivery?",
    answer:
      "Yes. You can enjoy takeaway from our café or order online for home delivery.",
  },
  {
    id: 3,
    question: "Do you serve vegetarian or vegan options?",
    answer:
      "Absolutely! We offer a variety of vegan drinks, dairy-free milk alternatives, and vegetarian snacks.",
  },
  {
    id: 4,
    question: "Can I reserve a table?",
    answer:
      "Yes. Reservations are available for small groups and private gatherings.",
  },
  {
    id: 5,
    question: "Do you sell coffee beans?",
    answer:
      "Yes. We sell freshly roasted whole beans and ground coffee in multiple roast profiles.",
  },
  {
    id: 6,
    question: "Do you provide free Wi-Fi?",
    answer:
      "Yes. High-speed Wi-Fi is available free of charge for all customers.",
  },
];

// Moves the soft spotlight inside an item to follow the cursor
const handleMouseMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
};

const FAQ = () => {
  const [active, setActive] = useState(1);

  useReveal(".faq-section");
  useStaggerReveal(".faq-section", ".faq-item");

  const toggleFAQ = (id) => {
    setActive((prev) => (prev === id ? null : id));
  };

  return (
    <section className="faq-section relative overflow-hidden bg-[#431602] py-28">
      {/* Component-scoped keyframes (works with any Tailwind version) */}
      <style>{`
        @keyframes faqOrbA {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50%      { transform: translate3d(50px, 40px, 0) scale(1.12); }
        }
        @keyframes faqOrbB {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50%      { transform: translate3d(-60px, -30px, 0) scale(1.15); }
        }
        .faq-orb-a { animation: faqOrbA 18s ease-in-out infinite; }
        .faq-orb-b { animation: faqOrbB 22s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .faq-orb-a, .faq-orb-b { animation: none; }
        }
      `}</style>

      {/* Ambient background: gives the glass something to blur */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="faq-orb-a absolute -left-20 top-20 h-96 w-96 rounded-full bg-amber-500/20 blur-[120px]" />
        <div className="faq-orb-b absolute -right-24 bottom-10 h-[28rem] w-[28rem] rounded-full bg-orange-700/20 blur-[140px]" />
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

      <div className="relative mx-auto max-w-3xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Frequently asked questions
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-zinc-400">
            Find quick answers to the questions we receive most often from our
            customers.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = active === faq.id;

            return (
              <div
                key={faq.id}
                onMouseMove={handleMouseMove}
                className={`
                  faq-item group relative overflow-hidden rounded-3xl border
                  backdrop-blur-xl
                  transition-all duration-500 ease-out motion-reduce:transition-none
                  ${
                    isOpen
                      ? "border-amber-400/30 bg-white/[0.07] shadow-[0_20px_50px_-12px_rgba(245,158,11,0.22),inset_0_1px_0_rgba(255,255,255,0.12)]"
                      : "border-white/10 bg-white/[0.04] shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)] hover:border-white/20 hover:bg-white/[0.06]"
                  }
                `}
              >
                {/* Cursor-following spotlight */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(360px circle at var(--mx, 50%) var(--my, 50%), rgba(251,191,36,0.12), transparent 60%)",
                  }}
                />

                {/* Glass edge highlight */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
                />

                <h3 className="relative">
                  <button
                    type="button"
                    id={`faq-button-${faq.id}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${faq.id}`}
                    onClick={() => toggleFAQ(faq.id)}
                    className="flex w-full items-center gap-5 rounded-3xl p-5 text-left outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60 md:p-6"
                  >
                    <span
                      className={`flex-1 text-base font-medium transition-colors duration-300 md:text-lg ${
                        isOpen
                          ? "text-white"
                          : "text-zinc-300 group-hover:text-white"
                      }`}
                    >
                      {faq.question}
                    </span>

                    {/* Plus turns into a minus */}
                    <span
                      aria-hidden="true"
                      className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500 motion-reduce:transition-none ${
                        isOpen
                          ? "rotate-90 border-amber-300/40 bg-amber-400/15 text-amber-300 shadow-[0_0_20px_rgba(251,191,36,0.25)]"
                          : "border-white/10 bg-white/5 text-zinc-400 group-hover:border-white/20 group-hover:text-amber-300"
                      }`}
                    >
                      <span className="absolute h-[1.5px] w-3.5 rounded bg-current" />
                      <span
                        className={`absolute h-3.5 w-[1.5px] rounded bg-current transition-transform duration-500 motion-reduce:transition-none ${
                          isOpen ? "scale-y-0" : "scale-y-100"
                        }`}
                      />
                    </span>
                  </button>
                </h3>

                {/* Smooth expand/collapse */}
                <div
                  id={`faq-panel-${faq.id}`}
                  role="region"
                  aria-labelledby={`faq-button-${faq.id}`}
                  aria-hidden={!isOpen}
                  className={`relative grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div
                      className={`px-5 pb-6 transition-all duration-500 md:px-6 motion-reduce:transition-none ${
                        isOpen
                          ? "translate-y-0 opacity-100 delay-100"
                          : "-translate-y-1 opacity-0"
                      }`}
                    >
                      {/* Gradient divider */}
                      <div className="mb-5 h-px bg-gradient-to-r from-amber-400/40 to-transparent" />
                      <p className="leading-relaxed text-zinc-400">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
