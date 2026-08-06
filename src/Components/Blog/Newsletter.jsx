import { useState } from "react";
import { FaEnvelope, FaPaperPlane, FaCheckCircle } from "react-icons/fa";

import useReveal from "../../Hooks/UseReveal";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  useReveal(".newsletter");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    console.log(email);
    setEmail("");
  };

  return (
    <section className="newsletter py-12 sm:py-16 md:py-20 lg:py-24 bg-[#0F0E0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className="
            relative
            overflow-hidden
            rounded-2xl
            sm:rounded-[30px]
            lg:rounded-[40px]
            border
            border-amber-500/20
            bg-gradient-to-br
            from-[#20170E]
            via-[#18120D]
            to-[#0F0E0D]
            px-5
            py-12
            sm:px-8
            sm:py-16
            md:px-12
            md:py-20
            lg:px-20
          "
        >
          {/* Background Blur */}
          <div className="absolute -top-16 -left-10 h-48 w-48 sm:h-60 sm:w-60 md:h-72 md:w-72 rounded-full bg-amber-500/10 blur-3xl" />
          <div className="absolute -bottom-16 -right-10 h-48 w-48 sm:h-60 sm:w-60 md:h-72 md:w-72 rounded-full bg-orange-500/10 blur-3xl" />

          <div className="relative z-10">
            {/* Heading */}
            <div className="max-w-3xl mx-auto text-center">
              <span className="uppercase tracking-[3px] sm:tracking-[4px] lg:tracking-[5px] text-sm sm:text-base text-amber-500">
                Newsletter
              </span>

              <h2 className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Join <span className="text-amber-500">10,000+</span> Coffee
                Lovers
              </h2>

              <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed sm:leading-8 px-2 sm:px-0">
                Get brewing guides, exclusive coffee recipes, café news, product
                launches and special offers delivered directly to your inbox.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="
                mx-auto
                mt-8
                sm:mt-10
                md:mt-14
                flex
                max-w-3xl
                flex-col
                gap-3
                sm:gap-4
                md:flex-row
                md:gap-2
                md:rounded-full
                md:bg-[#181715]
                md:p-2
              "
            >
              {/* Email Input Container */}
              <div
                className="
                  flex
                  flex-1
                  items-center
                  gap-3
                  sm:gap-4
                  px-5
                  py-4
                  rounded-2xl
                  sm:rounded-3xl
                  bg-[#181715]
                  md:rounded-full
                  md:bg-transparent
                  md:px-5
                  md:py-0
                "
              >
                <FaEnvelope className="text-lg sm:text-xl text-amber-500 flex-shrink-0" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="
                    w-full
                    bg-transparent
                    outline-none
                    text-sm
                    sm:text-base
                    placeholder:text-zinc-500
                  "
                />
              </div>

              {/* Subscribe Button */}
              <button
                type="submit"
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  sm:gap-3
                  rounded-2xl
                  sm:rounded-3xl
                  bg-amber-500
                  px-6
                  py-4
                  text-sm
                  sm:text-base
                  font-semibold
                  text-black
                  transition
                  duration-300
                  hover:scale-105
                  active:scale-95
                  md:rounded-full
                  md:px-8
                "
              >
                Subscribe
                <FaPaperPlane className="text-sm sm:text-base" />
              </button>
            </form>

            {/* Features */}
            <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-sm text-zinc-400">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <FaCheckCircle className="text-amber-500 flex-shrink-0" />
                <span>Weekly Coffee Tips</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <FaCheckCircle className="text-amber-500 flex-shrink-0" />
                <span>Exclusive Discounts</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <FaCheckCircle className="text-amber-500 flex-shrink-0" />
                <span>No Spam, Ever</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
