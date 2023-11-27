import React, { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { kosmos_post } from "../../../kosmos-module/kosmosRequest";

const AdminForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [errM, setErrm] = useState("");
  const [success, setSuccess] = useState("");

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
        setLoading(true)
      const formData = new FormData();
      formData.append("email", email);
      const url =
        "https://kosmoshr.pythonanywhere.com/api/v1/profile/forgot_password/";
      const response = await kosmos_post(url, formData);
      setLoading(false)
      setErrm(response.message)
      setSuccess(response.status)
    } catch (error) {
        setLoading(false)
        console.log(error)
    }
  };
  useEffect(() => {
    handleForgotPassword();
  }, []);
  return (
    <div className="flex flex-col h-screen justify-center lg:px-20 px-8">
      <img
        src="kosmos.png"
        className="absolute lg:top-20 top-8 lg:left-20 left-8"
        alt=""
      />
      <div className="forgot flex flex-col space-y-6">
        <Link to="/login">
          <img src="/back.png" className="w-6 h-6" alt="" />
        </Link>
        <h1 className="lg:text-2xl text-base font-bold">Forgot Password</h1>
        <div className="flex gap-1.5 flex-col ">
          <label className="font-bold" htmlFor="">
            Email:
          </label>
          <input
            className=" h-12 border-[1px] border-black/30 rounded-lg pl-2 outline-none lg:w-[352px]"
            type="email"
            placeholder="Enter Admin email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <p className="err text-red-500 text-xs">{errM}</p>
        <button
          onClick={handleForgotPassword}
          className="h-12 bg-primary_SkyBlue text-white rounded-xl lg:w-[352px] justify-center items-center flex outline-none"
        >
          {" "}
          {loading ? (
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="30"
              visible={true}
            />
          ) : (
            "Reset"
          )}
        </button>
      </div>
      <div
        className={`${
            success === "success" ? "flex" : "hidden"
        } absolute justify-center items-center backdrop-blur-lg bg-white/5 h-full w-full top-0 left-0 overflow-hidden`}
      >
        <div className="flex flex-col justify-center items-center space-y-8">
          <h1 className="text-xl text-center">
            {errM}
          </h1>
          <Link
            className="bg-primary_SkyBlue text-white h-10 w-52 rounded-xl inline-block flex justify-center items-center lg:text-xl text-lg"
            to={"/adminresetpassword"}
          >
            Click here to Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminForgotPassword;
