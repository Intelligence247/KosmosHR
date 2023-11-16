import React, { useEffect, useState } from "react";
import Onboard from "../../Components/Onboard/Onboard";

const LoginSignLayout = ({ children }) => {
  const [autoPlay, setautoPlay] = useState(0);
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const intervalId = setInterval(incrementCount, 5000); 
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="lg:flex justify-end">
      <section className="w-[57%] fixed left-0">
      {count % 2 ?
       <Onboard 
       bghidden="lg:flex hidden lg:bg-[url(/onboard1.png)] bg-[url(/onboardmobile1.png)]" 
       reverse={'flex-row-reverse'}
       title={'Task, Report, Connect'}
       desc={'Revolutionizing Employee Management:'}

       /> :
        <Onboard 
        bghidden="lg:flex hidden lg:bg-[url(/onboard2.png)] bg-[url(/onboardmobile2.png)]" 
       reverse={'flex-row'}
       title={'Fostering Management-Staff Harmony!'}
       desc={'Effortless Task Delegation, Seamless End-of-Day Reports, Improved cross-department communication'}
       
        />}
        </section>
      <div className="lg:w-[47%] w-full lg:px-32 px-8 flex flex-col py-9 justify-center relative">
        {children}
      </div>
    </div>
  );
};

export default LoginSignLayout;
