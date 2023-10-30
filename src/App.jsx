import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
// import {BrowserRouter as Route, Routes } from 'react-router-dom'
import Home from './Pages/HomePage/Home'
import Login from './Pages/LoginPage/Login'
import Pricing from "./Pages/Pricing_SubscriptionPage/Pricing";
import Employees from "./Pages/Employees/Employees";
import SignIn from "./sign_in__pages/signIn_pages";


function App() {
  return (
      <div className='body'>
        {/* <Navbar/> */}

      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path="/employee" element={<Employees/>} />
          <Route path="/pricing_subscription" element={<Pricing />} />
          <Route path="/signin" element = {<SignIn/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
