import { FaStar, FaCheckCircle } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "John Smith",
    rating: 5,
    date: "12 July 2026",
    verified: true,
    review:
      "Amazing coffee! Rich aroma, smooth taste, and fast delivery. Definitely ordering again.",
  },
  {
    id: 2,
    name: "Sarah Wilson",
    rating: 4,
    date: "8 July 2026",
    verified: true,
    review:
      "Loved the freshness and packaging. One of the best premium coffees I've tried.",
  },
  {
    id: 3,
    name: "David Brown",
    rating: 5,
    date: "2 July 2026",
    verified: false,
    review:
      "Excellent quality. The flavor profile is perfectly balanced and worth every penny.",
  },
];

const Reviews = () => {
  const averageRating =
    (
      reviews.reduce((sum, review) => sum + review.rating, 0) /
      reviews.length
    ).toFixed(1);

  return (
    <section className="py-24 bg-[#181715]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="uppercase tracking-[5px] text-amber-500">
            Customer Reviews
          </p>

          <h2 className="text-5xl font-bold mt-4">
            What Our Customers Say
          </h2>

        </div>

        {/* Rating Summary */}

        <div className="bg-[#22201E] rounded-3xl p-10 mb-16 border border-zinc-800">

          <div className="flex flex-col md:flex-row items-center justify-between gap-10">

            <div>

              <h3 className="text-6xl font-bold text-amber-500">
                {averageRating}
              </h3>

              <div className="flex gap-1 mt-3 text-amber-500">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>

              <p className="mt-3 text-zinc-400">
                Based on {reviews.length} Reviews
              </p>

            </div>

            {/* Rating Distribution */}

            <div className="w-full max-w-md space-y-4">

              {[5, 4, 3, 2, 1].map((star) => (

                <div
                  key={star}
                  className="flex items-center gap-4"
                >
                  <span className="w-8">
                    {star}★
                  </span>

                  <div className="flex-1 h-2 rounded-full bg-zinc-700 overflow-hidden">

                    <div
                      className={`h-full ${
                        star >= 4
                          ? "bg-amber-500"
                          : "bg-zinc-500"
                      }`}
                      style={{
                        width:
                          star === 5
                            ? "70%"
                            : star === 4
                            ? "20%"
                            : "10%",
                      }}
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Review Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {reviews.map((review) => (

            <div
              key={review.id}
              className="bg-[#22201E] rounded-3xl p-8 border border-zinc-800 hover:border-amber-500 transition"
            >

              <div className="flex items-center justify-between">

                <h3 className="font-bold text-xl">
                  {review.name}
                </h3>

                {review.verified && (
                  <FaCheckCircle className="text-green-500" />
                )}

              </div>

              <div className="flex gap-1 mt-4 text-amber-500">

                {[...Array(review.rating)].map((_, index) => (
                  <FaStar key={index} />
                ))}

              </div>

              <p className="mt-6 text-zinc-400 leading-7">
                {review.review}
              </p>

              <p className="mt-6 text-sm text-zinc-500">
                {review.date}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Reviews;