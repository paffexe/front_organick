const CustomBtn4 = ({ widthClass, title, heightClass, foo }) => {
  return (
    <button
      onClick={foo}
      className={` bg-white  text-main cursor-pointer flex items-center capitalize rounded-[20px] py-[33px] px-[83px] font-roboto font-medium text-[25px] ${heightClass} ${widthClass}`}
    >
      {title}
    </button>
  );
};

export default CustomBtn4;
