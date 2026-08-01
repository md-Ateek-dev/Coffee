import {
  FaInstagram,
  FaHeart,
  FaComment,
} from "react-icons/fa";

import useReveal from "../../Hooks/UseReveal";
import useStaggerReveal from "../../Hooks/useStaggerReveal";

import insta1 from "../../assets/images/gallery/insta-1.webp";
import insta2 from "../../assets/images/gallery/insta-2.webp";
import insta3 from "../../assets/images/gallery/insta-3.webp";
import insta4 from "../../assets/images/gallery/insta-4.webp";
import insta5 from "../../assets/images/gallery/insta-5.webp";
import insta6 from "../../assets/images/gallery/insta-6.webp";

const posts = [
  {
    id: 1,
    image: insta1,
    likes: "2.4k",
    comments: 126,
  },
  {
    id: 2,
    image: insta2,
    likes: "3.1k",
    comments: 201,
  },
  {
    id: 3,
    image: insta3,
    likes: "1.8k",
    comments: 95,
  },
  {
    id: 4,
    image: insta4,
    likes: "2.9k",
    comments: 164,
  },
  {
    id: 5,
    image: insta5,
    likes: "4.2k",
    comments: 243,
  },
  {
    id: 6,
    image: insta6,
    likes: "2.2k",
    comments: 118,
  },
];

const InstagramFeed = () => {
  useReveal(".instagram-feed");
  useStaggerReveal(".instagram-feed", ".instagram-card");

  return (
    <section className="instagram-feed py-24 bg-[#181715]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-20">

          <span className="uppercase tracking-[5px] text-amber-500">
            Follow Us
          </span>

          <h2 className="text-5xl font-bold mt-4">
            @AuraCoffee
          </h2>

          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto leading-8">
            Join thousands of coffee lovers and discover our latest brews,
            café moments and behind-the-scenes stories.
          </p>

        </div>

        {/* Grid */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {posts.map((post) => (

            <div
              key={post.id}
              className="
                instagram-card
                relative
                overflow-hidden
                rounded-3xl
                group
                cursor-pointer
              "
            >

              <img
                src={post.image}
                alt="Instagram"
                className="
                  w-full
                  h-96
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
              />

              {/* Overlay */}

              <div
                className="
                  absolute
                  inset-0
                  bg-black/70
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                  flex
                  flex-col
                  items-center
                  justify-center
                "
              >

                <FaInstagram className="text-5xl text-amber-500 mb-6" />

                <div className="flex gap-8 text-white">

                  <div className="flex items-center gap-2">

                    <FaHeart />

                    {post.likes}

                  </div>

                  <div className="flex items-center gap-2">

                    <FaComment />

                    {post.comments}

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* CTA */}

        <div className="text-center mt-16">

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              items-center
              gap-3
              px-8
              py-4
              rounded-full
              bg-amber-500
              text-black
              font-semibold
              hover:scale-105
              transition
            "
          >

            <FaInstagram />

            Follow @AuraCoffee

          </a>

        </div>

      </div>

    </section>
  );
};

export default InstagramFeed;