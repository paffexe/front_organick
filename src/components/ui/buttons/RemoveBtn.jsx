import React from "react";
import ArrowR from "../icons/ArrowR";

const RemoveBtn = ({ foo, title }) => {
  return (
    <button
      onClick={foo}
      className="
        bg-main text-white cursor-pointer 
        rounded-xl py-2 px-4 
        hover:bg-white hover:text-main 
        border-2 border-main 
        transition ease-in 
        font-roboto font-semibold text-sm
      "
    >
      <div className="flex items-center justify-center gap-2">{title}</div>
    </button>
  );
};

export default RemoveBtn;
