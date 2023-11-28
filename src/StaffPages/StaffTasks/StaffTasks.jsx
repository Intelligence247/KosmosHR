import React, { useEffect, useState } from "react";
import StaffHomeLayout from "../../Layouts/StaffHomeLayout/StaffHomeLayout";
import { Link } from "react-router-dom";
import StaffTaskCard from "./StaffTaskCard";
import { kosmos_get } from "../../../kosmos-module/kosmosRequest";
import TaskModal from "../../Modals/TaskModal/TaskModal";

const StaffTasks = () => {
  const [taskData, setTaskData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const taskFunction = () => {
    const url = "https://kosmoshr.pythonanywhere.com/api/v1/tasks/get_tasks/";
    const data = kosmos_get(url);
    console.log(data);
  };
  useEffect(() => {
    taskFunction();
  }, []);


  function tasks(){

    fetch("https://kosmoshr.pythonanywhere.com/api/v2/tasks/1me9rbn2ti60hculhszfhq5hwhlo9vjws11555d92kmwfo6m7ie6bli3vy0e?id=2",
    )
    .then(response => {
     return response.json();
    })
    .then(data => {
     // Handle the data returned from the server
     console.log('Data:', data);
    })
    .catch(error => {
     // Handle errors
     console.error('Error:', error);
    });
    }
  
  return (
    <StaffHomeLayout>
      <TaskModal isVisible={showModal} onClose={() => setShowModal(false)} />

      <header className="flex flex-col space-y-2 justify-start items-start">
        <img src="/back.png" alt="" />
        <h1 className="lg:text-2xl text-base font-bold">Welcome back</h1>
        <p className="opacity-80">
          Use the navigation bar for quick access to all our features.
        </p>
      </header>
      <div className="notifiv lg:bg-[#E9F2FC] lg:h-16 lg:px-8 h-11 flex items-center w-full gap-8">
        <img
          src="/information.png"
          className="lg:block hidden"
          alt="info logo"
        />
        <p className="lg:text-sm text-xs lg:block hidden">
          Do not forget to send in your Daily Report at the end of each day
        </p>
        <span className="flex-1 lg:block hidden"></span>
        <Link
        onClick={()=> setShowModal(true)}
          // to={"/newtask"}
          className="text-primary_DeepBlue bg-[#BAD6F4] flex space-x-2 justify-center
            items-center text-[14px] lg:h-12 h-9 lg:py-3 py-1 px-6 rounded-xl cursor-pointer"
        >
          <p className="whitespace-nowrap">Send Report</p>
          <img src="/front.png" alt="" />
        </Link>
      </div>

      <StaffTaskCard />
    </StaffHomeLayout>
  );
};

export default StaffTasks;
