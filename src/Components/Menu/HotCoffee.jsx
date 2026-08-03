import products from "../../Data/Products";
import MenuSection from "./MenuSection";

const HotCoffee = () => {
  const hotCoffee = products.filter((item) => item.category === "Hot Coffee");

  return (
    <MenuSection
      sectionClass="hot-coffee"
      eyebrow="Hot Coffee"
      title="Freshly Brewed Classics"
      description="Enjoy our handcrafted hot coffee collection, brewed fresh with carefully selected premium beans."
      products={hotCoffee}
      variant="default"
    />
  );
};

export default HotCoffee;
