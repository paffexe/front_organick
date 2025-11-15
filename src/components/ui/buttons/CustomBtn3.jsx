import React from "react";
import ArrowR from "../icons/ArrowR";

const CustomBtn3 = ({ widthClass, title, heightClass }) => {
  return (
    <button
      className={` bg-main  text-white cursor-pointer flex items-center capitalize rounded-lg py-1.5 px-3 font-roboto font-bold text-xl ${heightClass} ${widthClass}`}
    >
      {title}
    </button>
  );
};

export default CustomBtn3;
