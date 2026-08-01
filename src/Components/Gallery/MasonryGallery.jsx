import useReveal from "../../Hooks/UseReveal";
import useStaggerReveal from "../../Hooks/useStaggerReveal";

import image1 from "../../assets/images/gallery/masonry-1.webp";
import image2 from "../../assets/images/gallery/masonry-2.webp";
import image3 from "../../assets/images/gallery/masonry-3.webp";
import image4 from "../../assets/images/gallery/masonry-4.webp";
import image5 from "../../assets/images/gallery/masonry-5.webp";
import image6 from "../../assets/images/gallery/masonry-6.webp";
import image7 from "../../assets/images/gallery/masonry-7.webp";
import image8 from "../../assets/images/gallery/masonry-8.webp";

const gallery = [
  { id: 1, image: image1, height: "h-72" },
  { id: 2, image: image2, height: "h-96" },
  { id: 3, image: image3, height: "h-80" },
  { id: 4, image: image4, height: "h-[28rem]" },
  { id: 5, image: image5, height: "h-72" },
  { id: 6, image: image6, height: "h-96" },
  { id: 7, image: image7, height: "h-80" },
  { id: 8, image: image8, height: "h-[28rem]" },
];

const MasonryGallery = () => {
  useReveal(".masonry-gallery");
  useStaggerReveal(".masonry-gallery", ".gallery-item");

  return (
    <section className="masonry-gallery py-24 bg-[#181715]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-20">

          <span className="uppercase tracking-[5px] text-amber-500">
            Gallery Collection
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Crafted With Passion
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-zinc-400 leading-8">
            Explore our premium coffee moments, handcrafted drinks,
            cozy cafés and unforgettable experiences.
          </p>

        </div>

        {/* Masonry Grid */}

        <div className="columns-1 sm:columns-2 lg:columns-4 gap-6">

          {gallery.map((item) => (

            <div
              key={item.id}
              className="
                gallery-item
                mb-6
                overflow-hidden
                rounded-3xl
                cursor-pointer
                group
                break-inside-avoid
              "
            >

              <img
                src={item.image}
                alt="Coffee"
                className={`
                  w-full
                  ${item.height}
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-110
                  group-hover:brightness-75
                `}
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default MasonryGallery;