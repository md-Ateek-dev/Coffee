import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaClock,
  FaUser,
} from "react-icons/fa";

import useReveal from "../../Hooks/UseReveal";

import featuredImage from "../../assets/images/blog/featured-post.webp";

const FeaturedPost = () => {
  useReveal(".featured-post");

  return (
    <section className="featured-post py-24 bg-[#181715]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}

        <div className="text-center mb-16">

          <span className="uppercase tracking-[5px] text-amber-500">
            Featured Article
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Editor's Pick
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-zinc-400 leading-8">
            Explore our most popular coffee story, packed with brewing tips,
            bean knowledge, and café inspiration.
          </p>

        </div>

        {/* Featured Card */}

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Image */}

          <div className="overflow-hidden rounded-3xl group">

            <img
              src={featuredImage}
              alt="Featured Coffee"
              className="w-full h-[550px] object-cover transition duration-700 group-hover:scale-110"
            />

          </div>

          {/* Content */}

          <div>

            <span className="inline-block px-5 py-2 rounded-full bg-amber-500 text-black font-semibold mb-6">
              Featured
            </span>

            <h3 className="text-4xl font-bold leading-tight">
              The Complete Guide To Brewing
              Perfect Coffee At Home
            </h3>

            {/* Meta */}

            <div className="flex flex-wrap gap-6 mt-8 text-zinc-400">

              <div className="flex items-center gap-2">
                <FaUser />
                Aura Coffee
              </div>

              <div className="flex items-center gap-2">
                <FaCalendarAlt />
                July 2026
              </div>

              <div className="flex items-center gap-2">
                <FaClock />
                8 min read
              </div>

            </div>

            <p className="mt-8 text-zinc-400 leading-8">
              Brewing coffee isn't just about pouring hot water over beans.
              From selecting freshly roasted beans to choosing the perfect
              grind size and mastering extraction, every step influences the
              final cup. This guide walks you through everything you need to
              create café-quality coffee at home.
            </p>

            <Link
              to="/blog/1"
              className="inline-flex items-center gap-3 mt-10 px-8 py-4 rounded-full bg-amber-500 text-black font-semibold hover:gap-5 transition-all"
            >
              Read Full Article

              <FaArrowRight />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FeaturedPost;