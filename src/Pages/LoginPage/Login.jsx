import React, { useEffect, useState } from "react";
import LoginSignLayout from "../../Layouts/LoginSignLayout/LoginSignLayout";
import "./Login.css";
import { Link } from "react-router-dom";
import { kosmos_post } from "../../../kosmos-module/kosmosRequest";
import { useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

const Login = () => {
  const [islogin, setislogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errM, setErrM] = useState('');

  const navigate = useNavigate();

  const [inputValues, setInputValues] = useState({
    username: "",
    password: "",
  });
  console.log(inputValues);
  const handleLogin = async (e) => {
    e.preventDefault();
    const url =
      "https://kosmoshr.pythonanywhere.com/api/v1/profile/authentication/";
    try {
      setLoading(true)
      setErrM('')

      const formData = new FormData();
      formData.append("username", inputValues.username);
      formData.append("password", inputValues.password);
      e.preventDefault();
      const data = await kosmos_post(url, formData);
      console.log(data.status);
      setislogin(true);
      data.status == 'success'? setislogin(true): setislogin(false)
      setLoading(false)
      setErrM('')

    } catch (err) {
      setislogin(false);
      setLoading(false);
      console.log(err);
      console.log(err.message)
      setErrM(err.message)

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
            type="password"
            placeholder="Enter Your Password "
          />
          <p className="err text-red-500 text-xs">{errM}</p>
          <Link to={"/forgotpassword"} className="text-right text-black/70 text-[12px]">
            Click if You Lost Your Password
          </Link>
        </div>
         
          <button
          onCanPlay={handleLogin}
          className="h-12 bg-primary_SkyBlue text-white rounded-xl justify-center items-center flex">
{
  loading? (
    <RotatingLines
    strokeColor="white"
    strokeWidth="5"
    animationDuration="0.75"
    width="30"
    visible={true}
  />
  ): (
    "Login"
  )
}
        </button>
        
        <div className="notAmember">
          <p>
            Not a member?{" "}
            <Link to="/signin" className="text-primary_SkyBlue">
              Create an Account
            </Link>
          </p>
        </div>
      
      </form>
      <div className={`${islogin?"flex": "hidden"} absolute justify-center items-center backdrop-blur-lg bg-white/5 h-full w-full top-0 left-0 overflow-hidden`}>
          <div className="flex flex-col justify-center items-center space-y-8">
<h1 className="text-xl">Successfully Logged in!!!</h1>
<Link className="bg-primary_SkyBlue text-white h-10 w-52 rounded-xl inline-block flex justify-center items-center lg:text-xl text-lg" to={"/home"}>
  Click here to Continue
</Link>
</div>
        </div>
    </LoginSignLayout>
  );
};

export default Login;
// 22, 24.8
