import { useState } from "react";
import {
  FaEnvelope,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";

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
    <section className="newsletter py-24 bg-[#0F0E0D]">

      <div className="max-w-7xl mx-auto px-6">

        <div
          className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-amber-500/20
            bg-gradient-to-br
            from-[#20170E]
            via-[#18120D]
            to-[#0F0E0D]
            px-8
            py-20
            lg:px-20
          "
        >
          {/* Background Blur */}

          <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />

          <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

          <div className="relative z-10">

            {/* Heading */}

            <div className="max-w-3xl mx-auto text-center">

              <span className="uppercase tracking-[5px] text-amber-500">
                Newsletter
              </span>

              <h2 className="mt-5 text-5xl font-bold leading-tight">
                Join <span className="text-amber-500">10,000+</span> Coffee Lovers
              </h2>

              <p className="mt-6 text-zinc-400 leading-8">
                Get brewing guides, exclusive coffee recipes, café news,
                product launches and special offers delivered directly to your inbox.
              </p>

            </div>

            {/* Form */}

            <form
              onSubmit={handleSubmit}
              className="
                mx-auto
                mt-14
                flex
                max-w-3xl
                flex-col
                gap-5
                rounded-full
                bg-[#181715]
                p-3
                md:flex-row
              "
            >
              <div className="flex flex-1 items-center gap-4 px-5">

                <FaEnvelope className="text-xl text-amber-500" />

                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="
                    w-full
                    bg-transparent
                    outline-none
                    placeholder:text-zinc-500
                  "
                />

              </div>

              <button
                type="submit"
                className="
                  flex
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-amber-500
                  px-8
                  py-4
                  font-semibold
                  text-black
                  transition
                  duration-300
                  hover:scale-105
                "
              >
                Subscribe

                <FaPaperPlane />
              </button>

            </form>

            {/* Features */}

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-zinc-400">

              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-amber-500" />
                Weekly Coffee Tips
              </div>

              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-amber-500" />
                Exclusive Discounts
              </div>

              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-amber-500" />
                No Spam, Ever
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Newsletter;