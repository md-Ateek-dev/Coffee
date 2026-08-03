import ProductCard from "../Comman/ProductCard";
import useReveal from "../../Hooks/UseReveal";
import useStaggerReveal from "../../Hooks/useStaggerReveal";
import { MENU_EDGE_PADDING, MENU_CARD_GAP } from "./menuLayout";

const MenuSection = ({
  sectionClass,
  eyebrow,
  title,
  description,
  products,
  variant = "default",
}) => {
  useReveal(`.${sectionClass}`);
  useStaggerReveal(`.${sectionClass}`, ".coffee-card");

  const bgClass = variant === "alt" ? "bg-[#181715]" : "bg-[#0F0E0D]";

  return (
    <section
      id={sectionClass}
      className={`${sectionClass} py-14 sm:py-16 md:py-20 ${bgClass}`}
    >
      <div className={`max-w-7xl mx-auto ${MENU_EDGE_PADDING}`}>
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <p className="uppercase tracking-[3px] sm:tracking-[4px] text-amber-500 text-xs sm:text-sm font-semibold">
            {eyebrow}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 sm:mt-3 text-white">
            {title}
          </h2>
          <p className="text-zinc-400 mt-2 sm:mt-3 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {description}
          </p>
        </div>

        {products.length === 0 ? (
          <p className="text-center text-zinc-500 text-sm py-8">
            No items available in this category yet.
          </p>
        ) : (
          <div
            className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ${MENU_CARD_GAP}`}
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} size="medium" />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
