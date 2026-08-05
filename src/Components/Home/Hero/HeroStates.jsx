const HeroStats = () => {
  return (
    <div className="hero-stats mt-10 md:mt-14 grid grid-cols-3 gap-4 md:gap-8">
      <div>
        <h3 className="text-3xl font-bold">25K+</h3>
        <p className="text-white mt-2">Happy Customers</p>
      </div>

      <div>
        <h3 className="text-3xl font-bold">50+</h3>
        <p className="text-white mt-2">Coffee Variants</p>
      </div>

      <div>
        <h3 className="text-3xl font-bold">4.9★</h3>
        <p className="text-white mt-2">Customer Rating</p>
      </div>
    </div>
  );
};

export default HeroStats;
