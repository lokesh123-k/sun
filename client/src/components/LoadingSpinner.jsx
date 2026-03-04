/**
 * LoadingSpinner Component
 * Shows a loading spinner while lazy loading pages
 */
const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="relative w-16 h-16 mx-auto mb-4">
          <div className="absolute inset-0 border-4 border-dark-200 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-primary-500 rounded-full border-t-transparent animate-spin"></div>
        </div>
        <p className="text-dark-500 font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
