import React from "react";
import "../../Pages/HomePage/Home.css";
const Header = () => {
  return (
    <header className="">
      <div className="searchInputs w-[28rem] flex space-x-2.5 items-center h-12 border-[#1D70C9] border-[1px]
         rounded-lg px-3 bg-white">
        <button>Search</button>
        <img src="/search.png" alt="" />
        <input type="text" name="" id="" />
      </div>
      <div className="notifications">
        <div className="h-12 w-12 bg-[#E8E8E8] rounded-full grid place-content-center">
          {" "}
          <img src="notification.png" alt="" />
        </div>
        <img src="/profile.png" alt="" />
        <p>HR Admin</p>
      </div>
    </header>
  );
};

export default Header;
