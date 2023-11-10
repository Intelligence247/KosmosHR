import React, { useState } from "react";
import HomeLayout from "../../Layouts/HomeLayout/HomeLayout";
import PaymentProgress from "../../Components/PaymentProgess/PaymentProgress";
import { pricing } from "../../utility/data";

const Pricing2 = () => {
  const [switchPlan, setSwitchPlan] = useState(0);
  const [switchDuration, setSwitchDuration] = useState(0);
  const btnArr = ["Starter Pack", "Standard Pack", "Business Pack"];
  const monthYearlyArr = ["Pay Monthly", "Pay Yearly"];
  return (
    <HomeLayout>
      <div className="w-full flex flex-col justify-center items-start space-y-3">
        <h1 className="lg:text-2xl text-base font-bold">Subscription</h1>
        <p className="opacity-80">
          Choose a subscription that best suits your needs
        </p>
      </div>
      <div className="flex flex-col lg:w-[685px] w-full m-auto space-y-4">
        <PaymentProgress
          level1={"opacity-30"}
          level2={"opacity-30"}
          line2={"opacity-30"}
          line1={"opacity-30"}
        />
        <div className="subscriptionType flex flex-col space-y-12 pt-6">
          <div className="subscriptionBtn flex lg:space-x-12 lg:justify-center justify-between">
            {btnArr.map((b, i) => (
              <button
                className={`lg:text-base text-xs  lg:h-8 h-6 whitespace-nowrap lg:w-[8rem]  ${
                  switchPlan === i
                    ? "opacity-100 border-t-0 border-b-2 border-black font-bold"
                    : "opacity-40"
                }`}
                onClick={() => setSwitchPlan(i)}
                key={i}
              >
                {b}
              </button>
            ))}
          </div>
          <p className="lg:text-sm text-xs text-center">
            Perfect for small businesses and startups looking for an affordable
            solution. It allows smaller companies, with fewer staffs to adequate
            handle their employee management issues.
          </p>
          <div className="flex flex-col space-y-2.5">
            <h1>Features</h1>

            {pricing[switchPlan].specification.map((feature) => (
              <div
                className={`eachFeature flex justify-start items-center space-x-3 ${
                  feature.available ? "opacity-100" : "opacity-40"
                }`}
              >
                <img src={`/stroke.svg`} alt="" />
                <p>{feature.list}</p>
              </div>
            ))}
            <div className="price flex justify-center items-center lg:space-x-12 space-x-6 py-8 ">
              <h1 className="font-bold lg:text-5xl text-2xl">
                ${pricing[switchPlan].price}/
                <span className="lg:text-sm text-xs opacity-50">Month</span>
              </h1>
              <p className="h-12 bg-black/30 w-[1px]"></p>
              <h1 className="font-bold lg:text-5xl text-2xl">
                ${pricing[switchPlan].price * (switchDuration === 0 ? 1 : 12)}
                <span className="lg:text-sm text-xs opacity-50 pl-2">
                  {switchDuration === 0 ? "Monthly" : "Yearly"}
                </span>
              </h1>
            </div>
            <div className="monthYearBtn flex space-x-12">
              {monthYearlyArr.map((m, i) => (
                <button
                  onClick={() => setSwitchDuration(i)}
                  className={`flex justify-center items-center  lg:h-12 h-9 whitespace-nowrap lg:w-4/12 w-5/6 rounded-full ${
                    switchDuration === i
                      ? "text-white bg-primary_SkyBlue/100"
                      : "text-black bg-primary_SkyBlue/50"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Pricing2;
