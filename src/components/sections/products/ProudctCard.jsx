import { Link } from "react-router-dom";
import CustomBtn3 from "../../ui/buttons/CustomBtn3";
import Star from "../../ui/icons/Star";

const ProudctCard = ({ id, img, title, category, price }) => {
  return (
    <div
      className="border-2 w-full bg-white border-customW rounded-[30px] p-4
      transition-all duration-300 ease-out
      hover:shadow-2xl hover:scale-[1.02] hover:bg-white cursor-pointer"
    >
      <div>
        <CustomBtn3 heightClass={"h-[31px]"} title={category} />

        <Link to={`/shop/${id}`}>
          <div className="h-[324px] overflow-hidden rounded-[20px] mt-4">
            <img
              src={img}
              alt=""
              className="h-full object-cover transition-all duration-300 hover:scale-105"
            />
          </div>
        </Link>

        <h1
          className="font-roboto text-main font-semibold text-[20px] leading-[100%] mt-3
         transition-colors duration-300 hover:text-submain"
        >
          {title}
        </h1>

        <div className="border-t border-gray-300 flex items-center justify-between mt-3 pt-3">
          <div className="flex items-center gap-2 text-[18px] leading-[100%]">
            <span className="line-through text-customGr1 font-openSans font-semibold">
              $20.00
            </span>

            <strong className="font-openSans text-main font-semibold transition-colors duration-300 hover:text-submain">
              ${price}
            </strong>
          </div>

          <div className="flex items-center gap-1">
            <span className="transition-transform duration-200 hover:scale-110">
              <Star />
            </span>
            <span className="transition-transform duration-200 hover:scale-110">
              <Star />
            </span>
            <span className="transition-transform duration-200 hover:scale-110">
              <Star />
            </span>
            <span className="transition-transform duration-200 hover:scale-110">
              <Star />
            </span>
            <span className="transition-transform duration-200 hover:scale-110">
              <Star />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProudctCard;
