import React, { useEffect, useState } from "react";
import LoginSignLayout from "../../Layouts/LoginSignLayout/LoginSignLayout";
import "./Login.css";
import { Link } from "react-router-dom";
import { kosmos_post } from "../../../kosmos-module/kosmosRequest";
const Login = () => {
  const [inputValues, setInputValues] = useState({
    username: "",
    password: "",
  });
  console.log(inputValues)
  const handleLogin = async (e) => {
    e.preventDefault();
    const url =
      "https://kosmoshr.pythonanywhere.com/api/v1/profile/authentication/";
    try {
      const formData = new FormData();
      formData.append("username", inputValues.username);
      formData.append("password", inputValues.password);
      e.preventDefault();
      const data = await kosmos_post(url, formData);
      console.log(data);
    } catch (err) {
      console.log(err)
    }
  };
  useEffect(() => {
    handleLogin();
  }, []);
  return (
    <LoginSignLayout>
      <form
        onSubmit={handleLogin}
        action=""
        className=" w-full min-h-screen flex flex-col justify-center space-y-4 "
        method="get"
      >
        <div className="lg:hidden flex justify-center w-full items-center pb-4">
          <img src="/kosmos.png" alt="" />
        </div>
        <h1 className="lg:text-2xl text-base font-bold">
          Sign Into Company Account
        </h1>
        <div className="inputs">
          <label htmlFor="username ">Username:</label>
          <input
            onChange={(e) =>
              setInputValues({ ...inputValues, username: e.target.value })
            }
            type="text"
            placeholder="Enter Your username "
          />
        </div>
        <div className="inputs">
          <label htmlFor="password ">Password:</label>
          <input 
           onChange={(e) =>
            setInputValues({ ...inputValues, password: e.target.value })
          }
          type="password" placeholder="Enter Your Password " />
          <button className="text-right text-black/70 text-[12px]">
            Click if You Lost Your Password
          </button>
        </div>
        <Link
          to="/home"
          className="h-12 bg-primary_SkyBlue text-white rounded-xl justify-center items-center flex"
        >
          Login
        </Link>
        <div className="notAmember">
          <p>
            Not a member?{" "}
            <Link to="/signin" className="text-primary_SkyBlue">
              Create an Account
            </Link>
          </p>
        </div>
      </form>
    </LoginSignLayout>
  );
};

export default Login;
// 22, 24.8
