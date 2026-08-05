import { Link } from "react-router-dom";
import { FaHeart, FaStar, FaShoppingCart, FaArrowLeft } from "react-icons/fa";
import Navbar from "../Components/Comman/Navbar";
import Footer from "../Components/Comman/Footer";
import PageTransition from "../Components/Comman/PageTransition";
import { useShop } from "../Context/ShopContext";

const Wishlist = () => {
  const { wishlist, toggleWishlist, addToCart } = useShop();

  return (
    <PageTransition>
      <Navbar />

      <section className="pt-24 sm:pt-28 pb-12 sm:pb-16 bg-[#0F0E0D] min-h-[70vh]">
        <div className="page-container">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <div className="flex items-center gap-2 text-amber-500 mb-2">
                <FaHeart className="fill-current text-lg sm:text-xl" />
                <span className="uppercase tracking-[3px] text-xs sm:text-sm font-semibold">
                  Your Favorites
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Liked Products
              </h1>
              <p className="text-zinc-400 mt-2 text-sm sm:text-base">
                {wishlist.length}{" "}
                {wishlist.length === 1 ? "item saved" : "items saved"}
              </p>
            </div>

            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-zinc-700 text-sm font-semibold hover:border-amber-500 hover:text-amber-400 transition w-full sm:w-auto"
            >
              <FaArrowLeft size={12} />
              Back to Shop
            </Link>
          </div>

          {wishlist.length === 0 ? (
            <div className="text-center py-16 sm:py-24 rounded-2xl sm:rounded-3xl bg-[#181715] border border-zinc-800 px-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-zinc-800 flex items-center justify-center mx-auto mb-5">
                <FaHeart className="text-2xl sm:text-3xl text-zinc-500" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                No liked products yet
              </h2>
              <p className="text-zinc-400 mt-2 text-sm sm:text-base max-w-sm mx-auto">
                Tap the heart icon on any product to save it here.
              </p>
              <Link
                to="/shop"
                className="inline-block mt-6 px-6 py-3 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-400 transition text-sm sm:text-base"
              >
                Browse Shop
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              {wishlist.map((item) => (
                <article
                  key={item.id}
                  className="flex flex-col rounded-xl sm:rounded-2xl bg-[#181715] border border-zinc-800 overflow-hidden hover:border-amber-500/50 transition group"
                >
                  <Link to={`/product/${item.id}`} className="relative aspect-[5/4] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title || item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        toggleWishlist(item);
                      }}
                      className="absolute top-3 right-3 w-9 h-9 rounded-full bg-red-500 text-white flex items-center justify-center shadow-lg"
                      aria-label="Remove from wishlist"
                    >
                      <FaHeart size={14} className="fill-current" />
                    </button>
                  </Link>

                  <div className="p-4 flex flex-col flex-1">
                    <Link
                      to={`/product/${item.id}`}
                      className="font-bold text-sm sm:text-base hover:text-amber-400 transition line-clamp-2"
                    >
                      {item.title || item.name}
                    </Link>

                    <div className="flex items-center gap-1 text-amber-500 text-xs sm:text-sm mt-1.5">
                      <FaStar className="text-[10px]" />
                      <span>{item.rating}</span>
                    </div>

                    <div className="mt-auto pt-4 flex items-center justify-between gap-2 border-t border-zinc-800">
                      <span className="text-lg font-bold text-amber-400">
                        {item.price}
                      </span>
                      <button
                        onClick={() => addToCart(item, 1)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500 text-black text-xs sm:text-sm font-bold hover:bg-amber-400 transition"
                      >
                        <FaShoppingCart size={11} />
                        Add
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </PageTransition>
  );
};

export default Wishlist;
