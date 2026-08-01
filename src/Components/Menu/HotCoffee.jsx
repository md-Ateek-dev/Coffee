import products from "../../Data/Products";
import ProductCard from "../Comman/ProductCard";

import useReveal from "../../Hooks/UseReveal";
import useStaggerReveal from "../../Hooks/useStaggerReveal";

const HotCoffee = () => {
  useReveal(".hot-coffee");
  useStaggerReveal(".hot-coffee", ".coffee-card");

  const hotCoffee = products.filter(
    (item) => item.category === "Hot Coffee"
  );

  return (
    <section className="hot-coffee py-28">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-amber-500">
            Hot Coffee
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Freshly Brewed Classics
          </h2>

          <p className="text-zinc-400 mt-5 max-w-2xl mx-auto">
            Enjoy our handcrafted hot coffee collection,
            brewed fresh with carefully selected premium beans.
          </p>

        </div>

        {/* Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {hotCoffee.map((coffee) => (

            <ProductCard
              key={coffee.id}
              product={coffee}
            />

          ))}

        </div>

      </div>

    </section>
  );
};

export default HotCoffee;