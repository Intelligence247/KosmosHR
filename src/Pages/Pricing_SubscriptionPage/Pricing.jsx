import Prices from "../../Components/Pricing/Prices";

const Pricing = () => {
  return (
    <div className="w-[100%] bg-black bg-opacity-20 flex justify-center items-center">
      <div className="lg:w-[80%] w-[100%] my-10 bg-white rounded-lg text-center p-[2rem]">
        <p className="text-[2rem] leading-8 font-semibold">
          Set up your site, pick a plan
        </p>
        <p className="mt-4 text-[0.85rem]">
          Choose the plan that’s right for your business, is important for
          adequate employment management
        </p>
        <div className="mt-8 lg:mx-12">
          <Prices />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
