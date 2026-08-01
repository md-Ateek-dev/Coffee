import { useParams } from "react-router-dom";

import products from "../../Data/Products";
import ProductCard from "../Comman/ProductCard";

import useReveal from "../../Hooks/UseReveal";
import useStaggerReveal from "../../Hooks/useStaggerReveal";

const RelatedProducts = () => {
  useReveal(".related-products");
  useStaggerReveal(".related-products", ".coffee-card");

  const { id } = useParams();

  const currentProduct = products.find(
    (item) => item.id === Number(id)
  );

  if (!currentProduct) return null;

  const relatedProducts = products
    .filter(
      (item) =>
        item.category === currentProduct.category &&
        item.id !== currentProduct.id
    )
    .slice(0, 4);

  return (
    <section className="related-products py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-amber-500">
            You May Also Like
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Related Products
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-zinc-400">
            Explore more handcrafted coffees from the same collection.
          </p>

        </div>

        {/* Products */}

        {relatedProducts.length > 0 ? (

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

            {relatedProducts.map((product) => (

              <ProductCard
                key={product.id}
                product={product}
              />

            ))}

          </div>

        ) : (

          <div className="text-center py-16">

            <h3 className="text-3xl font-semibold">
              No Related Products
            </h3>

            <p className="mt-4 text-zinc-400">
              More products will be available soon.
            </p>

          </div>

        )}

      </div>

    </section>
  );
};

export default RelatedProducts;