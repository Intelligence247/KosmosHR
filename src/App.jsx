import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./Components/Navbar/Navbar";
// import {BrowserRouter as Route, Routes } from 'react-router-dom'
import Home from "./Pages/HomePage/Home";
import Login from "./Pages/LoginPage/Login";
import Pricing from "./Pages/Pricing_SubscriptionPage/Pricing";
import Employees from "./Pages/Employees/Employees";
import Task from "./Pages/TaskPage/Task";
import Splash from "./Pages/Splash/Splash";
import OnboardPage from "./Pages/OnboardPage/OnboardPage";
import Signin from "./Pages/Signin/Signin";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import ForgotPassword2 from "./Pages/ForgotPassword/ForgotPassword2";
import { useMediaQuery } from "react-responsive";
import OnboardPage2 from "./Pages/OnboardPage/OnboardPage2";
import axios from "axios";
import { useEffect, useState } from "react";
import Department from "./StaffPages/Department/Department";
import EmployeesProfile from "./StaffPages/EmployeesProfile/EmployeesProfile";
import FillingCards from "./Pages/FillingCards/FillingCards";
import FinalReceipt from "./Pages/FinalReceipt/FinalReceipt";
import Pricing2 from "./Pages/Pricing_SubscriptionPage/Pricing2";

function App() {
  const isTablet = useMediaQuery({ maxWidth: "768px" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const [api, setapi] = useState([]);

  const baseUrl = "https://backend.getlinked.ai";
  const employeeurl = `${baseUrl}/hackathon/categories-list`;
  const url =
    "https://kosmoshr.pythonanywhere.com/api/v1/employees/get_employee/?employee_id=kos0009";
  //  "https://kosmoshr.pythonanywhere.com/api/v1/site/get_site_info/";
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  const callAPI = () => {
    axios
      .get(url, {
        headers: headers,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    callAPI();
  }, []);
  return (
    <div className="body">
      <Router>
        <Routes>
          {isPortrait || isTablet ? (
            <Route path="/" element={<Splash />} />
          ) : (
            <Route path="/" element={<Signin />} />
          )}
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/forgotpassword2" element={<ForgotPassword2 />} />
          <Route path="/employee" element={<Employees />} />
          <Route path="/task" element={<Task />} />
          <Route path="/pricing_subscription" element={<Pricing />} />
          <Route path="/pricing_subscription2" element={<Pricing2 />} />
          <Route path="/onboardpage1" element={<OnboardPage />} />
          <Route path="/onboardpage2" element={<OnboardPage2 />} />
          <Route path="/department" element={<Department />} />
          <Route path="/employeesprofile" element={<EmployeesProfile />} />
          <Route path="/fillingcard" element={<FillingCards />} />
          <Route path="/finalreceipt" element={<FinalReceipt />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
