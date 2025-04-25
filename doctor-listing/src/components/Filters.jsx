import ConsultationModeFilter from './ConsultationModeFilter';
import SpecialityFilter from './SpecialityFilter';

const Filters = ({
  consultationType,
  onConsultationTypeChange,
  specialties,
  selectedSpecialties,
  onSpecialtyChange,
}) => (
  <div className="space-y-6">
    <ConsultationModeFilter
      consultationType={consultationType}
      onChange={onConsultationTypeChange}
    />
    <SpecialityFilter
      specialties={specialties}
      selectedSpecialties={selectedSpecialties}
      onChange={onSpecialtyChange}
    />
  </div>
);

export default Filters;
