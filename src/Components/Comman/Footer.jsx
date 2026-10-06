/** @format */

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Check, Send } from "lucide-react";
const FONT_IMPORT =
  "@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,500&family=Manrope:wght@400;500;600;700&display=swap');";

const Instagram = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    {...props}
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const Facebook = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    {...props}
  >
    <path d="M15 8.5h-2a2 2 0 0 0-2 2V22M9 13h4" strokeLinecap="round" />
    <rect x="3" y="3" width="18" height="18" rx="5" />
  </svg>
);
const XGlyph = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    {...props}
  >
    <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
  </svg>
);
const Pinterest = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    {...props}
  >
    <path
      d="M9 21c1-2.5 1.6-4.7 2-7M12 3a7 7 0 0 0-2.5 13.5c-.1-1.1-.2-2.8.1-4C10 11 11 7.2 11 7.2A2.6 2.6 0 0 1 13.5 5c1.9 0 3 1.2 3 3.3 0 2-1 5-3 5-.8 0-1.4-.6-1.2-1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const socials = [
  { href: "https://instagram.com", label: "Instagram", Icon: Instagram },
  { href: "https://facebook.com", label: "Facebook", Icon: Facebook },
  { href: "https://twitter.com", label: "Twitter", Icon: XGlyph },
  { href: "https://pinterest.com", label: "Pinterest", Icon: Pinterest },
];

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
];

const menuLinks = [
  { to: "/menu#hot-coffee", label: "Hot Coffee" },
  { to: "/menu#cold-coffee", label: "Cold Coffee" },
  { to: "/menu#desserts", label: "Desserts" },
  { to: "/menu#special-drinks", label: "Special Drinks" },
];

