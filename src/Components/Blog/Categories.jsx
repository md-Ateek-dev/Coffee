import { useState } from "react";
import {
  FaCoffee,
  FaMugHot,
  FaSeedling,
  FaBookOpen,
  FaFire,
  FaLeaf,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";

import useReveal from "../../Hooks/UseReveal";
import useStaggerReveal from "../../Hooks/useStaggerReveal";

const categories = [
  { id: 1, name: "Brewing", icon: FaCoffee, posts: 18 },
  { id: 2, name: "Coffee Beans", icon: FaSeedling, posts: 12 },
  { id: 3, name: "Recipes", icon: FaMugHot, posts: 15 },
  { id: 4, name: "Coffee Culture", icon: FaBookOpen, posts: 10 },
  { id: 5, name: "Roasting", icon: FaFire, posts: 8 },
  { id: 6, name: "Sustainability", icon: FaLeaf, posts: 7 },
];

const maxPosts = Math.max(...categories.map((c) => c.posts));

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState("Brewing");

  useReveal(".blog-categories");
  useStaggerReveal(".blog-categories", ".category-card");

  // Soft light that follows the cursor inside a card
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);

    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <section className="blog-categories relative overflow-hidden bg-[#431602] py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* =========================
            HEADING
        ========================== */}
        <div className="mb-20 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm tracking-wide text-amber-300 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            Explore topics
          </span>

          <h2 className="mt-7 bg-gradient-to-b from-[#FBF3E6] to-[#B9A88F] bg-clip-text font-serif text-4xl tracking-tight text-transparent sm:text-6xl">
            Browse Categories
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-8 text-[#A79B8E]">
            Discover articles tailored to your coffee journey, from brewing
            guides to sustainability and café culture.
          </p>
        </div>

        {/* =========================
            CATEGORY GRID
        ========================== */}
        <div
          role="group"
          aria-label="Blog categories"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map((category) => {
            const Icon = category.icon;

            const isActive = activeCategory === category.name;

            const share = (category.posts / maxPosts) * 100;

            return (
              <button
                key={category.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveCategory(category.name)}
                onMouseMove={handleMouseMove}
                className="category-card group block rounded-3xl text-left outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#431602]"
              >
                {/* =========================
                    CARD WRAPPER
                ========================== */}
                <div
                  className="
                    relative
                    rounded-3xl
                    transition-all
                    duration-500
                    ease-out
                    group-hover:-translate-y-1
                    motion-reduce:transition-none
                    motion-reduce:group-hover:translate-y-0
                  "
                >
                  {/* =========================
                      GLASS CARD
                  ========================== */}
                  <div
                    className="
                      relative
                      overflow-hidden
                      rounded-3xl
                      border
                      border-white
                      bg-[#431602]
                      p-7
                      backdrop-blur-2xl
                      transition-all
                      duration-500
                    "
                  >
                    {/* =========================
                        CURSOR LIGHT
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
                          "radial-gradient(340px circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.20), transparent 65%)",
                      }}
                    />

                    {/* =========================
                        OVERSIZED WATERMARK ICON
                    ========================== */}
                    <Icon
                      aria-hidden="true"
                      className={`
                        pointer-events-none
                        absolute
                        -bottom-10
                        -right-8
                        text-[10rem]
                        transition-all
                        duration-700
                        ease-out
                        motion-reduce:transition-none
                        ${
                          isActive
                            ? "-rotate-6 text-amber-400/[0.10]"
                            : "text-white/[0.035] group-hover:-rotate-6 group-hover:text-amber-400/[0.07]"
                        }
                      `}
                    />

                    {/* =========================
                        TOP ROW
                    ========================== */}
                    <div className="relative flex items-start justify-between">
                      {/* Icon */}
                      <div
                        className={`
                          flex
                          h-14
                          w-14
                          items-center
                          justify-center
                          rounded-2xl
                          border
                          transition-colors
                          duration-500
                          ${
                            isActive
                              ? "border-amber-300/30 bg-amber-400/20 text-amber-300"
                              : "border-white/10 bg-white/5 text-amber-500"
                          }
                        `}
                      >
                        <Icon className="text-2xl" />
                      </div>

                      {/* Arrow / Check */}
                      <span
                        aria-hidden="true"
                        className={`
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-full
                          border
                          text-xs
                          transition-all
                          duration-500
                          motion-reduce:transition-none
                          ${
                            isActive
                              ? "border-amber-300/40 bg-amber-400/20 text-amber-200"
                              : "-translate-x-2 border-white/10 bg-white/5 text-zinc-300 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                          }
                        `}
                      >
                        {isActive ? <FaCheck /> : <FaArrowRight />}
                      </span>
                    </div>

                    {/* =========================
                        CATEGORY NAME
                    ========================== */}
                    <h3 className="relative mt-12 font-serif text-2xl tracking-tight text-[#F4E8D8]">
                      {category.name}
                    </h3>

                    {/* =========================
                        ARTICLE COUNT
                    ========================== */}
                    <div className="relative mt-4">
                      <p
                        className={`
                          text-sm
                          transition-colors
                          duration-500
                          ${isActive ? "text-amber-200" : "text-[#A79B8E]"}
                        `}
                      >
                        {category.posts} articles
                      </p>

                      {/* Progress Background */}
                      <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/10">
                        {/* Progress */}
                        <div
                          className={`
                            h-full
                            rounded-full
                            bg-gradient-to-r
                            from-amber-500
                            to-orange-300
                            transition-opacity
                            duration-500
                            ${
                              isActive
                                ? "opacity-100"
                                : "opacity-40 group-hover:opacity-80"
                            }
                          `}
                          style={{
                            width: `${share}%`,
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* =========================
                      WHITE CARD BORDER
                  ========================== */}
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      rounded-3xl
                      border
                      border-white
                    "
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
