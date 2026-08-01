import { FaCheckCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import products from "../../Data/Products";

const Ingredients = () => {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) return null;

  const ingredients =
    product.ingredients || [
      "100% Premium Arabica Beans",
      "Filtered Water",
      "Fresh Organic Milk",
      "Natural Cocoa Powder",
    ];

  return (
    <section className="py-24 bg-[#181715]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <span className="uppercase tracking-[4px] text-amber-500">
              Premium Quality
            </span>

            <h2 className="text-5xl font-bold mt-4">
              Ingredients
            </h2>

            <p className="mt-6 text-zinc-400 leading-8">
              Every cup is prepared using carefully selected ingredients
              sourced from the world's finest coffee farms.
            </p>

            <div className="mt-10 space-y-5">

              {ingredients.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4"
                >
                  <FaCheckCircle className="text-green-500 text-xl" />

                  <span className="text-lg">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>

          {/* Right */}

          <div className="rounded-3xl overflow-hidden">

            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[550px] object-cover"
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default Ingredients;