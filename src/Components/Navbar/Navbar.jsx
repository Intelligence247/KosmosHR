import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const navCenterArr = ["Training", "Chat Bot"];
  const [switchs, setswitchs] = useState(0);
  console.log(switchs);
  return (
    <div className="navWrapper px-20 py-6">
      <div className="leftNav">
        <img src="/Logo2.png" alt="" />
        <p>SecureBot</p>
      </div>

      <div className="centerNav">
        {navCenterArr.map((n, i) => (
          <p
            key={i}
            onClick={() => setswitchs(i)}
            className={`${switchs === i ? "bg-[#F8E89D]" : "bg-[#FDF9E7]"} cursor-pointer`}
          >
            <b className={`${switchs === i ? 'block':'hidden'}`}></b>
            {n}
          </p>
        ))}
      </div>

      <div className="rightNav">
        AY
        <p></p>
      </div>
    </div>
  );
};

export default Navbar;
