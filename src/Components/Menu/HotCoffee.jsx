import products from "../../Data/Products";
import MenuSection from "./MenuSection";

const HotCoffee = () => {
  const hotCoffee = products.filter((item) => item.category === "Hot Coffee");

  return (
    <div className="relative">
      {/* Decorative background glow */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-amber-600/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl -z-10" />

      <MenuSection
        sectionClass="hot-coffee"
        eyebrow="Hot Coffee"
        title="Freshly Brewed Classics"
        description="Enjoy our handcrafted hot coffee collection, brewed fresh with carefully selected premium beans."
        products={hotCoffee}
        variant="default"
      />
    </div>
  );
};

export default HotCoffee;
