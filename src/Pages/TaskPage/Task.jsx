import { useEffect, useState } from "react";
import HomeLayout from "../../Layouts/HomeLayout/HomeLayout";
import TaskModal from "../../Modals/TaskModal/TaskModal";
// import "./Task.css";
import { taskData } from "../../utility/data";
import TaskTable from "./TaskTable";
import axios from "axios";

const Task = () => {
  const [showModal, setShowModal] = useState(false);
  const [url, setUrl] = useState(
    "https://kosmoshr.pythonanywhere.com/api/v1/tasks/get_tasks/"
  );
  return (
    <HomeLayout>
      <TaskModal isVisible={showModal} onClose={() => setShowModal(false)} />
      <div className="lg:h-fit flex space-y-6 lg:space-y-8 flex-col w-full">
        <section className="flex justify-between items-center">
          <div className="flex lg:flex-col flex-row lg:justify-center items-center lg:items-start gap-4 lg:gap-0 lg:space-y-2.5">
            <img src="/back.png" alt="back" />
            <h1 className="font-bold text-[1.5rem] lg:text-[1rem]">Tasks</h1>
            <p className="text-[14px] hidden lg:flex">
              Get your staff updated on their responsibilities
            </p>
          </div>
          <div className="">
            <button
              className="text-primary_DeepBlue bg-[#BAD6F4] flex space-x-2 justify-center
              items-center text-[14px] w-[12rem] lg:w-auto h-12 py-3 px-6 rounded-xl"
              onClick={() => setShowModal(true)}
            >
              Send New Tasks
              <img className="ml-2 h-4 w-4" src="/front.png" alt="" />
            </button>
          </div>
        </section>
        <p className="text-[16px] lg:hidden flex">
          Get your staff updated on their responsibilities
        </p>
        <TaskTable
          tableDataProps={taskData}
          hideViewall={"hidden"}
          url={url}
          setUrl={setUrl}
        />
        <div className="dataController flex justify-center items-center space-x-8">
          <p>
            <img src="/displayLeft.png" alt="" />
          </p>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>
            <img src="/displayRight.png" alt="" />
          </p>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Task;
