import React from "react";
import "../../Pages/HomePage/Home.css";
import { DataFromAdminLogin } from "../../../APITOKEN";
const Header = ({navInOut}) => {
  return (
    <header className="flex justify-between items-center w-full bg-white">
      <div
        className="searchInputs lg:w-[28rem] w-[10.5rem] flex lg:space-x-2.5 space-x-1 items-center lg:h-12 border-[rgb(29,112,201)] border-[1px]
  rounded-lg px-3 bg-white"
      >
        <button>Search</button>
        <img src="/search.png" className="lg:w-4 lg:h-4 h-3 w-3" alt="" />
        <input type="text" name="" id="" />
      </div>
      <div className="notifications">
        <div className="lg:h-12 lg:w-12 h-9 w-9 bg-[#E8E8E8] rounded-full grid place-content-center">
          {" "}
          <img
            src="notification.png"
            className="lg:w-6 lg:h-6 w-[18px] h-[18px]"
            alt=""
          />
        </div>
        {/* <img
          src="/profile.png"
          className="lg:w-12 lg:h-12 h-9 w-9 rounded-full"
          alt=""
        /> */}
        <p className="lg:block hidden">{DataFromAdminLogin?.user?.username}</p>
        <img onClick={()=> navInOut()} src="/Vector.png" className="lg:hidden block" alt="" />
      </div>
    </header>
  );
};

export default Header;
