const CategoryFilter = ({
  products,
  selectedCategory,
  setSelectedCategory,
}) => {
  // Dynamic Categories
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  return (
    <section className="pb-12">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex gap-4 overflow-x-auto scrollbar-hide">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                whitespace-nowrap
                px-6
                py-3
                rounded-full
                border
                transition-all
                duration-300
                ${
                  selectedCategory === category
                    ? "bg-amber-500 text-black border-amber-500"
                    : "bg-[#181715] text-white border-zinc-700 hover:border-amber-500 hover:text-amber-500"
                }
              `}
            >
              {category}
            </button>
          ))}

        </div>

      </div>
    </section>
  );
};

export default CategoryFilter;