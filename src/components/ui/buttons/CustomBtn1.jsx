import React from "react";
import ArrowR from "../icons/ArrowR";

const CustomBtn1 = ({ widthClass, title, heightClass, foo }) => {
  return (
    <button
      onClick={foo}
      className={` bg-main text-white cursor-pointer rounded-2xl py-7 hover:bg-white border-2 border-main transition ease-in hover:text-main font-roboto font-bold text-xl ${heightClass} ${widthClass}`}
    >
      <div className=" flex items-center justify-center gap-2.5">
        {title}
        <ArrowR />
      </div>
    </button>
  );
};

export default CustomBtn1;
