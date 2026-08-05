/** @format */

import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiMenu, FiSearch, FiShoppingBag, FiHeart } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import MagneticButton from "./MagneticButton";
import { useShop } from "../../Context/ShopContext";

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
	const { cartCount, wishlist, setCartOpen } = useShop();

	return (
		<header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">
			<div className="page-container h-16 sm:h-20 flex items-center justify-between">
				<Link to="/" className="shrink-0">
					<h1 className="text-xl sm:text-2xl font-bold tracking-[3px] sm:tracking-[4px] text-white hover:text-amber-400 transition-colors">
						AURA
					</h1>
				</Link>

				<nav className="hidden lg:flex items-center gap-6 xl:gap-8">
					{links.map((link) => (
						<NavLink
							key={link.path}
							to={link.path}
							className={({ isActive }) =>
								isActive
									? "text-amber-400 font-semibold text-sm xl:text-base"
									: "text-white hover:text-amber-400 transition text-sm xl:text-base"
							}
						>
							{link.name}
						</NavLink>
					))}
				</nav>

				<div className="hidden lg:flex items-center gap-4 xl:gap-5">
					<Link to="/shop" className="text-white hover:text-amber-400 transition" title="Search">
						<FiSearch size={20} />
					</Link>

					<Link
						to="/wishlist"
						className="relative text-white hover:text-amber-400 transition"
						title="Wishlist"
					>
						<FiHeart size={20} />
						{wishlist.length > 0 && (
							<span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
								{wishlist.length}
							</span>
						)}
					</Link>

					<button
						onClick={() => setCartOpen(true)}
						className="relative text-white hover:text-amber-400 transition"
						title="Cart"
					>
						<FiShoppingBag size={20} />
						{cartCount > 0 && (
							<span className="absolute -top-2 -right-2 w-5 h-5 bg-amber-500 text-black text-[10px] font-bold rounded-full flex items-center justify-center">
								{cartCount}
							</span>
						)}
					</button>

					<Link to="/contact">
						<MagneticButton className="bg-amber-500 px-5 xl:px-6 py-2.5 xl:py-3 rounded-full text-black font-bold hover:bg-amber-400 transition shadow-lg shadow-amber-500/20 text-sm">
							Book Table
						</MagneticButton>
					</Link>
				</div>

				<div className="flex items-center gap-3 sm:gap-4 lg:hidden">
					<Link
						to="/wishlist"
						className="relative text-white hover:text-amber-400 transition p-1"
						title="Wishlist"
					>
						<FiHeart size={20} />
						{wishlist.length > 0 && (
							<span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">
								{wishlist.length}
							</span>
						)}
					</Link>

					<button
						onClick={() => setCartOpen(true)}
						className="relative text-white hover:text-amber-400 transition p-1"
						title="Cart"
					>
						<FiShoppingBag size={22} />
						{cartCount > 0 && (
							<span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 text-black text-[9px] font-bold rounded-full flex items-center justify-center">
								{cartCount}
							</span>
						)}
					</button>

					<button
						onClick={() => setOpen(!open)}
						className="text-white p-1 focus:outline-none"
						aria-label="Toggle navigation menu"
					>
						{open ? <IoClose size={28} className="text-amber-400" /> : <FiMenu size={26} />}
					</button>
				</div>
			</div>

			{open && (
				<div className="lg:hidden bg-[#0F0E0D]/98 backdrop-blur-2xl border-b border-zinc-800 px-4 sm:px-6 py-6 sm:py-8 flex flex-col gap-4 shadow-2xl max-h-[calc(100vh-4rem)] overflow-y-auto">
					<nav className="flex flex-col gap-2">
						{links.map((link) => (
							<NavLink
								key={link.path}
								to={link.path}
								onClick={() => setOpen(false)}
								className={({ isActive }) =>
									isActive
										? "text-amber-400 text-base sm:text-lg font-bold bg-amber-500/10 px-4 py-3 rounded-xl border border-amber-500/30"
										: "text-zinc-200 text-base sm:text-lg font-medium hover:text-amber-400 px-4 py-3 transition-all"
								}
							>
								{link.name}
							</NavLink>
						))}
						<NavLink
							to="/wishlist"
							onClick={() => setOpen(false)}
							className={({ isActive }) =>
								isActive
									? "text-amber-400 text-base sm:text-lg font-bold bg-amber-500/10 px-4 py-3 rounded-xl border border-amber-500/30"
									: "text-zinc-200 text-base sm:text-lg font-medium hover:text-amber-400 px-4 py-3 transition-all"
							}
						>
							Liked Products
						</NavLink>
					</nav>

					<div className="pt-3 border-t border-zinc-800">
						<Link
							to="/contact"
							onClick={() => setOpen(false)}
							className="block w-full text-center bg-amber-500 text-black py-3.5 rounded-xl font-bold shadow-lg shadow-amber-500/20 text-base"
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
