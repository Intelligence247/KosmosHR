import "./Home.css";
import EmployeeTableCard from "../Employees/EmployeeTableCard";
import { taskData } from "../../utility/data";
import HomeLayout from "../../Layouts/HomeLayout/HomeLayout";
import TaskTable from "../TaskPage/TaskTable";
import { useEffect, useState } from "react";
import axios from "axios";
const Home = () => {
  const [employeeData, setEmployeeData] = useState([]);
  // console.log(employeeData)
  const getEmployeeData = async (e) => {
    
    try {
      const response = axios.get(
          "https://kosmoshr.pythonanywhere.com/api/v1/employees/get_employees/"
        )
        .then((response) => {
         response.data.data !== undefined ? setEmployeeData(response.data.data):'';

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
      <div className="rightHomepageWrapper">
        <div className="welcome">
          <h1>Welcome Back</h1>
          <p>Use the navigation bar for quick access to all our features.</p>
        </div>
        <div className="Info">
          <div className="eachInfo ">
            <h1>Number of Employees</h1>
            <div className="value">
              <img src="/info2.png" alt="" />
              <p>20</p>
            </div>
          </div>
          {/*  */}
          <div className="eachInfo ">
            <h1>Number of Departments</h1>
            <div className="value">
              <img src="/info3.png" alt="" />
              <p>6</p>
            </div>
          </div>
          {/*  */}
          <div className="eachInfo ">
            <h1>Pending Queries</h1>
            <div className="value">
              <img src="/info1.png" alt="" />
              <p>1</p>
            </div>
          </div>
        </div>
        <TaskTable tableDataProps={taskData.slice(0, 3)} />
        <EmployeeTableCard employeeDataProps={employeeData.slice(0, 3)} />
      </div>
    </HomeLayout>
  );
};

export default Home;
