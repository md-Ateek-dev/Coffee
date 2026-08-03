import { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../Data/Products";

const ProductGallery = () => {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const images = product?.images || (product?.image ? [product.image] : []);
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!product) return null;

  const currentImage = images[selectedIndex];

  return (
    <section className="py-24 bg-[#181715]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Thumbnails */}
          <div className="flex gap-4">
            <div className="flex flex-col gap-4">
              {images.map((img, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  aria-pressed={selectedIndex === index}
                  className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition ${
                    selectedIndex === index
                      ? "border-amber-500 ring-2 ring-amber-500/30"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 rounded-3xl overflow-hidden bg-[#22201E]">
              <img
                src={currentImage}
                alt={product.title || product.name}
                className="
                  w-full
                  h-[600px]
                  object-cover
                  transition-transform
                  duration-500
                  hover:scale-110
                "
              />
            </div>
          </div>

          {/* Right Empty */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;