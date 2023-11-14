import React from "react";
import HomeLayout from "../../Layouts/HomeLayout/HomeLayout";

const EmployeesProfile = () => {
  return (
    <HomeLayout>
      <div className="flex space-y-8 flex-col w-full">
        <header className="flex flex-col space-y-2 justify-start items-start">
          <img src="/back.png" alt="" />
          <h1 className="lg:text-2xl text-base font-bold">Employees</h1>
          <p className="opacity-80 text-xs">
            Get insight into full list of employees registered with the company
          </p>
        </header>

        <div className="flex lg:flex-row flex-col space-x-3 items-center justify-start">
          <img
            src="/bolanle.png"
            className="lg:w-[128px] bg-black h-[128px] rounded-full"
            alt=""
          />
          <div className="flex flex-col justify-center items-center space-y-2.5 ">
            <h1 className="lg:text-2xl text-base font-bold">Bolanle Awe</h1>
            <p className="opacity-70 lg:bg-transparent bg-primary_SkyBlue/10 px-2 rounded-full text-primary_SkyBlue">Content Creation</p>
          </div>
        </div>
        <form
          action=""
          method="get"
          className="grid lg:grid-cols-2 lg:gap-x-12 gap-x-0 gap-y-4 lg:p-4 rounded-b-xl pb-20"
        >
          <div className="name flex flex-col lg:space-y-1.5 space-y-1">
            <label htmlFor="email" className="lg:text-[14px] font-bold">
              Email:
            </label>
            <input
              className="text-[12px] lg:h-12 h-9 bg-[#E9F2FC] w-full pl-2 outline-none rounded-lg"
              type="text"
              name=""
              id=""
              placeholder="Enter email"
            />
          </div>
          {/*  */}
          <div className="name flex flex-col lg:space-y-1.5 space-y-1">
            <label htmlFor="phone_number" className="lg:text-[14px] font-bold">
              Email:
            </label>
            <div className="flex lg:space-x-4 space-x-2">
              <button className="text-[12px] lg:h-12 h-9 bg-[#E9F2FC] pl-2 outline-none rounded-lg lg:px-4 px-2">
                +234
              </button>
              <input
                className="text-[12px] lg:h-12 h-9 bg-[#E9F2FC] w-full pl-2 outline-none rounded-lg"
                type="text"
                name=""
                id=""
                placeholder="Enter Phone Number"
              />
            </div>
          </div>
          {/*  */}
          <div className="name flex flex-col lg:space-y-1.5 space-y-1">
            <label htmlFor="address" className="lg:text-[14px] font-bold">
              Address:
            </label>
            <input
              className="text-[12px] lg:h-12 h-9 bg-[#E9F2FC] w-full pl-2 outline-none rounded-lg"
              type="text"
              name=""
              id=""
              placeholder="Enter Address"
            />
          </div>
          {/*  */}
          <div className="name flex flex-col lg:space-y-1.5 space-y-1">
            <label htmlFor="Department" className="lg:text-[14px] font-bold">
              Department:
            </label>
            <input
              className="text-[12px] lg:h-12 h-9 bg-[#E9F2FC] w-full pl-2 outline-none rounded-lg"
              type="text"
              name=""
              id=""
              placeholder="Enter Department"
            />
          </div>
          {/*  */}
          <div className="name flex flex-col lg:space-y-1.5 space-y-1">
            <label htmlFor="position" className="lg:text-[14px] font-bold">
              Position:
            </label>
            <input
              className="text-[12px] lg:h-12 h-9 bg-[#E9F2FC] w-full pl-2 outline-none rounded-lg"
              type="text"
              name=""
              id=""
              placeholder="Enter position"
            />
          </div>
          {/*  */}
          <div className="name flex flex-col lg:space-y-1.5 space-y-1">
            <label htmlFor="date_of_employment" className="lg:text-[14px] font-bold">
              Date of Employment:
            </label>
            <input
              className="text-[12px] lg:h-12 h-9 bg-[#E9F2FC] w-full pl-2 outline-none rounded-lg"
              type="date"
              name=""
              id=""
              placeholder="Enter Date of Employment"
            />
          </div>
        </form>
      </div>
    </HomeLayout>
  );
};

export default EmployeesProfile;
