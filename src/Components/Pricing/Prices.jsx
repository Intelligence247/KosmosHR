import React from "react";
import { pricing } from "../../utility/data";

const Prices = () => {
  return (
    <div className="flex gap-8 text-[0.7rem]">
      {pricing.map((e, i) => (
        <div
          key={i}
          className="w-[24rem] text-left p-6 border-[1px] border-solid border-blue-100 rounded-xl text-[0.7rem]"
        >
          <div className="w-[100%]">
            <span className="py-1 px-4 bg-blue-200 rounded-[1.2rem] text-[0.7rem]">
              {e.pack}
            </span>
            <span
              className={`${
                e.popularity === ""
                  ? "hidden"
                  : "py-1 text-[0.65rem] px-4 bg-blue-50 rounded-[1.2rem]"
              }`}
            >
              {e.popularity}
            </span>
          </div>
          <p className="w-[100%] mt-4 leading-5 text-[0.7rem]">
            {e.description}
          </p>
          <div className="w-[100%] my-4 border-y-[1px] border-solid border-black">
            <ul className="flex flex-col list-inside list-none text-[0.7rem] gap-1 py-3">
              {e.specification.map((s, i) => (
                <li
                  key={i}
                  className={`${
                    s.available ? "" : "text-[#c1c1c1]"
                  } flex items-center gap-1 text-[0.7rem]`}
                >
                  <span
                    className={`${
                      s.available ? "" : "bg-blue-100"
                    } bg-blue-200 rounded-[50%] text-[0.7rem] w-4 h-4 flex justify-center items-center`}
                  >
                    {s.available ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-3 h-3"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    )}
                  </span>
                  {s.list}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-[100%] font-bold text-[1.75rem] text-center">
            $<span className="text-[1.75rem]">{e.price}.00</span>
            <sub className="font-semibold text-[#c1c1c1] text-[0.9rem] bottom-[0.1rem] ">
              /month
            </sub>
          </div>
          <button className="text-[#fff] w-[100%] mt-4 py-2 bg-blue-600 rounded-[1.2rem]">
            Choose Plan
          </button>
        </div>
      ))}
    </div>
  );
};

export default Prices;
