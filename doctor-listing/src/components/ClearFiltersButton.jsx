const ClearFiltersButton = ({ onClick }) => (
  <button
    className="w-full mt-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold"
    onClick={onClick}
    type="button"
  >
    Clear All
  </button>
);

export default ClearFiltersButton;
