import products from "../../Data/Products";
import MenuSection from "./MenuSection";

const Desserts = () => {
  const desserts = products.filter((item) => item.category === "Desserts");

  return (
    <MenuSection
      sectionClass="desserts"
      eyebrow="Sweet Treats"
      title="Desserts"
      description="Pair your favorite coffee with our freshly baked cakes, pastries and delicious desserts."
      products={desserts}
      variant="alt"
    />
  );
};

export default Desserts;
