import { Link } from "react-router-dom";
import useReveal from "../../Hooks/UseReveal";

import bannerBg from "../../assets/images/menu/offer-banner.webp";

const OfferBanner = () => {
  useReveal(".offer-banner");

  return (
    <section className="offer-banner py-28 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="relative overflow-hidden rounded-[40px]">

          {/* Background */}

          <img
            src={bannerBg}
            alt="Coffee Offer"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-black/70" />

          {/* Glow */}

          <div className="absolute -top-24 -right-20 w-72 h-72 rounded-full bg-amber-500/20 blur-[120px]" />

          <div className="relative z-10 px-8 py-20 md:px-20 text-center">

            {/* Badge */}

            <span className="inline-block px-5 py-2 rounded-full bg-amber-500 text-black font-semibold mb-6">
              🔥 Weekend Special
            </span>

            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Get <span className="text-amber-500">30% OFF</span>
              <br />
              On Signature Coffee
            </h2>

            <p className="text-zinc-300 mt-8 max-w-2xl mx-auto leading-8">
              Enjoy handcrafted beverages prepared with premium beans.
              Available only this weekend. Don't miss your perfect cup.
            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-10">

              <Link
                to="/shop"
                className="px-8 py-4 rounded-full bg-amber-500 text-black font-semibold hover:scale-105 transition duration-300"
              >
                Order Now
              </Link>

              <Link
                to="/contact"
                className="px-8 py-4 rounded-full border border-white text-white hover:bg-white hover:text-black transition duration-300"
              >
                Contact Us
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default OfferBanner;