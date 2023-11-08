import React, { useState } from "react";
import HomeLayout from "../../Layouts/HomeLayout/HomeLayout";
import DepartmentCard from "./DepartmentCard";
import { employeeData } from "../../utility/data";

const Department = () => {
  const [sliceOption, setSliceOption] = useState(0);
  return <HomeLayout>
     <div className="flex space-y-8 flex-col w-full;">
    
    <header className="flex flex-col space-y-2 justify-start items-start">
        <img src="/back.png" alt="" />
        <h1 className="lg:text-2xl text-base font-bold">Departments</h1>
        <p className="opacity-80">Get to know and interact with team members</p>
    </header>
   <DepartmentCard
   DepartmentDataProps= {employeeData.slice(sliceOption, sliceOption+8)}
   />
    <div className="dataController flex justify-center items-center space-x-8">
          <p
            onClick={() => {
              sliceOption <= 8
                ? setSliceOption(sliceOption - 0)
                : setSliceOption(sliceOption - 8);
            }}
          >
            <img src="/displayLeft.png" alt="" />
          </p>
          <p onClick={() => setSliceOption(8)}>1</p>
          <p onClick={() => setSliceOption(16)}>2</p>
          <p onClick={() => setSliceOption(24)}>3</p>
          <p
            onClick={() => {
              employeeData.length - 8 <= sliceOption
                ? setSliceOption(sliceOption + 0)
                : setSliceOption(sliceOption + 8);
            }}
          >
            <img src="/displayRight.png" alt="" />
          </p>
        </div>
    </div>
  </HomeLayout>;
};

export default Department;
