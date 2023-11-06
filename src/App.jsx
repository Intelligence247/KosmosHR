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

function App() {
  const isTablet = useMediaQuery({ maxWidth: "768px" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
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
          <Route path="/onboardpage1" element={<OnboardPage />} />
          <Route path="/onboardpage2" element={<OnboardPage2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
