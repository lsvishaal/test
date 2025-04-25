/**
 * DoctorList component renders a list of DoctorCard components.
 * @param {Object} props
 * @param {Array} props.doctors - Array of doctor objects
 */
import DoctorCard from "./DoctorCard";
import PropTypes from "prop-types";
import { motion } from "motion/react";

const DoctorList = ({ doctors }) => (
  <div data-testid="doctor-list" className="space-y-4">
    {doctors.length === 0 ? (
      <div data-testid="no-doctor" className="text-center text-gray-500 py-8">
        No doctors found.
      </div>
    ) : (
      doctors.map((doc, idx) => (
        <motion.div
          key={doc.id || doc.name || idx}
          className="motion-card"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: idx * 0.03 }}
        >
          <DoctorCard doctor={doc} />
        </motion.div>
      ))
    )}
  </div>
);

DoctorList.propTypes = {
  doctors: PropTypes.array.isRequired,
};

export default DoctorList;
