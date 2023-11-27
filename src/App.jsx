import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import EmployeeModal from "./Modals/EmployeeModal/EmployeeModal";
import EditEmployee from "./Pages/EditEmployee/EditEmployee";
import Communication from "./StaffPages/Communication/Communication";
import SendCommunication from "./StaffPages/SendCommunication/SendCommunication";
import StaffTasks from "./StaffPages/StaffTasks/StaffTasks";
import NotFound from "./NotFound";
import AdminForgotPassword from "./Pages/ForgotPassword/AdminForgotPassword";
import AdminRessetPassword from "./Pages/ForgotPassword/AdminRessetPassword";

function App() {
  const isTablet = useMediaQuery({ maxWidth: "768px" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const [api, setapi] = useState([]);

 
  return (
    <div className="body">
      <Router>
        <Routes>
          {isPortrait || isTablet ? (
            <Route path="/" element={<Splash />} />
          ) : (
            <Route path="/" element={<Login />} />
          )}
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword" element={<ForgotPassword2 />} />
          <Route path="/adminforgotpassword" element={<AdminForgotPassword />} />
          <Route path="/adminresetpassword" element={<AdminRessetPassword />} />
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
          <Route path="/onboardemployee" element={<EmployeeModal />} />
          <Route path="/editemployee" element={<EditEmployee />} />
          <Route path="/communication" element={<Communication />} />
          <Route path="/sendcommunication" element={<SendCommunication />} />
          <Route path="/stafftasks" element={<StaffTasks />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
