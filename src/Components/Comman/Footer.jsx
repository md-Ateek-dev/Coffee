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
    <footer className="bg-[#0f0e0d] border-t border-white/10 mt-12 sm:mt-16 md:mt-24 text-zinc-300">
      <div className="page-container py-12 sm:py-14 md:py-16">
        <div className="text-center">
          <Link to="/" className="inline-block">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[4px] sm:tracking-[6px] text-white hover:text-amber-400 transition-colors">
              AURA
            </h2>
          </Link>

          <p className="text-zinc-400 mt-3 sm:mt-4 text-sm sm:text-base">
            Crafted for Slow Mornings.
          </p>

          <div className="flex justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            {[
              {
                href: "https://instagram.com",
                label: "Instagram",
                Icon: FaInstagram,
              },
              {
                href: "https://facebook.com",
                label: "Facebook",
                Icon: FaFacebookF,
              },
              {
                href: "https://twitter.com",
                label: "Twitter",
                Icon: FaXTwitter,
              },
              {
                href: "https://pinterest.com",
                label: "Pinterest",
                Icon: FaPinterestP,
              },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all shadow-md"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mt-12 sm:mt-16 text-left sm:text-left">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-5 text-white">
              Quick Links
            </h3>
            <div className="flex flex-col gap-2.5 sm:gap-3">
              <Link
                to="/"
                className="text-zinc-300 hover:text-amber-400 hover:translate-x-1 transition-all text-sm sm:text-base"
              >
                Home
              </Link>
              <Link
                to="/shop"
                className="text-zinc-300 hover:text-amber-400 hover:translate-x-1 transition-all text-sm sm:text-base"
              >
                Shop
              </Link>
              <Link
                to="/about"
                className="text-zinc-300 hover:text-amber-400 hover:translate-x-1 transition-all text-sm sm:text-base"
              >
                About
              </Link>
              <Link
                to="/gallery"
                className="text-zinc-300 hover:text-amber-400 hover:translate-x-1 transition-all text-sm sm:text-base"
              >
                Gallery
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-5 text-white">
              Menu
            </h3>
            <div className="flex flex-col gap-2.5 sm:gap-3">
              <Link
                to="/menu#hot-coffee"
                className="text-zinc-300 hover:text-amber-400 hover:translate-x-1 transition-all text-sm sm:text-base"
              >
                Hot Coffee
              </Link>
              <Link
                to="/menu#cold-coffee"
                className="text-zinc-300 hover:text-amber-400 hover:translate-x-1 transition-all text-sm sm:text-base"
              >
                Cold Coffee
              </Link>
              <Link
                to="/menu#desserts"
                className="text-zinc-300 hover:text-amber-400 hover:translate-x-1 transition-all text-sm sm:text-base"
              >
                Desserts
              </Link>
              <Link
                to="/menu#special-drinks"
                className="text-zinc-300 hover:text-amber-400 hover:translate-x-1 transition-all text-sm sm:text-base"
              >
                Special Drinks
              </Link>
            </div>
          </div>

          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-5 text-white">
              Contact
            </h3>
            <div className="flex flex-col gap-2.5 sm:gap-3 text-zinc-300 text-sm sm:text-base">
              <a
                href="tel:+919876543210"
                className="hover:text-amber-400 transition-colors"
              >
                +91 9876543210
              </a>
              <a
                href="mailto:hello@auracoffee.com"
                className="hover:text-amber-400 transition-colors break-all"
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

        <div className="mt-12 sm:mt-16 md:mt-20 border-t border-white/10 pt-10 sm:pt-12">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center text-white">
            Subscribe to our Newsletter
          </h3>

          <form
            onSubmit={handleSubscribe}
            className="w-full max-w-2xl mx-auto flex flex-col sm:flex-row gap-4 mt-8"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full h-16 sm:h-16 md:h-[70px] rounded-full bg-[#181715] border border-zinc-700 px-6 text-base text-white outline-none focus:border-amber-500 transition-colors"
            />

            <button
              type="submit"
              className="w-full sm:w-auto h-14 sm:h-14 md:h-16 px-8 rounded-full bg-amber-500 text-black font-semibold hover:bg-amber-400 transition-all duration-300 sm:min-w-[170px]"
            >
              Subscribe
            </button>
          </form>

          {subscribed && (
            <p className="text-center mt-4 text-emerald-400 text-sm font-medium animate-pulse">
              ✓ Thank you for subscribing!
            </p>
          )}
        </div>

        <div className="border-t border-white/10 mt-10 sm:mt-16 pt-6 sm:pt-8 text-center text-zinc-500 text-xs sm:text-sm">
          © 2026 Aura Coffee. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
