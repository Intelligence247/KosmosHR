import React, { useState } from "react";
import "../../Pages/LoginPage/Login.css";
import { Link } from "react-router-dom";
const Onboard = ({ bghidden, title, desc, reverse, link }) => {
  const [autoPlay, setautoPlay] = useState(false);

  return (
    <div
      className={`${bghidden} onboard px-8 justify-center
       items-end lg:pb-[4.8125rem] pb-[2rem] h-screen bg-no-repeat;`}
    >
      <div
        className="onboardContents lg:w-[30rem] w-full h-[12rem] lg:h-[15rem] backdrop-blur-xl bg-[#0B0A0A]/30
         text-white flex justify-center items-center flex-col space-y-4 rounded-lg px-8"
      >
        <h1 className="lg:text-[30px] leading-[32px] text-center ">{title}</h1>
        <p className="text-center">{desc}</p>
        <div className="flex space-x-8 justify-between items-center w-full ">
          <div className={`twodots flex gap-2 ${reverse}`}>
            <p className="flex bg-primary_SkyBlue w-6 lg:h-2 h-1 rounded-full"></p>
            <p className="lg:w-2 lg:h-2 w-1 h-1 bg-white rounded-full"></p>
          </div>
          <Link to={link} className="navigationArrow w-6 h-6 bg-white rounded-full flex justify-center items-center lg:hidden">
            <img src="/front.png" className="w-2.5" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Onboard;
