import React from "react";
import "./Employees.css";
import Header from "../Header/Header";

const Employees = () => {
  const employeeData = [
    {
      avartar: "/profile.png",
      staffName: "Olorunfemi Ayobami",
      email: "Olorunfemiayobami26@gmailcom",
      department: "Content Creation",
      position: "Team Member",
      phone_no: "+2348106867506",
      city: "Ibadan, Nigeria",
      action: "Details",
    },
    {
      avartar: "/profile.png",
      staffName: "Olorunfemi Ayobami",
      email: "Olorunfemiayobami26@gmailcom",
      department: "Content Creation",
      position: "Team Member",
      phone_no: "+2348106867506",
      city: "Ibadan, Nigeria",
      action: "Details",
    },
    {
      avartar: "/profile.png",
      staffName: "Olorunfemi Ayobami",
      email: "Olorunfemiayobami26@gmailcom",
      department: "Content Creation",
      position: "Team Member",
      phone_no: "+2348106867506",
      city: "Ibadan, Nigeria",
      action: "Details",
    },
    {
      avartar: "/profile.png",
      staffName: "Olorunfemi Ayobami",
      email: "Olorunfemiayobami26@gmailcom",
      department: "Content Creation",
      position: "Team Member",
      phone_no: "+2348106867506",
      city: "Ibadan, Nigeria",
      action: "Details",
    },
    {
      avartar: "/profile.png",
      staffName: "Olorunfemi Ayobami",
      email: "Olorunfemiayobami26@gmailcom",
      department: "Content Creation",
      position: "Team Member",
      phone_no: "+2348106867506",
      city: "Ibadan, Nigeria",
      action: "Details",
    },
    {
      avartar: "/profile.png",
      staffName: "Olorunfemi Ayobami",
      email: "Olorunfemiayobami26@gmailcom",
      department: "Content Creation",
      position: "Team Member",
      phone_no: "+2348106867506",
      city: "Ibadan, Nigeria",
      action: "Details",
    },
  ];
  return (
    <div className="employeesWrapper">
      <Header />
      <section className="employeeSection">
        <div className="employee">
          <img src="/back.png" alt="" />
          <h1>Employees</h1>
          <p>
            Get insight into full list of employees registered wip pe company
          </p>
        </div>
        <div className="onboard">
          <p>Onboard New Staff</p>
          <img src="/front.png" alt="" />
        </div>
      </section>

      <section className="tableSection">
        {/* <div className="tableWrapper"> */}
          <div className="tableHeader">
            <p>Staff</p>
            {/* <span className="flex-1"></span> */}
            <p>Department</p>
            <p>Position</p>
            <p>Phone Number</p>
            <p>City</p>
            <p>Action</p>
          </div>
          {employeeData.map((e) => (
            <div className="eachInfo">
              <p className="staffInfo">
                <img src={`${e.avartar}`} alt="" />
                <div className="nameAndMail">
                  <p>{e.staffName}</p>
                  <p>{e.email}</p>
                </div>
              </p>
              <p>{e.department}</p>
              <p>{e.position}</p>
              <p>{e.phone_no}</p>
              <p>{e.city}</p>
              <p>{e.action}</p>
            </div>
          ))}
        {/* </div> */}
      </section>
    </div>
  );
};

export default Employees;
