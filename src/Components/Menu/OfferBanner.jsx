import { Link } from "react-router-dom";
import useReveal from "../../Hooks/UseReveal";
import bannerBg from "../../assets/images/menu/offer_banner.jpg";

const OfferBanner = () => {
  useReveal(".offer-banner");

  return (
    <section className="offer-banner py-14 sm:py-16 md:py-20 lg:py-24 bg-[#0F0E0D] border-t border-zinc-800/40">
      <div className="page-container">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[40px] border border-amber-500/20 shadow-2xl">
          <img
            src={bannerBg}
            alt="Coffee Offer"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/75" />
          <div className="absolute -top-16 sm:-top-24 -right-10 sm:-right-20 w-48 sm:w-72 h-48 sm:h-72 rounded-full bg-amber-500/20 blur-[120px]" />

          <div className="relative z-10 px-5 sm:px-8 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20 text-center">
            <span className="inline-block px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-amber-500 text-black font-semibold mb-4 sm:mb-6 text-xs sm:text-sm shadow-md">
              🔥 Weekend Special
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight tracking-tight">
              Get <span className="text-amber-500">30% OFF</span>
              <br />
              On Signature Coffee
            </h2>

            <p className="text-zinc-300 mt-4 sm:mt-6 max-w-2xl mx-auto leading-relaxed sm:leading-8 text-sm sm:text-base md:text-lg font-light px-2">
              Enjoy handcrafted beverages prepared with premium beans. Available
              only this weekend. Don&apos;t miss your perfect cup.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-5 mt-8 sm:mt-10">
              <Link
                to="/shop"
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-amber-500 text-black font-bold hover:bg-amber-400 hover:scale-105 transition duration-300 text-sm sm:text-base shadow-lg shadow-amber-500/20"
              >
                Order Now
              </Link>
              <Link
                to="/contact"
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-zinc-700 text-white font-semibold hover:border-amber-500 hover:text-amber-400 hover:bg-black/50 transition duration-300 text-sm sm:text-base backdrop-blur-sm"
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

