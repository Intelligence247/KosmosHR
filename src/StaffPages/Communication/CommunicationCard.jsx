import axios from "axios";
import React, { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";

const CommunicationCard = () => {
  const [switching, setSwitching] = useState(true);
  const [loading, setloading] = useState(false);
  const [querieData, setquerieData] = useState([]);
  const getQueries = async () => {
    try {
      setloading(true);
      const url =
        "https://kosmoshr.pythonanywhere.com/api/v1/queries/get_queries/";
const url3 = "https://kosmoshr.pythonanywhere.com/api/v1/news/news_list/"
      const url2 =
        "	https://kosmoshr.pythonanywhere.com/api/v1/employees/get_employee_report/";
      const response = await axios.get(url3);
    response.data.data !== undefined ? setquerieData(response.data.data):''
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getQueries();
  }, []);
  return (
    <div className="py-5 w-full border-[1px] border-x-primary_SkyBlue rounded-lg">
      <section className="headSection lg:h-12 w-full lg:flex-row flex-col-reverse flex justify-between lg:px-4 px-2 lg:space-y-0 gap-4 lg:py-0 py-2 items-center">
        <div className="left flex items-center lg:space-x-12">
          <h1 className="font-bold text-xl lg:block hidden">Communication</h1>
          <div className="btns flex items-center ">
            <button
              onClick={() =>( setSwitching(true), getQueries())}
              className={`flex h-8 ${
                switching ? "bg-primary_SkyBlue/40" : "bg-primary_SkyBlue/5"
              } items-center border-[1px] border-gray-400 w-20 rounded-l-lg justify-center space-x-2 bg-primary_SkyBlue/40`}
            >
              {" "}
              <p
                className={`w-2.5 h-2.5 rounded-full ${
                  switching ? "bg-green-900" : "bg-gray-400"
                }`}
              ></p>{" "}
              <span>Sent</span>
            </button>
            <button
              onClick={() => setSwitching(false)}
              className={`flex ${
                !switching ? "bg-primary_SkyBlue/40" : "bg-primary_SkyBlue/5"
              } items-center border-[1px] border-gray-400 h-8 w-24 rounded-r-lg justify-center space-x-2 bg-primary_SkyBlue/40`}
            >
              {" "}
              <p
                className={`w-2.5 h-2.5 rounded-full ${
                  !switching ? "bg-green-900" : "bg-gray-400"
                }`}
              ></p>{" "}
              <span>Received</span>
            </button>
          </div>
        </div>
        <div className="">
          <div
            className="searchInputs lg:w-[10rem] w-full flex lg:space-x-2.5 space-x-1 items-center lg:h-9 border-[rgb(29,112,201)] border-[1px]
  rounded-lg px-3 bg-white"
          >
            <button>Search</button>
            <img src="/search.png" className="lg:w-4 lg:h-4 h-3 w-3" alt="" />
            <input type="text" name="" id="" />
          </div>
        </div>
      </section>
      <section className=" ">
        <div className="thead lg:flex hidden lg:pl-6 w-full justify-between items-center bg-primary_SkyBlue/30 h-12">
          <div className="left lg:w-[45%] grid grid-cols-2">
            <p>Email</p>
            <p>Title</p>
          </div>
          <span className="flex-grow-1"></span>
          <div className="right lg:w-[40%] grid grid-cols-2">
            <p>Staff</p>
            <p>Action</p>
          </div>
        </div>
        <div className="guerylists">
          {querieData.length >= 1 ? (
            querieData.map((q) => (
              <div className="thead lg:pl-6 px-2 lg:gap-x-0 gap-x-3 w-full lg:flex grid grid-cols-9 justify-between items-center border-y-[1px] border-gray-200 h-12">
                <div className="left lg:grid hidden lg:w-[45%] grid-cols-2">
                  <p className="text-xs">{q?.author?.email}</p>
                  <p className="font-bold text-xs">{q?.title}</p>
                </div>
                <div className="right lg:grid hidden lg:w-[40%] grid-cols-2">
                  <div className="staff">
                    <p className="text-xs">{q.author?.last_name}</p>
                    <p className="opacity-50 text-xs">
                      {q.addressed_to?.last_name}
                    </p>
                  </div>
                  <p className="underline text-primary_SkyBlue text-xs flex items-center">
                    Details <img src="/slantArrow.png" className="w-5" alt="" />
                  </p>
                </div>
                {/* Mobile */}
                <p className="lg:hidden col-span-4 ">{q?.author?.email}</p>
                <div className="lg:hidden col-span-4 flex flex-col justify-center items-center">
                  <p className="font-bold">{q?.title}</p>
                  <p>{`${q.author?.first_name} ${q.author?.last_name}`}</p>
                </div>
                <img className="lg:hidden" src="/arrowup.svg" alt="" />
              </div>
            ))
          ) : (
            <div className="h-[10rem] flex justify-center items-center">
              <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="70"
                visible={true}
              />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CommunicationCard;
