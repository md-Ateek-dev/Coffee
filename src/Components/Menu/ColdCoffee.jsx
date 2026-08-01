import products from "../../Data/Products";
import ProductCard from "../Comman/ProductCard";

import useReveal from "../../Hooks/UseReveal";
import useStaggerReveal from "../../Hooks/useStaggerReveal";

const ColdCoffee = () => {
  useReveal(".cold-coffee");
  useStaggerReveal(".cold-coffee", ".coffee-card");

  const coldCoffee = products.filter(
    (item) => item.category === "Cold Coffee"
  );

  return (
    <section className="cold-coffee py-28 bg-[#181715]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-amber-500">
            Cold Coffee
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Refreshingly Chilled
          </h2>

          <p className="text-zinc-400 mt-5 max-w-2xl mx-auto">
            Smooth, creamy and refreshing cold coffee made for every season.
          </p>

        </div>

        {/* Products */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {coldCoffee.map((coffee) => (
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

export default ColdCoffee;