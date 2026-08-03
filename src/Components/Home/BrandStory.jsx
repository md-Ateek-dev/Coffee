import { Link } from "react-router-dom";
import storyImage from "../../assets/images/about/About.jpg";
import useReveal from "../../Hooks/UseReveal";
const BrandStory = () => {
    useReveal(".brand-story");  
  return (
    <section className="brand-story">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}

          <div>

            <img
              src={storyImage}
              alt="Coffee Farm"
              className="rounded-3xl w-full object-cover"
            />

          </div>

          {/* Content */}

          <div>

            <p className="uppercase tracking-[5px] text-amber-500 mb-5">
              Our Story
            </p>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight">

              Every Bean
              <br />
              Has A Story.

            </h2>

            <p className="text-zinc-400 leading-8 mt-8">

              We believe great coffee begins long before it
              reaches your cup. Our beans are sourced from
              passionate farmers, roasted with precision,
              and brewed to create unforgettable moments.

            </p>

            <Link
              to="/about"
              className="inline-block mt-10 px-8 py-4 rounded-full bg-amber-500 text-black font-semibold hover:bg-amber-400 transition"
            >
              Learn More
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
};

export default BrandStory;