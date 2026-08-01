/** @format */

import { useState } from "react";
import { Link } from "react-router-dom";
import {
	FaInstagram,
	FaFacebookF,
	FaXTwitter,
	FaPinterestP,
} from "react-icons/fa6";

const Footer = () => {
	const [email, setEmail] = useState("");
	const [subscribed, setSubscribed] = useState(false);

	const handleSubscribe = (e) => {
		e.preventDefault();
		if (email.trim()) {
			setSubscribed(true);
			setTimeout(() => {
				setEmail("");
				setSubscribed(false);
			}, 3500);
		}
	};

	return (
		<footer className="bg-[#0f0e0d] border-t border-white/10 mt-24 text-zinc-300">
			<div className="max-w-7xl mx-auto px-6 py-16">
				{/* Top Branding & Socials */}
				<div className="text-center">
					<Link to="/" className="inline-block">
						<h2 className="text-5xl font-bold tracking-[6px] text-white hover:text-amber-400 transition-colors">
							AURA
						</h2>
					</Link>

					<p className="text-zinc-400 mt-4 text-base">
						Crafted for Slow Mornings.
					</p>

					<div className="flex justify-center gap-4 mt-8">
						<a
							href="https://instagram.com"
							target="_blank"
							rel="noreferrer"
							aria-label="Instagram"
							className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all shadow-md"
						>
							<FaInstagram />
						</a>

						<a
							href="https://facebook.com"
							target="_blank"
							rel="noreferrer"
							aria-label="Facebook"
							className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all shadow-md"
						>
							<FaFacebookF />
						</a>

						<a
							href="https://twitter.com"
							target="_blank"
							rel="noreferrer"
							aria-label="Twitter"
							className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all shadow-md"
						>
							<FaXTwitter />
						</a>

						<a
							href="https://pinterest.com"
							target="_blank"
							rel="noreferrer"
							aria-label="Pinterest"
							className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all shadow-md"
						>
							<FaPinterestP />
						</a>
					</div>
				</div>

				{/* Links */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-16">
					{/* Quick Links */}
					<div>
						<h3 className="text-xl font-semibold mb-5 text-white">
							Quick Links
						</h3>

						<div className="flex flex-col gap-3">
							<Link
								to="/"
								className="text-zinc-300 hover:text-amber-400 hover:translate-x-1 transition-all"
							>
								Home
							</Link>

							<Link
								to="/shop"
								className="text-zinc-300 hover:text-amber-400 hover:translate-x-1 transition-all"
							>
								Shop
							</Link>

							<Link
								to="/about"
								className="text-zinc-300 hover:text-amber-400 hover:translate-x-1 transition-all"
							>
								About
							</Link>

							<Link
								to="/gallery"
								className="text-zinc-300 hover:text-amber-400 hover:translate-x-1 transition-all"
							>
								Gallery
							</Link>
						</div>
					</div>

					{/* Menu Links */}
					<div>
						<h3 className="text-xl font-semibold mb-5 text-white">
							Menu
						</h3>

						<div className="flex flex-col gap-3">
							<Link
								to="/menu"
								className="text-zinc-300 hover:text-amber-400 hover:translate-x-1 transition-all"
							>
								Hot Coffee
							</Link>

							<Link
								to="/menu"
								className="text-zinc-300 hover:text-amber-400 hover:translate-x-1 transition-all"
							>
								Cold Coffee
							</Link>

							<Link
								to="/menu"
								className="text-zinc-300 hover:text-amber-400 hover:translate-x-1 transition-all"
							>
								Desserts
							</Link>

							<Link
								to="/menu"
								className="text-zinc-300 hover:text-amber-400 hover:translate-x-1 transition-all"
							>
								Special Drinks
							</Link>
						</div>
					</div>

					{/* Contact Links */}
					<div>
						<h3 className="text-xl font-semibold mb-5 text-white">
							Contact
						</h3>

						<div className="flex flex-col gap-3 text-zinc-300">
							<a
								href="tel:+919876543210"
								className="hover:text-amber-400 transition-colors"
							>
								+91 9876543210
							</a>

							<a
								href="mailto:hello@auracoffee.com"
								className="hover:text-amber-400 transition-colors"
							>
								hello@auracoffee.com
							</a>

							<Link
								to="/contact"
								className="hover:text-amber-400 transition-colors"
							>
								Lucknow, India
							</Link>

							<Link
								to="/contact"
								className="hover:text-amber-400 transition-colors"
							>
								Mon - Sun : 8 AM - 10 PM
							</Link>
						</div>
					</div>
				</div>

				{/* Newsletter */}
				<div className="mt-20 border-t border-white/10 pt-12">
					<h3 className="text-3xl font-semibold text-center text-white">
						Subscribe to our Newsletter
					</h3>

					<form
						onSubmit={handleSubscribe}
						className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4 mt-8"
					>
						<input
							type="email"
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Enter your email"
							className="flex-1 h-14 rounded-full bg-[#181715] border border-zinc-700 px-6 text-white outline-none focus:border-amber-500 transition-colors"
						/>

						<button
							type="submit"
							className="h-14 px-8 rounded-full bg-amber-500 text-black font-semibold hover:bg-amber-400 hover:scale-105 transition-all shrink-0"
						>
							Subscribe
						</button>
					</form>

					{subscribed && (
						<p className="text-center mt-4 text-emerald-400 text-sm font-medium animate-pulse">
							✓ Thank you for subscribing! Check your email for special updates.
						</p>
					)}
				</div>

				{/* Bottom */}
				<div className="border-t border-white/10 mt-16 pt-8 text-center text-zinc-500 text-sm">
					© 2026 Aura Coffee. All rights reserved.
				</div>
			</div>
		</footer>
	);
};

export default Footer;
