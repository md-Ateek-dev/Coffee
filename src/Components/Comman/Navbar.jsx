/** @format */

import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiMenu, FiSearch, FiShoppingBag } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import MagneticButton from "./MagneticButton";

const links = [
	{ name: "Home", path: "/" },
	{ name: "Menu", path: "/menu" },
	{ name: "Shop", path: "/shop" },
	{ name: "Gallery", path: "/gallery" },
	{ name: "About", path: "/about" },
	{ name: "Blog", path: "/blog" },
	{ name: "Contact", path: "/contact" },
];

const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">
			<div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
				{/* Logo */}
				<Link to="/">
					<h1 className="text-2xl font-bold tracking-[4px] text-white hover:text-amber-400 transition-colors">
						AURA
					</h1>
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden lg:flex items-center gap-8">
					{links.map((link) => (
						<NavLink
							key={link.path}
							to={link.path}
							className={({ isActive }) =>
								isActive
									? "text-amber-400 font-semibold"
									: "text-white hover:text-amber-400 transition"
							}
						>
							{link.name}
						</NavLink>
					))}
				</nav>

				{/* Right Actions (Desktop) */}
				<div className="hidden lg:flex items-center gap-5">
					<Link to="/shop" className="text-white hover:text-amber-400 transition" title="Search">
						<FiSearch size={20} />
					</Link>

					<Link to="/shop" className="text-white hover:text-amber-400 transition" title="Cart">
						<FiShoppingBag size={20} />
					</Link>

					<Link to="/contact">
						<MagneticButton className="bg-amber-500 px-6 py-3 rounded-full text-black font-bold hover:bg-amber-400 transition shadow-lg shadow-amber-500/20 text-sm">
							Book Table
						</MagneticButton>
					</Link>
				</div>

				{/* Mobile Menu Toggle Button */}
				<div className="flex items-center gap-4 lg:hidden">
					<Link to="/shop" className="text-white hover:text-amber-400 transition">
						<FiShoppingBag size={22} />
					</Link>

					<button
						onClick={() => setOpen(!open)}
						className="text-white p-1 focus:outline-none"
						aria-label="Toggle navigation menu"
					>
						{open ? <IoClose size={30} className="text-amber-400" /> : <FiMenu size={28} />}
					</button>
				</div>
			</div>

			{/* Full Mobile Responsive Drawer */}
			{open && (
				<div className="lg:hidden bg-[#0F0E0D]/95 backdrop-blur-2xl border-b border-zinc-800 px-6 py-8 flex flex-col gap-5 shadow-2xl transition-all">
					<nav className="flex flex-col gap-4">
						{links.map((link) => (
							<NavLink
								key={link.path}
								to={link.path}
								onClick={() => setOpen(false)}
								className={({ isActive }) =>
									isActive
										? "text-amber-400 text-lg font-bold bg-amber-500/10 px-4 py-2.5 rounded-xl border border-amber-500/30"
										: "text-zinc-200 text-lg font-medium hover:text-amber-400 px-4 py-2.5 transition-all"
								}
							>
								{link.name}
							</NavLink>
						))}
					</nav>

					<div className="pt-4 border-t border-zinc-800 flex flex-col gap-3">
						<Link
							to="/contact"
							onClick={() => setOpen(false)}
							className="w-full text-center bg-amber-500 text-black py-3.5 rounded-xl font-bold shadow-lg shadow-amber-500/20 text-base"
						>
							Book Table
						</Link>
					</div>
				</div>
			)}
		</header>
	);
};

export default Navbar;
