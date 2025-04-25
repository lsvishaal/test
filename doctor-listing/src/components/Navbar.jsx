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
  <nav className="w-full bg-white shadow py-4 flex justify-center">
    <div className="w-full max-w-xl relative">
      <input
        ref={inputRef}
        className="w-full border rounded px-4 py-2 focus:outline-none focus:ring"
        placeholder="Search Symptoms, Doctors, Specialists, Clinics"
        aria-label="Search doctors"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") onSearchEnter();
        }}
        data-testid="autocomplete-input"
        autoComplete="off"
      />
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
