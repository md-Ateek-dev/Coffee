import useReveal from "@/Hooks/UseReveal";
import { FaArrowRight } from "react-icons/fa";

const CTA = () => {
  useReveal(".cta");
  return (
    <section className="cta py-32">

      <div className="max-w-6xl mx-auto px-6">

        <div className="relative overflow-hidden rounded-[40px] bg-[#181715] border border-white/10">

          {/* Background Glow */}

          <div className="absolute -top-24 -right-24 w-80 h-80 bg-amber-500/10 blur-[120px]" />

          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-orange-500/10 blur-[120px]" />

          <div className="relative text-center py-20 px-8">

            <span className="uppercase tracking-[6px] text-amber-500">

              Join The Coffee Club

            </span>

            <h2 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">

              Brew Better.
              <br />
              Live Better.

            </h2>

            <p className="text-zinc-400 mt-8 max-w-xl mx-auto leading-8">

              Get exclusive offers, brewing tips,
              limited edition coffee releases
              and members-only discounts.

            </p>

            <div className="max-w-xl mx-auto mt-12 flex flex-col md:flex-row gap-4">

              <input
                type="email"
                placeholder="Enter your email..."
                className="flex-1 h-14 rounded-full bg-[#22201E] border border-white/10 px-6 outline-none"
              />

              <button className="h-14 px-8 rounded-full bg-amber-500 text-black font-semibold flex items-center justify-center gap-2 hover:bg-amber-400 transition">

                Join Now

                <FaArrowRight />

              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CTA;