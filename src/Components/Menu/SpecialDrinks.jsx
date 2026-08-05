import products from "../../Data/Products";
import MenuSection from "./MenuSection";

const SpecialDrinks = () => {
  const specialDrinks = products.filter(
    (item) => item.category === "Special Drinks"
  );

  return (
    <MenuSection
      sectionClass="special-drinks"
      eyebrow="Chef's Signature Collection"
      title="Handcrafted Special Drinks"
      description="Discover our handcrafted signature drinks made with premium ingredients, rich flavors, and perfect presentation."
      products={specialDrinks}
      variant="default"
    />
  );
};

export default SpecialDrinks;

