import React, { useState } from "react";
import "./MainMenu.css";
const MainMenu = () => {
  const [view, setToggle] = useState(true);
  return (
    <div className="mainMenuWrapper">
      <img src="/kosmos.png" className="w-max" alt="" />

      <h2>Main Menu</h2>
      <ul className="ul">
        <li>
          {" "}
          <img src="/home.png" alt="" />
          Home
        </li>
        <li>
          {" "}
          <img src="/note.png" alt="" />
          Employee
        </li>
        <ul className="manageStaff">
          <li onClick={() => setToggle(!view)}>
            {" "}
            <img src="/people.svg" alt="" />
            Manage Staff
          </li>
          <ul className={`pl-6 ${view ? "h-[10rem]" : "h-0 overflow-hidden"}`}>
            <li>
              {" "}
              <img src="/task.png" alt="" />
              Tasks
            </li>
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
      <button>
        <img src="/login.png" alt="" />
        <p>Log Out</p>
      </button>
    </div>
  );
};

export default MainMenu;
