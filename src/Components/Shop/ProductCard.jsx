import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="group rounded-3xl bg-[#181715] overflow-hidden border border-white/10 hover:border-amber-500 transition duration-300">

      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-6">

        <span className="text-sm text-amber-500">
          {product.category}
        </span>

        <h3 className="text-2xl font-semibold mt-2">
          {product.name}
        </h3>

        <div className="flex items-center justify-between mt-6">

          <p className="text-xl font-bold">
            {product.price}
          </p>

          <Link
            to={`/product/${product.id}`}
            className="px-5 py-2 rounded-full bg-amber-500 text-black text-sm font-semibold hover:bg-amber-400 transition"
          >
            View Details
          </Link>

        </div>

      </div>

    </div>
  );
};

export default ProductCard;