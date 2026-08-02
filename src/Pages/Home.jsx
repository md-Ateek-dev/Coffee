/** @format */

import Navbar from "../Components/Comman/Navbar";
import Footer from "../Components/Comman/Footer";

import Hero from "../Components/Home/Hero/Hero";
import BrandStory from "../Components/Home/BrandStory";
import FeaturedCoffee from "../Components/Home/FeaturedCoffee";
import CoffeeJourney from "../Components/Home/CoffeeJourney";
import BestSellers from "../Components/Home/BestSellers";
import WhyChooseUs from "../Components/Home/WhyChooseUs";
import Testimonials from "../Components/Home/Testimonials";
import CTA from "../Components/Home/CTA";
import PageTransition from "../Components/Comman/PageTransition";

const Home = () => {
	return (
		<>
			<PageTransition>
				<Navbar />
				<Hero />
				<BrandStory />
				<FeaturedCoffee />
				<CoffeeJourney />
				<BestSellers />
				<WhyChooseUs />
				<Testimonials />
				<CTA />
				<Footer />
			</PageTransition>
		</>
	);
};

export default Home;
