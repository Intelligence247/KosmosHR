import React from "react";
import MainMenu from "../../Components/MainMenu/MainMenu";
import "./Home.css";
const Home = () => {
  return (
    <div className="homeWrapper">
      <MainMenu />
      <div className="rightHomepageWrapper">
        <header>
          <div className="searchInputs">
            <button>Search</button>
            <img src="/search.png" alt="" />
            <input type="text" name="" id="" />
          </div>
          <div className="notifications">
            <img src="notification.png" alt="" />
            <img src="/profile.png" alt="" />
            <p>HR Admin</p>
          </div>
        </header>
        <div className="welcome">
          <h1>Welcome Back</h1>
          <p>Use the navigation bar for quick access to all our features.</p>
        </div>
        <div className="Info">
          <div className="eachInfo ">
            <h1>Number of Employees</h1>
            <div className="value">
              <img src="/info2.png" alt="" />
              <p>20</p>
            </div>
          </div>
          {/*  */}
          <div className="eachInfo ">
            <h1>Number of Departments</h1>
            <div className="value">
              <img src="/info3.png" alt="" />
              <p>6</p>
            </div>
          </div>
          {/*  */}
          <div className="eachInfo ">
            <h1>Pending Queries</h1>
            <div className="value">
              <img src="/info1.png" alt="" />
              <p>1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
