const HeroStats = () => {
  return (
    <div className="hero-stats mt-6 sm:mt-8 md:mt-10 grid grid-cols-3 gap-3 sm:gap-6 border-t border-white/10 pt-5 sm:pt-6">
      <div>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-amber-400 tracking-tight">25K+</h3>
        <p className="text-zinc-400 text-[11px] sm:text-xs md:text-sm mt-1 leading-tight font-medium">Happy Sips</p>
      </div>

      <div>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-amber-400 tracking-tight">50+</h3>
        <p className="text-zinc-400 text-[11px] sm:text-xs md:text-sm mt-1 leading-tight font-medium">Blends & Roasts</p>
      </div>

      <div>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-amber-400 tracking-tight">4.9★</h3>
        <p className="text-zinc-400 text-[11px] sm:text-xs md:text-sm mt-1 leading-tight font-medium">Loved Rating</p>
      </div>
    </div>
  );
};

export default HeroStats;
