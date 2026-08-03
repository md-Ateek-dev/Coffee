import { Link } from "react-router-dom";
import { FaHeart, FaStar } from "react-icons/fa";
import { useShop } from "../../Context/ShopContext";

const WishlistSection = () => {
  const { wishlist, toggleWishlist } = useShop();

  if (wishlist.length === 0) return null;

  return (
    <section className="py-16 bg-[#181715] border-y border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <FaHeart className="text-red-400 fill-current text-xl" />
          <h2 className="text-2xl font-bold">Your Liked Products</h2>
          <span className="text-sm text-zinc-500">
            ({wishlist.length})
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 p-4 rounded-2xl bg-[#22201E] border border-zinc-800 hover:border-amber-500/50 transition group"
            >
              <Link to={`/product/${item.id}`} className="shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 rounded-xl object-cover"
                />
              </Link>

              <div className="flex-1 min-w-0">
                <Link
                  to={`/product/${item.id}`}
                  className="font-semibold hover:text-amber-500 transition truncate block"
                >
                  {item.title}
                </Link>
                <p className="text-amber-500 font-bold mt-1">{item.price}</p>
                <div className="flex items-center gap-1 text-amber-500 text-sm mt-1">
                  <FaStar className="text-xs" />
                  <span>{item.rating}</span>
                </div>
              </div>

              <button
                onClick={() => toggleWishlist(item)}
                className="self-start p-2 text-red-400 hover:text-red-300 transition opacity-60 group-hover:opacity-100"
                aria-label="Remove from wishlist"
              >
                <FaHeart className="fill-current" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WishlistSection;
