import React, { useState } from "react";
import "./Employees.css";
import Header from "../../Components/Header/Header";
import MainMenu from "../../Components/MainMenu/MainMenu";
import EmployeeTableCard from "./EmployeeTableCard";
import { employeeData } from "../../utility/data2";

const Employees = () => {
  const [sliceOption, setsliceOption] = useState(0);
  console.log(sliceOption+900)
  return (
    <div className="employeesWrapper">
      <MainMenu />
      <div className="employeeRight">
        <Header />

        <section className="employeeSection">
          <div className="employee">
            <img src="/back.png" alt="" />
            <h1>Employees</h1>
            <p>
              Get insight into full list of employees registered wip pe company
            </p>
          </div>
          <div className="onboard">
            <p>Onboard New Staff</p>
            <img src="/front.png" alt="" />
          </div>
        </section>

        <EmployeeTableCard
        employeeDataProps={employeeData.slice(sliceOption-1, 8+sliceOption)}
        hideViewall={'hidden'}
         />
        <div className="dataController flex justify-center items-center space-x-8">
          <p onClick={()=> setsliceOption(sliceOption-8)}>
            <img src="/displayLeft.png" alt="" />
          </p>
          <p onClick={()=> setsliceOption(8)}>1</p>
          <p onClick={()=> setsliceOption(16)}>2</p>
          <p onClick={()=> setsliceOption(24)}>3</p>
          <p onClick={()=> setsliceOption(sliceOption+8)}>
          <img src="/displayRight.png" alt="" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Employees;
