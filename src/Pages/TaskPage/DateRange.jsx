const DateRange = () => {
  return (
    <div
      className="flex items-center
rounded-lg bg-white border-[1px] border-gray-300"
    >
      <div className="relative text-[13px] w-[9rem] h-[2rem] flex justify-center rounded-l-lg items-center bg-[#fff]">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
          <svg
            className="w-3 h-3 text-primary_DeepBlue"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </div>
        <input
          name="start"
          type="date"
          className="text-[13px] h-[100%] text-gray-900 text-sm rounded-l-lg focus:ring-blue-600 focus:border-blue-500 block w-full pl-8"
          placeholder="From: Start Date"
        />
      </div>
      <span className="border-gray-300 border-[1px] h-6 w-[0px] border-solid"></span>
      <div className="relative text-[13px] w-[9rem] h-[2rem] flex justify-center rounded-r-lg items-center bg-[#fff]">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-3 h-3 text-primary_DeepBlue"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </div>
        <input
          name="end"
          type="date"
          className="text-gray-900 h-[100%] text-sm rounded-r-lg focus:ring-blue-600 focus:border-blue-500 block w-full pl-8"
          placeholder="To: Start Date"
        />
      </div>
    </div>
  );
};

export default DateRange;
