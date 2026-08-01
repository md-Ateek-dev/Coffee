import { Link } from "react-router-dom";
import MagneticButton from "../Comman/MagneticButton";
import useReveal from "../../Hooks/UseReveal";

const CTA = () => {
  useReveal(".about-cta");

  return (
    <section className="about-cta py-24 bg-gradient-to-br from-[#1c1a17] to-[#0f0e0d] relative overflow-hidden border-t border-zinc-800">
      <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <span className="uppercase tracking-[5px] text-amber-500 text-sm font-semibold">
          Visit Our House
        </span>
        <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
          Ready for an Unforgettable Coffee Experience?
        </h2>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10 leading-8">
          Step into our cafe or order online to savor freshly roasted single-origin beans delivered straight to your doorstep.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link to="/contact">
            <MagneticButton className="bg-amber-500 hover:bg-amber-400 text-black px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-amber-500/20">
              Book a Table
            </MagneticButton>
          </Link>
          <Link to="/shop">
            <MagneticButton className="border border-amber-500/30 hover:border-amber-500 text-white px-8 py-4 rounded-full font-semibold transition-all">
              Explore Our Beans
            </MagneticButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