function useInView(threshold = 0.15) {
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

function FooterColumn({ title, links, delay, inView }) {
  return (
    <div
      className="transition-all duration-700 ease-out"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(16px)",
        transitionDelay: inView ? `${delay}ms` : "0ms",
      }}
    >
      <h3
        className="mb-5 text-lg text-[#F3EAD9] sm:text-xl"
        style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
      >
        {title}
      </h3>
      <div className="flex flex-col gap-3">
        {links.map(({ to, label }) => (
          <Link
            key={label}
            to={to}
            className="group inline-flex w-fit items-center text-sm text-zinc-400 transition-colors duration-300 hover:text-[#C68A4E] sm:text-base"
          >
            <span className="mr-0 h-px w-0 bg-[#C68A4E] transition-all duration-300 group-hover:mr-2 group-hover:w-3" />
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [topRef, topInView] = useInView(0.3);
  const [colsRef, colsInView] = useInView(0.15);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 3500);
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#431602] text-zinc-300">
      <style>{`
        ${FONT_IMPORT}
        footer { font-family: 'Manrope', sans-serif; }

        @keyframes ringFade {
          from { opacity: 0; transform: scale(0.85); }
          to   { opacity: 1; transform: scale(1); }
        }
        .coffee-ring { animation: ringFade 1.4s ease-out both; }

        @keyframes checkPop {
          0%   { transform: scale(0.6); opacity: 0; }
          60%  { transform: scale(1.08); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .check-pop { animation: checkPop 0.45s ease-out both; }

        @media (prefers-reduced-motion: reduce) {
          .coffee-ring, .check-pop { animation: none !important; }
        }
      `}</style>

      {/* ambient glow + faint coffee-ring watermark behind the logo */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[560px] -translate-x-1/2 rounded-full opacity-[0.10] blur-[100px]"
        style={{ background: "#0F0E0D" }}
      />

      <div className="page-container relative py-12 sm:py-14 md:py-16">
        <div ref={topRef} className="text-center">
          <div className="relative inline-block mt-5">
            <svg
              aria-hidden
              viewBox="0 0 220 220"
              className="coffee-ring pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 text-[#C68A4E]/15 sm:h-48 sm:w-48"
              style={{
                opacity: topInView ? undefined : 0,
                animationPlayState: topInView ? "running" : "paused",
              }}
              fill="none"
            >
              <circle
                cx="110"
                cy="110"
                r="95"
                stroke="currentColor"
                strokeWidth="10"
              />
            </svg>

            <Link to="/" className="relative inline-block">
              <h2
                className="text-3xl tracking-[4px] text-white transition-colors hover:text-[#C68A4E] sm:text-4xl sm:tracking-[6px] md:text-5xl"
                style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
              >
                AURA
              </h2>
            </Link>
          </div>

          <p
            className="mt-3 text-sm italic text-zinc-400 sm:mt-4 sm:text-base"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Crafted for Slow Mornings.
          </p>

          <div
            className="mt-6 flex justify-center gap-3 transition-all duration-700 ease-out sm:mt-8 sm:gap-4"
            style={{
              opacity: topInView ? 1 : 0,
              transform: topInView ? "translateY(0)" : "translateY(12px)",
              transitionDelay: "150ms",
            }}
          >
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#C68A4E] hover:bg-[#C68A4E] hover:text-black sm:h-11 sm:w-11"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div
          ref={colsRef}
          className="mt-12 grid grid-cols-1 gap-8 text-left sm:mt-16 sm:grid-cols-2 sm:gap-10 md:mt-20 md:grid-cols-3 md:gap-12"
        >
          <FooterColumn
            title="Quick Links"
            links={quickLinks}
            delay={0}
            inView={colsInView}
          />
          <FooterColumn
            title="Menu"
            links={menuLinks}
            delay={120}
            inView={colsInView}
          />

          <div
            className="transition-all duration-700 ease-out sm:col-span-2 md:col-span-1"
            style={{
              opacity: colsInView ? 1 : 0,
              transform: colsInView ? "translateY(0)" : "translateY(16px)",
              transitionDelay: colsInView ? "240ms" : "0ms",
            }}
          >
            <h3
              className="mb-5 text-lg text-[#F3EAD9] sm:text-xl"
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
            >
              Contact
            </h3>
            <div className="flex flex-col gap-3 text-sm text-zinc-400 sm:text-base">
              <a
                href="tel:+919876543210"
                className="w-fit transition-colors hover:text-[#C68A4E]"
              >
                +91 9876543210
              </a>
              <a
                href="mailto:hello@auracoffee.com"
                className="w-fit break-all transition-colors hover:text-[#C68A4E]"
              >
                hello@auracoffee.com
              </a>
              <Link
                to="/contact"
                className="w-fit transition-colors hover:text-[#C68A4E]"
              >
                Lucknow, India
              </Link>
              <Link
                to="/contact"
                className="w-fit transition-colors hover:text-[#C68A4E]"
              >
                Mon – Sun : 8 AM – 10 PM
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-10 sm:mt-16 sm:pt-12 md:mt-20">
          <h3
            className="text-center text-xl text-white sm:text-2xl md:text-3xl"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
          >
            Subscribe to our Newsletter
          </h3>
          <p className="mx-auto mt-2 max-w-md text-center text-sm text-zinc-500">
            One email, once in a while — new blends and small-batch drops.
          </p>

          <form
            onSubmit={handleSubscribe}
            className="mx-auto mt-8 flex w-full max-w-2xl flex-col gap-4 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="h-16 w-full rounded-full border border-white bg-[#431602] px-6 text-base text-white outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-[#C68A4E] focus:ring-4 focus:ring-[#C68A4E]/15 sm:h-16 md:h-[70px]"
            />

            <button
              type="submit"
              disabled={subscribed}
              className="group relative h-14 w-full overflow-hidden rounded-full bg-[#f5a906] px-8 font-semibold text-black transition-all duration-300 hover:bg-[#f59905] active:scale-[0.97] disabled:cursor-default sm:h-14 sm:w-auto sm:min-w-[170px] md:h-16"
            >
              <span className="relative z-10 inline-flex items-center justify-center gap-2">
                {subscribed ? (
                  <>
                    <Check className="check-pop h-4 w-4" strokeWidth={3} />
                    Subscribed
                  </>
                ) : (
                  <>
                    Subscribe
                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </>
                )}
              </span>
            </button>
          </form>

          <div
            className="mt-4 text-center text-sm font-medium text-emerald-400 transition-all duration-500"
            style={{
              opacity: subscribed ? 1 : 0,
              transform: subscribed ? "translateY(0)" : "translateY(-6px)",
            }}
          >
            ✓ Thank you for subscribing!
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-zinc-500 sm:mt-16 sm:pt-8 sm:text-sm">
          © 2026 Aura Coffee. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
