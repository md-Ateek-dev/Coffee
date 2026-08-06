import { useState, useEffect, useRef, useCallback } from "react";
import ProductCard from "../Comman/ProductCard";
import { FaSearch, FaTimes } from "react-icons/fa";
import useReveal from "../../Hooks/UseReveal";

const ProductGrid = ({
  products,
  searchTerm,
  selectedCategory,
  setSearchTerm,
  setSelectedCategory,
}) => {
  useReveal(".shop-grid-section");

  const gridRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState({});
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("down");
  const observerRef = useRef(null);

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = (product.title || product.name || "")
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  // Intersection Observer for cards
  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.dataset.index;
          if (entry.isIntersecting) {
            // Card entered viewport
            setVisibleCards((prev) => ({
              ...prev,
              [index]: true,
            }));
          } else {
            // Card left viewport
            setVisibleCards((prev) => ({
              ...prev,
              [index]: false,
            }));
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    const cards = gridRef.current?.querySelectorAll(".coffee-card");
    cards?.forEach((card) => observerRef.current.observe(card));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [filteredProducts]);

  // Reset visible cards when filters change
  useEffect(() => {
    setVisibleCards({});
  }, [searchTerm, selectedCategory]);

  const getCardClasses = (index) => {
    const isVisible = visibleCards[index];
    const baseClasses =
      "transition-all duration-700 ease-out transform will-change-transform";

    if (isVisible) {
      return `${baseClasses} opacity-100 translate-y-0 scale-100`;
    } else {
      // Different exit animation based on scroll direction
      if (scrollDirection === "up") {
        return `${baseClasses} opacity-0 -translate-y-12 scale-95`;
      }
      return `${baseClasses} opacity-0 translate-y-16 scale-95`;
    }
  };

  return (
    <section className="shop-grid-section py-10 sm:py-12 md:py-16 lg:py-24 bg-[#0F0E0D] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(600px,90vw)] h-[150px] sm:h-[200px] md:h-[300px] bg-amber-500/5 blur-[80px] sm:blur-[100px] rounded-full pointer-events-none" />

      <div className="page-container relative z-10 px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <p className="uppercase tracking-[2px] sm:tracking-[3px] lg:tracking-[5px] text-amber-500 text-[10px] sm:text-xs lg:text-sm font-semibold">
            Shop Collection
          </p>
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mt-2 sm:mt-3 text-white leading-tight">
            Our Coffee Collection
          </h2>
          <p className="text-zinc-400 mt-2 sm:mt-3 md:mt-4 max-w-xl mx-auto text-xs sm:text-sm md:text-base px-2 sm:px-0">
            Handpicked specialty coffees, roasted fresh and delivered to your
            cup.
          </p>
        </div>

        {/* Toolbar: Search + Filters */}
        <div className="bg-[#181715] border border-zinc-800 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 mb-6 sm:mb-8 md:mb-10 lg:mb-12 space-y-3 sm:space-y-4">
          {/* Search */}
          <div className="relative w-full max-w-xl mx-auto">
            <FaSearch
              className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none"
              size={14}
            />
            <input
              type="text"
              placeholder="Search coffee..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#22201E] border border-zinc-700 rounded-lg sm:rounded-xl py-2.5 sm:py-3 pl-9 sm:pl-11 pr-9 sm:pr-11 text-sm sm:text-base text-white placeholder:text-zinc-500 outline-none focus:border-amber-500 transition"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition p-1"
                aria-label="Clear search"
              >
                <FaTimes size={14} />
              </button>
            )}
          </div>

          {/* Category pills */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1 -mx-1 px-1 sm:flex-wrap sm:justify-center sm:overflow-visible">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`shrink-0 whitespace-nowrap px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs md:text-sm font-medium border transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-amber-500 text-black border-amber-500 shadow-lg shadow-amber-500/20"
                    : "bg-[#22201E] text-zinc-300 border-zinc-700 hover:border-amber-500/50 hover:text-amber-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Count bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-4 sm:mb-6 md:mb-8">
          <p className="text-zinc-400 text-xs sm:text-sm">
            Showing{" "}
            <span className="text-white font-semibold">
              {filteredProducts.length}
            </span>{" "}
            {filteredProducts.length === 1 ? "product" : "products"}
            {selectedCategory !== "All" && (
              <span>
                {" "}
                in <span className="text-amber-500">{selectedCategory}</span>
              </span>
            )}
          </p>
        </div>

        {/* Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-12 sm:py-16 md:py-24 text-center rounded-2xl sm:rounded-3xl bg-[#181715] border border-zinc-800 px-4">
            <span className="text-3xl sm:text-4xl md:text-5xl">☕</span>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mt-3 sm:mt-4 md:mt-6 text-white">
              No Products Found
            </h3>
            <p className="mt-2 sm:mt-3 text-zinc-400 text-xs sm:text-sm md:text-base">
              Try another search or category filter.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="mt-5 sm:mt-6 px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-amber-500 text-black text-xs sm:text-sm font-bold hover:bg-amber-400 transition"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-4 md:gap-5"
          >
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                data-index={index}
                className={`coffee-card ${getCardClasses(index)}`}
                style={{
                  transitionDelay: visibleCards[index]
                    ? `${index * 80}ms`
                    : `${(filteredProducts.length - 1 - index) * 60}ms`,
                }}
              >
                <ProductCard product={product} size="medium" />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
