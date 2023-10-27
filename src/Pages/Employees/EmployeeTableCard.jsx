import React from 'react'
import "./Employees.css"

const EmployeeTableCard = () => {
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
    <section className="tableSection">
    <div className="tableSectionTop flex justify-between h-20 items-center px-4">
     <h1 className="font-bold">Employees</h1>
     <div className="searchInputs w-[28rem] flex space-x-2.5 items-center h-12 border-[#1D70C9] border-[1px]
rounded-lg px-3 bg-white">
     <button>Search</button>
     <img src="/search.png" alt="" />
     <input type="text" name="" id="" />
   </div>
    </div>
     <div className="tableHeader">
       <p>Staff</p>
      
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
  )
}

export default EmployeeTableCard
