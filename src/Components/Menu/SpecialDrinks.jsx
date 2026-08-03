import { useEffect } from "react";
import { Link } from "react-router-dom";
import products from "../../Data/Products";
import { FaChevronLeft, FaChevronRight, FaStar, FaCoffee } from "react-icons/fa";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useHorizontalScroll } from "../../Hooks/useHorizontalScroll";
import { MENU_CARD_GAP } from "./menuLayout";

const SpecialDrinks = () => {
  const specialDrinks = products.filter(
    (item) => item.category === "Special Drinks"
  );

  const {
    sectionRef,
    trackRef,
    currentIndex,
    scrollNext,
    scrollPrev,
  } = useHorizontalScroll({ extraHeight: 1.1, itemCount: specialDrinks.length });

  // Center each card in viewport — equal space left & right
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const applyCenterPadding = () => {
      const firstCard = track.children[0];
      if (!firstCard) return;

      const cardWidth = firstCard.getBoundingClientRect().width;
      const sideSpace = Math.max(16, (window.innerWidth - cardWidth) / 2);

      track.style.paddingLeft = `${sideSpace}px`;
      track.style.paddingRight = `${sideSpace}px`;
      ScrollTrigger.refresh();
    };

    applyCenterPadding();

    const resizeObserver = new ResizeObserver(applyCenterPadding);
    resizeObserver.observe(track);
    if (track.children[0]) resizeObserver.observe(track.children[0]);

    window.addEventListener("resize", applyCenterPadding);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", applyCenterPadding);
    };
  }, [trackRef, specialDrinks.length]);

  return (
    <section
      ref={sectionRef}
      id="special-drinks"
      className="special-drinks-horizontal relative bg-[#0B0A09] overflow-hidden border-t border-b border-zinc-800/80"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-between py-5 sm:py-6">
        {/* Heading */}
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 z-10 pt-1 sm:pt-2">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mb-1.5">
              <FaCoffee /> Chef&apos;s Signature Collection
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Handcrafted Special Drinks
            </h2>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <div className="text-xs font-mono text-zinc-400 bg-zinc-900/90 px-3 py-1.5 rounded-full border border-zinc-800">
              <span className="text-amber-400 font-bold">
                {String(currentIndex + 1).padStart(2, "0")}
              </span>{" "}
              / {String(specialDrinks.length).padStart(2, "0")}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={scrollPrev}
                disabled={currentIndex === 0}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#181715] border border-zinc-700/80 text-white flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-md"
                aria-label="Previous Drink"
              >
                <FaChevronLeft size={14} />
              </button>
              <button
                onClick={scrollNext}
                disabled={currentIndex >= specialDrinks.length - 1}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#181715] border border-zinc-700/80 text-white flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-md"
                aria-label="Next Drink"
              >
                <FaChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Cards — centered in viewport with equal left/right space */}
        <div className="w-full overflow-hidden my-auto py-2 flex items-center justify-center">
          <div
            ref={trackRef}
            className={`flex items-stretch w-max transition-transform duration-100 ease-out ${MENU_CARD_GAP}`}
          >
            {specialDrinks.map((item) => (
              <div
                key={item.id}
                className="special-drink-card w-[240px] sm:w-[270px] md:w-[300px] lg:w-[320px] bg-[#161513] rounded-xl sm:rounded-2xl overflow-hidden border border-zinc-800/90 hover:border-amber-500/80 transition-all duration-300 shadow-xl group shrink-0 flex flex-col"
              >
                <div className="relative overflow-hidden aspect-[16/10] bg-[#0f0e0d]">
                  <img
                    src={item.image}
                    alt={item.title || item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161513] via-transparent to-black/30" />

                  <span className="absolute top-2.5 left-2.5 bg-amber-500 text-black px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                    Signature Drink
                  </span>

                  <span className="absolute top-2.5 right-2.5 bg-black/75 backdrop-blur-md text-amber-400 font-bold px-2 py-0.5 rounded-full text-[10px] sm:text-xs border border-zinc-700 flex items-center gap-1">
                    <FaStar className="text-[9px]" /> {item.rating || "4.9"}
                  </span>
                </div>

                <div className="p-4 sm:p-5 flex flex-col flex-1">
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1">
                      {item.title || item.name}
                    </h3>

                    <p className="text-zinc-400 mt-1.5 text-[11px] sm:text-xs leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-3 sm:mt-4 pt-3 flex items-center justify-between border-t border-zinc-800/80">
                    <span className="text-lg sm:text-xl font-extrabold text-amber-400">
                      {item.price}
                    </span>

                    <Link
                      to={`/product/${item.id}`}
                      className="px-3.5 sm:px-4 py-1.5 rounded-full bg-amber-500 text-black font-bold hover:bg-amber-400 hover:scale-105 transition-all text-[11px] sm:text-xs shadow-md"
                    >
                      View Product
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialDrinks;




// import { Link } from "react-router-dom";
// import { FaStar, FaCoffee } from "react-icons/fa";
// import products from "../../Data/Products";

// const SpecialDrinks = () => {
//   const specialDrinks = products.filter(
//     (item) => item.category === "Special Drinks"
//   );

//   return (
//     <section
//       id="special-drinks"
//       className="bg-[#0B0A09] border-y border-zinc-800/80 py-16"
//     >
//       {/* Heading */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
//         <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
//           <FaCoffee />
//           Chef&apos;s Signature Collection
//         </span>

//         <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
//           <div>
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
//               Handcrafted Special Drinks
//             </h2>

//             <p className="text-zinc-400 mt-4 max-w-2xl">
//               Discover our handcrafted signature drinks made with premium
//               ingredients, rich flavors, and perfect presentation.
//             </p>
//           </div>

//           <div className="bg-zinc-900 border border-zinc-800 rounded-full px-5 py-2 text-zinc-300 text-sm font-medium">
//             <span className="text-amber-400 font-bold">
//               {specialDrinks.length}
//             </span>{" "}
//             Signature Drinks
//           </div>
//         </div>
//       </div>

//       {/* Cards */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//           {specialDrinks.map((item) => (
//             <div
//               key={item.id}
//               className="group bg-[#161513] border border-zinc-800 rounded-2xl overflow-hidden shadow-xl hover:border-amber-500 transition-all duration-300 flex flex-col"
//             >
//               {/* Image */}
//               <div className="relative aspect-[16/10] overflow-hidden">
//                 <img
//                   src={item.image}
//                   alt={item.title || item.name}
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-[#161513] via-transparent to-black/30" />

//                 <span className="absolute top-3 left-3 bg-amber-500 text-black text-[10px] font-bold uppercase px-3 py-1 rounded-full">
//                   Signature
//                 </span>

//                 <span className="absolute top-3 right-3 bg-black/70 backdrop-blur-md border border-zinc-700 rounded-full px-2 py-1 text-xs text-amber-400 flex items-center gap-1">
//                   <FaStar />
//                   {item.rating || "4.9"}
//                 </span>
//               </div>

//               {/* Content */}
//               <div className="p-5 flex flex-col flex-1">
//                 <div className="flex-1">
//                   <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
//                     {item.title || item.name}
//                   </h3>

//                   <p className="text-zinc-400 mt-3 text-sm leading-6">
//                     {item.description}
//                   </p>
//                 </div>

//                 <div className="mt-6 pt-5 border-t border-zinc-800 flex items-center justify-between">
//                   <span className="text-2xl font-bold text-amber-400">
//                     {item.price}
//                   </span>

//                   <Link
//                     to={`/product/${item.id}`}
//                     className="bg-amber-500 text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-amber-400 transition-all"
//                   >
//                     View Product
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SpecialDrinks;