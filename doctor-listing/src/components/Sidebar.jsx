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
    <div
      style={{
        background: "var(--color-bg)",
        borderColor: "var(--color-accent)",
      }}
      className="rounded-lg shadow p-4 mb-2"
    >
      <SortOptions sortBy={sortBy} onSortChange={onSortChange} />
    </div>
    {/* Filters Box */}
    <div
      style={{
        background: "var(--color-accent)",
        borderColor: "var(--color-accent)",
      }}
      className="rounded-lg shadow flex flex-col relative max-h-[480px] overflow-y-auto"
    >
      <div
        className="sticky top-0 z-10 flex flex-col"
        style={{ background: "var(--color-accent)" }}
      >
        <div
          className="text-lg font-bold px-4 pt-4 pb-2 border-b"
          style={{
            color: "var(--color-danger)",
            borderColor: "var(--color-accent)",
          }}
        >
          Filters
        </div>
        <div
          className="w-full flex justify-center py-2 px-2 sticky top-0 z-20"
          style={{ background: "var(--color-accent)" }}
        >
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
