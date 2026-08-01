import { FaStar, FaCheckCircle, FaAward, FaCoffee, FaHeart } from "react-icons/fa";
import useReveal from "../../Hooks/UseReveal";

const reviewStats = [
  { label: "Flavor Profile & Aroma", score: 98 },
  { label: "Bean Freshness & Roast Quality", score: 99 },
  { label: "Customer Satisfaction", score: 96 },
  { label: "Sustainable Direct Trade", score: 100 },
];

const customerReviews = [
  {
    id: 1,
    name: "Eleanor Vance",
    badge: "Verified Connoisseur",
    rating: 5,
    title: "Unrivaled Roast Quality!",
    review: "The Signature Espresso blend has redefined my morning routine. The rich crema and hints of dark chocolate are sheer perfection.",
    product: "Signature Espresso",
  },
  {
    id: 2,
    name: "Marcus Thorne",
    badge: "Home Barista",
    rating: 5,
    title: "Phenomenal Nitro Cold Brew",
    review: "Incredible cascading texture and smooth natural sweetness without any bitterness. Easily the best specialty coffee service.",
    product: "Nitro Cold Brew",
  },
  {
    id: 3,
    name: "Sophia Chen",
    badge: "Coffee Enthusiast",
    rating: 5,
    title: "Smooth & Delightful Velvet Latte",
    review: "Every single cup is roasted with passion. The subscription service brings fresh beans to my door right on schedule.",
    product: "Velvet Latte",
  },
];

const ProductReviewsShowcase = () => {
  useReveal(".reviews-showcase");

  return (
    <section className="reviews-showcase py-24 bg-[#0B0A0A] border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="uppercase tracking-[5px] text-amber-500 font-semibold text-sm">
            Product Excellence
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Audited & Rated by Coffee Lovers
          </h2>
          <p className="mt-4 text-zinc-300 leading-8 text-base">
            We hold our beans to the highest sensory standards. Here is how our community rates our craftsmanship.
          </p>
        </div>

        {/* Top Summary Banner */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Rating Big Card */}
          <div className="bg-[#1a1815] border border-zinc-700/70 rounded-3xl p-8 text-center flex flex-col justify-center items-center">
            <div className="w-20 h-20 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-4xl mb-4 border border-amber-500/30">
              <FaAward />
            </div>
            <div className="text-6xl font-extrabold text-white tracking-tight">
              4.9<span className="text-3xl text-amber-500">/5</span>
            </div>
            <div className="flex gap-1 text-amber-400 text-xl my-3">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className="text-zinc-300 font-medium text-sm">
              Based on over <strong className="text-white">12,500+ verified customer reviews</strong>
            </p>
          </div>

          {/* Meter Breakdown Bars */}
          <div className="lg:col-span-2 bg-[#1a1815] border border-zinc-700/70 rounded-3xl p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <FaCoffee className="text-amber-500" />
              Sensory Evaluation Scores
            </h3>
            <div className="space-y-5">
              {reviewStats.map((stat, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-sm font-semibold mb-2">
                    <span className="text-zinc-200">{stat.label}</span>
                    <span className="text-amber-400 font-bold">{stat.score}%</span>
                  </div>
                  <div className="w-full bg-zinc-800 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-amber-500 h-full rounded-full transition-all duration-1000"
                      style={{ width: `${stat.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Customer Review Cards Grid - Crisp & High Contrast */}
        <div className="grid md:grid-cols-3 gap-8">
          {customerReviews.map((item) => (
            <div
              key={item.id}
              className="
                bg-[#1a1815]
                border
                border-zinc-700/70
                rounded-3xl
                p-8
                hover:border-amber-500
                hover:shadow-xl
                hover:shadow-amber-500/10
                transition-all
                duration-300
                flex
                flex-col
                justify-between
              "
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                    <FaCheckCircle size={12} />
                    {item.badge}
                  </span>
                  <div className="flex gap-0.5 text-amber-400 text-sm">
                    {[...Array(item.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>

                <h4 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h4>

                <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                  "{item.review}"
                </p>
              </div>

              <div className="border-t border-zinc-800 pt-4 flex justify-between items-center">
                <div>
                  <h5 className="font-bold text-white text-base">
                    {item.name}
                  </h5>
                  <span className="text-xs text-amber-400 font-medium">
                    Fav: {item.product}
                  </span>
                </div>
                <FaHeart className="text-amber-500/40 text-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductReviewsShowcase;
