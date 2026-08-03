/** @format */

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import useLenis from "./Hooks/UseLenis";

import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
import About from "./Pages/About";
import Gallery from "./Pages/Gallery";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";

import Cursor from "./Components/Comman/Cursor";
import ScrollTop from "./Components/Comman/ScrollTop";
import CartDrawer from "./Components/Comman/CartDrawer";
import { ShopProvider } from "./Context/ShopContext";

function AnimatedRoutes() {
	const location = useLocation();

	return (
		<AnimatePresence mode="wait">
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<Home />} />
				<Route path="/menu" element={<Menu />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/product/:id" element={<Product />} />
				<Route path="/about" element={<About />} />
				<Route path="/gallery" element={<Gallery />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</AnimatePresence>
	);
}

function App() {
	useLenis();

	return (
		<BrowserRouter>
			<ShopProvider>
				<Cursor />
				<ScrollTop />
				<CartDrawer />
				<AnimatedRoutes />
			</ShopProvider>
		</BrowserRouter>
	);
}

export default App;
