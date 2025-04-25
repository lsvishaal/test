/**
 * DoctorList component renders a list of DoctorCard components.
 * @param {Object} props
 * @param {Array} props.doctors - Array of doctor objects
 */
import DoctorCard from "./DoctorCard";
import PropTypes from "prop-types";

const DoctorList = ({ doctors }) => (
  <div data-testid="doctor-list" className="space-y-4">
    {doctors.length === 0 ? (
      <div data-testid="no-doctor" className="text-center text-gray-500 py-8">
        No doctors found.
      </div>
    ) : (
      doctors.map((doc, idx) => <DoctorCard key={doc.id || idx} doctor={doc} />)
    )}
  </div>
);

DoctorList.propTypes = {
  doctors: PropTypes.array.isRequired,
};

export default DoctorList;
