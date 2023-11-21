import { useState } from "react";
import Modal from "../../Layouts/ModalLayout/Modal";
import DateRange from "../../Pages/TaskPage/DateRange";
import { api_token } from "../../../APITOKEN";

const TaskModal = (props) => {
  if (!props.isVisible) return null;
  const [taskDetails, setTaskDetails] = useState({
    title: "",
    description: "",
    appointed_date: "",
    deadline: "",
    file: "",
    priority: "",
    employee_id: "",
    api_token: api_token,
  });
  const url = "https://kosmoshr.pythonanywhere.com/api/v1/tasks/create_task/";
  //post form
  const formData = new FormData();
  formData.append("title", taskDetails.title);
  formData.append("description", taskDetails.description);
  formData.append("deadline", taskDetails.deadline);
  formData.append("file", ""); // if there's a file to work on
  formData.append("employee_id", taskDetails.employee_id);
  formData.append("reward_id", "id-of-selected-reward"); // if there's a reward for completing task
  formData.append("api_token", taskDetails.api_token);

  const handleClose = (e) => {
    if (e.target.id === "wrapper") props.onClose();
  };
  return (
    <Modal handleClose={handleClose} onClose={() => props.onClose()}>
      <div className="w-[100%] border-b-[2px] pb-2">
        <h1 className="text-[1.5rem] font-bold">Tasks</h1>
        <p className="text-[1rem] lg:text-[0.9rem] mt-4 lg:mt-0 mb-2 lg:mb-0">
          Send responsibilities to your staff and get them updated
        </p>
      </div>
      <div className="w-[100%] mt-4 lg:mt-0 text-start">
        <form action="" className="w-[100%] grid grid-cols-1 gap-4">
          <section className="w-[100%] flex items-center gap-4">
            <label htmlFor="recipient" className="font-semibold w-[6rem]">
              Send To:
            </label>
            <input
              className="w-[18rem] flex focus:outline-0 text-[0.9rem] items-center h-9 border-[#1d70c9] border-[1px]
  rounded-lg px-3 bg-white"
              type="text"
              id="recipient"
              name="recipient"
              placeholder="Department, Individual"
            />
          </section>
          <section className="w-[100%] flex items-center gap-4">
            <label htmlFor="task_title" className="font-semibold w-[6rem]">
              Title
            </label>
            <input
              className="focus:outline-0 text-[0.9rem] w-[18rem] flex items-center h-9 border-[#1d70c9] border-[1px]
  rounded-lg px-3 bg-white"
              type="text"
              id="task_title"
              name="task_title"
              placeholder="Enter a Task Title"
            />
          </section>
          <section className="w-[100%] flex items-center gap-4">
            <label htmlFor="priority" className="font-semibold w-[6rem]">
              Priority
            </label>
            <ul className="w-[18rem] flex h-9 gap-[5rem]">
              <li>
                <input
                  className="appearance-none h-9 flex items-center relative bg-white before:absolute before:content-['Urgent'] before:text-[0.9rem] before:w-[4rem] before:h-8 before:border-gray-400 before:border-[1px] before:text-gray-400 before:rounded-[2rem] before:flex before:justify-center before:items-center checked:before:bg-blue-200 checked:before:text-blue-600 "
                  type="checkbox"
                  id="urgent"
                  name="urgent"
                  value="Urgent"
                />
              </li>
              <li>
                <input
                  className="appearance-none h-9 flex items-center relative bg-white before:absolute before:content-['Normal'] before:text-[0.9rem] before:w-[4rem] before:h-8 before:border-gray-400 before:border-[1px] before:text-gray-400 before:rounded-[2rem] before:flex before:justify-center before:items-center checked:before:bg-blue-200 checked:before:text-blue-600 "
                  type="checkbox"
                  id="normal"
                  name="normal"
                  value="Normal"
                />
              </li>
              <li>
                <input
                  className="appearance-none h-9 flex items-center relative bg-white before:absolute before:content-['Optional'] before:text-[0.9rem] before:w-[4rem] before:h-8 before:border-gray-400 before:border-[1px] before:text-gray-400 before:rounded-[2rem] before:flex before:justify-center before:items-center checked:before:bg-blue-200 checked:before:text-blue-600 "
                  type="checkbox"
                  id="optional"
                  name="optional"
                  value="Optional"
                />
              </li>
            </ul>
          </section>
          <section className="w-[100%] flex items-center gap-4">
            <label htmlFor="date" className="font-semibold w-[6rem]">
              Timeline
            </label>
            <DateRange h={"h-[1.75rem]"} />
          </section>
          <section className="w-[100%] flex items-start gap-4">
            <label
              htmlFor="description"
              className="font-semibold w-[6rem] pt-1"
            >
              Description
            </label>
            <textarea
              className="w-[18rem] focus:outline-0 text-[0.9rem] flex items-center border-[#1d70c9] leading-5 border-[1px]
  rounded-lg px-3 bg-white"
              id="description"
              name="description"
              rows={5}
              placeholder="Give a Description Task"
            ></textarea>
            {/* <input type="file" /> */}
          </section>
          <section className="w-[100%]">
            <button
              type="submit"
              className="flex bg-blue-600 text-[#fff] h-9 items-center justify-center rounded-lg w-[15rem] lg:w-[18rem] hover:bg-[#fff] hover:border-[1px] hover:border-solid hover:border-blue-600 hover:text-blue-600 ml-[6rem] lg:ml-[7rem]"
            >
              Submit
            </button>
          </section>
        </form>
      </div>
    </Modal>
  );
};

export default TaskModal;
