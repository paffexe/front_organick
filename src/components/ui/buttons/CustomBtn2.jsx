import React from "react";
import ArrowR from "../icons/ArrowR";

const CustomBtn2 = ({ widthClass, title, heightClass }) => {
  return (
    <button
      className={` bg-customY border border-transparent text-main cursor-pointer rounded-2xl  py-7 hover:bg-white hover:border hover:border-main transition ease-in hover:text-main font-roboto font-bold text-xl ${heightClass} ${widthClass}`}
    >
      <div className=" flex items-center justify-center gap-2.5">
        {title}
        <ArrowR />
      </div>
    </button>
  );
};

export default CustomBtn2;
