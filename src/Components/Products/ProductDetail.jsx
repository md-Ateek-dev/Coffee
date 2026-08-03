import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FaStar,
  FaHeart,
  FaShoppingCart,
  FaTruck,
  FaShieldAlt,
} from "react-icons/fa";
import products from "../../Data/Products";
import { useShop } from "../../Context/ShopContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart, toggleWishlist, isInWishlist } = useShop();

  const product = products.find((item) => item.id === Number(id));
  const [quantity, setQuantity] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [addedFeedback, setAddedFeedback] = useState(false);

  if (!product) {
    return (
      <section className="min-h-[60vh] pt-32 flex items-center justify-center bg-[#0F0E0D]">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Product Not Found</h2>
          <Link
            to="/shop"
            className="inline-block mt-6 px-6 py-3 bg-amber-500 text-black font-semibold rounded-full"
          >
            Back to Shop
          </Link>
        </div>
      </section>
    );
  }

  const images = product.images || [product.image];
  const currentImage = images[selectedIndex];
  const liked = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 2000);
  };

  return (
    <section className="pt-24 sm:pt-28 pb-12 sm:pb-16 bg-[#0F0E0D] relative overflow-hidden">
      <div className="absolute top-20 right-0 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-amber-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav className="text-xs sm:text-sm text-zinc-400 mb-6 sm:mb-10">
          <Link to="/" className="hover:text-amber-500 transition">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-amber-500 transition">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <span className="text-amber-500">{product.title}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Gallery */}
          <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-4">
            {/* Thumbnails */}
            <div className="flex sm:flex-col gap-2 sm:gap-3 overflow-x-auto sm:overflow-visible scrollbar-hide pb-1 sm:pb-0">
              {images.map((img, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  aria-label={`View image ${index + 1}`}
                  aria-pressed={selectedIndex === index}
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all duration-300 shrink-0 ${
                    selectedIndex === index
                      ? "border-amber-500 ring-2 ring-amber-500/30 scale-105"
                      : "border-zinc-800 opacity-60 hover:opacity-100 hover:border-zinc-600"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.title} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 rounded-2xl sm:rounded-3xl overflow-hidden bg-[#181715] border border-zinc-800 relative">
              <img
                key={selectedIndex}
                src={currentImage}
                alt={product.title}
                className="w-full h-[280px] sm:h-[380px] lg:h-[520px] object-cover animate-[fadeIn_0.35s_ease-out]"
              />
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-black/60 backdrop-blur-sm text-xs text-zinc-300 px-2.5 py-1 rounded-full">
                {selectedIndex + 1} / {images.length}
              </div>
            </div>
          </div>

          {/* Info */}
          <div>
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-amber-500 text-black text-xs sm:text-sm font-semibold">
              {product.category}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 sm:mt-5 leading-tight">
              {product.title}
            </h1>

            <div className="flex items-center gap-4 mt-4 sm:mt-5">
              <div className="flex items-center gap-1.5 text-amber-500">
                <FaStar />
                <span className="font-semibold">{product.rating}</span>
              </div>
              <span className="text-zinc-500 text-sm">(124 Reviews)</span>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-5 sm:mt-6">
              <span className="text-3xl sm:text-4xl font-bold text-amber-500">
                {product.price}
              </span>
              <span className="line-through text-zinc-500 text-base sm:text-lg">
                ${Math.round(parseFloat(product.price.replace("$", "")) * 1.25)}
              </span>
              <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                20% OFF
              </span>
            </div>

            <p className="mt-5 sm:mt-6 text-zinc-400 leading-7 text-sm sm:text-base">
              {product.description}
            </p>

            <p className="mt-3 sm:mt-4 text-green-500 font-medium text-sm">
              ✔ In Stock — Ready to ship
            </p>

            {/* Quantity */}
            <div className="flex items-center gap-4 mt-6 sm:mt-8">
              <span className="text-zinc-400 text-sm">Quantity</span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#181715] border border-zinc-700 hover:bg-amber-500 hover:text-black hover:border-amber-500 transition font-bold"
                >
                  −
                </button>
                <span className="text-lg sm:text-xl font-bold w-8 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#181715] border border-zinc-700 hover:bg-amber-500 hover:text-black hover:border-amber-500 transition font-bold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
              <button
                onClick={handleAddToCart}
                className={`flex-1 flex justify-center items-center gap-3 py-3.5 sm:py-4 rounded-full font-semibold transition-all ${
                  addedFeedback
                    ? "bg-green-500 text-black"
                    : "bg-amber-500 text-black hover:bg-amber-400 hover:scale-[1.02]"
                }`}
              >
                <FaShoppingCart />
                {addedFeedback ? "Added to Cart!" : "Add To Cart"}
              </button>

              <button
                onClick={() => toggleWishlist(product)}
                className={`flex-1 flex justify-center items-center gap-3 py-3.5 sm:py-4 rounded-full font-semibold border transition-all ${
                  liked
                    ? "bg-red-500/10 border-red-500 text-red-400"
                    : "border-zinc-700 hover:border-amber-500 hover:text-amber-500"
                }`}
              >
                <FaHeart className={liked ? "fill-current" : ""} />
                {liked ? "Liked" : "Add To Wishlist"}
              </button>
            </div>

            {/* Features */}
            <div className="mt-8 sm:mt-10 grid sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="flex items-center gap-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#181715] border border-zinc-800">
                <FaTruck className="text-amber-500 text-lg shrink-0" />
                <span className="text-xs sm:text-sm text-zinc-300">
                  Free shipping over $50
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#181715] border border-zinc-800">
                <FaShieldAlt className="text-amber-500 text-lg shrink-0" />
                <span className="text-xs sm:text-sm text-zinc-300">
                  100% Secure Checkout
                </span>
              </div>
            </div>

            {/* Meta */}
            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-zinc-800 grid grid-cols-2 gap-3 text-xs sm:text-sm text-zinc-400">
              <p>
                <strong className="text-zinc-300">Category:</strong>{" "}
                {product.category}
              </p>
              <p>
                <strong className="text-zinc-300">SKU:</strong> CF-
                {product.id}
              </p>
              <p>
                <strong className="text-zinc-300">Roast:</strong> Medium Roast
              </p>
              <p>
                <strong className="text-zinc-300">Origin:</strong> Colombia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
