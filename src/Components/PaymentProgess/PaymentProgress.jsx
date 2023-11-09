import React from "react";

const PaymentProgress = ({ level1, level2, line1, line2 }) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-2 w-full">
      <div className="lines flex items-center">
        <p className="w-4 h-4 rounded-full bg-primary_SkyBlue bg-[url(/marked.png)] bg-no-repeat bg-center"></p>
        <p className={`${line1} h-[1px] bg-primary_SkyBlue lg:w-[315px] w-32`}></p>
        <p
          className={`w-4 h-4 rounded-full bg-primary_SkyBlue ${level1} bg-no-repeat bg-center`}
        ></p>
        <p className={`${line2} h-[1px] bg-primary_SkyBlue lg:w-[315px] w-32`}></p>
        <p
          className={`w-4 h-4 rounded-full bg-primary_SkyBlue ${level2} bg-no-repeat bg-center`}
        ></p>
      </div>
      <div className="images flex justify-between lg:w-[685px] w-[19rem]">
        <img className="w-6 h-6" src="/profile.png" alt="" />
        <img className="w-6 h-6" src="/cardadd.png" alt="" />
        <img className="w-6 h-6" src="/success.svg" alt="" />
      </div>
    </div>
  );
};

export default PaymentProgress;
