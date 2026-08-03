import { Link } from "react-router-dom";
import { FaStar, FaArrowRight } from "react-icons/fa";

const ShowcaseCard = ({ product }) => {
  return (
    <div className="group relative w-[280px] sm:w-[330px] md:w-[360px] bg-[#161513] rounded-2xl overflow-hidden border border-zinc-800/90 hover:border-amber-500/80 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 flex flex-col justify-between shrink-0">
      {/* Top Image Container */}
      <div className="relative overflow-hidden aspect-[16/10] bg-[#0f0e0d]">
        <img
          src={product.image}
          alt={product.name || product.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#161513] via-transparent to-black/30" />

        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-amber-500 text-black text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
          {product.category || "Signature"}
        </span>

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/75 backdrop-blur-md px-2.5 py-0.5 rounded-full text-amber-400 text-xs font-bold border border-zinc-700/80 shadow-sm">
          <FaStar className="text-amber-400 text-[10px]" />
          <span>{product.rating || "4.9"}</span>
        </div>

        {/* Price Tag */}
        <div className="absolute bottom-3 right-3 bg-amber-500 text-black font-extrabold text-sm px-3 py-1 rounded-lg shadow-md">
          {product.price}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
            {product.name || product.title}
          </h3>

          <p className="text-zinc-400 mt-2 text-xs leading-relaxed line-clamp-2">
            {product.description ||
              "Artisanal roast crafted for extraordinary flavor profile, smooth aroma, and velvety finish."}
          </p>
        </div>

        {/* Action Button */}
        <div className="mt-5 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
          <span className="text-[11px] text-zinc-500 font-mono">
            PREMIUM ROAST
          </span>

          <Link
            to={`/product/${product.id}`}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 font-bold border border-amber-500/30 hover:bg-amber-500 hover:text-black transition-all text-xs group/btn"
          >
            <span>View</span>
            <FaArrowRight className="text-[10px] transition-transform group-hover/btn:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseCard;
