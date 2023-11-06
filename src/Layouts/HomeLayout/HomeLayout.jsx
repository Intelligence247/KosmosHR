import MainMenu from "../../Components/MainMenu/MainMenu";
import Header from "../../Components/Header/Header";
import { useState } from "react";

const HomeLayout = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const isActiveFuction = () => {
    setIsActive(!isActive);
  };
  console.log(isActive);
  return (
    <div className="w-[100%] h-fit flex lg:flex-row flex-col">
      <div className="lg:w-[17rem] w-full">
        <MainMenu showHide={isActive?'scale-x-100 -left-0': 'lg:-left-0 -left-[35%] lg:scale-x-100 scale-x-0 '} />
        <div
          onClick={() => setIsActive(!isActive)}
          className={`overlay fixed z-40 backdrop-blur-2xl lg:hidden 
           bg-black/10 opacity-80 w-[30%] h-screen right-0 top-0
            ${isActive?'scale-x-100 -right-0': '-right-[15%] scale-x-0 '}`}></div>
      </div>
      <div className="w-[100%] space-y-0 flex flex-col gap-8 py-9 lg:px-20 px-6 lg:pt-9 pt-24">
        <Header navInOut={isActiveFuction} />
        {children}
      </div>
    </div>
  );
};

export default HomeLayout;
