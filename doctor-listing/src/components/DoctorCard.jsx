/**
 * DoctorCard component displays a doctor's details in a card format.
 * @param {Object} props
 * @param {Object} props.doctor - Doctor object with details
 */
import PropTypes from "prop-types";

const DoctorCard = ({ doctor }) => (
  <div
    data-testid="doctor-card"
    className="flex items-stretch gap-4 bg-white rounded-lg shadow p-4 relative"
  >
    <div className="flex flex-col items-center min-w-[72px] max-w-[72px]">
      <img
        src={doctor.photo}
        alt={doctor.name}
        className="w-16 h-16 rounded-full object-cover border mb-2"
        style={{ minWidth: 64, minHeight: 64 }}
      />
      {doctor.clinic && doctor.clinic.name && (
        <div className="text-xs text-gray-500 text-center leading-tight mt-1">
          {doctor.clinic.name}
        </div>
      )}
    </div>
    <div className="flex-1 flex flex-col justify-between">
      <div>
        <div
          data-testid="doctor-name"
          className="font-bold text-lg mb-1 text-[#e53935]"
        >
          {doctor.name}
        </div>
        <div className="text-xs text-gray-500 mb-1">
          {doctor.doctor_introduction}
        </div>
        <div
          data-testid="doctor-specialty"
          className="text-sm text-[#b71c1c] mb-1"
        >
          {doctor.specialities && doctor.specialities.length > 0
            ? doctor.specialities.map((s) => s.name).join(", ")
            : "-"}
        </div>
        <div
          data-testid="doctor-experience"
          className="text-xs text-gray-500 mb-1"
        >
          {doctor.experience}
        </div>
      </div>
      <div className="flex gap-2 mt-1">
        {doctor.video_consult && (
          <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
            Video Consult
          </span>
        )}
        {doctor.in_clinic && (
          <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
            In Clinic
          </span>
        )}
      </div>
    </div>
    <div className="flex flex-col items-end justify-between min-w-[90px]">
      <div
        data-testid="doctor-fee"
        className="text-lg font-bold text-[#e53935] mb-2"
      >
        {doctor.fees}
      </div>
      <button
        className="px-4 py-2 border rounded text-blue-600 border-blue-600 hover:bg-blue-50 transition"
        type="button"
        aria-label={`Book appointment with ${doctor.name}`}
      >
        Book Appointment
      </button>
    </div>
  </div>
);

DoctorCard.propTypes = {
  doctor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    specialities: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ),
    doctor_introduction: PropTypes.string,
    experience: PropTypes.number,
    fees: PropTypes.number,
    photo: PropTypes.string.isRequired,
    video_consult: PropTypes.bool,
    in_clinic: PropTypes.bool,
    clinic: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
};

export default DoctorCard;
