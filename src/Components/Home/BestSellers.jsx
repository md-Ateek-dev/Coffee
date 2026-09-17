import { Link } from "react-router-dom";
import { FaStar, FaShoppingCart, FaHeart, FaFire } from "react-icons/fa";
import bestSellers from "../../Data/BestSeller.js";
import useReveal from "../../Hooks/UseReveal";
import useStaggerReveal from "../../Hooks/useStaggerReveal";
import { useShop } from "../../Context/ShopContext";

const BestSellers = () => {
  const featured = bestSellers[0] || {};
  const others = bestSellers.slice(1) || [];
  const { addToCart, toggleWishlist, isInWishlist } = useShop();

  useReveal(".best-sellers");
  useStaggerReveal(".best-sellers", ".seller-card");

  return (
    <section className="best-sellers py-16 sm:py-20 md:py-28 bg-[#0A0908] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-amber-500/8 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold mb-4 sm:mb-5">
            <FaFire />
            Top Picks
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">Customer Favorites</h2>
          <p className="text-zinc-400 mt-3 sm:mt-4 text-xs sm:text-sm md:text-base max-w-lg mx-auto">
            Our most loved handcrafted coffees — tried, tested, and adored by
            thousands.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Featured — spans 3 cols */}
          <div className="seller-card lg:col-span-3 group relative rounded-3xl overflow-hidden bg-[#141210] border border-white/[0.08] hover:border-amber-500/40 transition-all duration-500 shadow-xl">
            <div className="grid md:grid-cols-2 h-full">
              {/* Image side */}
              <div className="relative overflow-hidden min-h-[240px] sm:min-h-[280px] md:min-h-0">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#141210]/80 hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141210] to-transparent md:hidden" />

                <span className="absolute top-4 sm:top-5 left-4 sm:left-5 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500 text-black text-xs font-bold shadow-md">
                  <FaFire size={10} />
                  #1 Best Seller
                </span>
              </div>

              {/* Info side */}
              <div className="p-5 sm:p-7 md:p-8 flex flex-col justify-center">
                <p className="text-amber-500 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                  Featured Pick
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 leading-tight text-white">
                  {featured.title}
                </h3>
                <p className="text-zinc-400 mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed">
                  {featured.description}
                </p>

                <div className="flex items-center gap-2 mt-5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-sm" />
                  ))}
                  <span className="text-zinc-500 text-sm ml-1">
                    (2.4k orders)
                  </span>
                </div>

                <div className="flex items-center justify-between mt-8 pt-6 border-t border-zinc-800">
                  <span className="text-3xl font-bold text-amber-500">
                    {featured.price}
                  </span>
                  <div className="flex gap-3">
                    <button
                      onClick={() =>
                        toggleWishlist({
                          id: featured.id,
                          title: featured.title,
                          name: featured.title,
                          price: featured.price,
                          image: featured.image,
                          rating: 4.9,
                          category: "Best Seller",
                          description: featured.description,
                        })
                      }
                      className={`w-11 h-11 rounded-full border flex items-center justify-center transition ${
                        isInWishlist(featured.id)
                          ? "bg-red-500/10 border-red-500 text-red-400"
                          : "border-zinc-700 hover:border-amber-500 hover:text-amber-500"
                      }`}
                    >
                      <FaHeart
                        className={
                          isInWishlist(featured.id) ? "fill-current" : ""
                        }
                        size={14}
                      />
                    </button>
                    <button
                      onClick={() =>
                        addToCart(
                          {
                            id: featured.id,
                            title: featured.title,
                            name: featured.title,
                            price: featured.price,
                            image: featured.image,
                            rating: 4.9,
                            category: "Best Seller",
                            description: featured.description,
                          },
                          1,
                        )
                      }
                      className="flex items-center gap-2 bg-amber-500 text-black px-5 py-3 rounded-full font-bold hover:bg-amber-400 transition text-sm"
                    >
                      <FaShoppingCart size={13} />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side list — spans 2 cols */}
          <div className="seller-card lg:col-span-2 flex flex-col gap-4">
            {others.map((item, index) => (
              <div
                key={item.id}
                className="group flex items-center gap-4 p-4 rounded-2xl bg-[#181715] border border-zinc-800 hover:border-amber-500/40 transition-all duration-300 hover:-translate-x-1"
              >
                {/* Rank */}
                <span className="w-8 h-8 rounded-full bg-zinc-800 text-zinc-400 text-sm font-bold flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-black transition">
                  {index + 2}
                </span>

                {/* Image */}
                <Link to={`/product/${item.id}`} className="shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                </Link>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <Link
                    to={`/product/${item.id}`}
                    className="font-semibold hover:text-amber-400 transition truncate block"
                  >
                    {item.title}
                  </Link>
                  <p className="text-amber-500 font-bold mt-0.5">
                    {item.price}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() =>
                      addToCart(
                        {
                          id: item.id,
                          title: item.title,
                          name: item.title,
                          price: item.price,
                          image: item.image,
                          rating: 4.8,
                          category: "Best Seller",
                          description: "",
                        },
                        1,
                      )
                    }
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-amber-500 text-black flex items-center justify-center hover:bg-amber-400 transition opacity-100 sm:opacity-0 sm:group-hover:opacity-100 shadow-sm"
                    aria-label="Add to cart"
                  >
                    <FaShoppingCart size={11} />
                  </button>
                  <Link
                    to={`/product/${item.id}`}
                    className="text-xs font-semibold text-zinc-400 hover:text-amber-500 transition whitespace-nowrap hidden xs:inline"
                  >
                    View →
                  </Link>
                </div>
              </div>
            ))}

            {/* CTA */}
            <Link
              to="/shop"
              className="mt-2 flex items-center justify-center gap-2 py-3.5 sm:py-4 rounded-2xl border border-dashed border-zinc-700 hover:border-amber-500 text-zinc-400 hover:text-amber-400 transition text-xs sm:text-sm font-semibold bg-white/[0.02]"
            >
              View All Specialty Products →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
