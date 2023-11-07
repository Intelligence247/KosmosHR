import React from "react";

const Modal = ({ children, handleClose, onClose }) => {
  return (
    <div
      className="w-[100vw] h-[100vh] fixed overflow-scroll inset-0 bg-black bg-opacity-25 backdrop-blur-sm z-50 flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      <button
        onClick={onClose}
        className="absolute w-6 h-6 top-[3rem] lg:top-8 right-10 lg:right-[23.5rem]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-[#fff]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="bg-[#fff] flex flex-col items-center text-center p-[2rem] px-8 lg:h-[80%] h-fit w-[85%] lg:w-[40%] rounded-[0.5rem] gap-3">
        {children}
      </div>
    </div>
  );
};

export default Modal;
