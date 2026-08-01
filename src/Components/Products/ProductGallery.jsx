import { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../Data/Products";

const ProductGallery = () => {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const images = product?.images || (product?.image ? [product.image, product.image, product.image, product.image] : []);
  const [selectedImg, setSelectedImg] = useState(null);

  if (!product) return null;

  const currentImage = selectedImg || images[0];

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
                  onClick={() => setSelectedImg(img)}
                  className={`
                    w-24
                    h-24
                    rounded-xl
                    overflow-hidden
                    border-2
                    transition
                    ${
                      currentImage === img
                        ? "border-amber-500"
                        : "border-transparent"
                    }
                  `}
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