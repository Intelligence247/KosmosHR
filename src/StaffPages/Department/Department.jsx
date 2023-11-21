import React, { useEffect, useState } from "react";
import HomeLayout from "../../Layouts/HomeLayout/HomeLayout";
import DepartmentCard from "./DepartmentCard";
// import { employeeData } from "../../utility/data";
import StaffHomeLayout from "../../Layouts/StaffHomeLayout/StaffHomeLayout";
import { Link } from "react-router-dom";
import axios from "axios";
import EmployeeTableCard from "../../Pages/Employees/EmployeeTableCard";

const Department = () => {
  const [sliceOption, setSliceOption] = useState(0);
  const [EmployeeData, setEmployeeData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getEmployeeData = async (e) => {
    try {
      setLoading(true)
      const response = axios
        .get(
          "https://kosmoshr.pythonanywhere.com/api/v1/employees/get_employees/"
        )
        .then((response) => {
          response.data.data !== undefined
            ?  (setEmployeeData(response.data.data), setLoading(false))
            : setLoading(false)
        });
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  };
  useEffect(() => {
    getEmployeeData();
  }, []);
  return (
    <StaffHomeLayout>
      <div className="flex space-y-8 flex-col w-full;">
        <header className="flex flex-col space-y-2 justify-start items-start">
          <img src="/back.png" alt="" />
          <h1 className="lg:text-2xl text-base font-bold">Co-workers</h1>
          <p className="opacity-80">
            Get to know and interact with team members
          </p>
        </header>
        {/* <DepartmentCard
   DepartmentDataProps= {EmployeeData.slice(sliceOption, sliceOption+8)}
   /> */}
        <EmployeeTableCard
          employeeDataProps={EmployeeData.slice(sliceOption, sliceOption + 8)}
          hideViewall={"hidden"}
          title={"Team members"}
          loading={loading}
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
              EmployeeData.length - 8 <= sliceOption
                ? setSliceOption(sliceOption + 0)
                : setSliceOption(sliceOption + 8);
            }}
          >
            <img src="/displayRight.png" alt="" />
          </p>
        </div>
      </div>
    </StaffHomeLayout>
  );
};

export default Department;
