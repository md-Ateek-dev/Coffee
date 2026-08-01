import products from "../../Data/Products";
import ProductCard from "../Comman/ProductCard";

import useReveal from "../../Hooks/UseReveal";
import useStaggerReveal from "../../Hooks/useStaggerReveal";

const Desserts = () => {
  useReveal(".desserts");
  useStaggerReveal(".desserts", ".coffee-card");

  const desserts = products.filter(
    (item) => item.category === "Desserts"
  );

  return (
    <section className="desserts py-28 bg-[#181715]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-amber-500">
            Sweet Treats
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Desserts
          </h2>

          <p className="text-zinc-400 mt-5 max-w-2xl mx-auto">
            Pair your favorite coffee with our freshly baked cakes,
            pastries and delicious desserts.
          </p>

        </div>

        {/* Products */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {desserts.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default Desserts;