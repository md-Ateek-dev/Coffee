import Navbar from "../Components/Comman/Navbar";
import Footer from "../Components/Comman/Footer";
import PageTransition from "../Components/Comman/PageTransition";
import CartDrawer from "../Components/Comman/CartDrawer";

import ProductDetail from "../Components/Products/ProductDetail";
import Ingredients from "../Components/Products/Ingredients";
import BrewingGuide from "../Components/Products/BrewingGuide";
import Reviews from "../Components/Products/Reviews";
import RelatedProducts from "../Components/Products/RelatedProducts";

const Product = () => {
  return (
    <PageTransition>
      <Navbar />

      <ProductDetail />

      <Ingredients />
      <BrewingGuide />
      <Reviews />
      <RelatedProducts />

      <Footer />
    </PageTransition>
  );
};

export default Product;
