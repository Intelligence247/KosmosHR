import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
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

function App() {
  return (
    <div className="body">
      {/* <Navbar/> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/forgotpassword2" element={<ForgotPassword2 />} />
          <Route path="/employee" element={<Employees />} />
          <Route path="/task" element={<Task />} />
          <Route path="/pricing_subscription" element={<Pricing />} />
          <Route path="/splash" element={<Splash />} />
          <Route path="/onboardpage" element={<OnboardPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
