import ProductCard from "../Comman/ProductCard";
import { FaSearch, FaTimes } from "react-icons/fa";
import useReveal from "../../Hooks/UseReveal";
import useStaggerReveal from "../../Hooks/useStaggerReveal";

const ProductGrid = ({
  products,
  searchTerm,
  selectedCategory,
  setSearchTerm,
  setSelectedCategory,
}) => {
  useReveal(".shop-grid-section");
  useStaggerReveal(".shop-grid-section", ".coffee-card", 0.08);

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



  return (
    <section className="shop-grid-section py-12 sm:py-16 md:py-20 lg:py-24 bg-[#0F0E0D] relative overflow-hidden">


      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(600px,90vw)] h-[200px] sm:h-[300px] bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />



      <div className="page-container relative z-10">

        {/* Header */}

        <div className="text-center mb-8 sm:mb-10 md:mb-12">

          <p className="uppercase tracking-[3px] sm:tracking-[5px] text-amber-500 text-xs sm:text-sm font-semibold">

            Shop Collection

          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 sm:mt-3 text-white leading-tight">

            Our Coffee Collection

          </h2>

          <p className="text-zinc-400 mt-3 sm:mt-4 max-w-xl mx-auto text-sm sm:text-base px-2">

            Handpicked specialty coffees, roasted fresh and delivered to your cup.

          </p>

        </div>



        {/* Toolbar: Search + Filters */}

        <div className="bg-[#181715] border border-zinc-800 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 mb-8 sm:mb-10 md:mb-12 space-y-3 sm:space-y-4">

          {/* Search */}

          <div className="relative w-full max-w-xl mx-auto">

            <FaSearch

              className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none"

              size={15}

            />

            <input

              type="text"

              placeholder="Search coffee..."

              value={searchTerm}

              onChange={(e) => setSearchTerm(e.target.value)}

              className="w-full bg-[#22201E] border border-zinc-700 rounded-lg sm:rounded-xl py-2.5 sm:py-3 pl-10 sm:pl-11 pr-10 sm:pr-11 text-sm sm:text-base text-white placeholder:text-zinc-500 outline-none focus:border-amber-500 transition"

            />

            {searchTerm && (

              <button

                onClick={() => setSearchTerm("")}

                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition p-1"

                aria-label="Clear search"

              >

                <FaTimes size={15} />

              </button>

            )}

          </div>



          {/* Category pills */}

          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1 -mx-1 px-1 sm:flex-wrap sm:justify-center sm:overflow-visible">

            {categories.map((category) => (

              <button

                key={category}

                onClick={() => setSelectedCategory(category)}

                className={`shrink-0 whitespace-nowrap px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium border transition-all duration-300 ${

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

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-6 sm:mb-8">

          <p className="text-zinc-400 text-xs sm:text-sm">

            Showing{" "}

            <span className="text-white font-semibold">

              {filteredProducts.length}

            </span>{" "}

            {filteredProducts.length === 1 ? "product" : "products"}

            {selectedCategory !== "All" && (

              <span>

                {" "}

                in{" "}

                <span className="text-amber-500">{selectedCategory}</span>

              </span>

            )}

          </p>

        </div>



        {/* Grid */}

        {filteredProducts.length === 0 ? (

          <div className="py-16 sm:py-24 text-center rounded-2xl sm:rounded-3xl bg-[#181715] border border-zinc-800 px-4">

            <span className="text-4xl sm:text-5xl">☕</span>

            <h3 className="text-xl sm:text-2xl font-bold mt-4 sm:mt-6 text-white">

              No Products Found

            </h3>

            <p className="mt-2 sm:mt-3 text-zinc-400 text-sm sm:text-base">

              Try another search or category filter.

            </p>

            <button

              onClick={() => {

                setSearchTerm("");

                setSelectedCategory("All");

              }}

              className="mt-6 px-6 py-2.5 rounded-full bg-amber-500 text-black text-sm font-bold hover:bg-amber-400 transition"

            >

              Reset Filters

            </button>

          </div>

        ) : (

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">

            {filteredProducts.map((product) => (

              <ProductCard key={product.id} product={product} size="medium" />

            ))}

          </div>

        )}

      </div>

    </section>

  );

};



export default ProductGrid;

