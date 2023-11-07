import { useState } from "react";
import { Link } from "react-router-dom";
import DateRange from "./DateRange";

const TaskTable = ({ tableDataProps, hideViewall }) => {
  const navCenterArr = ["Uncompleted", "Completed"];
  const [switchs, setswitchs] = useState(0);
  return (
    <section className="border-[#BAD6F4] border-2 rounded-xl">
      <div className="flex flex-col lg:flex-row justify-around h-[6rem] lg:h-[4rem] items-center px-4">
        <h1 className="font-bold hidden lg:flex">Tasks</h1>
        <div
          className="flex lg:space-x-2.5 items-center
rounded-lg bg-white"
        >
          <div className="flex">
            {navCenterArr.map((n, i) => (
              <p
                key={i}
                onClick={() => setswitchs(i)}
                className={` text-[13px] border-[1px] w-[8rem] lg:w-[10rem] h-[2rem] flex justify-center first:rounded-l-lg last:rounded-r-lg items-center  ${
                  switchs === i
                    ? "bg-blue-100 border-blue-300"
                    : "bg-[#fff] border-gray-300"
                } cursor-pointer`}
              >
                <b
                  className={`w-2 h-2 rounded-full lg:mr-4 mr-1 ${
                    switchs === i ? " bg-blue-300" : " bg-gray-300"
                  }`}
                ></b>
                {n}
              </p>
            ))}
          </div>
          {/* <button>Search</button>
          <img src="/search.png" alt="" /> */}
          {/* <input type="text" name="" id="" /> */}
        </div>
        <DateRange h={"h-[2rem]"} />
      </div>
      <div className="overflow-x-auto">
        <table className="w-[100%] border-spacing-x-[1rem] text-primary_DeepBlue table-auto">
          <thead className="bg-[#E8E8E8] h-12">
            <tr>
              <th className="text-[12px] py-4 px-4">Date</th>
              <th className="text-[12px] px-4">Task</th>
              <th className="text-[12px] px-4">Staff</th>
              <th className="text-[12px] px-4">Phone Number</th>
              <th className="text-[12px] px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {tableDataProps.map((e, i) => (
              <tr key={i}>
                <td className="text-[13px] w-[10rem] py-4 px-4">{e.date}</td>
                <td className="text-[13px] leading-5 px-4">{e.taskDesc}</td>
                <td className="text-[13px] w-[10rem] font-semibold px-4">
                  {e.staff}
                </td>
                <td className="text-[13px] px-4">{e.phoneNo}</td>
                <td className="text-[13px] px-4 items-center">
                  <p className="flex text-[13px] w-[5rem] items-center text-blue-600">
                    {e.action}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link
        to="/task"
        className={`flex items-center 
  justify-center h-16
   text-primary_SkyBlue underline cursor-pointer ${hideViewall}`}
      >
        View all
        <img src="/slantArrow.png" alt="" />
      </Link>
    </section>
  );
};

export default TaskTable;
