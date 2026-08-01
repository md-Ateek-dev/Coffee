import { Link } from "react-router-dom";
import { FaArrowRight, FaEnvelope } from "react-icons/fa";

import useReveal from "../../Hooks/UseReveal";

import heroVideo from "../../assets/videos/Gallery_Video1.mp4";
// import posterBg from "../../assets/images/contact/contact-hero.webp";

const ContactHero = () => {
  useReveal(".contact-hero");

  return (
    <section className="contact-hero relative min-h-screen flex items-center overflow-hidden bg-[#0F0E0D] pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* Background Video */}
      <video
        src={heroVideo}
        // poster={posterBg}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/80" />

      {/* Decorative Blur */}
      <div className="absolute left-20 top-32 h-72 w-72 rounded-full bg-amber-500/15 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 w-full">
        <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500 text-black font-bold text-sm mb-6 shadow-lg shadow-amber-500/20">
          <FaEnvelope />
          Get In Touch
        </span>

        <h1 className="mt-4 max-w-4xl text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-white tracking-tight">
          We'd Love To Hear
          <br />
          <span className="text-amber-400">From You</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 font-light">
          Whether you have a question about our specialty blends, café locations, private events, or wholesale partnerships, our coffee concierge is ready to assist.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-5">
          <a
            href="#contact-form"
            className="rounded-full bg-amber-500 px-8 py-4 font-bold text-black transition duration-300 hover:bg-amber-400 hover:scale-105 shadow-lg shadow-amber-500/20"
          >
            Send Message
          </a>

          <Link
            to="/shop"
            className="inline-flex items-center gap-3 rounded-full border border-zinc-700 bg-black/40 backdrop-blur-md px-8 py-4 text-white font-semibold transition duration-300 hover:border-amber-500 hover:text-amber-400"
          >
            Explore Beans
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;