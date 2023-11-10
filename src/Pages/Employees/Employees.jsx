import React, { useEffect, useState } from "react";
import "./Employees.css";
import EmployeeTableCard from "./EmployeeTableCard";
import { employeeData, employeeurl } from "../../utility/data";
import HomeLayout from "../../Layouts/HomeLayout/HomeLayout";
import { Link } from "react-router-dom";
import EmployeeModal from "../../Modals/EmployeeModal/EmployeeModal";
import axios from "axios";
const Employees = () => {
  const [sliceOption, setsliceOption] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [EmployeeData, setEmployeeData] = useState([]);
  console.log(EmployeeData);
  const clickFunction = () => {
    setShowModal(!showModal);
  };
  console.log(employeeurl);
  const getEmployeeData = async (e) => {
    try {
      const response = axios.get(employeeurl).then((response) => {
        setEmployeeData(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getEmployeeData();
    
  }, []);
  
  return (
    <HomeLayout>
      <EmployeeModal
        onclickHandle={clickFunction}
        scaling={showModal ? "scale-1" : "scale-0"}
      />

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
          <div
            onClick={() => clickFunction()}
            className="employeeonboard cursor-pointer"
          >
            <p>Onboard New Staff</p>
            <img src="/front.png" alt="" />
          </div>
        </section>

          <EmployeeTableCard
            employeeDataProps={EmployeeData.slice(sliceOption, sliceOption + 8)}
            hideViewall={"hidden"}
          />

        <div className="dataController flex justify-center items-center space-x-8">
          <p
            onClick={() => {
              sliceOption <= 8
                ? setsliceOption(sliceOption - 0)
                : setsliceOption(sliceOption - 8);
            }}
          >
            <img src="/displayLeft.png" alt="" />
          </p>
          <p onClick={() => setsliceOption(8)}>1</p>
          <p onClick={() => setsliceOption(16)}>2</p>
          <p onClick={() => setsliceOption(24)}>3</p>
          <p
            onClick={() => {
              employeeData.length - 8 <= sliceOption
                ? setsliceOption(sliceOption + 0)
                : setsliceOption(sliceOption + 8);
            }}
          >
            <img src="/displayRight.png" alt="" />
          </p>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Employees;
