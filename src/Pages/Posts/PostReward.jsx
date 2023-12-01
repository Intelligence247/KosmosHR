import React, { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { kosmos_post } from "../../../kosmos-module/kosmosRequest";
import { DataFromAdminLogin } from "../../../APITOKEN";

const PostReward = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [errM, seterrM] = useState("");
  const handleTaskDetails = (e) => {
    setData({ ...description, [e.target.id]: e.target.value });
  };
  const apitoken = DataFromAdminLogin.api_token;
  const TaskPostRequest = async (e) => {
    e.preventDefault();

    const url =
      "https://kosmoshr.pythonanywhere.com/api/v1/rewards/create_reward/";

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append(
        "api_token",
        "fhgt345yru5y67urth54yfr475uj6j8knv9dfh23sjhfg2310o"
      );

      const response = await kosmos_post(url, formData);
      console.log(response);
      seterrM(response.message);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    TaskPostRequest();
  }, []);

  return (
    <div className="flex flex-col h-screen justify-center lg:px-20 px-8">
      <img
        src="kosmos.png"
        className="absolute lg:top-20 top-8 lg:left-20 left-8"
        alt=""
      />
      <div className="forgot flex flex-col space-y-6">
        <Link to="/task">
          <img src="/back.png" className="w-6 h-6" alt="" />
        </Link>
        <h1 className="lg:text-2xl text-base font-bold">Add reward</h1>
        <div className="flex gap-1.5 flex-col ">
          <label className="font-bold" htmlFor="">
            Title:
          </label>
          <input
            className=" h-12 border-[1px] border-black/30 rounded-lg pl-2 outline-none lg:w-[352px]"
            type="text"
            placeholder="What is the title of the reward"
            id="title"
            value={data.title}
            onChange={handleTaskDetails}
          />
        </div>
        <div className="flex gap-1.5 flex-col ">
          <label className="font-bold" htmlFor="">
            Description:
          </label>
          <input
            className=" h-12 border-[1px] border-black/30 rounded-lg pl-2 outline-none lg:w-[352px]"
            type="text"
            placeholder="What is the description of the reward"
            id="description"
            value={data.description}
            onChange={handleTaskDetails}
          />
        </div>
        <p className="err text-red-500 text-xs">{errM}</p>
        <button
          onClick={TaskPostRequest}
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
            "Add Reward"
          )}
        </button>
      </div>
      <div
        className={`${
          errM === "Email Sent" ? "flex" : "hidden"
        } absolute justify-center items-center backdrop-blur-lg bg-white/5 h-full w-full top-0 left-0 overflow-hidden`}
      >
        <div className="flex flex-col justify-center items-center space-y-8">
          <h1 className="text-xl text-center">
            Check your mail for your new password
          </h1>
          <Link
            className="bg-primary_SkyBlue text-white h-10 w-52 rounded-xl inline-block flex justify-center items-center lg:text-xl text-lg"
            to={"/resetpassword"}
          >
            Click here to Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostReward;
