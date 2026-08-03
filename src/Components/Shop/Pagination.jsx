const Pagination = ({
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  if (totalPages <= 1) return null;

  const pages = [...Array(totalPages).keys()].map((n) => n + 1);

  return (
    <section className="pb-16 sm:pb-20 md:pb-24 px-4">

      <div className="flex justify-center items-center gap-2 sm:gap-3 flex-wrap">

        {/* Previous */}

        <button
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
          className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border border-zinc-700 text-white text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed hover:border-amber-500 transition"
        >
          Prev
        </button>

        {/* Page Numbers */}

        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full text-sm sm:text-base transition ${
                currentPage === page
                  ? "bg-amber-500 text-black font-bold"
                  : "bg-[#181715] text-white hover:bg-amber-500 hover:text-black"
              }`}
          >
            {page}
          </button>
        ))}

        {/* Next */}

        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages}
          className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border border-zinc-700 text-white text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed hover:border-amber-500 transition"
        >
          Next
        </button>

      </div>

    </section>
  );
};

export default Pagination;