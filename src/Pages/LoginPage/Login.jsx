import React from "react";
import LoginSignLayout from "../../Layouts/LoginSignLayout/LoginSignLayout";
import "./Login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <LoginSignLayout>
      <div className="flex justify-center w-full items-center pb-4">
      <img src="/kosmos.png" alt="" />
      </div>
      <h1 className="lg:text-2xl text-base font-bold">Sign Into Company Account</h1>
      <div className="inputs">
        <label htmlFor="email ">Email:</label>
        <input type="email" placeholder="Enter Your Email " />
      </div>
      <div className="inputs">
        <label htmlFor="password ">Password:</label>
        <input type="password" placeholder="Enter Your Password " />
      <button className="text-right text-black/70 text-[12px]">Click if  You Lost Your Password</button>
      </div>
      <button className="h-12 bg-primary_SkyBlue text-white rounded-xl">Login</button>
<div className="notAmember">
  <p>Not a member? <Link to='' className="text-primary_SkyBlue">Create an Account</Link></p>
</div>
    </LoginSignLayout>
  );
};

export default Login;
// 22, 24.8
