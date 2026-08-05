import { Link } from "react-router-dom";
import { FaStar, FaHeart, FaShoppingCart } from "react-icons/fa";
import { useShop } from "../../Context/ShopContext";

const ProductCard = ({ product, size = "default" }) => {
  const { addToCart, toggleWishlist, isInWishlist } = useShop();
  const liked = isInWishlist(product.id);
  const isMedium = size === "medium";

  return (
    <article
      className={`coffee-card group relative flex flex-col h-full bg-[#181715] border border-zinc-800/80 overflow-hidden transition-all duration-500 hover:border-amber-500/40 hover:shadow-[0_16px_48px_rgba(201,155,60,0.1)] ${
        isMedium
          ? "rounded-xl sm:rounded-2xl hover:-translate-y-1"
          : "rounded-2xl sm:rounded-3xl hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(201,155,60,0.12)]"
      }`}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden ${
          isMedium ? "aspect-[5/4]" : "aspect-[4/5] sm:aspect-[4/5]"
        }`}
      >
        <img
          src={product.image}
          alt={product.name || product.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Category badge */}
        <span
          className={`absolute top-2.5 sm:top-3 left-2.5 sm:left-3 rounded-full bg-black/50 backdrop-blur-sm text-amber-400 font-semibold border border-amber-500/30 ${
            isMedium
              ? "px-2 py-0.5 text-[9px] sm:text-[10px]"
              : "px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs"
          }`}
        >
          {product.category}
        </span>

        {/* Quick actions */}
        <div
          className={`absolute top-2.5 sm:top-3 right-2.5 sm:right-3 flex flex-col opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 md:translate-x-2 md:group-hover:translate-x-0 ${
            isMedium ? "gap-1.5" : "gap-2"
          }`}
        >
          <button
            onClick={() => toggleWishlist(product)}
            className={`rounded-full backdrop-blur-sm flex items-center justify-center transition ${
              isMedium ? "w-8 h-8" : "w-9 h-9 sm:w-10 sm:h-10"
            } ${
              liked
                ? "bg-red-500 text-white"
                : "bg-black/50 text-white hover:bg-red-500 active:bg-red-500"
            }`}
            aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
          >
            <FaHeart className={liked ? "fill-current" : ""} size={isMedium ? 11 : 13} />
          </button>
          <button
            onClick={() => addToCart(product, 1)}
            className={`rounded-full bg-amber-500 text-black flex items-center justify-center hover:bg-amber-400 active:bg-amber-400 transition ${
              isMedium ? "w-8 h-8" : "w-9 h-9 sm:w-10 sm:h-10"
            }`}
            aria-label="Add to cart"
          >
            <FaShoppingCart size={isMedium ? 11 : 13} />
          </button>
        </div>

        {/* Price on image */}
        <div
          className={`absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 right-2.5 sm:right-3 flex items-end justify-between ${
            isMedium ? "" : "bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4"
          }`}
        >
          <div className="flex items-center gap-1 text-amber-400">
            <FaStar className={isMedium ? "text-[10px]" : "text-xs sm:text-sm"} />
            <span className={`font-semibold ${isMedium ? "text-[10px] sm:text-xs" : "text-xs sm:text-sm"}`}>
              {product.rating}
            </span>
          </div>
          <span
            className={`font-bold text-white ${
              isMedium ? "text-base sm:text-lg" : "text-xl sm:text-2xl"
            }`}
          >
            {product.price}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className={`flex flex-col flex-1 ${isMedium ? "p-3 sm:p-3.5" : "p-4 sm:p-5"}`}>
        <h3
          className={`font-bold leading-snug group-hover:text-amber-400 transition-colors line-clamp-2 ${
            isMedium ? "text-sm sm:text-base" : "text-base sm:text-lg"
          }`}
        >
          {product.name || product.title}
        </h3>

        <p
          className={`text-zinc-500 leading-relaxed line-clamp-2 flex-1 ${
            isMedium ? "mt-1 text-[11px] sm:text-xs" : "mt-1.5 sm:mt-2 text-xs sm:text-sm"
          }`}
        >
          {product.description}
        </p>

        <div
          className={`flex items-center border-t border-zinc-800 ${
            isMedium
              ? "flex-row gap-2 mt-3 pt-2.5"
              : "flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 mt-4 sm:mt-5 pt-3 sm:pt-4"
          }`}
        >
          <button
            onClick={() => addToCart(product, 1)}
            className={`flex-1 flex items-center justify-center gap-1.5 rounded-full bg-amber-500 text-black font-bold hover:bg-amber-400 active:bg-amber-400 transition ${
              isMedium
                ? "py-1.5 text-[11px] sm:text-xs"
                : "py-2 sm:py-2.5 text-xs sm:text-sm"
            }`}
          >
            <FaShoppingCart size={isMedium ? 10 : 12} />
            Add to Cart
          </button>
          <Link
            to={`/product/${product.id}`}
            className={`flex items-center justify-center rounded-full border border-zinc-700 font-semibold hover:border-amber-500 hover:text-amber-500 transition text-center ${
              isMedium
                ? "px-3 py-1.5 text-[11px] sm:text-xs shrink-0"
                : "px-4 py-2 sm:py-2.5 text-xs sm:text-sm"
            }`}
          >
            View
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
