
const SPECIALTIES = [
  "General Physician",
  "Dentist",
  "Dermatologist",
  "Paediatrician",
  "Gynaecologist",
  "ENT",
  "Diabetologist",
  "Cardiologist",
  "Physiotherapist",
  "Endocrinologist",
  "Orthopaedic",
  "Ophthalmologist",
  "Gastroenterologist",
  "Pulmonologist",
  "Psychiatrist",
  "Urologist",
  "Dietitian/Nutritionist",
  "Psychologist",
  "Sexologist",
  "Nephrologist",
  "Neurologist",
  "Oncologist",
  "Ayurveda",
  "Homeopath",
];

const FilterPanel = ({
  consultationType,
  onConsultationTypeChange,
  selectedSpecialties,
  onSpecialtyChange,
  sortBy,
  onSortChange,
}) => {
  return (
    <div className="bg-gray-50 rounded p-4 mb-4 w-full max-w-md mx-auto">
      {/* Consultation Type */}
      <div data-testid="filter-header-moc" className="font-semibold mb-2">
        Consultation Mode
      </div>
      <div className="mb-4">
        <label className="mr-4">
          <input
            type="radio"
            name="consultationType"
            value="Video Consult"
            checked={consultationType === "Video Consult"}
            onChange={() => onConsultationTypeChange("Video Consult")}
            data-testid="filter-video-consult"
          />
          Video Consult
        </label>
        <label>
          <input
            type="radio"
            name="consultationType"
            value="In Clinic"
            checked={consultationType === "In Clinic"}
            onChange={() => onConsultationTypeChange("In Clinic")}
            data-testid="filter-in-clinic"
          />
          In Clinic
        </label>
      </div>

      {/* Specialties */}
      <div
        data-testid="filter-header-speciality"
        className="font-semibold mb-2"
      >
        Speciality
      </div>
      <div className="mb-4 grid grid-cols-2 gap-1">
        {SPECIALTIES.map((spec) => (
          <label key={spec}>
            <input
              type="checkbox"
              checked={selectedSpecialties.includes(spec)}
              onChange={() => onSpecialtyChange(spec)}
              data-testid={`filter-specialty-${spec.replace(/\s|\//g, "-")}`}
            />
            {spec}
          </label>
        ))}
      </div>

      {/* Sort */}
      <div data-testid="filter-header-sort" className="font-semibold mb-2">
        Sort
      </div>
      <div>
        <label className="mr-4">
          <input
            type="radio"
            name="sortBy"
            value="fees"
            checked={sortBy === "fees"}
            onChange={() => onSortChange("fees")}
            data-testid="sort-fees"
          />
          Fees (Low to High)
        </label>
        <label>
          <input
            type="radio"
            name="sortBy"
            value="experience"
            checked={sortBy === "experience"}
            onChange={() => onSortChange("experience")}
            data-testid="sort-experience"
          />
          Experience (High to Low)
        </label>
      </div>
    </div>
  );
};

export default FilterPanel;
