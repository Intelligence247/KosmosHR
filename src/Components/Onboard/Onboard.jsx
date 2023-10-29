import React from "react";
import "../../Pages/LoginPage/Login.css";
const Onboard = ({ bghidden }) => {
  return (
    <div
      className={`${bghidden} onboard px-8 justify-center items-end lg:pb-[4.8125rem] pb-[2rem]`}
    >
      <div
        className="onboardContents  lg:w-[30rem] w-full h-[12rem] lg:h-[15rem] backdrop-blur-xl bg-[#0B0A0A]/30
         text-white flex justify-center items-center flex-col space-y-4 rounded-lg"
      >
        <h1 className="lg:text-[30px]">Task, Report, Connect</h1>
        <p>Revolutionizing Employee Management:</p>
        <div className="flex space-x-8 justify-between items-center w-full px-8">
          <div className="twodots flex space-x-2">
            <p className="flex bg-primary_SkyBlue w-6 lg:h-2 h-1 rounded-full"></p>
            <p className="lg:w-2 lg:h-2 w-1 h-1 bg-white rounded-full"></p>
          </div>
          <div className="navigationArrow w-6 h-6 bg-white rounded-full flex justify-center items-center">
            <img src="/front.png" className="w-2.5" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboard;
