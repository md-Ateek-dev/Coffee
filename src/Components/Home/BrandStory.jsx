import { useState, useCallback, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import storyImage from "../../assets/images/about/About.jpg";
import useReveal from "../../Hooks/UseReveal";

const BrandStory = () => {
  const [ripples, setRipples] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useReveal(".brand-story");

  // Direct IntersectionObserver — guaranteed kaam karega
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleImageClick = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = {
      id: Date.now() + Math.random(),
      x,
      y,
    };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 1500);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="brand-story py-16 sm:py-20 md:py-24 lg:py-28 bg-[#0F0E0D] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Image with Ripple Effect */}
          <div
            className={`
              relative group
              transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]
              ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}
            `}
          >
            <div
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer select-none"
              onClick={handleImageClick}
            >
              <img
                src={storyImage}
                alt="Coffee Farm"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Ambient Water Ripple (Continuous) */}
              <div className="absolute inset-0 pointer-events-none">
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border border-white/10 animate-ripple-slow" />
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border border-white/10 animate-ripple-slow [animation-delay:0.5s]" />
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border border-white/10 animate-ripple-slow [animation-delay:1s]" />
              </div>

              {/* Click Ripples */}
              {ripples.map((ripple) => (
                <span
                  key={ripple.id}
                  className="absolute rounded-full border-2 border-amber-400/60 bg-amber-400/10 animate-ripple-click pointer-events-none"
                  style={{
                    left: ripple.x,
                    top: ripple.y,
                    transform: "translate(-50%, -50%)",
                  }}
                />
              ))}

              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Decorative Frame */}
            <div className="absolute -inset-3 sm:-inset-4 border border-amber-500/20 rounded-3xl sm:rounded-[2rem] -z-10 transition-all duration-500 group-hover:border-amber-500/40 group-hover:scale-[1.02]" />
          </div>

          {/* Content */}
          <div
            className={`
              transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]
              ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}
            `}
            style={{ transitionDelay: "200ms" }}
          >
            <span className="inline-block uppercase tracking-[3px] sm:tracking-[5px] text-amber-500 text-xs sm:text-sm font-semibold mb-4 sm:mb-5">
              Our Story
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Every Bean
              <br />
              <span className="text-amber-500">Has A Story.</span>
            </h2>

            <p className="text-zinc-400 leading-relaxed sm:leading-8 mt-6 sm:mt-8 text-sm sm:text-base max-w-lg">
              We believe great coffee begins long before it reaches your cup.
              Our beans are sourced from passionate farmers, roasted with
              precision, and brewed to create unforgettable moments.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-amber-500 text-black font-bold text-sm sm:text-base hover:bg-amber-400 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 active:scale-95"
              >
                Learn More
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>

              <div className="flex items-center gap-6 px-6 py-3">
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-white">
                    12+
                  </p>
                  <p className="text-zinc-500 text-xs sm:text-sm">Years</p>
                </div>
                <div className="w-px h-10 bg-zinc-800" />
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-white">
                    50+
                  </p>
                  <p className="text-zinc-500 text-xs sm:text-sm">Farms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ripple-slow {
          0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.6; }
          100% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
        }
        @keyframes ripple-click {
          0% { width: 0; height: 0; opacity: 0.8; }
          100% { width: 400px; height: 400px; opacity: 0; }
        }
        .animate-ripple-slow {
          animation: ripple-slow 4s ease-out infinite;
        }
        .animate-ripple-click {
          animation: ripple-click 1.2s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default BrandStory;
