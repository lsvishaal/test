const SkeletonDoctorCard = () => (
  <div className="flex items-stretch gap-4 rounded-lg shadow p-4 relative animate-pulse bg-gray-100 border border-gray-200">
    <div className="flex flex-col items-center min-w-[72px] max-w-[72px]">
      <div className="w-16 h-16 rounded-full bg-gray-300 mb-2" />
      <div className="h-3 w-16 bg-gray-200 rounded mb-1" />
    </div>
    <div className="flex-1 flex flex-col justify-between">
      <div>
        <div className="h-4 w-32 bg-gray-200 rounded mb-2" />
        <div className="h-3 w-24 bg-gray-200 rounded mb-1" />
        <div className="h-3 w-20 bg-gray-200 rounded mb-1" />
        <div className="h-3 w-16 bg-gray-200 rounded mb-1" />
      </div>
      <div className="flex gap-2 mt-1">
        <div className="h-4 w-20 bg-gray-200 rounded" />
        <div className="h-4 w-20 bg-gray-200 rounded" />
      </div>
    </div>
    <div className="flex flex-col items-end justify-between min-w-[90px]">
      <div className="h-4 w-12 bg-gray-200 rounded mb-2" />
      <div className="h-8 w-20 bg-gray-200 rounded" />
    </div>
  </div>
);

export default SkeletonDoctorCard;
