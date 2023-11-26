import React from "react";
import StaffHomeLayout from "../../Layouts/StaffHomeLayout/StaffHomeLayout";
import { Link } from "react-router-dom";
import StaffTaskCard from "./StaffTaskCard";

const StaffTasks = () => {
  return (
    <StaffHomeLayout>
      <header className="flex flex-col space-y-2 justify-start items-start">
        <img src="/back.png" alt="" />
        <h1 className="lg:text-2xl text-base font-bold">Welcome back</h1>
        <p className="opacity-80">Use the navigation bar for quick access to all our features.</p>
      </header>
      <div className="notifiv lg:bg-[#E9F2FC] lg:h-16 lg:px-8 h-11 flex items-center w-full gap-8">
        <img src="/information.png" className="lg:block hidden" alt="info logo" />
        <p className="lg:text-sm text-xs lg:block hidden">Do not forget to send in your Daily Report at the end of each day</p>
        <span className="flex-1 lg:block hidden"></span>
        <Link
          to={"/newtask"}
            className="text-primary_DeepBlue bg-[#BAD6F4] flex space-x-2 justify-center
            items-center text-[14px] lg:h-12 h-9 lg:py-3 py-1 px-6 rounded-xl cursor-pointer"
          >
            <p className="whitespace-nowrap">Send Report</p>
            <img src="/front.png" alt="" />
          </Link>
      </div>

<StaffTaskCard/>
      
    </StaffHomeLayout>
  );
};

export default StaffTasks;
