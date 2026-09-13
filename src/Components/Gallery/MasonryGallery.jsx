import { useRef, useEffect, useState, useCallback } from "react";
import { ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";

import image1 from "../../assets/images/gallery/masonry-1.webp";
import image2 from "../../assets/images/gallery/masonry-2.webp";
import image3 from "../../assets/images/gallery/masonry-3.webp";
import image4 from "../../assets/images/gallery/masonry-4.webp";
import image5 from "../../assets/images/gallery/masonry-5.webp";
import image6 from "../../assets/images/gallery/masonry-6.webp";
import image7 from "../../assets/images/gallery/masonry-7.webp";
import image8 from "../../assets/images/gallery/masonry-8.webp";

/* ------------------------------------------------------------------
   Coffee-bean palette:
   espresso-950 #0D0A08   wall background
   espresso-900 #1A140F   surfaces
   bean-tan     #A9744A   accent / tape
   bean-tan-lt  #C79868   accent text-on-dark
   mat cream    #F3EAD9   photo mat (the print itself)
   ink          #2A2018   text on cream
   taupe-400    #A89985   muted body text
   display: 'Fraunces'   body: 'Manrope'
------------------------------------------------------------------- */

const FONT_IMPORT =
  "@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,500&family=Manrope:wght@400;500;600;700&display=swap');";

const gallery = [
  { id: 1, image: image1, aspect: "aspect-[4/5]", label: "Espresso Shot" },
  { id: 2, image: image2, aspect: "aspect-[3/4]", label: "Latte Art" },
  { id: 3, image: image3, aspect: "aspect-square", label: "Coffee Beans" },
  { id: 4, image: image4, aspect: "aspect-[4/5]", label: "Café Vibes" },
  { id: 5, image: image5, aspect: "aspect-square", label: "Pour Over" },
  { id: 6, image: image6, aspect: "aspect-[3/4]", label: "Cappuccino" },
  { id: 7, image: image7, aspect: "aspect-[4/5]", label: "Roastery" },
  { id: 8, image: image8, aspect: "aspect-square", label: "Morning Brew" },
];

// deterministic slight tilt per card, alternating — never random per render
const TILTS = [-3, 2, -2, 3, -2.5, 1.5, -1.5, 2.5];

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

function PhotoCard({ item, index, inView, onOpen }) {
  const [loaded, setLoaded] = useState(false);
  const tilt = TILTS[index % TILTS.length];

  return (
    <button
      onClick={() => onOpen(index)}
      className="group relative block text-left focus:outline-none"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? `translateY(0) rotate(${tilt}deg) scale(1)`
          : "translateY(30px) rotate(0deg) scale(0.94)",
        transition:
          "opacity 0.6s ease-out, transform 0.6s cubic-bezier(0.22,1,0.36,1)",
        transitionDelay: inView ? `${index * 80}ms` : "0ms",
      }}
    >
      <div className="relative rounded-sm bg-[#F3EAD9] p-3 pb-10 shadow-lg shadow-black/40 transition-all duration-400 ease-out group-hover:-translate-y-2 group-hover:rotate-0 group-hover:shadow-2xl group-hover:shadow-[#A9744A]/20 group-focus-visible:-translate-y-2 group-focus-visible:rotate-0">
        {/* washi tape pin */}
        <span
          className="absolute -top-3 left-1/2 h-6 w-14 -translate-x-1/2 bg-[#A9744A]/70"
          style={{ transform: "translateX(-50%) rotate(-4deg)" }}
        />

        <div className={`relative ${item.aspect} overflow-hidden bg-[#1A140F]`}>
          <div
            className={`absolute inset-0 bg-[#1A140F] transition-opacity duration-500 ${
              loaded ? "opacity-0" : "opacity-100"
            }`}
          />
          <img
            src={item.image}
            alt={item.label}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />

          <div className="absolute inset-0 flex items-center justify-center bg-[#0D0A08]/0 opacity-0 transition-all duration-300 group-hover:bg-[#0D0A08]/25 group-hover:opacity-100">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F3EAD9]/90 text-[#2A2018] scale-75 transition-transform duration-300 group-hover:scale-100">
              <ZoomIn size={16} />
            </span>
          </div>
        </div>

        {/* caption, printed under the photo like a real mat */}
        <p
          className="absolute bottom-3 left-3 right-3 truncate text-sm text-[#2A2018]"
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 500,
            fontStyle: "italic",
          }}
        >
          {item.label}
        </p>
      </div>
    </button>
  );
}

