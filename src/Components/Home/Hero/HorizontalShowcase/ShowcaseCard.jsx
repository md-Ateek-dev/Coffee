import { Link } from "react-router-dom";
import { FaStar, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const ShowcaseCard = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group relative w-[270px] sm:w-[320px] md:w-[350px] bg-[#431602] rounded-2xl overflow-hidden border border-white hover:border-amber-500/50 transition-colors duration-300 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between shrink-0 select-none"
    >
      {/* Top Image Container */}
      <div className="relative overflow-hidden aspect-[16/10] bg-[#431602]">
        <img
          src={product.image}
          alt={product.name || product.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
          loading="lazy"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-transparent to-black/40" />

        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-amber-500 text-black text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
          {product.category || "Signature"}
        </span>

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/75 backdrop-blur-md px-2.5 py-0.5 rounded-full text-amber-400 text-xs font-bold border border-white/10 shadow-sm">
          <FaStar className="text-amber-400 text-[10px]" />
          <span>{product.rating || "4.9"}</span>
        </div>

        {/* Price Tag */}
        <div className="absolute bottom-3 right-3 bg-amber-500 text-black font-extrabold text-sm px-3 py-1 rounded-lg shadow-md">
          {product.price}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1">
            {product.name || product.title}
          </h3>

          <p className="text-zinc-400 mt-2 text-xs leading-relaxed line-clamp-2">
            {product.description ||
              "Artisanal roast crafted for extraordinary flavor profile, smooth aroma, and velvety finish."}
          </p>
        </div>

        {/* Action Button */}
        <div className="mt-4 pt-3.5 border-t border-white/[0.08] flex items-center justify-between">
          <span className="text-[10px] sm:text-[11px] text-zinc-500 font-mono tracking-wider">
            PREMIUM ROAST
          </span>

          <Link
            to={`/product/${product.id}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-400 font-bold border border-amber-500/30 hover:bg-amber-500 hover:text-black transition-all text-xs group/btn"
          >
            <span>Details</span>
            <FaArrowRight className="text-[10px] transition-transform group-hover/btn:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ShowcaseCard;
