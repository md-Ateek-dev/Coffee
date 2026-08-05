import ProductCard from "../Comman/ProductCard";
import useReveal from "../../Hooks/UseReveal";
import useStaggerReveal from "../../Hooks/useStaggerReveal";
import { MENU_CARD_GAP } from "./menuLayout";

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
      className={`${sectionClass} py-14 sm:py-16 md:py-20 lg:py-24 ${bgClass} border-t border-zinc-800/40`}
    >
      <div className="page-container">
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <p className="uppercase tracking-[3px] sm:tracking-[4px] text-amber-500 text-xs sm:text-sm font-semibold">
            {eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-2 sm:mt-3 text-white tracking-tight">
            {title}
          </h2>
          <p className="text-zinc-400 mt-3 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {description}
          </p>
        </div>

        {products.length === 0 ? (
          <p className="text-center text-zinc-500 text-sm py-12">
            No items available in this category yet.
          </p>
        ) : (
          <div
            className={`grid grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ${MENU_CARD_GAP}`}
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

