import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaTag,
  FaPaperPlane,
  FaCoffee,
  FaTruck,
  FaHeart,
  FaCheck,
} from "react-icons/fa";

import useReveal from "../../Hooks/UseReveal";

const perks = [
  {
    id: 1,
    icon: FaCoffee,
    title: "Artisanal Fresh Roast",
    text: "Small-batch roasted weekly for peak flavor notes.",
  },
  {
    id: 2,
    icon: FaTruck,
    title: "Express Doorstep Delivery",
    text: "Free shipping on subscriptions & orders over $40.",
  },
  {
    id: 3,
    icon: FaHeart,
    title: "Dedicated Concierge Support",
    text: "Our baristas are ready to answer your brewing queries.",
  },
];

// Moves the soft spotlight inside the form panel to follow the cursor
const handleMouseMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
};

const ContactForm = () => {
  useReveal(".contact-form");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section
      id="contact-form"
      className="contact-form section-y relative overflow-hidden bg-[#431602]"
    >
      {/* Component-scoped keyframes (works with any Tailwind version) */}
      <style>{`
        @keyframes contactOrbA {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50%      { transform: translate3d(60px, 40px, 0) scale(1.12); }
        }
        @keyframes contactOrbB {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50%      { transform: translate3d(-60px, -40px, 0) scale(1.15); }
        }
        @keyframes contactPop {
          from { opacity: 0; transform: translateY(-8px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .contact-orb-a { animation: contactOrbA 18s ease-in-out infinite; }
        .contact-orb-b { animation: contactOrbB 22s ease-in-out infinite; }
        .contact-pop   { animation: contactPop 0.5s cubic-bezier(0.22, 1, 0.36, 1) both; }
        @media (prefers-reduced-motion: reduce) {
          .contact-orb-a, .contact-orb-b, .contact-pop { animation: none; }
        }
      `}</style>

      {/* Ambient background: gives the glass something to blur */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="contact-orb-a absolute -left-24 top-16 h-96 w-96 rounded-full bg-amber-500/20 blur-[120px]" />
        <div className="contact-orb-b absolute -right-24 bottom-0 h-[30rem] w-[30rem] rounded-full bg-orange-700/20 blur-[140px]" />
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

      <div className="page-container relative">
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left */}
          <div>
            <h2 className="text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Let's Brew Something Amazing Together
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-zinc-400">
              Have a question about our coffee blends, private catering, or
              wholesale partnerships? Send us a message and our roasting team
              will connect with you within 24 hours.
            </p>

            <div className="mt-10 space-y-4">
              {perks.map((perk) => {
                const Icon = perk.icon;

                return (
                  <div
                    key={perk.id}
                    className="
                      group flex items-center gap-4 rounded-2xl
                      border border-white/10 bg-white/[0.04] p-5
                      backdrop-blur-xl
                      shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)]
                      transition-all duration-500
                      hover:translate-x-1.5 hover:border-amber-400/30 hover:bg-white/[0.07]
                      motion-reduce:transition-none motion-reduce:hover:translate-x-0
                    "
                  >
                    <div
                      className="
                        flex h-12 w-12 shrink-0 items-center justify-center rounded-xl
                        border border-amber-300/20
                        bg-gradient-to-br from-amber-300/25 to-amber-600/5
                        text-lg text-amber-300 transition-all duration-500
                        group-hover:scale-110 group-hover:-rotate-6
                        group-hover:shadow-[0_0_24px_rgba(251,191,36,0.3)]
                        motion-reduce:transition-none
                        motion-reduce:group-hover:scale-100 motion-reduce:group-hover:rotate-0
                      "
                    >
                      <Icon />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        {perk.title}
                      </h4>
                      <p className="text-sm text-zinc-400">{perk.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Form */}
          <form
            onSubmit={handleSubmit}
            onMouseMove={handleMouseMove}
            className="
              relative overflow-hidden rounded-[32px]
              border border-white/10 bg-white/[0.04] p-8 sm:p-10
              backdrop-blur-2xl
              shadow-[0_24px_80px_-12px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.08)]
            "
          >
            {/* Cursor-following spotlight */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(420px circle at var(--mx, 70%) var(--my, 0%), rgba(251,191,36,0.10), transparent 60%)",
              }}
            />

            {/* Glass edge highlight */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
            />

            <div className="relative">
              {submitted && (
                <div
                  role="status"
                  className="contact-pop mb-6 flex items-center justify-center gap-3 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-center text-sm font-medium text-emerald-300 backdrop-blur-md"
                >
                  <FaCheck className="shrink-0" />
                  <span>
                    Thank you! Your message has been sent successfully. We will
                    reply shortly.
                  </span>
                </div>
              )}

              <div className="grid gap-5 md:grid-cols-2">
                <InputField
                  icon={<FaUser />}
                  label="Your Name"
                  name="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <InputField
                  icon={<FaEnvelope />}
                  label="Email Address"
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <InputField
                  icon={<FaPhoneAlt />}
                  label="Phone Number"
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                />

                <InputField
                  icon={<FaTag />}
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="relative mt-5">
                <textarea
                  id="message"
                  rows={5}
                  placeholder=" "
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="
                    peer w-full resize-none rounded-2xl
                    border border-white/10 bg-white/[0.04]
                    px-5 pb-4 pt-8 text-white outline-none backdrop-blur-md
                    transition-all duration-300
                    focus:border-amber-400/50 focus:bg-white/[0.07]
                    focus:shadow-[0_0_0_4px_rgba(251,191,36,0.08)]
                  "
                />
                <label
                  htmlFor="message"
                  className="
                    pointer-events-none absolute left-5 top-5 text-zinc-500
                    transition-all duration-300
                    peer-focus:top-2.5 peer-focus:text-xs peer-focus:text-amber-400
                    peer-[:not(:placeholder-shown)]:top-2.5
                    peer-[:not(:placeholder-shown)]:text-xs
                  "
                >
                  Write your message here...
                </label>
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="
                  group relative mt-7 inline-flex w-full items-center justify-center
                  gap-3 overflow-hidden rounded-full sm:w-auto
                  bg-gradient-to-r from-amber-300 to-amber-500 px-8 py-4
                  font-semibold text-black
                  shadow-[0_10px_30px_-8px_rgba(245,158,11,0.6)]
                  transition-all duration-500
                  hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-8px_rgba(245,158,11,0.8)]
                  active:translate-y-0
                  disabled:cursor-not-allowed disabled:opacity-70
                  disabled:hover:translate-y-0
                  focus-visible:outline-none focus-visible:ring-2
                  focus-visible:ring-amber-300/70 focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#0F0E0D]
                  motion-reduce:transition-none
                  motion-reduce:hover:translate-y-0
                "
              >
                {/* Light sweep on hover */}
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none absolute inset-y-0 left-0 w-1/3
                    -translate-x-full -skew-x-12
                    bg-gradient-to-r from-transparent via-white/50 to-transparent
                    transition-transform duration-700
                    group-hover:translate-x-[400%]
                    motion-reduce:hidden
                  "
                />
                <span className="relative">
                  {submitted ? "Message Sent" : "Send Message"}
                </span>
                {submitted ? (
                  <FaCheck className="relative" />
                ) : (
                  <FaPaperPlane className="relative transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-1 motion-reduce:transition-none" />
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

// Floating-label glass input. The label sits after the input so `peer` works.
const InputField = ({ icon, label, name, ...props }) => (
  <div className="group relative">
    <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-sm text-zinc-500 transition-colors duration-300 group-focus-within:text-amber-400">
      {icon}
    </span>
    <input
      id={name}
      name={name}
      placeholder=" "
      {...props}
      className="
        peer w-full rounded-2xl
        border border-white/10 bg-white/[0.04]
        pb-2.5 pl-12 pr-5 pt-6 text-white outline-none backdrop-blur-md
        transition-all duration-300
        focus:border-amber-400/50 focus:bg-white/[0.07]
        focus:shadow-[0_0_0_4px_rgba(251,191,36,0.08)]
      "
    />
    <label
      htmlFor={name}
      className="
        pointer-events-none absolute left-12 top-1/2 -translate-y-1/2 text-zinc-500
        transition-all duration-300
        peer-focus:top-3 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:text-amber-400
        peer-[:not(:placeholder-shown)]:top-3
        peer-[:not(:placeholder-shown)]:translate-y-0
        peer-[:not(:placeholder-shown)]:text-xs
      "
    >
      {label}
    </label>
  </div>
);

export default ContactForm;
