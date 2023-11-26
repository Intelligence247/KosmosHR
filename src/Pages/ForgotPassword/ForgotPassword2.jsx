import React, { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { Link } from "react-router-dom";

const ForgotPassword2 = () => {
  const [loading, setLoading] = useState(false);
  const [errM, setErrM] = useState("");
  const [success, setSuccess] = useState('');

  const [userDetails, setUserDetails] = useState({
    userID: "",
    new_password: "",
  });

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.id]: e.target.value });
  };

  const forgotpassword_reset = async (e) => {
    e.preventDefault();
    const user_details = {
      user_id: userDetails.userID,
      new_password: userDetails.new_password,
    };
    try {
      setLoading(true);
      // console.log(JSON.stringify(user_details));
      fetch("https://kosmoshr.pythonanywhere.com/api/v2/forgotpassword_reset", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user_details),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log("Data:", data);
          setLoading(false);
          data.error == undefined ? setErrM(data.details) : setErrM(data.error);
          data.success == undefined ? "" : setSuccess(data.success);
        })
        .catch((error) => {
          setLoading(false);
          console.error("Error:", error);
          setErrM("All inputs must not be empty");
        });
    } catch (error) {}
  };

  useEffect(() => {
    forgotpassword_reset();
  }, []);
  return (
    <div className="flex flex-col h-screen justify-center lg:px-20 px-8">
      <img
        src="kosmos.png"
        className="absolute lg:top-20 top-8 lg:left-20 left-8"
        alt=""
      />
      <div className="forgot flex flex-col space-y-6">
        <Link to="/forgotpassword">
          <img src="/back.png" className="w-6 h-6" alt="" />
        </Link>
        <h1 className="lg:text-2xl text-base font-bold">Create New Password</h1>

        <div className="flex gap-1.5 flex-col ">
          <label className="font-bold" htmlFor="">
            Staff ID:
          </label>
          <input
            id="userID"
            value={userDetails.userID}
            onChange={handleChange}
            className=" h-12 border-[1px] border-black/30 rounded-lg pl-2 outline-none lg:w-[352px]"
            type="text"
            placeholder="Enter your unique ID"
          />
        </div>

        <div className="flex gap-1.5 flex-col ">
          <label className="font-bold" htmlFor="">
            New Password:
          </label>
          <input
            id="new_password"
            onChange={handleChange}
            value={userDetails.new_password}
            className=" h-12 border-[1px] border-black/30 rounded-lg pl-2 outline-none lg:w-[352px]"
            type="password"
            placeholder="Enter Password"
          />
        </div>
        <p className="err text-red-500 text-xs">{errM}</p>

        <button
          onClick={forgotpassword_reset}
          className="flex justify-center items-center h-12 bg-primary_SkyBlue text-white rounded-xl lg:w-[352px]"
        >
          {loading ? (
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="30"
              visible={true}
            />
          ) : (
            "Continue"
          )}
        </button>
      </div>
      <div
        className={`${
          success.length > 1 ? "flex" : "hidden"
        } absolute justify-center items-center backdrop-blur-lg bg-white/5 h-full w-full top-0 left-0 overflow-hidden`}
      >
        <div className="flex flex-col justify-center items-center space-y-8">
          <h1 className="text-xl text-center">{success}</h1>
          <Link
            className="bg-primary_SkyBlue text-white h-10 w-52 rounded-xl inline-block flex justify-center items-center lg:text-xl text-lg"
            to={"/login"}
          >
            Back to login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword2;
