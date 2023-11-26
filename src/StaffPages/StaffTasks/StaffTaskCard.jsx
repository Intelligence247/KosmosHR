import React from "react";
import { useState } from "react";
import { RotatingLines } from "react-loader-spinner";

const StaffTaskCard = () => {
    const querieData = 'hello'
    const [switching, setSwitching] = useState(true);
  return (
    <div className="py-5 w-full border-[1px] border-x-primary_SkyBlue rounded-lg">
      <section className="headSection lg:h-12 w-full lg:flex-row flex-col-reverse flex justify-between lg:px-4 px-2 lg:space-y-0 gap-4 lg:py-0 py-2 items-center">
        <div className="left flex items-center lg:space-x-12">
          <h1 className="font-bold text-xl lg:block hidden">Tasks</h1>
          <div className="btns flex items-center ">
            <button
              onClick={() => (setSwitching(true), getQueries())}
              className={`flex h-8 ${
                switching ? "bg-primary_SkyBlue/40" : "bg-primary_SkyBlue/5"
              } items-center border-[1px] border-gray-400 w-32 rounded-l-lg justify-center space-x-2 bg-primary_SkyBlue/40`}
            >
              {" "}
              <p
                className={`w-2.5 h-2.5 rounded-full ${
                  switching ? "bg-green-900" : "bg-gray-400"
                }`}
              ></p>{" "}
              <span>Uncompleted</span>
            </button>
            <button
              onClick={() => setSwitching(false)}
              className={`flex ${
                !switching ? "bg-primary_SkyBlue/40" : "bg-primary_SkyBlue/5"
              } items-center border-[1px] border-gray-400 h-8 w-32 rounded-r-lg justify-center space-x-2 bg-primary_SkyBlue/40`}
            >
              {" "}
              <p
                className={`w-2.5 h-2.5 rounded-full ${
                  !switching ? "bg-green-900" : "bg-gray-400"
                }`}
              ></p>{" "}
              <span>Completed</span>
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
            <p>Task</p>
          </div>
          <span className="flex-grow-1"></span>
          <div className="right lg:w-[40%] flex justify-end pr-8 grid-cols-2">
            <p>Action</p>
          </div>
        </div>
        <div className="guerylists">
          {querieData.length >= 1 ? (
            // querieData.map((q) => (
              <div className="thead lg:pl-6 px-2 lg:gap-x-0 gap-x-5 w-full grid grid-cols-3 border-y-[1px] border-gray-200 h-12">
                <div className="tasks">
                  <p>
                    Conduct outreach to potential customers via phone, email,
                    and social media.
                  </p>
                  <div className="mark flex space-x-2 items-center">
                    <p className="h-[18px] w-[18px] border-[1px] border-primary_SkyBlue rounded-full"></p>{" "}
                    <span className="text-primary_SkyBlue text-xs">Mark as completed</span>
                  </div>
                </div>
                <span></span>
                <span></span>
                {/* Mobile */}
            
              </div>
            // ))
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

export default StaffTaskCard;
