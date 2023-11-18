import React, { useEffect, useState } from "react";
import StaffHomeLayout from "../../Layouts/StaffHomeLayout/StaffHomeLayout";
import { api_token } from "../../../APITOKEN";
import RichTextEditor from "../../Editor/RichTextEditor";
import { kosmos_post } from "../../../kosmos-module/kosmosRequest";

const SendCommunication = () => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [errM, setErrM] = useState("");
  const [values, setValues] = useState({
    title: "",
    category: "",
    post: "",

  });

 
 
  const handleSend = async (e) => {
    e.preventDefault();
    const url = "https://kosmoshr.pythonanywhere.com/api/v1/news/create_news/";
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("post", values.content); // you can use the textarea text editor
    formData.append("verified", true);
    formData.append("active", true); // employees can only see active news
    formData.append("category_id", values.category); // id of selected news category
    formData.append("api_token", api_token);
    try {
      setLoading(true);
      values.title == "" || values.category == "" || values.content == ""
        ? setErrM("No Input must be empty")
        : "";

      const data = await kosmos_post(url, formData);
      console.log(data.data);
      console.log(data);
      setErrM(data.message);
      setLoading(false);
      data.status == "success" ? (setSent(true), setErrM("")) : setSent(false),
        setErrM(data.message);
    } catch (error) {
      console.log(error);
      setErrM(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
handleSend()
  }, []);
  const handleEditorChange = (newContent) => {
    setValues({ ...values, post: newContent });
  };
  return (
    <StaffHomeLayout>
      <header className="flex flex-col space-y-2 justify-start items-start">
        <img src="/back.png" alt="" />
        <h1 className="lg:text-2xl text-base font-bold">Communications</h1>
        <p className="opacity-80">Communicate within your organisation</p>
      </header>
      <section className="flex flex-col space-y-8 pb-9">
        <div className="name flex flex-col lg:space-y-1.5 space-y-1">
          <label htmlFor="name" className="lg:text-[14px] font-bold">
            Title:
          </label>
          <input
            className="text-[12px] lg:h-12 h-9 border-[#000]/40 border-[2px] lg:w-[50%] w-full pl-2 outline-none rounded-lg"
            type="text"
            name=""
            value={values.title}
            id=""
            placeholder="Enter title"
            onChange={(e) =>
              setValues({
                ...values,
                title: e.target.value,
              })
            }
          />
        </div>
        <div className="name flex flex-col lg:space-y-1.5 space-y-1">
          <label htmlFor="name" className="lg:text-[14px] font-bold">
            Category:
          </label>
          <input
            className="text-[12px] lg:h-12 h-9 border-[#000]/40 border-[2px] lg:w-[50%] w-full pl-2 outline-none rounded-lg"
            type="text"
            name=""
            value={values.category}
            id=""
            placeholder="Enter title"
            onChange={(e) =>
              setValues({
                ...values,
                category: e.target.value,
              })
            }
          />
        </div>
        <div className="h-max mb-3">
          <RichTextEditor
            value={values.post}
            onChange={handleEditorChange}
          />
        </div>
        <div className=" w-max lg:pt-8 pt-[7rem] text-xs text-red-500">hell{errM}</div>
        <div className="flex justify-end">
          <button onClick={handleSend} className="px-8 rounded-lg py-2 bg-primary_SkyBlue text-white">
            Send
          </button>
        </div>
      </section>
    </StaffHomeLayout>
  );
};

export default SendCommunication;
