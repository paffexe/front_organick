import ct_bg from "../../assets/home_pg/category/ct_bg.png";
import ct_bg2 from "../../assets/home_pg/category/ct_bg2.png";
import ct_bg3 from "../../assets/home_pg/category/ct_bg3.png";
import CustomBtn4 from "../../components/ui/buttons/CustomBtn4";

const Category = () => {
  return (
    <div className="py-[187px] bg-bgCategory flex items-center gap-[42px]">
      <div
        className="w-[607px] bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${ct_bg})` }}
      >
        <div className="py-[244px] px-[146px]">
          <CustomBtn4 widthClass={"w-[320px]"} title={"Organic Juice"} />
        </div>
      </div>
      <div
        className="w-[607px] bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${ct_bg2})` }}
      >
        <div className="py-[244px] px-[146px]">
          <CustomBtn4 widthClass={"w-[320px]"} title={"Organic Food"} />
        </div>
      </div>
      <div
        className="w-[607px] bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${ct_bg3})` }}
      >
        <div className="py-[244px] px-[146px]">
          <CustomBtn4 widthClass={"w-[320px]"} title={"Nuts Cookies"} />
        </div>
      </div>
    </div>
  );
};

export default Category;
