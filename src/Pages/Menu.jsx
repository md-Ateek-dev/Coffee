import PageTransition from "../Components/Comman/PageTransition";

import Navbar from "../Components/Comman/Navbar";
import Footer from "../Components/Comman/Footer";

import MenuHero from "../Components/Menu/MenuHero";
import HotCoffee from "../Components/Menu/HotCoffee";
import ColdCoffee from "../Components/Menu/ColdCoffee";
import SpecialDrinks from "../Components/Menu/SpecialDrinks";
import Desserts from "../Components/Menu/Desserts";
import OfferBanner from "../Components/Menu/OfferBanner";

const Menu = () => {
  return (
    <PageTransition>
      <Navbar />

      <MenuHero />

      <HotCoffee />

      <ColdCoffee />

      <SpecialDrinks />

      <Desserts />

      <OfferBanner />

      <Footer />
    </PageTransition>
  );
};

export default Menu;