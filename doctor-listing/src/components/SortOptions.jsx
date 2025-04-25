const SortOptions = ({ sortBy, onSortChange }) => (
  <div>
    <div data-testid="filter-header-sort" className="font-semibold mb-2">
      Sort
    </div>
    <div className="space-y-2">
      <label className="flex items-center gap-1">
        <input
          type="radio"
          name="sortBy"
          value="fees"
          checked={sortBy === "fees"}
          onChange={() => onSortChange("fees")}
          data-testid="sort-fees"
        />
        Price: Low-High
      </label>
      <label className="flex items-center gap-1">
        <input
          type="radio"
          name="sortBy"
          value="experience"
          checked={sortBy === "experience"}
          onChange={() => onSortChange("experience")}
          data-testid="sort-experience"
        />Experience - Most Experience first
      </label>
    </div>
  </div>
);

export default SortOptions;
