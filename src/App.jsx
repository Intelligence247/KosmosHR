import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
// import {BrowserRouter as Route, Routes } from 'react-router-dom'
import Home from "./Pages/HomePage/Home";
import Login from "./Pages/LoginPage/Login";
import Pricing from "./Pages/Pricing_SubscriptionPage/Pricing";

function App() {
  return (
    <div className="body">
      <Navbar />

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pricing_subscription" element={<Pricing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
