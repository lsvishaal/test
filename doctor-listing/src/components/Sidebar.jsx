import SortOptions from "./SortOptions";
import Filters from "./Filters";
import ClearFiltersButton from "./ClearFiltersButton";

const Sidebar = ({
  sortBy,
  onSortChange,
  consultationType,
  onConsultationTypeChange,
  specialties,
  selectedSpecialties,
  onSpecialtyChange,
  onClearFilters,
}) => (
  <div className="space-y-6">
    <SortOptions sortBy={sortBy} onSortChange={onSortChange} />
    <Filters
      consultationType={consultationType}
      onConsultationTypeChange={onConsultationTypeChange}
      specialties={specialties}
      selectedSpecialties={selectedSpecialties}
      onSpecialtyChange={onSpecialtyChange}
    />
    <ClearFiltersButton onClick={onClearFilters} />
  </div>
);

export default Sidebar;
