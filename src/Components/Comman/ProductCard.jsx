import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className="
group
relative
overflow-hidden
rounded-3xl
bg-[#181715]
border
border-white/10
transition-all
duration-500
hover:-translate-y-3
hover:shadow-[0_25px_80px_rgba(201,155,60,.18)]
">

      {/* Image */}

      <div className="
w-full
h-72
object-cover
transition-all
duration-700
group-hover:scale-110
group-hover:rotate-2
">

        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
        />

      </div>

      {/* Content */}

      <div className="p-6">

        <div className="flex items-center justify-between">

          <h3 className="text-2xl font-semibold">
            {product.name}
          </h3>

          <span className="text-amber-500 font-bold">
            ${product.price}
          </span>

        </div>

        <p className="mt-4 text-zinc-400 leading-7">
          {product.description}
        </p>

        <div className="flex justify-between items-center mt-6">

          <div className="flex items-center gap-1 text-amber-500">

            <FaStar />
            <span>{product.rating}</span>

          </div>

          <Link
            to={`/product/${product.id}`}
            className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 px-5 py-2 rounded-full bg-amber-500 text-black font-semibold"
          >
            View
          </Link>

        </div>

      </div>

    </div>
  );
};

export default ProductCard;