import { FaSearch, FaTimes } from "react-icons/fa";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="relative max-w-2xl mx-auto">

          {/* Search Icon */}

          <FaSearch
            className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400"
            size={18}
          />

          {/* Input */}

          <input
            type="text"
            placeholder="Search coffee..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="
              w-full
              bg-[#181715]
              border border-zinc-700
              rounded-full
              py-4
              pl-14
              pr-14
              text-white
              placeholder:text-zinc-500
              outline-none
              transition
              duration-300
              focus:border-amber-500
              focus:ring-2
              focus:ring-amber-500/20
            "
          />

          {/* Clear Button */}

          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="
                absolute
                right-5
                top-1/2
                -translate-y-1/2
                text-zinc-400
                hover:text-white
                transition
              "
            >
              <FaTimes size={18} />
            </button>
          )}

        </div>
      </div>
    </section>
  );
};

export default SearchBar;