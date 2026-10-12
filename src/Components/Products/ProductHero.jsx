import { Link, useParams } from "react-router-dom";
import products from "../../Data/Products";

const ProductHero = () => {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <section className="min-h-[60svh] px-4 flex items-center justify-center">
        <h2 className="text-center text-2xl sm:text-3xl font-bold">
          Product Not Found
        </h2>
      </section>
    );
  }

  return (
    <section className="relative min-h-[100svh] bg-[#431602] flex items-center overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16">
      {/* Background Glow */}
      <div className="absolute top-20 right-20 w-80 h-80 rounded-full bg-amber-500/20 blur-[120px]" />

      <div className="page-container grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
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

            <span className="text-amber-500">{product.title}</span>
          </div>

          <span className="inline-block px-4 py-2 rounded-full bg-amber-500 text-black font-semibold mb-6">
            {product.category}
          </span>

          <h1 className="text-[clamp(2rem,8vw,4.5rem)] lg:text-7xl font-bold leading-tight break-words">
            {product.title}
          </h1>

          <p className="mt-5 sm:mt-8 text-zinc-400 leading-relaxed sm:leading-8">
            {product.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-6 sm:mt-10">
            <span className="text-4xl font-bold text-amber-500">
              {product.price}
            </span>

            <span className="text-zinc-400">⭐ {product.rating}</span>
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
