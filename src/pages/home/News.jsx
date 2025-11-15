import CustomBtn1 from "../../components/ui/buttons/CustomBtn1";
import User from "../../components/ui/icons/User";
import CustomBtn2 from "../../components/ui/buttons/CustomBtn2";
import bg1 from "../../assets/home_pg/news/news_bg1.png";
import bg2 from "../../assets/home_pg/news/news_bg2.png";

const News = () => {
  return (
    <div className="bg-white ">
      <div className="container pt-[177px] pb-[253px]">
        <div className="mb-[50px]  items-end  flex justify-between ">
          <div>
            <h2 className="font-yellowtail text-[36px] leading-[100%] text-submain mb-3">
              News
            </h2>
            <h3 className="font-roboto font-extrabold text-[50px] leading-[100%] w-[702px] text-main">
              Discover weekly content about organic food, & more
            </h3>
          </div>
          <div className="pt-[95px]">
            <CustomBtn1 widthClass={"w-[256px]"} title={"More News"} />
          </div>
        </div>
        <div className="flex gap-[46px] ">
          <div
            className="bg-center bg-cover bg-no-repeat w-[677px] rounded-[20px] h-[524px] px-8 pt-[43px]"
            style={{ backgroundImage: `url(${bg1})` }}
          >
            <div className="bg-white rounded-full flex flex-col items-center font-roboto text-main font-extrabold text-2xl px-[23px] py-[13px] w-[85px] mb-[137px]">
              <p>25</p>
              <p>NOV</p>
            </div>
            <div className="bg-white pt-[46px] px-[57px] shadow-xl rounded-[30px]  pb-[60px] ">
              <div className="flex items-center gap-2 font-roboto text-main text-[18px] leading-[100%] mb-[15px]">
                <User />
                <p>By Rachi Card</p>
              </div>
              <h3 className="font-roboto font-extrabold text-2xl leading-[100%] text-main pr-[91px] w-[540px]">
                The Benefits of Vitamin D & How to Get It
              </h3>
              <p className="font-openSans text-[18px] text-customB leading-[165%] w-[444px] mb-4">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </p>
              <CustomBtn2 widthClass={"w-[220px]"} title={"Read More"} />
            </div>
          </div>
          <div
            className="bg-center bg-cover bg-no-repeat w-[677px] rounded-[20px] h-[524px] px-8 pt-[43px]"
            style={{ backgroundImage: `url(${bg2})` }}
          >
            <div className="bg-white rounded-full flex flex-col items-center font-roboto text-main font-extrabold text-2xl px-[23px] py-[13px] w-[85px] mb-[137px]">
              <p>25</p>
              <p>NOV</p>
            </div>
            <div className="bg-white pt-[46px] px-[57px] shadow-xl rounded-[30px]  pb-[60px]">
              <div className="flex items-center gap-2 font-roboto text-main text-[18px] leading-[100%] mb-[15px]">
                <User />
                <p>By Rachi Card</p>
              </div>
              <h3 className="font-roboto font-extrabold text-2xl leading-[100%] text-main pr-[91px] w-[540px]">
                Our Favourite Summertime Tommeto
              </h3>
              <p className="font-openSans text-[18px] text-customB leading-[165%] w-[444px] mb-4">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </p>
              <CustomBtn2 widthClass={"w-[220px]"} title={"Read More"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
