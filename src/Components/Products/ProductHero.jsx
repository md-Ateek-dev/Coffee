import { Link, useParams } from "react-router-dom";
import products from "../../Data/Products";

const ProductHero = () => {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center">
        <h2 className="text-3xl font-bold">Product Not Found</h2>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen bg-[#0F0E0D] flex items-center overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 right-20 w-80 h-80 rounded-full bg-amber-500/20 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}

        <div>

          <div className="text-sm text-zinc-400 mb-6">

            <Link to="/" className="hover:text-amber-500">
              Home
            </Link>

            <span className="mx-2">/</span>

            <Link to="/shop" className="hover:text-amber-500">
              Shop
            </Link>

            <span className="mx-2">/</span>

            <span className="text-amber-500">
              {product.title}
            </span>

          </div>

          <span className="inline-block px-4 py-2 rounded-full bg-amber-500 text-black font-semibold mb-6">
            {product.category}
          </span>

          <h1 className="text-5xl lg:text-7xl font-bold">
            {product.title}
          </h1>

          <p className="mt-8 text-zinc-400 leading-8">
            {product.description}
          </p>

          <div className="flex items-center gap-6 mt-10">

            <span className="text-4xl font-bold text-amber-500">
              {product.price}
            </span>

            <span className="text-zinc-400">
              ⭐ {product.rating}
            </span>

          </div>

        </div>

        {/* Right */}

        <div className="relative">

          <img
            src={product.image}
            alt={product.title}
            className="w-full max-w-lg mx-auto"
          />

        </div>

      </div>

    </section>
  );
};

export default ProductHero;