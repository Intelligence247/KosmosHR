import React from "react";
import HomeLayout from "../../Layouts/HomeLayout/HomeLayout";
import PaymentProgress from "../../Components/PaymentProgess/PaymentProgress";

const FinalReceipt = () => {
  return (
    <HomeLayout>
      <div className="w-full flex flex-col justify-center items-start space-y-3">
        <h1 className="lg:text-2xl text-base font-bold">Subscription</h1>
        <p className="opacity-80">
          Choose a subscription that best suits your needs
        </p>
      </div>
      <section className="flex flex-col justify-center items-center space-y-8 w-full overflow-x-hidden">
        <PaymentProgress
          level1={"bg-[url(/marked.png)]"}
          level2={"bg-[url(/marked.png)]"}
        />
        <h2 className="font-bold w-max m-auto lg:text-xl text-base ">
          Congratulations on your Purchase
        </h2>
        <img src="/man.png" className="" alt="" />
      </section>
    </HomeLayout>
  );
};
export default FinalReceipt;
