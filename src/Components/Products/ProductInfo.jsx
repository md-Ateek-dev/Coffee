import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaStar,
  FaHeart,
  FaShoppingCart,
  FaTruck,
  FaShieldAlt,
} from "react-icons/fa";

import products from "../../Data/Products";

const ProductInfo = () => {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const increase = () => setQuantity((prev) => prev + 1);

  const decrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <section className="py-24 bg-[#0F0E0D]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left */}

          <div>

            <span className="px-4 py-2 rounded-full bg-amber-500 text-black font-semibold">
              {product.category}
            </span>

            <h2 className="text-5xl font-bold mt-6">
              {product.title}
            </h2>

            <div className="flex items-center gap-4 mt-6">

              <div className="flex items-center text-amber-500">
                <FaStar />
                <span className="ml-2">
                  {product.rating}
                </span>
              </div>

              <span className="text-zinc-500">
                (124 Reviews)
              </span>

            </div>

            <div className="flex items-center gap-4 mt-8">

              <span className="text-4xl font-bold text-amber-500">
                {product.price}
              </span>

              <span className="line-through text-zinc-500">
                $25
              </span>

              <span className="bg-green-600 px-3 py-1 rounded-full text-sm">
                20% OFF
              </span>

            </div>

            <p className="mt-8 text-zinc-400 leading-8">
              {product.description}
            </p>

            <div className="mt-8">

              <span className="text-green-500 font-semibold">
                ✔ In Stock
              </span>

            </div>

          </div>

          {/* Right */}

          <div>

            {/* Quantity */}

            <div className="flex items-center gap-5 mb-8">

              <button
                onClick={decrease}
                className="w-12 h-12 rounded-full bg-[#181715] hover:bg-amber-500 hover:text-black transition"
              >
                -
              </button>

              <span className="text-2xl font-bold">
                {quantity}
              </span>

              <button
                onClick={increase}
                className="w-12 h-12 rounded-full bg-[#181715] hover:bg-amber-500 hover:text-black transition"
              >
                +
              </button>

            </div>

            {/* Buttons */}

            <div className="flex flex-col gap-5">

              <button className="flex justify-center items-center gap-3 bg-amber-500 text-black font-semibold py-4 rounded-full hover:scale-105 transition">

                <FaShoppingCart />

                Add To Cart

              </button>

              <button className="flex justify-center items-center gap-3 border border-zinc-700 py-4 rounded-full hover:border-amber-500 transition">

                <FaHeart />

                Add To Wishlist

              </button>

            </div>

            {/* Features */}

            <div className="mt-12 space-y-6">

              <div className="flex items-center gap-4">

                <FaTruck className="text-amber-500 text-xl" />

                <span>Free Shipping on orders over $50</span>

              </div>

              <div className="flex items-center gap-4">

                <FaShieldAlt className="text-amber-500 text-xl" />

                <span>100% Secure Checkout</span>

              </div>

            </div>

            {/* Metadata */}

            <div className="mt-12 border-t border-zinc-800 pt-8 space-y-3 text-zinc-400">

              <p>
                <strong>Category:</strong> {product.category}
              </p>

              <p>
                <strong>SKU:</strong> CF-{product.id}
              </p>

              <p>
                <strong>Roast:</strong> Medium Roast
              </p>

              <p>
                <strong>Origin:</strong> Colombia
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ProductInfo;