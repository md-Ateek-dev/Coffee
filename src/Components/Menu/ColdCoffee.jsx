import { motion } from "framer-motion";
import products from "../../Data/Products";
import MenuSection from "./MenuSection";

const containerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const ColdCoffee = () => {
  const coldCoffee = products.filter((item) => item.category === "Cold Coffee");

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <MenuSection
        sectionClass="cold-coffee"
        eyebrow="Cold Coffee"
        title="Refreshingly Chilled"
        description="Smooth, creamy and refreshing cold coffee made for every season."
        products={coldCoffee}
        variant="alt"
      />
    </motion.div>
  );
};

export default ColdCoffee;
