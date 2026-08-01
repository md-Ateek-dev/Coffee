import Navbar from "../Components/Comman/Navbar";
import Footer from "../Components/Comman/Footer";
import PageTransition from "../Components/Comman/PageTransition";

import ContactHero from "../Components/Contact/ContactHero";
import StoreInfo from "../Components/Contact/StoreInfo";
import ContactForm from "../Components/Contact/ContactForm";
import FAQ from "../Components/Contact/FAQ";
import SocialLinks from "../Components/Contact/SocialLinks";

const Contact = () => {
  return (
    <PageTransition>
      <Navbar />

      <ContactHero />

      <StoreInfo />

      <ContactForm />

      <FAQ />

      <SocialLinks />

      <Footer />
    </PageTransition>
  );
};

export default Contact;