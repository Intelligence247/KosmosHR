import React, { useState } from "react";
import "./Employees.css";
import EmployeeTableCard from "./EmployeeTableCard";
import { employeeData } from "../../utility/data";
import HomeLayout from "../../Layouts/HomeLayout/HomeLayout";
import { Link } from "react-router-dom";

const Employees = () => {
  const [sliceOption, setsliceOption] = useState(0);
  console.log(sliceOption);
  console.log(employeeData.length);
  return (
    <HomeLayout>
      <div className="employeeRight">
        <section className="employeeSection">
          <div className="employee">
            <Link to="/">
              {" "}
              <img src="/back.png" alt="" />
            </Link>
            <h1 className="">Employees</h1>
            <p>
              Get insight into full list of employees registered wip pe company
            </p>
          </div>
          <div className="employeeonboard">
            <p>Onboard New Staff</p>
            <img src="/front.png" alt="" />
          </div>
        </section>

        <EmployeeTableCard
          employeeDataProps={employeeData.slice(2, 8)}
          hideViewall={"hidden"}
        />
        <div className="dataController flex justify-center items-center space-x-8">
          <p onClick={() => setsliceOption(sliceOption - 8)}>
            <img src="/displayLeft.png" alt="" />
          </p>
          <p onClick={() => setsliceOption(8)}>1</p>
          <p onClick={() => setsliceOption(16)}>2</p>
          <p onClick={() => setsliceOption(24)}>3</p>
          <p onClick={() => setsliceOption(sliceOption + 8)}>
            <img src="/displayRight.png" alt="" />
          </p>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Employees;
