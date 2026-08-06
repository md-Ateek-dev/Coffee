import { FaCheckCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import products from "../../Data/Products";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const Ingredients = () => {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  if (!product) return null;

  const ingredients = product.ingredients || [
    "100% Premium Arabica Beans",
    "Filtered Water",
    "Fresh Organic Milk",
    "Natural Cocoa Powder",
  ];

  return (
    <section className="py-24 bg-[#181715] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="uppercase tracking-[4px] text-amber-500 text-sm font-medium"
            >
              Premium Quality
            </motion.span>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="text-5xl font-bold mt-4 text-white"
            >
              Ingredients
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={2}
              className="mt-6 text-zinc-400 leading-8 max-w-md"
            >
              Every cup is prepared using carefully selected ingredients sourced
              from the world's finest coffee farms.
            </motion.p>

            <div className="mt-10 space-y-5">
              {ingredients.map((item, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={index + 3}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 group"
                >
                  <span className="flex items-center justify-center w-9 h-9 rounded-full bg-amber-500/10 border border-amber-500/30 group-hover:bg-amber-500/20 transition-colors">
                    <FaCheckCircle className="text-amber-500 text-lg" />
                  </span>

                  <span className="text-lg text-zinc-200 group-hover:text-white transition-colors">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-3xl overflow-hidden relative"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[550px] object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181715]/40 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Ingredients;
