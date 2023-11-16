import React, { useState } from "react";

const EmployeeModal = ({scaling, onclickHandle}) => {
   const formData = new FormData();
    formData.append('email', "johndoe@gmail.com")
    formData.append("title", "Mr")
    formData.append('first_name', "John")
    formData.append('last_name', "Doe")
    formData.append('middle_name', "B.")
    formData.append("city", "Ilorin")
    formData.append('state', "Kwara")
    formData.append('nationality', "Nigeria")
    formData.append('phone_number', "09056574634")
    formData.append('account_type', "employee") // can either be "staff" or "employee"
    formData.append('position', 2) // (an integer) id of the selected position (check documentation on how to fetch positions and departments), select form field is advised
    formData.append('department', 1) // same as position
    formData.append('salary', 150000.00) // a decimal field
    formData.append('date_of_birth', "1987-02-05")
    formData.append('appointment_date', "2023-11-05")
    formData.append('address', "Allen Avenue")
    formData.append('image', "") // image file
    formData.append('api_token', "admin-api-token")
 
  return (
  <div
      className={` z-50 duration-500 ease-in w-screen inset-0 h-[100vh] fixed overflow-auto py-6 bg-black bg-opacity-25 backdrop-blur-sm lg:grid place-content-center lg:px-0 px-4 ${scaling}`}>
      <div className="lg:w-[70vw] w-full rounded-xl bg-white pb-4">
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
