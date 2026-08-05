import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaClock,
  FaUser,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import useReveal from "../../Hooks/UseReveal";
import useStaggerReveal from "../../Hooks/useStaggerReveal";

import blog1 from "../../assets/images/blog/blog-1.webp";
import blog2 from "../../assets/images/blog/blog-2.webp";
import blog3 from "../../assets/images/blog/blog-3.webp";
import blog4 from "../../assets/images/blog/blog-4.webp";
import blog5 from "../../assets/images/blog/blog-5.webp";
import blog6 from "../../assets/images/blog/blog-6.webp";

const blogs = [
  {
    id: 1,
    title: "How To Brew Better Pour Over Coffee",
    image: blog1,
    category: "Brewing",
    author: "Aura Coffee",
    date: "12 Jul 2026",
    readTime: "5 min",
    excerpt:
      "Master grind sizes, water temperature ratios, and pour speed for clean flavor profiles.",
  },
  {
    id: 2,
    title: "Arabica vs Robusta: Which One Is Better?",
    image: blog2,
    category: "Coffee Beans",
    author: "Aura Coffee",
    date: "10 Jul 2026",
    readTime: "7 min",
    excerpt:
      "An in-depth guide to bean origins, caffeine levels, acidity, and sensory differences.",
  },
  {
    id: 3,
    title: "5 Latte Art Tips For Beginners",
    image: blog3,
    category: "Recipes",
    author: "Aura Coffee",
    date: "08 Jul 2026",
    readTime: "6 min",
    excerpt:
      "Learn microfoam texturing techniques to pour hearts and rosettes at home.",
  },
  {
    id: 4,
    title: "Inside Our Sustainable Coffee Farms",
    image: blog4,
    category: "Sustainability",
    author: "Aura Coffee",
    date: "05 Jul 2026",
    readTime: "4 min",
    excerpt:
      "How direct trade practices empower local highland farming families worldwide.",
  },
  {
    id: 5,
    title: "Secrets Behind Perfect Espresso",
    image: blog5,
    category: "Coffee Culture",
    author: "Aura Coffee",
    date: "02 Jul 2026",
    readTime: "8 min",
    excerpt:
      "Understanding tamping pressure, extraction times, and Crema formation.",
  },
  {
    id: 6,
    title: "Freshly Roasted Beans: Why They Matter",
    image: blog6,
    category: "Roasting",
    author: "Aura Coffee",
    date: "30 Jun 2026",
    readTime: "6 min",
    excerpt:
      "Why degassing and peak 7-14 day roast windows create unforgettable cups.",
  },
];

const BlogGrid = () => {
  useReveal(".blog-grid");
  useStaggerReveal(".blog-grid", ".blog-card", 0.1);
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -380, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 10
      ) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: 380, behavior: "smooth" });
      }
    }
  };

  // Automatic right-to-left sliding timer
  useEffect(() => {
    const timer = setInterval(() => {
      scrollRight();
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="blog-grid py-24 bg-[#0F0E0D]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="uppercase tracking-[5px] text-amber-500 font-semibold text-sm">
              Latest Journal
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
              Coffee Stories & Guides
            </h2>
            <p className="text-zinc-300 mt-2 max-w-xl text-base">
              Slide through our expert coffee guides, brewing tutorials, and
              origin stories.
            </p>
          </div>

          {/* Slider Arrows */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border border-zinc-700 bg-[#1a1815] text-white flex items-center justify-center hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all shadow-lg"
              aria-label="Previous Article"
            >
              <FaChevronLeft size={16} />
            </button>
            <button
              onClick={scrollRight}
              className="w-12 h-12 rounded-full border border-zinc-700 bg-[#1a1815] text-white flex items-center justify-center hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all shadow-lg"
              aria-label="Next Article"
            >
              <FaChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Horizontal Slider Track (Right-to-Left) */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory py-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="
                w-[300px]
                sm:w-[360px]
                md:w-[380px]
                shrink-0
                snap-start
                blog-card
                overflow-hidden
                rounded-3xl
                border
                border-zinc-700/70
                bg-[#1a1815]
                transition-all
                duration-500
                hover:border-amber-500
                hover:shadow-xl
                hover:shadow-amber-500/10
                group
                flex
                flex-col
                justify-between
              "
            >
              <div>
                {/* Image */}
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="
                      h-full
                      w-full
                      object-cover
                      duration-700
                      transition-transform
                      group-hover:scale-110
                    "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full bg-amber-500 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-black">
                    {blog.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-7">
                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 text-xs font-medium text-amber-400/90 mb-4">
                    <span className="flex items-center gap-1.5">
                      <FaUser size={12} />
                      {blog.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaCalendarAlt size={12} />
                      {blog.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaClock size={12} />
                      {blog.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-snug group-hover:text-amber-400 transition-colors">
                    {blog.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-zinc-300 text-sm leading-relaxed line-clamp-2">
                    {blog.excerpt}
                  </p>
                </div>
              </div>

              {/* CTA Footer */}
              <div className="px-7 pb-7 pt-2">
                <Link
                  to="/blog"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    font-bold
                    text-amber-400
                    transition-all
                    hover:gap-4
                    text-sm
                  "
                >
                  Read Full Article
                  <FaArrowRight size={12} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile Navigation Controls Below Cards */}
        <div className="sm:hidden flex items-center justify-center gap-3 mt-6">
          <button
            onClick={scrollLeft}
            className="w-10 h-10 rounded-full border border-zinc-700 bg-[#1a1815] text-white flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all shadow-lg"
            aria-label="Previous Article"
          >
            <FaChevronLeft size={14} />
          </button>
          <button
            onClick={scrollRight}
            className="w-10 h-10 rounded-full border border-zinc-700 bg-[#1a1815] text-white flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all shadow-lg"
            aria-label="Next Article"
          >
            <FaChevronRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
