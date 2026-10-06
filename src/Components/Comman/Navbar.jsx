/** @format */

import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiMenu, FiSearch, FiShoppingBag, FiHeart } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
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
    <header className="fixed top-0 left-0 w-full z-50 bg-[#431602]/85 backdrop-blur-xl border-b border-white/[0.08] transition-all">
      <div className="page-container h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="shrink-0 flex items-center gap-2">
          <span className="text-xl sm:text-2xl font-black tracking-[4px] text-white hover:text-amber-400 transition-colors">
            AURA
          </span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-amber-400" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative py-1.5 text-sm xl:text-base font-medium transition-colors ${
                  isActive
                    ? "text-amber-400 font-semibold"
                    : "text-zinc-300 hover:text-amber-300"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-pill"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-500 to-amber-300 rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Right Actions */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-5">
          <Link
            to="/shop"
            className="text-zinc-300 hover:text-amber-400 transition p-2 rounded-full hover:bg-white/5"
            title="Search"
          >
            <FiSearch size={19} />
          </Link>

          <Link
            to="/wishlist"
            className="relative text-zinc-300 hover:text-amber-400 transition p-2 rounded-full hover:bg-white/5"
            title="Wishlist"
          >
            <FiHeart size={19} />
            {wishlist.length > 0 && (
              <motion.span
                key={wishlist.length}
                initial={{ scale: 0.6 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 25 }}
                className="absolute top-0.5 right-0.5 w-4 h-4 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center shadow-sm"
              >
                {wishlist.length}
              </motion.span>
            )}
          </Link>

          <button
            onClick={() => setCartOpen(true)}
            className="relative text-zinc-300 hover:text-amber-400 transition p-2 rounded-full hover:bg-white/5"
            title="Cart"
          >
            <FiShoppingBag size={19} />
            {cartCount > 0 && (
              <motion.span
                key={cartCount}
                initial={{ scale: 0.6 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 25 }}
                className="absolute top-0.5 right-0.5 w-4 h-4 bg-amber-500 text-black text-[9px] font-bold rounded-full flex items-center justify-center shadow-sm"
              >
                {cartCount}
              </motion.span>
            )}
          </button>

          <Link to="/contact">
            <MagneticButton className="bg-gradient-to-r from-amber-500 to-amber-400 px-5 xl:px-6 py-2.5 xl:py-3 rounded-full text-black font-bold hover:shadow-lg hover:shadow-amber-500/25 transition-all text-xs xl:text-sm">
              Book Table
            </MagneticButton>
          </Link>
        </div>

        {/* Mobile Navigation Icons */}
        <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
          <Link
            to="/wishlist"
            className="relative text-zinc-300 hover:text-amber-400 transition p-2 rounded-lg hover:bg-white/5"
            title="Wishlist"
          >
            <FiHeart size={20} />
            {wishlist.length > 0 && (
              <motion.span
                key={wishlist.length}
                initial={{ scale: 0.6 }}
                animate={{ scale: 1 }}
                className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center shadow-sm"
              >
                {wishlist.length}
              </motion.span>
            )}
          </Link>

          <button
            onClick={() => setCartOpen(true)}
            className="relative text-zinc-300 hover:text-amber-400 transition p-2 rounded-lg hover:bg-white/5"
            title="Cart"
          >
            <FiShoppingBag size={20} />
            {cartCount > 0 && (
              <motion.span
                key={cartCount}
                initial={{ scale: 0.6 }}
                animate={{ scale: 1 }}
                className="absolute top-1 right-1 w-4 h-4 bg-amber-500 text-black text-[9px] font-bold rounded-full flex items-center justify-center shadow-sm"
              >
                {cartCount}
              </motion.span>
            )}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="text-zinc-200 p-2 focus:outline-none rounded-lg hover:bg-white/5"
            aria-label="Toggle navigation menu"
          >
            {open ? (
              <IoClose size={26} className="text-amber-400" />
            ) : (
              <FiMenu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Animated Mobile Drawer Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden bg-[#0a0908]/98 backdrop-blur-2xl border-b border-amber-500/20 shadow-2xl"
          >
            <div className="px-4 sm:px-6 py-6 flex flex-col gap-3 max-h-[calc(100vh-5rem)] overflow-y-auto">
              <nav className="flex flex-col gap-1.5">
                {links.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.25 }}
                  >
                    <NavLink
                      to={link.path}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        isActive
                          ? "block text-amber-400 text-base font-bold bg-amber-500/10 px-4 py-3 rounded-xl border border-amber-500/30 shadow-inner"
                          : "block text-zinc-300 text-base font-medium hover:text-amber-400 hover:bg-white/[0.03] px-4 py-3 rounded-xl transition-all"
                      }
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: links.length * 0.04, duration: 0.25 }}
                >
                  <NavLink
                    to="/wishlist"
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "block text-amber-400 text-base font-bold bg-amber-500/10 px-4 py-3 rounded-xl border border-amber-500/30"
                        : "block text-zinc-300 text-base font-medium hover:text-amber-400 hover:bg-white/[0.03] px-4 py-3 rounded-xl transition-all"
                    }
                  >
                    Wishlist ({wishlist.length})
                  </NavLink>
                </motion.div>
              </nav>

              <div className="pt-4 border-t border-white/10">
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-400 text-black py-3.5 rounded-xl font-bold shadow-lg shadow-amber-500/20 text-sm"
                >
                  Book Table
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
