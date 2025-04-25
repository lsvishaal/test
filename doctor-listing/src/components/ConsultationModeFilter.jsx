const ConsultationModeFilter = ({ consultationType, onChange }) => (
  <div>
    <div data-testid="filter-header-moc" className="font-semibold mb-2">
      Consultation Mode
    </div>
    <div className="space-y-2">
      <label className="flex items-center gap-2">
        <input
          type="radio"
          name="consultationType"
          value="Video Consult"
          checked={consultationType === "Video Consult"}
          onChange={() => onChange("Video Consult")}
          data-testid="filter-video-consult"
        />
        Video Consultation
      </label>
      <label className="flex items-center gap-2">
        <input
          type="radio"
          name="consultationType"
          value="In Clinic"
          checked={consultationType === "In Clinic"}
          onChange={() => onChange("In Clinic")}
          data-testid="filter-in-clinic"
        />
        In-clinic Consultation
      </label>
    </div>
  </div>
);

export default ConsultationModeFilter;
