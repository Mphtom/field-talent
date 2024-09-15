
const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="w-16 h-16 border-t-4 border-r-4 border-b-4 border-main rounded-full animate-spin"></div>
      <span className="mt-4 text-xl font-bold text-main">Loading data...</span>
      <div className="mt-2 w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div className="w-full h-full bg-main animate-pulse"></div>
      </div>
    </div>
  );
};

export default Loading;