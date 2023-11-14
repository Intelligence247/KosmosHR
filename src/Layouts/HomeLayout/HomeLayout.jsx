import MainMenu from "../../Components/MainMenu/MainMenu";
import Header from "../../Components/Header/Header";
import { useEffect, useState } from "react";
import { kosmos_get } from "../../../kosmos-module/kosmosRequest";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";
import RichTextEditor from "../../Editor/RichTextEditor";

const HomeLayout = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const [siteInfo, setSiteInfo] = useState([]);
  const isActiveFuction = () => {
    setIsActive(!isActive);
  };
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  const SiteInfo = () => {
    axios
      .get("https://kosmoshr.pythonanywhere.com/api/v1/site/get_site_info/")
      .then((resp) => {
        console.log(resp.data);
        setSiteInfo(resp.data.data);
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
  };

  useEffect(() => {
    SiteInfo();
  }, []);

  const [content, setContent] = useState('');

  const handleEditorChange = (newContent) => {
    setContent(newContent);
  };
  console.log(siteInfo)
  return (
    <div>
      {siteInfo.length < 1 ? (
        <div className="w-full h-screen grid place-content-center">
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </div>
      ) : (
        <div className="w-[100%] h-fit flex lg:flex-row flex-col">
          <div className="lg:w-[17rem] w-full">
            <MainMenu
              img={`https://kosmoshr.pythonanywhere.com${siteInfo.logo}`}
              showHide={
                isActive
                  ? "scale-x-100 -left-0"
                  : "lg:-left-0 -left-[35%] lg:scale-x-100 scale-x-0 "
              }
            />
            <div
              onClick={() => setIsActive(!isActive)}
              className={`overlay fixed z-40 backdrop-blur-2xl lg:hidden 
           bg-black/10 opacity-80 w-[30%] h-screen right-0 top-0
            ${isActive ? "scale-x-100 -right-0" : "-right-[15%] scale-x-0 "}`}
            ></div>
          </div>
          <div className="w-[100%] space-y-0 flex flex-col gap-8 py-9 lg:px-20 px-6 lg:pt-9 pt-24">
            <Header navInOut={isActiveFuction} />
            {/* <RichTextEditor value={content} onChange={handleEditorChange} /> */}
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeLayout;
