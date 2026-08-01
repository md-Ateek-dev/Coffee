import ProductCard from "../Comman/ProductCard";

const ProductGrid = ({
  products,
  searchTerm,
  selectedCategory,
}) => {
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="pb-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Product Count */}

        <div className="flex justify-between items-center mb-10">

          <h2 className="text-3xl font-bold">
            Our Coffee Collection
          </h2>

          <span className="text-zinc-400">
            {filteredProducts.length} Products
          </span>

        </div>

        {/* Empty State */}

        {filteredProducts.length === 0 ? (
          <div className="py-24 text-center">

            <h3 className="text-3xl font-semibold">
              No Products Found
            </h3>

            <p className="mt-4 text-zinc-400">
              Try another search or category.
            </p>

          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>
        )}

      </div>
    </section>
  );
};

export default ProductGrid;