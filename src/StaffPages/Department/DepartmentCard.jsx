import React from 'react'
import { employeeData } from '../../utility/data';
import { Link } from 'react-router-dom';

const DepartmentCard = ({DepartmentDataProps}) => {
  return (
    <section className="tableSection">
      <div className="tableSectionTop flex justify-between h-20 items-center px-4">
        <h1 className="font-bold lg:block hidden">Employees</h1>
        <div
          className="searchInputs lg:w-[28rem] flex
           space-x-2.5 items-center lg:h-12 border-[#1D70C9]
            border-[1px]
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

      {DepartmentDataProps.length > 1 ? (
        DepartmentDataProps.map((e, i) => (
          <div key={i} className="eachInfo">
            <div className="staffInfo">
              <img src='' alt="" />
              <div className="nameAndMail">
                <p>Abdullahi</p>
                <p>Abdullahi</p>
              </div>
            </div>

            <p className="department">Abdullahi</p>
            <p>Abdullahi</p>
            <p>Abdullahi</p>
            <p>Abdullahi</p>
            <p className="action items-center">
            {'Details'} <img src="/slantArrow.png" alt="" />
          </p>

            <div className="mobileview lg:hidden flex flex-col justify-start text-start w-24">
            <p>Abdullahi</p>
            <p>Abdullahi</p>
          </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
     
    </section>
  );
}

export default DepartmentCard
