import DoctorCard from "./DoctorCard";
import SkeletonDoctorCard from "./SkeletonDoctorCard";
import PropTypes from "prop-types";
import { motion } from "motion/react";

const DoctorList = ({ doctors, visibleCount = 7, loading, lastCardRef }) => {
  if (loading) {
    return (
      <div data-testid="doctor-list" className="space-y-4">
        {Array.from({ length: visibleCount }).map((_, i) => (
          <SkeletonDoctorCard key={i} />
        ))}
      </div>
    );
  }
  return (
    <div data-testid="doctor-list" className="space-y-4">
      {doctors.length === 0 ? (
        <div data-testid="no-doctor" className="text-center text-gray-500 py-8">
          No doctors found.
        </div>
      ) : (
        doctors.slice(0, visibleCount).map((doc, idx) => {
          const isLast = idx === visibleCount - 1;
          return (
            <motion.div
              key={doc.id || doc.name || idx}
              className="motion-card"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.03 }}
              ref={isLast && lastCardRef ? lastCardRef : undefined}
            >
              <DoctorCard doctor={doc} />
            </motion.div>
          );
        })
      )}
    </div>
  );
};

DoctorList.propTypes = {
  doctors: PropTypes.array.isRequired,
  visibleCount: PropTypes.number,
  loading: PropTypes.bool,
  lastCardRef: PropTypes.object,
};

export default DoctorList;
