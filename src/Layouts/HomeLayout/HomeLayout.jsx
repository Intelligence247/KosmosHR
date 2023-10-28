import MainMenu from "../../Components/MainMenu/MainMenu";
import Header from "../../Components/Header/Header";

const HomeLayout = ({ children }) => {
  return (
    <div className="w-[100%] h-fit flex">
      <div className="w-[17rem]">
        <MainMenu />
      </div>
      <div className="w-[100%] space-y-8 py-9 px-20">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default HomeLayout;
