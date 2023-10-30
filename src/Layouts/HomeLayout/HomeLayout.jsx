import MainMenu from "../../Components/MainMenu/MainMenu";
import Header from "../../Components/Header/Header";

const HomeLayout = ({ children }) => {
  return (
    <div className="w-[100%] h-fit flex lg:flex-row flex-col">
      <div className="lg:w-[17rem] w-full">
        <MainMenu />
      </div>
      <div className="w-[100%] space-y-0 flex flex-col gap-8 py-9 lg:px-20 px-8 lg:pt-9 pt-24">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default HomeLayout;
