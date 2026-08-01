import { Link } from "react-router-dom";
import products from "../../Data/Products";

import useReveal from "../../Hooks/UseReveal";
import useStaggerReveal from "../../Hooks/useStaggerReveal";

const SpecialDrinks = () => {
  useReveal(".special-drinks");
  useStaggerReveal(".special-drinks", ".special-card");

  const specialDrinks = products.filter(
    (item) => item.category === "Special Drinks" || item.id === 5 || item.id === 6
  );

  return (
    <section className="special-drinks py-24 bg-[#0F0E0D]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="uppercase tracking-[5px] text-amber-500 font-semibold text-sm">
            Signature Collection
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Handcrafted Special Drinks
          </h2>

          <p className="mt-4 text-zinc-300 leading-8 text-base">
            Our head barista's signature creations crafted with organic syrups, single-origin espresso, and velvety textured milk.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {specialDrinks.map((item) => (
            <div
              key={item.id}
              className="
                special-card
                group
                bg-[#1a1815]
                rounded-3xl
                overflow-hidden
                border
                border-zinc-700/70
                transition-all
                duration-500
                hover:border-amber-500
                hover:shadow-xl
                hover:shadow-amber-500/10
                flex
                flex-col
                justify-between
              "
            >
              <div>
                <div className="relative overflow-hidden aspect-[16/9]">
                  <img
                    src={item.image}
                    alt={item.title || item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 bg-amber-500 text-black px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                    Chef's Choice
                  </span>
                  <span className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md text-amber-400 font-bold px-3 py-1 rounded-lg text-sm border border-zinc-700">
                    ⭐ {item.rating}
                  </span>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {item.title || item.name}
                  </h3>

                  <p className="text-zinc-300 mt-3 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="px-8 pb-8 flex items-center justify-between border-t border-zinc-800/80 pt-6">
                <span className="text-3xl font-extrabold text-amber-400">
                  {item.price}
                </span>

                <Link
                  to={`/product/${item.id}`}
                  className="px-6 py-3 rounded-full bg-amber-500 text-black font-bold hover:bg-amber-400 hover:scale-105 transition-all shadow-md shadow-amber-500/20 text-sm"
                >
                  View Product
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialDrinks;