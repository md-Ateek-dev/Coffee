import { Link } from "react-router-dom";
import { FaArrowRight, FaEnvelope } from "react-icons/fa";
import useReveal from "../../Hooks/UseReveal";
import LazyVideo from "../Comman/LazyVideo";
import heroVideo from "../../assets/videos/Gallery_Video1.mp4";

const ContactHero = () => {
  useReveal(".contact-hero");

  return (
    <section className="contact-hero relative min-h-[85vh] sm:min-h-screen flex items-center overflow-hidden bg-[#0F0E0D] pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
      <LazyVideo
        src={heroVideo}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/55 to-black/60" />
      <div className="absolute left-8 sm:left-20 top-24 sm:top-32 h-48 sm:h-72 w-48 sm:w-72 rounded-full bg-amber-500/15 blur-3xl pointer-events-none" />

      <div className="relative z-10 page-container">
        <span className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-amber-500 text-black font-bold text-xs sm:text-sm mb-4 sm:mb-6 shadow-lg shadow-amber-500/20">
          <FaEnvelope />
          Get In Touch
        </span>

        <h1 className="mt-3 sm:mt-4 max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-white tracking-tight">
          We&apos;d Love To Hear
          <br />
          <span className="text-amber-400">From You</span>
        </h1>

        <p className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed sm:leading-8 text-white font-light">
          Whether you have a question about our specialty blends, café
          locations, private events, or wholesale partnerships, our coffee
          concierge is ready to assist.
        </p>

        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-5">
          <a
            href="#contact-form"
            className="text-center rounded-full bg-amber-500 px-6 sm:px-8 py-3 sm:py-4 font-bold text-black transition duration-300 hover:bg-amber-400 hover:scale-105 shadow-lg shadow-amber-500/20 text-sm sm:text-base"
          >
            Send Message
          </a>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center gap-2 sm:gap-3 rounded-full border border-zinc-700 bg-black/40 backdrop-blur-md px-6 sm:px-8 py-3 sm:py-4 text-white font-semibold transition duration-300 hover:border-amber-500 hover:text-amber-400 text-sm sm:text-base"
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
