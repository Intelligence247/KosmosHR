import "./Home.css";
import EmployeeTableCard from "../Employees/EmployeeTableCard";
import { employeeData, taskData } from "../../utility/data";
import HomeLayout from "../../Layouts/HomeLayout/HomeLayout";
import TaskTable from "../TaskPage/TaskTable";
const Home = () => {
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
