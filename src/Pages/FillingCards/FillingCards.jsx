import React from "react";
import HomeLayout from "../../Layouts/HomeLayout/HomeLayout";
import PaymentProgress from "../../Components/PaymentProgess/PaymentProgress";
import { Link } from "react-router-dom";

const FillingCards = () => {
  return (
    <HomeLayout>
      <div className="w-full flex flex-col justify-center items-start space-y-3">
        <h1 className="lg:text-2xl text-base font-bold">Subscription</h1>
        <p className="opacity-80">
          Choose a subscription that best suits your needs
        </p>
      </div>
      <div className="flex flex-col justify-center lg:w-[685px] w-full m-auto space-y-4">
        <PaymentProgress
          level1={"bg-[url(/marked.png)]"}
          level2={"opacity-30"}
          line2={"opacity-30"}
        />
        <h1 className="lg:text-2xl text-base font-bold py-6">Payment Methods</h1>
        <div className="card flex flex-col space-y-4">
          <div className="cardhead flex justify-between">
            <div className="cardheadleft">
              <h2 className="font-bold">Credit/Debit Cards</h2>
              <p className="lg:text-sm text-xs">
                Pay with your Credit / Debit Card
              </p>
            </div>
            <div className="cardheadleft flex -space-x-3 items-center gap-[1px]">
              <img src="visa.png" alt="" />
              <img src="america.png" alt="" />
              <img src="maestro.png" alt="" />
            </div>
          </div>
          <div className="inputs flex flex-col space-y-4 justify-center lg:items-center">
            <div className="input1 flex justify-center items-center lg:h-12 h-9 lg:w-[620px] w-full rounded-lg px-2 bg-black bg-opacity-5">
              <input
                type="text"
                placeholder="Card number"
                className="bg-transparent w-full border-none outline-none"
                name=""
                id=""
              />
              <img src="cardadd.png" className="lg:w-5 w-4" alt="" />
            </div>
            <div className="input1 flex justify-center items-center lg:h-12 h-9 lg:w-[620px] w-full rounded-lg px-2 bg-black bg-opacity-5">
              <input
                type="text"
                placeholder="Card number"
                className="bg-transparent w-full border-none outline-none"
                name=""
                id=""
              />
              <img src="cardadd.png" className="lg:w-5 w-4" alt="" />
            </div>
            <div className="flex justify-between lg:w-[620px] lg:flex-row items-center flex-col lg:space-y-0 space-y-4">
              <div className="input1 flex justify-center items-center lg:h-12 h-9 lg:w-[294px] w-full rounded-lg px-2 bg-black bg-opacity-5">
                <input
                  type="date"
                  className="bg-transparent w-full border-none outline-none"
                  name=""
                  id=""
                />
                {/* <img src="calendar.png" className='lg:w-5 w-4' alt="" /> */}
              </div>
              <div className="input1 flex justify-center items-center lg:h-12 h-9 lg:w-[294px] w-full rounded-lg px-2 bg-black bg-opacity-5">
                <input
                  type="text"
                  className="bg-transparent w-full border-none outline-none"
                  placeholder="cvv"
                  name=""
                  id=""
                />
                <img src="lock.png" className="lg:w-5 w-4" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="routes flex justify-between">
          <Link className="lg:w-[114px] lg:h-12 h-9 rounded-lg flex justify-center items-center bg-primary_SkyBlue bg-opacity-30 space-x-2">
            <img src="/back.png" className="" alt="" /> <span>Back</span>
          </Link>
          <Link className="lg:w-[114px] lg:h-12 h-9 rounded-lg flex justify-center items-center bg-primary_SkyBlue text-white">
            Welcome
          </Link>
        </div>
      </div>
    </HomeLayout>
  );
};

export default FillingCards;
