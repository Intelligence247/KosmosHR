import React, { useEffect, useState } from "react";
import LoginSignLayout from "../../Layouts/LoginSignLayout/LoginSignLayout";
import { Link } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "admin@gmail.com",
    first_name: "Kosmos",
    last_name: "Admin",
    middle_name: "",
    nationality: "Nigeria",
    phone_number: "07011223344",
    image: "", // image file
    username: "Admin",
    password: "Kosmos",
  });
  const url =
    "https://kosmoshr.pythonanywhere.com/api/v1/profile/create_admin_account/";
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  const formDatas = JSON.stringify({
    email: "uthmanabdullahi2020@gmail.com",
    first_name: "Kosmos2",
    last_name: "Admin2",
    middle_name: "B.3",
    nationality: "Nigeria",
    phone_number: "07011224534",
  });
 /* const handleSubmit = (e) => {
    setIsLoading(true);
    const response = axios
      .post(url, formDatas)
      .then((response) => {
        alert("successful");
        setFormData(response);
        console.log(response.data);
      })
      .catch((error) => {
        alert("error oo");
        console.error("Error: ", error);
      });
  };
  useEffect(() => {
    handleSubmit();
  }, []);
  */
  return (
    <div>
      <LoginSignLayout>
        <div className="lg:hidden flex justify-center w-full items-center pb-4">
          <img src="/kosmos.png" alt="" />
        </div>
        <h1 className="lg:text-2xl text-base font-bold">Create an Account</h1>
        <div className="inputs">
          <label htmlFor="email ">Company Name:</label>
          <input
            type="email"
            placeholder="Enter Your Email "
            value={formData.first_name}
            onChange={(e) =>
              setFormData({ ...formData, first_name: e.target.value })
            }
          />
        </div>
        <div className="inputs">
          <label htmlFor="">Official Email:</label>
          <input
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            type="text"
            placeholder="Enter Your Password "
          />
        </div>
        <div className="inputs">
          <label htmlFor="password ">Password:</label>
          <input
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            type="password"
            placeholder="Enter Your Password "
          />
        </div>
        <div className="inputs">
          <label htmlFor="password ">Confirm password:</label>
          <input type="password" placeholder="Re-Enter Your Password" />
        </div>
        <button
          className="h-12 bg-primary_SkyBlue text-white rounded-xl"
        >
          Create an Account
        </button>
        <div className="Amember">
          <p>
            Have an account?{" "}
            <Link to="/login" className="text-primary_SkyBlue">
              Login
            </Link>
          </p>
        </div>
      </LoginSignLayout>
    </div>
  );
};

export default Signin;
