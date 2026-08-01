import { useLayoutEffect } from "react";
import { horizontalScroll } from "../../../Animation/HorizontalScroll";
import products from "../../../Data/Products";
import ShowcaseCard from "./ShowcaseCard";

const HorizontalShowcase = () => {
  useLayoutEffect(() => {
    horizontalScroll(".horizontal-section", ".horizontal-track");
  }, []);

  return (
    <section className="horizontal-section h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center bg-[#0F0E0D]">
        <div className="horizontal-track flex gap-10 px-20">
          {products.map((product) => (
            <ShowcaseCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorizontalShowcase;