/**
 * DoctorCard component displays a doctor's details in a card format.
 * @param {Object} props
 * @param {Object} props.doctor - Doctor object with details
 */
import PropTypes from "prop-types";

const DoctorCard = ({ doctor }) => (
  <div
    data-testid="doctor-card"
    className="flex items-center gap-4 bg-white rounded-lg shadow p-4"
  >
    {doctor.image && (
      <img
        src={doctor.image}
        alt={doctor.name}
        className="w-16 h-16 rounded-full object-cover border"
      />
    )}
    <div className="flex-1">
      <div data-testid="doctor-name" className="font-bold text-lg mb-1">
        {doctor.name}
      </div>
      <div
        data-testid="doctor-specialty"
        className="text-sm text-gray-600 mb-1"
      >
        {Array.isArray(doctor.specialties)
          ? doctor.specialties.join(", ")
          : doctor.specialization || doctor.specialty}
      </div>
      <div
        data-testid="doctor-experience"
        className="text-xs text-gray-500 mb-1"
      >
        {doctor.experience} yrs exp.
      </div>
      <div data-testid="doctor-fee" className="text-sm text-gray-700 mb-1">
        ₹{doctor.fees}
      </div>
    </div>
    <button
      className="ml-auto px-4 py-2 border rounded text-blue-600 border-blue-600 hover:bg-blue-50 transition"
      type="button"
    >
      Book Appointment
    </button>
  </div>
);

DoctorCard.propTypes = {
  doctor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    specialties: PropTypes.array,
    specialization: PropTypes.string,
    specialty: PropTypes.string,
    experience: PropTypes.number,
    fees: PropTypes.number,
    image: PropTypes.string,
  }).isRequired,
};

export default DoctorCard;
