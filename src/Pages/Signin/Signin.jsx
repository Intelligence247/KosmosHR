// Welcome
import React, { useEffect, useState } from "react";
import LoginSignLayout from "../../Layouts/LoginSignLayout/LoginSignLayout";
import { Link } from "react-router-dom";
import axios from "axios";
import { kosmos_post } from "../../../kosmos-module/kosmosRequest";

const Signin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    middle_name: "",
    nationality: "",
    phone_number: "",
    image: "",
    username: "",
    password: "",
  });

  const url =
    "https://kosmoshr.pythonanywhere.com/api/v1/profile/create_admin_account/";
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    
  const formDatas = {
    email: formData.email,
    first_name: formData.first_name,
    last_name: formData.last_name,
    middle_name: formData.middle_name,
    nationality: formData.nationality,
    phone_number: formData.phone_number,
    username: formData.username,
    password: formData.password,
  };
  
  const pstData ={
    email: "uthmanabdullahi2020@gmail.com",
    first_name: "Usman",
    last_name: "Abdullahi",
    middle_name: "Babatunde",
    nationality: "Nigeria",
    phone_number: "09135619423",
    username: "Usman",
    password: "Welcome",
  }
  
  const handleSubmit = () => {
    axios.post(url, formDatas, {
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers if needed
        },
      })
      .then((res) => {
        console.log(res);
        alert("first Signin!!!")
      })
      .catch((err) => {
        console.log(err);
      });
  };



  useEffect(() => {
    handleSubmit();
  }, []);



  return (
    <LoginSignLayout>
      <form
        className=" w-full flex flex-col justify-center space-y-4 "
        onSubmit={handleSubmit}
      >
        <div className="lg:hidden flex justify-center w-full items-center pb-4">
          <img src="/kosmos.png" alt="" />
        </div>
        <h1 className="lg:text-2xl text-base font-bold">Create an Account</h1>

        <div className="inputs">
          <label htmlFor="">Email:</label>
          <input
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            type="email"
            placeholder="Enter Your Password "
          />
        </div>
        <div className="inputs">
          <label>First name:</label>
          <input
            required
            type="text"
            placeholder="Enter Your first name "
            value={formData.first_name}
            onChange={(e) =>
              setFormData({ ...formData, first_name: e.target.value })
            }
          />
        </div>

        <div className="inputs">
          <label htmlFor="text ">Middle Name:</label>
          <input
            required
            onChange={(e) =>
              setFormData({ ...formData, middle_name: e.target.value })
            }
            type="text"
            placeholder="Enter your middle name"
          />
        </div>
        <div className="inputs">
          <label>Last Name</label>
          <input
            required
            onChange={(e) =>
              setFormData({ ...formData, last_name: e.target.value })
            }
            type="text"
            placeholder="Enter Your last name "
          />
        </div>
        <div className="inputs">
          <label htmlFor="password ">Nationality</label>
          <input
            required
            value={formData.nationality}
            onChange={(e) =>
              setFormData({ ...formData, nationality: e.target.value })
            }
            type="text"
            placeholder="Enter Your nationality"
          />
        </div>
        <div className="inputs">
          <label>Phone Number</label>
          <input
            required
            value={formData.phone_number}
            onChange={(e) =>
              setFormData({ ...formData, phone_number: e.target.value })
            }
            type="number"
            placeholder="Enter Your phone number "
          />
        </div>
        <div className="inputs">
          <label>Image</label>
          <input
            required
            value={formData.image}
            onChange={(e) =>
              setFormData({ ...formData, image: e.target.value })
            }
            type="file"
          />
        </div>
        <div className="inputs">
          <label htmlFor="">Username</label>
          <input
            required
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            type="text"
            placeholder="Enter Your Password "
          />
        </div>
        <div className="inputs">
          <label htmlFor="password ">Password:</label>
          <input
            required
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            type="password"
            placeholder="Enter Your Password "
          />
        </div>
        <div className="inputs">
          <label htmlFor="password">Confirm password:</label>
          <input
            required
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            placeholder="Re-Enter Your Password"
          />
        </div>
        <button className="h-12 bg-primary_SkyBlue text-white rounded-xl">
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
      </form>
    </LoginSignLayout>
  );
};

export default Signin;
