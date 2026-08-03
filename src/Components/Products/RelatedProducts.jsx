import { Link, useParams } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import ProductCard from "../Comman/ProductCard";
import { useShop } from "../../Context/ShopContext";
import useReveal from "../../Hooks/UseReveal";

const RelatedProducts = () => {
  useReveal(".related-products");

  const { id } = useParams();
  const { wishlist } = useShop();
  const currentId = Number(id);

  const likedProducts = wishlist.filter((item) => item.id !== currentId);

  return (
    <section className="related-products py-16 sm:py-20 md:py-24 bg-[#0F0E0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <p className="uppercase tracking-[3px] sm:tracking-[5px] text-amber-500 text-xs sm:text-sm font-semibold">
            Your Favourites
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4 text-white">
            Products You Liked
          </h2>

          <p className="mt-4 sm:mt-6 max-w-2xl mx-auto text-zinc-400 text-sm sm:text-base px-2">
            {likedProducts.length > 0
              ? "All the coffees you've saved to your wishlist — ready whenever you are."
              : "Like products with the heart icon to build your personal coffee collection."}
          </p>
        </div>

        {likedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {likedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-14 sm:py-20 rounded-2xl sm:rounded-3xl bg-[#181715] border border-zinc-800 px-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center mx-auto">
              <FaHeart className="text-red-400 text-2xl sm:text-3xl" />
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mt-5 sm:mt-6 text-white">
              No Liked Products Yet
            </h3>

            <p className="mt-3 sm:mt-4 text-zinc-400 text-sm sm:text-base max-w-md mx-auto">
              Tap the heart on any coffee you love — they'll appear here for
              quick access.
            </p>

            <Link
              to="/shop"
              className="inline-flex items-center gap-2 mt-6 sm:mt-8 px-6 sm:px-8 py-3 rounded-full bg-amber-500 text-black font-bold text-sm sm:text-base hover:bg-amber-400 transition"
            >
              Browse Shop
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default RelatedProducts;
