// Welcome
import React, { useEffect, useState } from "react";
import LoginSignLayout from "../../Layouts/LoginSignLayout/LoginSignLayout";
import { Link } from "react-router-dom";
import axios from "axios";
import { kosmos_post } from "../../../kosmos-module/kosmosRequest";
import { RotatingLines } from "react-loader-spinner";

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

  const createAdminAccount = async (e) => {
    e.preventDefault();
    const url =
      "https://kosmoshr.pythonanywhere.com/api/v1/profile/create_admin_account/";
    const fileInput = document.querySelector("#file");
    try {
      setIsLoading(true);
      const formDataD = new FormData();
      formDataD.append("email", formData.email);
      formDataD.append("first_name", formData.first_name);
      formDataD.append("last_name", formData.last_name);
      formDataD.append("middle_name", formData.middle_name);
      formDataD.append("nationality", formData.nationality);
      formDataD.append("phone_number", formData.phone_number);
      formDataD.append("image", fileInput.files[0]);
      formDataD.append("username", formData.username);
      formDataD.append("password", formData.password);
      console.log("hello");
      console.log(formDataD);
      const response = await axios.post(url, formDataD, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error creating admin account:", error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    createAdminAccount();
  }, []);

  return (
    <LoginSignLayout>
      <form
        className=" w-full flex flex-col justify-center space-y-4 "
        onSubmit={createAdminAccount}
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
            placeholder="Enter Your Password"
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
            id="file"
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
        <button
          onClick={createAdminAccount}
          className="h-12 bg-primary_SkyBlue text-white rounded-xl"
        >
          {isLoading ? (
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="20"
              visible={true}
            />
          ) : (
            " Create an Account"
          )}
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
