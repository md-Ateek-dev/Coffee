import { useState } from "react";
import {
  FaCoffee,
  FaMugHot,
  FaSeedling,
  FaBookOpen,
  FaFire,
  FaLeaf,
} from "react-icons/fa";

import useReveal from "../../Hooks/UseReveal";
import useStaggerReveal from "../../Hooks/useStaggerReveal";

const categories = [
  {
    id: 1,
    name: "Brewing",
    icon: FaCoffee,
    posts: 18,
  },
  {
    id: 2,
    name: "Coffee Beans",
    icon: FaSeedling,
    posts: 12,
  },
  {
    id: 3,
    name: "Recipes",
    icon: FaMugHot,
    posts: 15,
  },
  {
    id: 4,
    name: "Coffee Culture",
    icon: FaBookOpen,
    posts: 10,
  },
  {
    id: 5,
    name: "Roasting",
    icon: FaFire,
    posts: 8,
  },
  {
    id: 6,
    name: "Sustainability",
    icon: FaLeaf,
    posts: 7,
  },
];

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState("Brewing");

  useReveal(".blog-categories");
  useStaggerReveal(".blog-categories", ".category-card");

  return (
    <section className="blog-categories py-24 bg-[#0F0E0D]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="uppercase tracking-[5px] text-amber-500">
            Explore Topics
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Browse Categories
          </h2>

          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto leading-8">
            Discover articles tailored to your coffee journey,
            from brewing guides to sustainability and café culture.
          </p>

        </div>

        {/* Categories Grid */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.name)}
                className={`
                  category-card
                  rounded-3xl
                  border
                  p-8
                  text-left
                  transition-all
                  duration-300
                  ${
                    activeCategory === category.name
                      ? "bg-amber-500 text-black border-amber-500"
                      : "bg-[#181715] border-zinc-800 hover:border-amber-500"
                  }
                `}
              >
                <Icon
                  className={`text-4xl mb-6 ${
                    activeCategory === category.name
                      ? "text-black"
                      : "text-amber-500"
                  }`}
                />

                <h3 className="text-2xl font-bold">
                  {category.name}
                </h3>

                <p
                  className={`mt-3 ${
                    activeCategory === category.name
                      ? "text-black/70"
                      : "text-zinc-400"
                  }`}
                >
                  {category.posts} Articles
                </p>

              </button>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Categories;