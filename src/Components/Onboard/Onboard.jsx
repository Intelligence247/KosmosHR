import React from "react";
import "../../Pages/LoginPage/Login.css";
const Onboard = () => {
  return (
    <div className="onboard px-8 flex justify-center items-end lg:pb-[4.8125rem] pb-[2rem]">
      <div
        className="onboardContents  lg:w-[30rem] w-full h-[12rem] lg:h-[15rem] backdrop-blur-xl bg-[#0B0A0A]/30
         text-white flex justify-center items-center flex-col space-y-4 rounded-lg"
      >
        <h1 className="lg:text-[30px]">Task, Report, Connect</h1>
        <p>Revolutionizing Employee Management:</p>
      </div>
    </div>
  );
};

export default Onboard;
