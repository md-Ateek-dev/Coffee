const Pagination = ({
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  if (totalPages <= 1) return null;

  const pages = [...Array(totalPages).keys()].map((n) => n + 1);

  return (
    <section className="pb-24">

      <div className="flex justify-center items-center gap-3 flex-wrap">

        {/* Previous */}

        <button
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
          className="
            px-5
            py-3
            rounded-full
            border
            border-zinc-700
            text-white
            disabled:opacity-50
            disabled:cursor-not-allowed
            hover:border-amber-500
            transition
          "
        >
          Previous
        </button>

        {/* Page Numbers */}

        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`
              w-12
              h-12
              rounded-full
              transition
              ${
                currentPage === page
                  ? "bg-amber-500 text-black"
                  : "bg-[#181715] text-white hover:bg-amber-500 hover:text-black"
              }
            `}
          >
            {page}
          </button>
        ))}

        {/* Next */}

        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages}
          className="
            px-5
            py-3
            rounded-full
            border
            border-zinc-700
            text-white
            disabled:opacity-50
            disabled:cursor-not-allowed
            hover:border-amber-500
            transition
          "
        >
          Next
        </button>

      </div>

    </section>
  );
};

export default Pagination;