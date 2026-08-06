import { useState, useRef, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FaStar,
  FaHeart,
  FaShoppingCart,
  FaTruck,
  FaShieldAlt,
  FaChevronLeft,
  FaChevronRight,
  FaCheck,
  FaFire,
  FaLeaf,
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
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef(null);
  const infoRef = useRef(null);

  // Scroll reveal animation
  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal-item");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  if (!product) {
    return (
      <section className="min-h-[60vh] pt-32 flex items-center justify-center bg-[#0F0E0D]">
        <div className="text-center reveal-item opacity-0 translate-y-8 transition-all duration-700">
          <div className="text-6xl mb-4">☕</div>
          <h2 className="text-3xl font-bold text-white">Product Not Found</h2>
          <p className="text-zinc-400 mt-2 mb-6">
            The coffee you're looking for doesn't exist.
          </p>
          <Link
            to="/shop"
            className="inline-block px-8 py-3 bg-amber-500 text-black font-semibold rounded-full hover:bg-amber-400 hover:scale-105 transition-all duration-300"
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
    setTimeout(() => setAddedFeedback(false), 2500);
  };

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
    setIsImageLoading(true);
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsImageLoading(true);
  };

  const originalPrice = Math.round(
    parseFloat(product.price.replace("$", "")) * 1.25,
  );

  return (
    <section
      ref={sectionRef}
      className="pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 bg-[#0F0E0D] relative overflow-hidden min-h-screen"
    >
      {/* Ambient Background Glows */}
      <div className="absolute top-20 right-0 w-72 sm:w-[500px] h-72 sm:h-[500px] rounded-full bg-amber-500/8 blur-[150px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-20 left-0 w-60 sm:w-80 h-60 sm:h-80 rounded-full bg-orange-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Breadcrumb */}
        <nav
          className={`reveal-item opacity-0 translate-y-4 transition-all duration-700 delay-100 flex items-center gap-2 text-xs sm:text-sm text-zinc-500 mb-6 sm:mb-10 ${isVisible ? "opacity-100 translate-y-0" : ""}`}
        >
          <Link
            to="/"
            className="hover:text-amber-500 transition-colors duration-300"
          >
            Home
          </Link>
          <span className="text-zinc-700">/</span>
          <Link
            to="/shop"
            className="hover:text-amber-500 transition-colors duration-300"
          >
            Shop
          </Link>
          <span className="text-zinc-700">/</span>
          <span className="text-amber-500 font-medium truncate max-w-[150px] sm:max-w-xs">
            {product.title}
          </span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-start">
          {/* Gallery */}
          <div
            className={`reveal-item opacity-0 -translate-x-8 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : ""}`}
          >
            <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-4">
              {/* Thumbnails */}
              <div className="flex sm:flex-col gap-2 sm:gap-3 overflow-x-auto sm:overflow-visible scrollbar-hide pb-1 sm:pb-0 sm:w-24 shrink-0">
                {images.map((img, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => {
                      setSelectedIndex(index);
                      setIsImageLoading(true);
                    }}
                    className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl overflow-hidden border-2 transition-all duration-500 shrink-0 group ${
                      selectedIndex === index
                        ? "border-amber-500 shadow-lg shadow-amber-500/20 scale-105"
                        : "border-zinc-800 opacity-50 hover:opacity-100 hover:border-zinc-600 hover:scale-105"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.title} view ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {selectedIndex === index && (
                      <div className="absolute inset-0 bg-amber-500/10" />
                    )}
                  </button>
                ))}
              </div>

              {/* Main Image */}
              <div className="flex-1 relative group">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#181715] border border-zinc-800 aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
                  {/* Loading Skeleton */}
                  {isImageLoading && (
                    <div className="absolute inset-0 bg-zinc-900 animate-pulse z-10" />
                  )}

                  <img
                    key={selectedIndex}
                    src={currentImage}
                    alt={product.title}
                    onLoad={() => setIsImageLoading(false)}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      isImageLoading
                        ? "opacity-0 scale-105"
                        : "opacity-100 scale-100"
                    } group-hover:scale-110`}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Navigation Arrows */}
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-zinc-700 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-amber-500 hover:border-amber-500 hover:text-black hover:scale-110 z-20"
                      >
                        <FaChevronLeft size={14} />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-zinc-700 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-amber-500 hover:border-amber-500 hover:text-black hover:scale-110 z-20"
                      >
                        <FaChevronRight size={14} />
                      </button>
                    </>
                  )}

                  {/* Image Counter */}
                  <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md text-zinc-300 px-3 py-1.5 rounded-full text-xs font-medium border border-zinc-800">
                    {selectedIndex + 1} / {images.length}
                  </div>

                  {/* Wishlist Floating Button */}
                  <button
                    onClick={() => toggleWishlist(product)}
                    className={`absolute top-4 right-4 w-10 h-10 rounded-full backdrop-blur-md border flex items-center justify-center transition-all duration-300 hover:scale-110 z-20 ${
                      liked
                        ? "bg-red-500/20 border-red-500/50 text-red-400"
                        : "bg-black/50 border-zinc-700 text-zinc-400 hover:text-red-400 hover:border-red-500/50"
                    }`}
                  >
                    <FaHeart
                      size={16}
                      className={liked ? "fill-current" : ""}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Info */}
          <div
            ref={infoRef}
            className={`reveal-item opacity-0 translate-x-8 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : ""}`}
          >
            {/* Category Badge */}
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <FaLeaf size={10} />
                {product.category}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-bold uppercase tracking-wider">
                <FaCheck size={10} />
                In Stock
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-4 mt-4 sm:mt-5">
              <div className="flex items-center gap-1 bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20">
                <FaStar className="text-amber-500 text-sm" />
                <span className="font-bold text-amber-500 text-sm">
                  {product.rating}
                </span>
              </div>
              <span className="text-zinc-500 text-sm">
                124 verified reviews
              </span>
              <div className="hidden sm:flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    size={12}
                    className={
                      i < Math.floor(product.rating)
                        ? "text-amber-500"
                        : "text-zinc-700"
                    }
                  />
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="flex flex-wrap items-baseline gap-3 sm:gap-4 mt-6 sm:mt-8 pb-6 sm:pb-8 border-b border-zinc-800">
              <span className="text-4xl sm:text-5xl font-black text-amber-500 tracking-tight">
                {product.price}
              </span>
              <span className="text-xl sm:text-2xl text-zinc-600 line-through font-medium">
                ${originalPrice}
              </span>
              <span className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold">
                SAVE 20%
              </span>
            </div>

            {/* Description */}
            <p className="mt-6 sm:mt-8 text-zinc-400 leading-relaxed text-sm sm:text-base">
              {product.description}
            </p>

            {/* Features Tags */}
            <div className="flex flex-wrap gap-2 mt-5 sm:mt-6">
              {["Organic", "Single Origin", "Fresh Roast", "Fair Trade"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-lg bg-[#181715] border border-zinc-800 text-zinc-400 text-xs font-medium hover:border-amber-500/30 hover:text-amber-400 transition-all duration-300 cursor-default"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-5 mt-8 sm:mt-10">
              <span className="text-zinc-400 text-sm font-medium">
                Quantity
              </span>
              <div className="flex items-center gap-1 bg-[#181715] border border-zinc-800 rounded-full p-1">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-zinc-800 text-zinc-300 hover:bg-amber-500 hover:text-black transition-all duration-300 font-bold text-lg flex items-center justify-center active:scale-90"
                >
                  −
                </button>
                <span className="text-lg sm:text-xl font-bold w-12 text-center text-white">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-zinc-800 text-zinc-300 hover:bg-amber-500 hover:text-black transition-all duration-300 font-bold text-lg flex items-center justify-center active:scale-90"
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 sm:mt-10">
              <button
                onClick={handleAddToCart}
                disabled={addedFeedback}
                className={`flex-1 flex justify-center items-center gap-3 py-4 sm:py-5 rounded-2xl font-bold text-sm sm:text-base transition-all duration-500 active:scale-95 ${
                  addedFeedback
                    ? "bg-green-500 text-black shadow-lg shadow-green-500/25"
                    : "bg-amber-500 text-black hover:bg-amber-400 hover:shadow-xl hover:shadow-amber-500/20 hover:-translate-y-0.5"
                }`}
              >
                {addedFeedback ? (
                  <>
                    <FaCheck className="text-lg animate-bounce" />
                    Added to Cart!
                  </>
                ) : (
                  <>
                    <FaShoppingCart />
                    Add To Cart — {product.price}
                  </>
                )}
              </button>

              <button
                onClick={() => toggleWishlist(product)}
                className={`flex-1 flex justify-center items-center gap-3 py-4 sm:py-5 rounded-2xl font-bold text-sm sm:text-base border-2 transition-all duration-300 active:scale-95 ${
                  liked
                    ? "bg-red-500/10 border-red-500/50 text-red-400 hover:bg-red-500/20"
                    : "border-zinc-800 text-zinc-300 hover:border-amber-500 hover:text-amber-500 hover:bg-amber-500/5"
                }`}
              >
                <FaHeart
                  className={liked ? "fill-current animate-pulse" : ""}
                />
                {liked ? "Saved to Wishlist" : "Add to Wishlist"}
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-3 sm:gap-4">
              {[
                {
                  icon: <FaTruck />,
                  title: "Free Shipping",
                  desc: "On orders over $50",
                },
                {
                  icon: <FaShieldAlt />,
                  title: "Secure Payment",
                  desc: "100% protected checkout",
                },
                {
                  icon: <FaFire />,
                  title: "Freshly Roasted",
                  desc: "Roasted within 48hrs",
                },
                {
                  icon: <FaCheck />,
                  title: "Satisfaction",
                  desc: "30-day money back",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-[#181715] border border-zinc-800 hover:border-zinc-700 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white text-xs sm:text-sm font-semibold">
                      {item.title}
                    </p>
                    <p className="text-zinc-500 text-[10px] sm:text-xs">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Meta Info */}
            <div className="mt-8 sm:mt-10 pt-6 border-t border-zinc-800">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: "Category", value: product.category },
                  {
                    label: "SKU",
                    value: `CF-${String(product.id).padStart(3, "0")}`,
                  },
                  { label: "Roast Level", value: "Medium" },
                  { label: "Origin", value: "Colombia" },
                ].map((meta, i) => (
                  <div key={i} className="text-center sm:text-left">
                    <p className="text-zinc-600 text-[10px] sm:text-xs uppercase tracking-wider font-semibold mb-1">
                      {meta.label}
                    </p>
                    <p className="text-zinc-300 text-xs sm:text-sm font-medium">
                      {meta.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
