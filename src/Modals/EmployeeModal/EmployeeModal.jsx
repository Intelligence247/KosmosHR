import React, { useState } from "react";

const EmployeeModal = ({scaling, onclickHandle}) => {
  const handleClicks = () => {
    setVisible(!visible);
  };
  return (
    // ${visible?'scale-1':'scale-0'}
    <div
      className={`w-screen inset-0 h-[100vh] fixed overflow-auto py-6 bg-black bg-opacity-25 backdrop-blur-sm z-10 lg:grid place-content-center lg:px-0 px-4 ${scaling}`}>
      <div className="lg:w-[70vw] z-50 w-full rounded-xl bg-white pb-4">
        <header className="flex flex-col justify-center items-center rounded-t-xl pt-4">
          <h1 className="font-bold lg:text-2xl text-xl">New Employees</h1>
          <p>Set up new Employee profiles</p>
        </header>
        <div className="inputEmployeedata grid lg:grid-cols-2 lg:gap-x-12 gap-x-0 gap-y-4 place-content-center p-4 rounded-b-xl ">
          <div className="name flex flex-col lg:space-y-1.5 space-y-1">
            <label htmlFor="name" className="lg:text-[14px] font-bold">
              Name:
            </label>
            <input
              className="text-[12px] lg:h-12 h-9 border-[#000]/40 border-[2px] w-full pl-2 outline-none rounded-lg"
              type="text"
              name=""
              id=""
              placeholder="Enter name"
            />
          </div>
          <div className="name flex flex-col lg:space-y-1.5 space-y-1">
            <label htmlFor="name" className="lg:text-[14px] font-bold">
              Email:
            </label>
            <input
              className="text-[12px] lg:h-12 h-9 border-[#000]/40 border-[2px] w-full pl-2 outline-none rounded-lg"
              type="text"
              name=""
              id=""
              placeholder="Enter Email"
            />
          </div>
          <div className="name flex flex-col lg:space-y-1.5 space-y-1">
            <label htmlFor="name" className="lg:text-[14px] font-bold">
              Phone Number:
            </label>
            <div className="flex lg:space-x-4 space-x-2">
              <button className="text-[12px] lg:h-12 h-9 border-[#000]/40 border-[2px] pl-2 outline-none rounded-lg lg:px-4 px-2">
                +234
              </button>
              <input
                className="text-[12px] lg:h-12 h-9 border-[#000]/40 border-[2px] w-full pl-2 outline-none rounded-lg"
                type="text"
                name=""
                id=""
                placeholder="Enter Phone Number"
              />
            </div>
          </div>
          <div className="name flex flex-col lg:space-y-1.5 space-y-1">
            <label htmlFor="name" className="lg:text-[14px] font-bold">
              Address:
            </label>
            <input
              className="text-[12px] lg:h-12 h-9 border-[#000]/40 border-[2px] w-full pl-2 outline-none rounded-lg"
              type="text"
              name=""
              id=""
              placeholder="Enter Address"
            />
          </div>
          <div className="name flex flex-col lg:space-y-1.5 space-y-1">
            <label htmlFor="name" className="lg:text-[14px] font-bold">
              Department:
            </label>
            <input
              className="text-[12px] lg:h-12 h-9 border-[#000]/40 border-[2px] w-full pl-2 outline-none rounded-lg"
              type="text"
              name=""
              id=""
              placeholder="Enter Department"
            />
          </div>
          <div className="name flex flex-col lg:space-y-1.5 space-y-1">
            <label htmlFor="name" className="lg:text-[14px] font-bold">
              Position:
            </label>
            <input
              className="text-[12px] lg:h-12 h-9 border-[#000]/40 border-[2px] w-full pl-2 outline-none rounded-lg"
              type="text"
              name=""
              id=""
              placeholder="Enter Position"
            />
          </div>
          <div className="name flex flex-col lg:space-y-1.5 space-y-1">
            <label htmlFor="name" className="lg:text-[14px] font-bold">
              Salary:
            </label>
            <input
              className="text-[12px] lg:h-12 h-9 border-[#000]/40 border-[2px] w-full pl-2 outline-none rounded-lg"
              type="text"
              name=""
              id=""
              placeholder="Enter Salary"
            />
          </div>
          <div className="name flex flex-col lg:space-y-1.5 space-y-1">
            <label htmlFor="name" className="lg:text-[14px] font-bold">
              Date of Employment:
            </label>
            <input
              className="text-[12px] lg:h-12 h-9 border-[#000]/40 border-[2px] w-full pl-2 outline-none rounded-lg"
              type="date"
              name=""
              id=""
              placeholder="Enter Address"
            />
          </div>
        </div>
        <div className="btnFooter flex lg:justify-end justify-between px-4 space-x-8">
          <button
            onClick={() => onclickHandle()}
            className="lg:h-12 h-9 border-[1px] lg:w-[12rem] w-[40%] rounded-lg border-primary_SkyBlue hover:bg-primary_SkyBlue hover:text-white"
          >
            Cancel
          </button>
          <button className="lg:h-12 h-9 border-[1px] lg:w-[12rem] w-[40%] rounded-lg border-primary_SkyBlue bg-primary_SkyBlue hover:bg-primary_DeepBlue text-white">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeModal;
