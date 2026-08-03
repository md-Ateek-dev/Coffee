import products from "../../Data/Products";
import MenuSection from "./MenuSection";

const ColdCoffee = () => {
  const coldCoffee = products.filter((item) => item.category === "Cold Coffee");

  return (
    <MenuSection
      sectionClass="cold-coffee"
      eyebrow="Cold Coffee"
      title="Refreshingly Chilled"
      description="Smooth, creamy and refreshing cold coffee made for every season."
      products={coldCoffee}
      variant="alt"
    />
  );
};

export default ColdCoffee;
