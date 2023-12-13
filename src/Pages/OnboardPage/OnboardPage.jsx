import React from "react";
import Onboard from "../../Components/Onboard/Onboard";
import { Link } from "react-router-dom";

const OnboardPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Onboard
        bghidden="lg:hidden flex lg:bg-[url(/onboard2.png)] bg-[url(/onboardmobile2.png)]"
        reverse={"flex-row"}
        title={"Fostering Management-Staff Harmony!"}
        desc={
          "Effortless Task Delegation, Seamless End-of-Day Reports, Improved cross-department communication"
        }
        link={"/onboardpage2"}
      />

      <section className="lg:block hidden text-2xl">
        This page is only available on mobile
        <Link className="text-2xl text-primary_SkyBlue" to="/login">
          {" "}
          Go to main page
        </Link>{" "}
      </section>
    </div>
  );
};

export default OnboardPage;
