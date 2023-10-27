import React from "react";
import "./Employees.css";
import { employeeData } from "../../utility/data2";
import { Link } from "react-router-dom";

const EmployeeTableCard = ({ employeeDataProps, hideViewall }) => {
  return (
    <section className="tableSection">
      <div className="tableSectionTop flex justify-between h-20 items-center px-4">
        <h1 className="font-bold">Employees</h1>
        <div
          className="searchInputs w-[28rem] flex space-x-2.5 items-center h-12 border-[#1D70C9] border-[1px]
rounded-lg px-3 bg-white"
        >
          <button>Search</button>
          <img src="/search.png" alt="" />
          <input type="text" name="" id="" />
        </div>
      </div>
      <div className="tableHeader">
        <p>Staff</p>

        <p>Department</p>
        <p>Position</p>
        <p>Phone Number</p>
        <p>City</p>
        <p>Action</p>
      </div>
      {employeeDataProps.map((e,i) => (
        <div key={i} className="eachInfo">
          <div className="staffInfo">
            <img src={`${e.avartar}`} alt="" />
            <div className="nameAndMail">
              <p>{e.staffName}</p>
              <p>{e.email}</p>
            </div>
          </div>
          <p>{e.department}</p>
          <p>{e.position}</p>
          <p>{e.phone_no}</p>
          <p>{e.city}</p>
          <p className="items-center">
            {e.action} <img src="/slantArrow.png" alt="" />
          </p>
        </div>
      ))}
      <Link to="/employee" className={`flex items-center 
      justify-center h-16
       text-primary_SkyBlue underline cursor-pointer ${hideViewall}`}>View all<img src="/slantArrow.png" alt="" /></Link>
    </section>
  );
};

export default EmployeeTableCard;