function Lightbox({ index, onClose, onPrev, onNext }) {
  const item = gallery[index];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0D0A08]/95 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        onClick={onClose}
        className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-[#3A2E22] text-[#EFE3D0] transition hover:border-[#A9744A] hover:text-[#C79868]"
        aria-label="Close"
      >
        <X size={18} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#3A2E22] text-[#EFE3D0] transition hover:border-[#A9744A] hover:text-[#C79868] sm:left-6"
        aria-label="Previous image"
      >
        <ChevronLeft size={20} />
      </button>

      <div
        className="flex max-h-[85vh] max-w-3xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          key={item.id}
          src={item.image}
          alt={item.label}
          className="max-h-[70vh] w-auto rounded-sm object-contain shadow-2xl"
          style={{ animation: "lightboxIn 0.35s ease-out" }}
        />
        <div className="mt-4 flex items-center gap-3 text-[#EFE3D0]">
          <span className="text-xs font-semibold uppercase tracking-[3px] text-[#C79868]">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(gallery.length).padStart(2, "0")}
          </span>
          <span className="h-1 w-1 rounded-full bg-[#3A2E22]" />
          <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}>
            {item.label}
          </span>
        </div>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#3A2E22] text-[#EFE3D0] transition hover:border-[#A9744A] hover:text-[#C79868] sm:right-6"
        aria-label="Next image"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}

const MasonryGallery = () => {
  const [headingRef, headingInView] = useInView(0.3);
  const [gridRef, gridInView] = useInView(0.05);
  const [openIndex, setOpenIndex] = useState(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(
    () => setOpenIndex((i) => (i - 1 + gallery.length) % gallery.length),
    [],
  );
  const next = useCallback(
    () => setOpenIndex((i) => (i + 1) % gallery.length),
    [],
  );

  return (
    <section className="masonry-gallery relative overflow-hidden bg-[#0D0A08] py-16 sm:py-20 md:py-24">
      <style>{`
        ${FONT_IMPORT}
        .masonry-gallery { font-family: 'Manrope', sans-serif; }
        @keyframes lightboxIn {
          from { opacity: 0; transform: scale(0.96); }
          to   { opacity: 1; transform: scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .masonry-gallery * { transition: none !important; animation: none !important; }
        }
      `}</style>

      {/* faint corkboard-style dot texture instead of a flat glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #A9744A 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[320px] w-[560px] -translate-x-1/2 rounded-full bg-[#A9744A]/[0.08] blur-[110px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div
          ref={headingRef}
          className="mb-14 text-center transition-all duration-700 ease-out sm:mb-16 md:mb-20"
          style={{
            opacity: headingInView ? 1 : 0,
            transform: headingInView ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <span className="text-xs font-semibold uppercase tracking-[3px] text-[#C79868] sm:tracking-[4px] lg:tracking-[5px]">
            Gallery Collection
          </span>
          <h2
            className="mt-3 text-3xl leading-tight text-[#EFE3D0] sm:mt-4 sm:text-4xl md:text-5xl"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
          >
            Crafted With Passion
          </h2>
          <p className="mx-auto mt-4 max-w-2xl px-2 text-sm leading-relaxed text-[#A89985] sm:mt-6 sm:px-0 sm:text-base sm:leading-8">
            Moments from the café wall — click any print to look closer.
          </p>
        </div>

        {/* Pinboard grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 gap-x-6 gap-y-14 sm:grid-cols-3 sm:gap-y-16 lg:grid-cols-4"
        >
          {gallery.map((item, index) => (
            <PhotoCard
              key={item.id}
              item={item}
              index={index}
              inView={gridInView}
              onOpen={setOpenIndex}
            />
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <Lightbox
          index={openIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  );
};

export default MasonryGallery;
