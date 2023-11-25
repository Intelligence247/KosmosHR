import React, { useEffect, useState } from "react";
import { kosmos_get, kosmos_post } from "../../../kosmos-module/kosmosRequest";
import { api_token } from "../../../APITOKEN";
import HomeLayout from "../../Layouts/HomeLayout/HomeLayout";
import { RotatingLines } from "react-loader-spinner";
import axios from "axios";

const EmployeeModal = ({}) => {
  const [errM, setErrM] = useState("");
  const [islogin, setIslogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [positionArray, setPositionArray] = useState([]);
  const [departmentArray, setDepartmentArray] = useState([]);

  const [employeeInfo, setEmployeeInfo] = useState({
    email: "",
    title: "",
    first_name: "",
    last_name: "",
    middle_name: "",
    city: "",
    state: "",
    nationality: "",
    phone_number: "",
    account_type: "",
    position: "",
    department: "",
    salary: "",
    date_of_birth: "",
    appointment_date: "",
    address: "",
    image: null,
    api_token: api_token,
  });
  console.log(employeeInfo);
  const url =
    "https://kosmoshr.pythonanywhere.com/api/v1/profile/create_employee_account/";
  const formData = new FormData();
  formData.append("email", employeeInfo.email);
  formData.append("title", employeeInfo.title);
  formData.append("first_name", employeeInfo.first_name);
  formData.append("last_name", employeeInfo.last_name);
  formData.append("middle_name", employeeInfo.middle_name);
  formData.append("city", employeeInfo.city);
  formData.append("state", employeeInfo.state);
  formData.append("nationality", employeeInfo.nationality);
  formData.append("phone_number", employeeInfo.phone_number);
  formData.append("account_type", employeeInfo.account_type); // can either be "staff" or "employee"
  formData.append("position", employeeInfo.position); // (an integer) id of the selected position (check documentation on how to fetch positions and departments), select form field is advised
  formData.append("department", employeeInfo.department);
  formData.append("salary", employeeInfo.salary); // a decimal field
  formData.append("date_of_birth", employeeInfo.date_of_birth);
  formData.append("appointment_date", employeeInfo.appointment_date);
  formData.append("address", employeeInfo.address);
  formData.append("image", employeeInfo.image); // image file
  formData.append("api_token", employeeInfo.api_token);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const data = await kosmos_post(url, formData);
      console.log(data.data);
      console.log(data);
      setErrM(data.message);
      setLoading(false);
      
      data.status == "success"
        ? (setIslogin(true), setErrM(""))
        : setIslogin(false),
        setErrM(data.message);
    } catch (error) {
      console.log(error);
      setErrM(error.message);
      setLoading(false);
    }
  };

  const getPosition = async () => {
    try {
      const positionUrl =
        "https://kosmoshr.pythonanywhere.com/api/v1/positions/get_positions/";
      const response = await axios.get(positionUrl);
      setPositionArray(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getDepartment = async () => {
    try {
      const url =
        "https://kosmoshr.pythonanywhere.com/api/v1/departments/get_departments/";

      const response = await axios.get(url);
      console.log(response.data.data);
      setDepartmentArray(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleSubmit();
    getPosition();
    getDepartment();
  }, []);

  return (
    <HomeLayout>
      <div
        className={`duration-500 ease-in  overflow-auto py-6 bg-opacity-25 backdrop-blur-sm lg:grid place-content-center lg:px-0`}
      >
        <div className="lg:w-[70vw] w-[100%] rounded-xl bg-white pb-4">
          <header className="flex flex-col justify-center items-center rounded-t-xl pt-4">
            <h1 className="font-bold lg:text-2xl text-xl">New Employees</h1>
            <p>Set up new Employee profiles</p>
          </header>
          {positionArray.length !== 0 && departmentArray.length !== 0 ? (
            <div className="inputEmployeedata grid lg:grid-cols-2 lg:gap-x-12 gap-x-0 gap-y-4 place-content-center p-4 rounded-b-xl ">
              <div className="name flex flex-col lg:space-y-1.5 space-y-1">
                <label htmlFor="name" className="lg:text-[14px] font-bold">
                  Firstname:
                </label>
                <input
                  required
                  className="text-[12px] lg:h-12 h-9 border-[#000]/40 border-[2px] w-full pl-2 outline-none rounded-lg"
                  type="text"
                  name=""
                  id=""
                  value={employeeInfo.first_name}
                  onChange={(e) =>
                    setEmployeeInfo({
                      ...employeeInfo,
                      first_name: e.target.value,
                    })
                  }
                  placeholder="Enter name"
                />
              </div>
              <div className="name flex flex-col lg:space-y-1.5 space-y-1">
                <label htmlFor="name" className="lg:text-[14px] font-bold">
                  Middle Name:
                </label>
                <input
                  required
                  className="text-[12px] lg:h-12 h-9 border-[#000]/40 border-[2px]  pl-2 outline-none rounded-lg"
                  type="text"
                  name=""
                  id=""
                  value={employeeInfo.middle_name}
                  onChange={(e) =>
                    setEmployeeInfo({
                      ...employeeInfo,
                      middle_name: e.target.value,
                    })
                  }
                  placeholder="Enter name"
                />
              </div>
              <div className="name flex flex-col lg:space-y-1.5 space-y-1">
                <label htmlFor="name" className="lg:text-[14px] font-bold">
                  Last name:
                </label>
                <input
                  required
                  className="text-[12px] lg:h-12 h-9 border-[#000]/40 border-[2px] w-full pl-2 outline-none rounded-lg"
                  type="text"
                  name=""
                  id=""
                  value={employeeInfo.last_name}
                  onChange={(e) =>
                    setEmployeeInfo({
                      ...employeeInfo,
                      last_name: e.target.value,
                    })
                  }
                  placeholder="Enter name"
                />
              </div>
              <div className="name flex flex-col lg:space-y-1.5 space-y-1">
                <label htmlFor="name" className="lg:text-[14px] font-bold">
                  Email:
                </label>
                <input
                  required
                  className="text-[12px] lg:h-12 h-9 border-[#000]/40 border-[2px] w-full pl-2 outline-none rounded-lg"
                  type="email"
                  name=""
                  id=""
                  value={employeeInfo.email}
                  onChange={(e) =>
                    setEmployeeInfo({
                      ...employeeInfo,
                      email: e.target.value,
                    })
                  }
                  placeholder="Enter Email"
                />
              </div>
              <div className="name flex flex-col lg:space-y-1.5 space-y-1">
                <label htmlFor="name" className="lg:text-[14px] font-bold">
                  Title:
                </label>
                <input
                  required
                  className="text-[12px] lg:h-12 h-9 border-[#000]/40 border-[2px] w-full pl-2 outline-none rounded-lg"
                  name=""
                  id=""
                  value={employeeInfo.title}
                  onChange={(e) =>
                    setEmployeeInfo({
                      ...employeeInfo,
                      title: e.target.value,
                    })
                  }
                  placeholder="Enter Email"
                />
              </div>
              <div className="name flex flex-col lg:space-y-1.5 space-y-1">
                <label htmlFor="name" className="lg:text-[14px] font-bold">
                  City:
                </label>
                <input
                  required
                  className="text-[12px] lg:h-12 h-9 border-[#000]/40 border-[2px] w-full pl-2 outline-none rounded-lg"
                  type="text"
                  name=""
                  id=""
                  value={employeeInfo.city}
                  onChange={(e) =>
                    setEmployeeInfo({
                      ...employeeInfo,
                      city: e.target.value,
                    })
                  }
                  placeholder="Enter name"
                />
              </div>
              <div className="name flex flex-col lg:space-y-1.5 space-y-1">
                <label htmlFor="name" className="lg:text-[14px] font-bold">
                  State:
                </label>
                <input
                  required
                  className="text-[12px] lg:h-12 h-9 border-[#000]/40 border-[2px] w-full pl-2 outline-none rounded-lg"
                  type="text"
                  name=""
                  id=""
                  value={employeeInfo.state}
                  onChange={(e) =>
                    setEmployeeInfo({
                      ...employeeInfo,
                      state: e.target.value,
                    })
                  }
                  placeholder="Enter name"
                />
              </div>
              <div className="name flex flex-col lg:space-y-1.5 space-y-1">
                <label htmlFor="name" className="lg:text-[14px] font-bold">
                  Nationality:
                </label>
                <input
                  required
                  className="text-[12px] lg:h-12 h-9 border-[#000]/40 border-[2px] w-full pl-2 outline-none rounded-lg"
                  type="text"
                  name=""
                  id=""
                  value={employeeInfo.nationality}
                  onChange={(e) =>
                    setEmployeeInfo({
                      ...employeeInfo,
                      nationality: e.target.value,
                    })
                  }
                  placeholder="Enter nationality"
                />
              </div>
              <div className="name flex flex-col lg:space-y-1.5 space-y-1">
                <label htmlFor="name" className="lg:text-[14px] font-bold">
                  Account type:
                </label>
                {/* <input
              required
              className="text-[12px] lg:h-12 h-9 border-[#000]/40 border-[2px] w-full pl-2 outline-none rounded-lg"
              type="text"
              name=""
              id=""
              value={employeeInfo.city}
              placeholder="Enter name"
            /> */}
                <select
                  className="text-[12px] lg:h-12 h-9 border-[#000]/40 border-[2px] w-full pl-2 outline-none rounded-lg"
                  name=""
                  id=""
                  onChange={(e) =>
                    setEmployeeInfo({
                      ...employeeInfo,
                      account_type: e.target.value,
                    })
                  }
                >
                  <option value={"Staff"}>Staff</option>
                  <option value="Employee">Employee</option>
                </select>
              </div>
              <div className="name flex flex-col lg:space-y-1.5 space-y-1">
                <label htmlFor="name" className="lg:text-[14px] font-bold">
                  Date of birth:
                </label>
                <input
                  required
                  className="text-[12px] lg:h-12 h-9 border-[#000]/40 border-[2px] w-full pl-2 outline-none rounded-lg"
                  type="date"
                  name=""
                  value={employeeInfo.date_of_birth}
                  id=""
                  placeholder="Enter Address"
                  onChange={(e) =>
                    setEmployeeInfo({
                      ...employeeInfo,
                      date_of_birth: e.target.value,
                    })
                  }
                />
              </div>
              <div className="name flex flex-col lg:space-y-1.5 space-y-1">
                <label htmlFor="name" className="lg:text-[14px] font-bold">
                  Image:
                </label>
                <input
                  required
                  className="text-[12px] lg:h-12 h-9 border-[#000]/40 border-[2px] w-full pl-2 outline-none rounded-lg"
                  type="file"
                  name=""
                  // value={employeeInfo.image}
                  id="image"
                  placeholder="Enter Address"
                  // accept="image/png, image/jpeg, image/jpg, image/svg"
                  onChange={(e) =>
                    setEmployeeInfo({
                      ...employeeInfo,
                      image: e.target.files[0],
                    })
                  }
                />
              </div>
              <div className="name flex flex-col lg:space-y-1.5 space-y-1">
                <label htmlFor="name" className="lg:text-[14px] font-bold">
                  Phone Number:
                </label>
                <div className="flex lg:space-x-4 space-x-2">
                  <button className="text-[12px] lg:h-12 h-9 border-[#000]/40 border-[2px] pl-2 outline-none rounded-lg lg:px-4 px-2">
                    +234
                  </button>
                  <input
                    required
                    className="text-[12px] lg:h-12 h-9 border-[#000]/40 border-[2px] w-full pl-2 outline-none rounded-lg"
                    type="text"
                    name=""
                    id=""
                    value={employeeInfo.phone_number}
                    onChange={(e) =>
                      setEmployeeInfo({
                        ...employeeInfo,
                        phone_number: e.target.value,
                      })
                    }
                    placeholder="Enter Phone Number"
                  />
                </div>
              </div>
              <div className="name flex flex-col lg:space-y-1.5 space-y-1">
                <label htmlFor="name" className="lg:text-[14px] font-bold">
                  Address:
                </label>
                <input
                  required
                  className="text-[12px] lg:h-12 h-9 border-[#000]/40 border-[2px] w-full pl-2 outline-none rounded-lg"
                  type="text"
                  name=""
                  id=""
                  value={employeeInfo.address}
                  onChange={(e) =>
                    setEmployeeInfo({
                      ...employeeInfo,
                      address: e.target.value,
                    })
                  }
                  placeholder="Enter Address"
                />
              </div>
              <div className="name flex flex-col lg:space-y-1.5 space-y-1">
                <label htmlFor="name" className="lg:text-[14px] font-bold">
                  Department:
                </label>

                <select
                  name=""
                  className="text-[12px] lg:h-12 h-9 border-[#000]/40 border-[2px] w-full pl-2 outline-none rounded-lg"
                  value={employeeInfo.department}
                  onChange={(e) =>
                    setEmployeeInfo({
                      ...employeeInfo,
                      department: e.target.value,
                    })
                  }
                >
                  <option value="select">Select department</option>
                  {departmentArray.length >= 1
                    ? departmentArray.map((p) => (
                        <option value={p.id}>{p.title}</option>
                      ))
                    : ""}
                </select>
              </div>
              <div className="name flex flex-col lg:space-y-1.5 space-y-1">
                <label htmlFor="name" className="lg:text-[14px] font-bold">
                  Position:
                </label>
                <select
                  name=""
                  className="text-[12px] lg:h-12 h-9 border-[#000]/40 border-[2px] w-full pl-2 outline-none rounded-lg"
                  value={employeeInfo.position}
                  onChange={(e) =>
                    setEmployeeInfo({
                      ...employeeInfo,
                      position: e.target.value,
                    })
                  }
                >
                  <option value="select">Select position</option>
                  {positionArray.length >= 1
                    ? positionArray.map((p) => (
                        <option value={p.id}>{p.title}</option>
                      ))
                    : ""}
                </select>
              </div>
              <div className="name flex flex-col lg:space-y-1.5 space-y-1">
                <label htmlFor="name" className="lg:text-[14px] font-bold">
                  Salary:
                </label>
                <input
                  required
                  className="text-[12px] lg:h-12 h-9 border-[#000]/40 border-[2px] w-full pl-2 outline-none rounded-lg"
                  type="text"
                  name=""
                  id=""
                  value={employeeInfo.salary}
                  onChange={(e) =>
                    setEmployeeInfo({
                      ...employeeInfo,
                      salary: e.target.value,
                    })
                  }
                  placeholder="Enter Salary"
                />
              </div>
              <div className="name flex flex-col lg:space-y-1.5 space-y-1">
                <label htmlFor="name" className="lg:text-[14px] font-bold">
                  Appointment Date:
                </label>
                <input
                  required
                  className="text-[12px] lg:h-12 h-9 border-[#000]/40 border-[2px] w-full pl-2 outline-none rounded-lg"
                  type="date"
                  name=""
                  id=""
                  value={employeeInfo.appointment_date}
                  onChange={(e) =>
                    setEmployeeInfo({
                      ...employeeInfo,
                      appointment_date: e.target.value,
                    })
                  }
                  placeholder="Enter Address"
                />
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center h-40">
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="30"
                visible={true}
              />
            </div>
          )}
          <p className="err lg:text-sm text-xs text-red-400 py-4 pl-5">
            {errM}
          </p>
          <div className="btnFooter flex lg:justify-end justify-between px-4 space-x-8">
            <button
              onClick={() => onclickHandle()}
              className="lg:h-12 h-9 border-[1px] lg:w-[12rem] w-[40%] rounded-lg border-primary_SkyBlue hover:bg-primary_SkyBlue hover:text-white"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="grid place-content-center lg:h-12 h-9 border-[1px] lg:w-[12rem] w-[40%] rounded-lg border-primary_SkyBlue bg-primary_SkyBlue hover:bg-primary_DeepBlue text-white"
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
                "Save"
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`PromptSuccess w-full  h-screen fixed top-0  bg-white/30 backdrop-blur-lg justify-center items-center flex-col ${
          islogin ? "flex" : "hidden"
        } `}
      >
        <div className="lg:w-64 w-[80%] flex justify-center items-center flex-col space-y-4">
          <h1 className="text-2xl">Successful!!!</h1>
          <p className="text-center text-sm opacity-80">{errM}</p>
          <button
            className="bg-primary_SkyBlue text-white rounded-lg px-6 py-1"
            onClick={() => setIslogin(false)}
          >
            Continue
          </button>
        </div>
      </div>
    </HomeLayout>
  );
};
export default  EmployeeModal