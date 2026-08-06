import { useRef, useEffect, useState } from "react";
import useReveal from "../../Hooks/UseReveal";

import image1 from "../../assets/images/gallery/masonry-1.webp";
import image2 from "../../assets/images/gallery/masonry-2.webp";
import image3 from "../../assets/images/gallery/masonry-3.webp";
import image4 from "../../assets/images/gallery/masonry-4.webp";
import image5 from "../../assets/images/gallery/masonry-5.webp";
import image6 from "../../assets/images/gallery/masonry-6.webp";
import image7 from "../../assets/images/gallery/masonry-7.webp";
import image8 from "../../assets/images/gallery/masonry-8.webp";

const gallery = [
  { id: 1, image: image1, height: "h-72", label: "Espresso Shot" },
  { id: 2, image: image2, height: "h-96", label: "Latte Art" },
  { id: 3, image: image3, height: "h-80", label: "Coffee Beans" },
  { id: 4, image: image4, height: "h-[28rem]", label: "Café Vibes" },
  { id: 5, image: image5, height: "h-72", label: "Pour Over" },
  { id: 6, image: image6, height: "h-96", label: "Cappuccino" },
  { id: 7, image: image7, height: "h-80", label: "Roastery" },
  { id: 8, image: image8, height: "h-[28rem]", label: "Morning Brew" },
];

const GalleryItem = ({ item, index }) => {
  const itemRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const el = itemRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -30px 0px",
      },
    );

    observer.observe(el);

    // Immediate check — agar element already viewport mein hai
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={itemRef}
      className="gallery-item mb-4 sm:mb-5 md:mb-6 break-inside-avoid"
    >
      <div
        className={`
          relative
          overflow-hidden
          rounded-2xl
          sm:rounded-3xl
          cursor-pointer
          group
          will-change-transform
          transition-all
          duration-700
          ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
          ${
            isVisible
              ? "opacity-100 translate-y-0 rotate-0 scale-100"
              : "opacity-0 translate-y-16 rotate-2 scale-90"
          }
        `}
        style={{
          transitionDelay: `${index * 100}ms`,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image */}
        <img
          src={item.image}
          alt={item.label}
          loading="lazy"
          className={`
            w-full
            ${item.height}
            object-cover
            transition-all
            duration-700
            ease-out
            ${isHovered ? "scale-110 brightness-75" : "scale-100 brightness-100"}
          `}
        />

        {/* Overlay Content */}
        <div
          className={`
            absolute
            inset-0
            bg-gradient-to-t
            from-black/90
            via-black/20
            to-transparent
            flex
            flex-col
            justify-end
            p-5
            sm:p-6
            transition-all
            duration-500
            ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          <span className="text-amber-400 text-[10px] sm:text-xs uppercase tracking-[3px] font-semibold mb-1">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-white text-lg sm:text-xl font-bold">
            {item.label}
          </h3>
        </div>

        {/* Corner Amber Accent */}
        <div
          className={`
            absolute
            top-0
            right-0
            w-14
            h-14
            sm:w-16
            sm:h-16
            bg-gradient-to-bl
            from-amber-500/90
            to-transparent
            transition-all
            duration-500
            origin-top-right
            ${isHovered ? "opacity-100 scale-100" : "opacity-0 scale-0"}
          `}
          style={{
            clipPath: "polygon(100% 0, 0 0, 100% 100%)",
          }}
        />
      </div>
    </div>
  );
};

const MasonryGallery = () => {
  useReveal(".masonry-gallery");

  return (
    <section className="masonry-gallery py-16 sm:py-20 md:py-24 bg-[#181715]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <span className="uppercase tracking-[3px] sm:tracking-[4px] lg:tracking-[5px] text-amber-500 text-xs sm:text-sm font-semibold">
            Gallery Collection
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4 text-white leading-tight">
            Crafted With Passion
          </h2>
          <p className="mt-4 sm:mt-6 max-w-2xl mx-auto text-zinc-400 leading-relaxed sm:leading-8 text-sm sm:text-base px-2 sm:px-0">
            Explore our premium coffee moments, handcrafted drinks, cozy cafés
            and unforgettable experiences.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 sm:gap-5 md:gap-6">
          {gallery.map((item, index) => (
            <GalleryItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MasonryGallery;
