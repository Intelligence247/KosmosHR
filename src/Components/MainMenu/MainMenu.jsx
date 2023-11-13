import React, { useState } from "react";
import "./MainMenu.css";
import { Link } from "react-router-dom";
const MainMenu = ({showHide, img}) => {
  const [view, setToggle] = useState(false);
  return (

    <div className={`mainMenuWrapper ${showHide}`}>
      <div>
        <img src={img} className="w-max" alt="Logo" />
      </div>
      <div className="h-[100%]">
        <h2>Main Menu</h2>
        <ul className="list">
          <Link to="/home">
            {" "}
            <li>
              {" "}
              <img src="/home.png" alt="" />
              Home
            </li>
          </Link>
          <Link to="/employee">
            <li>
              {" "}
              <img src="/note.png" alt="" />
              Employee
            </li>

          </Link>
          <ul className="manageStaff">
            <li onClick={() => setToggle(!view)}>
              {" "}
              <img src="/people.svg" alt="" />
              Manage Staff
              {view ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              )}
            </li>
            <ul className={`lg:pl-6 ${view ? "flex" : "hidden"}`}>
              <Link to="/task">
                <li>
                  {" "}
                  <img src="/task.png" alt="" />
                  Tasks
                </li>
              </Link>
              <li>
                {" "}
                <img src="/report.png" alt="" />
                Reports
              </li>
              <li>
                {" "}
                <img src="/queries.png" alt="" />
                Queries
              </li>
            </ul>
          </ul>
          <li>
            {" "}
            <img src="/setting.png" alt="" />
            Settings
          </li>
        </ul>
      </div>
      <div className="w-[100%] pt-3 border-t">
        <button>
          <img src="/login.png" alt="" />
          <p>Log Out</p>
        </button>
      </div>
    </div>
  );
};

export default MainMenu;
