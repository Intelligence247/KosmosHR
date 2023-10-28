import HomeLayout from "../../Layouts/HomeLayout/HomeLayout";
// import "./Task.css";
import { taskData } from "../../utility/data";
import TaskTable from "./TaskTable";

const Task = () => {
  return (
    <HomeLayout>
      <div className="h-fit flex space-y-8 flex-col w-full">
        <section className="flex justify-between items-center">
          <div className="flex flex-col justify-center items-start space-y-2.5">
            <img src="/back.png" alt="" />
            <h1 className="font-bold">Tasks</h1>
            <p className="text-[14px]">
              Get your staff updated on their responsibilities
            </p>
          </div>
          <div
            className="text-primary_DeepBlue bg-[#BAD6F4] flex space-x-2 justify-center
       items-center text-[14px] h-12 py-3 px-6 rounded-xl"
          >
            <p className="whitespace-nowrap">Send New Tasks</p>
            <img src="/front.png" alt="" />
          </div>
        </section>

        <TaskTable tableDataProps={taskData} hideViewall={"hidden"} />
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
