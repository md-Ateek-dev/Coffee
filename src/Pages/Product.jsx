import Navbar from "../Components/Comman/Navbar";
import Footer from "../Components/Comman/Footer";
import PageTransition from "../Components/Comman/PageTransition";

import ProductHero from "../Components/Products/ProductHero";
import ProductGallery from "../Components/Products/ProductGallery";
import ProductInfo from "../Components/Products/ProductInfo";
import Ingredients from "../Components/Products/Ingredients";
import BrewingGuide from "../Components/Products/BrewingGuide";
import Reviews from "../Components/Products/Reviews";
import RelatedProducts from "../Components/Products/RelatedProducts";

const Product = () => {
  return (
    <PageTransition>
      <Navbar />

      <ProductHero />

      <ProductGallery />

      <ProductInfo />

      <Ingredients />

      <BrewingGuide />

      <Reviews />

      <RelatedProducts />

      <Footer />
    </PageTransition>
  );
};

export default Product;