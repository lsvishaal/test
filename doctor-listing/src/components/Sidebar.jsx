import SortOptions from "./SortOptions";
import ConsultationModeFilter from "./ConsultationModeFilter";
import SpecialityFilter from "./SpecialityFilter";
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
  <div className="sidebar flex flex-col gap-4 w-full max-w-xs min-w-[320px] fixed left-8 top-32 z-20">
    {/* Sort Box */}
    <div className="bg-white rounded-lg shadow border border-[#f5c6cb] p-4 mb-2">
      <SortOptions sortBy={sortBy} onSortChange={onSortChange} />
    </div>
    {/* Filters Box */}
    <div className="bg-[#fff5f5] rounded-lg shadow border border-[#f5c6cb] flex flex-col relative max-h-[480px] overflow-y-auto">
      <div className="sticky top-0 z-10 bg-[#fff5f5] flex flex-col">
        <div className="text-[#e53935] text-lg font-bold px-4 pt-4 pb-2 border-b border-[#f5c6cb]">
          Filters
        </div>
        <div className="w-full flex justify-center bg-[#fff5f5] py-2 px-2 sticky top-0 z-20">
          <ClearFiltersButton onClick={onClearFilters} />
        </div>
      </div>
      <div className="flex flex-col gap-4 px-4 py-2">
        <div className="mb-2">
          <ConsultationModeFilter
            consultationType={consultationType}
            onChange={onConsultationTypeChange}
          />
        </div>
        <div className="mb-2">
          <SpecialityFilter
            specialties={specialties}
            selectedSpecialties={selectedSpecialties}
            onChange={onSpecialtyChange}
          />
        </div>
      </div>
    </div>
  </div>
);

export default Sidebar;
