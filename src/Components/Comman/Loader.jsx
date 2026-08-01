import { useEffect, useState } from "react";
import gsap from "gsap";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(".loader-logo", {
      opacity: 0,
      y: 30,
      duration: 0.8,
    });

    tl.to(".loader-progress", {
      width: "100%",
      duration: 2,
      ease: "power2.inOut",
    });

    tl.to(".loader-screen", {
      y: "-100%",
      duration: 1,
      ease: "power4.inOut",
      onComplete: () => setLoading(false),
    });
  }, []);

  if (!loading) return null;

  return (
    <div className="loader-screen fixed inset-0 z-[99999] bg-[#0F0E0D] flex flex-col items-center justify-center">

      <h1 className="loader-logo text-5xl md:text-7xl font-bold tracking-wider text-white">
        AURA
      </h1>

      <p className="mt-2 uppercase tracking-[6px] text-amber-500">
        Premium Coffee
      </p>

      <div className="mt-12 w-72 h-[4px] bg-white/10 rounded-full overflow-hidden">

        <div className="loader-progress h-full w-0 bg-amber-500 rounded-full"></div>

      </div>

    </div>
  );
};

export default Loader;