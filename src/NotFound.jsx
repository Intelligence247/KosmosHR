import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="lg:w-[50vw] text-center px-8 h-screen overflow-hidden flex justify-center items-center flex-col gap-8">
      Page not found, kindly click the button below to go back to the home page
      <Link to="/">
        <button className="px-8 h-12 bg-primary_SkyBlue text-white rounded-xl justify-center items-center flex">
          Home{" "}
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
