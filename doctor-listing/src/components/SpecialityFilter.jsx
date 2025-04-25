const SpecialityFilter = ({ specialties, selectedSpecialties, onChange }) => (
  <div>
    <div data-testid="filter-header-speciality" className="font-semibold mb-2">
      Speciality
    </div>
    <div className="grid grid-cols-2 gap-1">
      {specialties.map((spec) => (
        <label key={spec} className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={selectedSpecialties.includes(spec)}
            onChange={() => onChange(spec)}
            data-testid={`filter-specialty-${spec.replace(/\s|\//g, "-")}`}
          />
          {spec}
        </label>
      ))}
    </div>
  </div>
);

export default SpecialityFilter;
