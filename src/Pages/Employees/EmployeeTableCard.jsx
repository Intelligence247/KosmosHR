import "./Employees.css";
import { Link } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

const EmployeeTableCard = ({ employeeDataProps, hideViewall, title, loading }) => {
  return (
    <section className="tableSection">
      <div className="tableSectionTop flex justify-between h-20 items-center px-4">
        <h1 className="font-bold lg:block hidden">{title}</h1>
        <div
          className="searchInputs lg:w-[28rem] flex
           space-x-2.5 items-center lg:h-12 border-[#1D70C9]
            border-[1px]
          rounded-lg px-3 bg-white"
        >
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

      {!loading ? (
        employeeDataProps.map((e, i) => (
          <div key={i} className="eachInfo">
            <div className="staffInfo">
              <img
                src={`https://kosmoshr.pythonanywhere.com${e.image}`}
                alt=""
              />

              <div className="nameAndMail">
                <p>{`${e.first_name} ${e.last_name}`}</p>
                <p>{e.email}</p>
              </div>
            </div>

            <p className="department">{e.department?.title}</p>
            <p>{e.position?.title}</p>
            <p>{e.phone_number}</p>
            <p>{e.nationality}</p>
            <p className="action items-center">
              {"Details"} <img src="/slantArrow.png" alt="" />
            </p>

            <div className="mobileview lg:hidden flex flex-col justify-start text-start w-24">
              <p>{e.department?.title}</p>
              <p>{e.position?.title}</p>
            </div>
          </div>
        ))
      ) : (
        <div className="h-[10rem] flex justify-center items-center">
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="70"
            visible={true}
          />
        </div>
      )}
      <Link
        to="/employee"
        className={`flex items-center 
      justify-center h-16
       text-primary_SkyBlue underline cursor-pointer ${hideViewall}`}
      >
        View all
        <img src="/slantArrow.png" alt="" />
      </Link>
    </section>
  );
};

export default EmployeeTableCard;
