import Navbar from "../Components/Comman/Navbar";
import Footer from "../Components/Comman/Footer";
import PageTransition from "../Components/Comman/PageTransition";
import CoffeeFarm from "../Components/About/CoffeeFarm";
import Timeline from "../Components/About/Timeline";
import AboutHero from "../Components/About/AboutHero";
import OurStory from "../Components/About/OurStory";
import OurValues from "../Components/About/OurValues";
import CoffeeProcess from "../Components/About/CoffeeProcess";
import Team from "../Components/About/Team";
import Stats from "../Components/About/States";
import Awards from "../Components/About/Awards";
import ProductReviewsShowcase from "../Components/About/ProductReviewsShowcase";
import CTA from "../Components/About/CTA";

const About = () => {
  return (
    <PageTransition>
      <Navbar />

      <AboutHero />

      <OurStory />

      <OurValues />
      
      <CoffeeFarm />
      
      <Timeline />

      <CoffeeProcess />

      <Team />

      <Stats />

      <ProductReviewsShowcase />

      <Awards />

      <CTA />

      <Footer />
    </PageTransition>
  );
};

export default About;