import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DateRange from "./DateRange";
import axios from "axios";

const TaskTable = ({ tableDataProps, hideViewall, url, setUrl }) => {
  const navCenterArr = ["Uncompleted", "Completed"];

  const [switchs, setswitchs] = useState(0);
  const [taskData, setTaskData] = useState([]);
  const [empty, setEmpty] = useState(false);
  console.log(url);
  const getTaskData = async (e) => {
    try {
      const response = axios.get(url).then((response) => {
        console.log(response.data);
        
            setTaskData(response.data.data)
        
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTaskData();
  }, [url]);
  return (
    <section className="border-[#BAD6F4]  border-2 rounded-xl">
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
                onClick={() => {
                  setswitchs(i);
                  if (n === "Completed") {
                    console.log("complete");
                    setUrl(
                      "https://kosmoshr.pythonanywhere.com/api/v1/tasks/get_tasks/?completed=true"
                    );
                  } else {
                    setUrl(
                      "https://kosmoshr.pythonanywhere.com/api/v1/tasks/get_tasks/?completed=false"
                    );
                  }
                }}
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
        <table className="w-[100%] border border-[#E8E8E8] border-spacing-x-[1rem] text-primary_DeepBlue table-auto">
          <thead className="bg-[#E8E8E8] h-12">
            <tr className="text-start">
              <th className="text-[12px] text-start py-4 px-4">Date</th>
              <th className="text-[12px] text-start px-4">Task</th>
              <th className="text-[12px] text-start px-4">Staff</th>
              <th className="text-[12px] text-start px-4">Email</th>
              <th className="text-[12px] text-start px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {empty ? (
              <tr>
                <td colSpan={5} className="text-[13px] text-center h-[3rem]">
                  No task found
                </td>
                {/* <td colSpan={5}>bjj</td> */}
              </tr>
            ) : (
              taskData.map((e, i) => (
                <tr
                  key={i}
                  className="border h-[3rem] text-start border-[#E8E8E8]"
                >
                  <td className="text-[13px] w-[10rem] py-4 px-4">{e.deadline.slice(0,10)}</td>
                  <td className="text-[13px] leading-5 px-4">
                    <div>
                    {/* {e.description} */}
                    <div contentEditable='true' dangerouslySetInnerHTML={{ __html: e.description }}></div>

                    </div>
                  </td>
                  <td className="text-[13px] w-[10rem] font-semibold px-4">{`${e.assigned_to.first_name} ${e.assigned_to.last_name}`}</td>
                  {/* <td className="text-[13px] px-4">
                    {e.assigned_to.phone_number}
                  </td> */}
                  <td className="text-[13px] px-4">{e.assigned_to.email}</td>
                  <td className="text-[13px] px-4 items-center">
                    <p className="flex text-[13px] w-[5rem] items-center text-blue-600">
                      action
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
              ))
            )}
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
