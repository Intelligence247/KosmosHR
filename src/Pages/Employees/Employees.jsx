import React from "react";
import "./Employees.css";
import Header from "../../Components/Header/Header";
import MainMenu from "../../Components/MainMenu/MainMenu";
import EmployeeTableCard from "./EmployeeTableCard";

const Employees = () => {
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

        <EmployeeTableCard />
        <div className="dataController flex justify-center items-center space-x-8">
          <p>
            <img src="/displayLeft.png" alt="" />
          </p>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>
          <img src="/displayRight.png" alt="" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Employees;
