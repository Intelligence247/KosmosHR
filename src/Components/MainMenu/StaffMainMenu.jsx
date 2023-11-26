import React, { useState } from "react";
import "./MainMenu.css";
import { Link } from "react-router-dom";
const StaffMainMenu = ({ showHide, img }) => {
  const [view, setToggle] = useState(false);
const [switchbg, setSwitchbg] = useState(0);
  const staffMainMenuArr = [
    {
      img: "/task.png",
      txt: "Tasks",
      link: "/stafftasks",
    },
    {
      img: "/report.png",
      txt: "Communicate",
      link: "/communication",
    },
    {
      img: "/note.png",
      txt: "Co-workers",
      link: "/department",
    },
    {
      img: "/setting.png",
      txt: "Settings",
      link: "/employeesprofile",
    },
  ];

  return (
    <div className={`mainMenuWrapper ${showHide}`}>
      <div>
        <img src={img} className="lg:w-20 w-14 " alt="Logo" />
      </div>
      <div className="h-[100%]">
        <h2>Main Menu</h2>
        <ul className="list">
          {staffMainMenuArr.map((s, i) => (
            <Link
            onClick={()=> setSwitchbg(i)}
             className={`${switchbg==i? 'bg-[#E9F2FC] rounded-lg':''}`} to={s.link}>
              <li>
                <img src={s.img} alt="" />
                {s.txt}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="w-[100%] pt-3 border-t">
        <button>
          <img src="/login.png" alt="" />
          <Link to={"/login"}>Log Out</Link>
        </button>
      </div>
    </div>
  );
};

export default StaffMainMenu;
