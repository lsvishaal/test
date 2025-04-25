/**
 * Navbar component with a search input and suggestions dropdown.
 * @param {Object} props
 * @param {string} props.search
 * @param {function} props.setSearch
 * @param {function} props.onSearchEnter
 * @param {Array} props.suggestions
 * @param {function} props.onSuggestionClick
 * @param {Object} props.inputRef
 */
import PropTypes from "prop-types";

const Navbar = ({
  search,
  setSearch,
  onSearchEnter,
  suggestions,
  onSuggestionClick,
  inputRef,
}) => (
  <nav
    className="w-full py-6 flex justify-center items-center"
    style={{ background: "var(--color-bg)" }}
  >
    <div className="w-full max-w-xl relative flex flex-col items-center">
      <div
        className="w-full flex items-center"
        style={{
          background: "rgba(255,255,255,0.95)",
          borderRadius: "0.75rem",
          boxShadow: "0 2px 8px 0 rgba(34,34,34,0.04)",
        }}
      >
        <input
          ref={inputRef}
          className="w-full bg-transparent border-none outline-none px-3 py-2 text-base placeholder:text-xs placeholder-gray-400 rounded-xl"
          placeholder="Search Symptoms, Doctors, Specialists, Clinics"
          aria-label="Search doctors"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") onSearchEnter();
          }}
          data-testid="autocomplete-input"
          autoComplete="off"
          style={{
            fontSize: "1rem",
            fontFamily: "Roboto, Inter, Arial, sans-serif",
          }}
        />
        <button
          className="ml-2 rounded transition"
          aria-label="Search"
          onClick={onSearchEnter}
          tabIndex={0}
          style={{
            background: "var(--color-primary)",
            padding: "0.3rem 0.5rem",
            minWidth: "unset",
            minHeight: "unset",
          }}
        >
          <svg
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="var(--color-danger)"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      {suggestions && suggestions.length > 0 && (
        <ul className="absolute left-0 right-0 bg-white border rounded shadow mt-1 z-10">
          {suggestions.map((s, i) => (
            <li
              key={s}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              data-testid="suggestion-item"
              onClick={() => onSuggestionClick(s)}
            >
              {s}
            </li>
          ))}
        </ul>
      )}
    </div>
  </nav>
);

Navbar.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  onSearchEnter: PropTypes.func.isRequired,
  suggestions: PropTypes.array.isRequired,
  onSuggestionClick: PropTypes.func.isRequired,
  inputRef: PropTypes.object,
};

export default Navbar;
