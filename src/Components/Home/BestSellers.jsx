import { Link } from "react-router-dom";
import bestSellers from "../../Data/BestSeller.js";
import useReveal from "../../Hooks/UseReveal";
import useStaggerReveal from "../../Hooks/useStaggerReveal";

const BestSellers = () => {
  const featured = bestSellers[0] || {};
  const others = bestSellers.slice(1) || [];
useReveal(".best-sellers");
useStaggerReveal(".best-sellers", ".seller-card");
  return (
    <section className="best-sellers py-28">

      <div className="seller-card max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-amber-500">
            Best Sellers
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Customer Favorites
          </h2>

          <p className="text-zinc-400 mt-5">
            Discover our most loved handcrafted coffee.
          </p>

        </div>

        {/* Main Grid */}

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left */}

          <div className="bg-[#181715] rounded-3xl p-10">

            <img
              src={featured.image}
              alt={featured.title}
              className="w-72 mx-auto"
            />

            <h3 className="text-4xl font-bold mt-10">
              {featured.title}
            </h3>

            <p className="text-zinc-400 mt-4">
              {featured.description}
            </p>

            <p className="text-amber-500 mt-5">
              {featured.rating}
            </p>

            <div className=" flex justify-between items-center mt-8">

              <span className="text-3xl font-bold">
                {featured.price}
              </span>

              <Link
                to={`/product/${featured.id}`}
                className="bg-amber-500 text-black px-6 py-3 rounded-full font-semibold"
              >
                Order Now
              </Link>

            </div>

          </div>

          {/* Right */}

          <div className="seller-card flex flex-col gap-6">

            {others.map((item) => (

              <div
                key={item.id}
                className="bg-[#181715] rounded-2xl p-6 flex items-center justify-between"
              >

                <div className=" flex items-center gap-5">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24"
                  />

                  <div>

                    <h4 className="text-2xl font-semibold">
                      {item.title}
                    </h4>

                    <p className="text-zinc-400 mt-2">
                      {item.price}
                    </p>

                  </div>

                </div>

                <Link
                  to={`/product/${item.id}`}
                  className="text-amber-500"
                >
                  View →
                </Link>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default BestSellers;