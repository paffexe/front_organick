import bgImg from "../../assets/about_pg/about/info_bg.png";
import icon from "../../assets/about_pg/about/Icon.svg";
import cart from "../../assets/about_pg/about/cart.svg";
import card from "../../assets/about_pg/about/card.svg";
import plant from "../../assets/about_pg/about/plant.svg";
import time from "../../assets/about_pg/about/time.svg";

const Info = () => {
  return (
    <div className="bg-customW">
      <div className="container ">
        <div className="flex  gap-[50px] items-center pt-[190px]">
          <div className=" w-[670px]">
            <h3 className="font-yellowtail text-submain leading-[100%] text-[36px] mt-4.5">
              Why Choose us?
            </h3>
            <h3 className="font-roboto text-main font-extrabold text-[50px] leading-[100%] w-[524px] mt-1.5 mb-6.5">
              We do not buy from the open market & traders.
            </h3>
            <p className="font-openSans text-[18px] leading-[165%] text-customB mb-9">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard the 1500s, when an
              unknown
            </p>
            <div>
              <div className="w-[339px] py-[29px] pl-[27px] bg-[#ECECEC] rounded-[49px] font-roboto text-main font-medium text-[20px] leading-[100%] flex items-center gap-2">
                <img src={icon} alt="" />
                <p>100% Natural Product</p>
              </div>
              <p className="w-[450px] pl-13 my-3 font-openSans text-[18px] leading-[165%] text-customB">
                Simply dummy text of the printing and typesetting industry Lorem
                Ipsum
              </p>
              <div className="w-[339px] py-[29px] pl-[27px] bg-[#ECECEC] rounded-[49px] font-roboto text-main font-medium text-[20px] leading-[100%] flex items-center gap-2">
                <img src={icon} alt="" />
                <p> Increases resistance</p>
              </div>
              <p className="w-[450px] pl-13 my-3 font-openSans text-[18px] leading-[165%] text-customB">
                Filling, and temptingly healthy, our Biona Organic Granola with
                Wild Berries is just the thing
              </p>
            </div>
          </div>
          <div
            className="w-[678px] h-[579px] bg-center bg-cover bg-no-repeat rounded-2xl"
            style={{ backgroundImage: `url(${bgImg})` }}
          ></div>
        </div>
        <div className="flex items-center gap-5 justify-center pb-[189px] pt-[91px]">
          <div className="bg-white w-[257px] pb-5 rounded-4xl  text-center">
            <div className=" px-[81px] pt-[50px]">
              <img src={cart} alt="" className="w-[95px] " />
            </div>
            <p className="font-roboto text-main font-extrabold text-[25px] leading-[100%] mt-3.5 mb-3">
              Return Policy
            </p>
            <p className="font-openSans leading-[165%] text-[18px] text-customB w-[184px] mx-auto ">
              Simply dummy text of the printintypesetting industry.
            </p>
          </div>
          <div className="bg-white w-[257px] pb-5 rounded-4xl  text-center">
            <div className=" px-[81px] pt-[50px]">
              <img src={plant} alt="" className="w-[95px] " />
            </div>
            <p className="font-roboto text-main font-extrabold text-[25px] leading-[100%] mt-3.5 mb-3">
              100% Fresh
            </p>
            <p className="font-openSans leading-[165%] text-[18px] text-customB w-[184px] mx-auto ">
              Simply dummy text of the printintypesetting industry.
            </p>
          </div>
          <div className="bg-white w-[257px] pb-5 rounded-4xl  text-center">
            <div className=" px-[81px] pt-[50px]">
              <img src={time} alt="" className="w-[95px] " />
            </div>
            <p className="font-roboto text-main font-extrabold text-[25px] leading-[100%] mt-3.5 mb-3">
              Support 24/7
            </p>
            <p className="font-openSans leading-[165%] text-[18px] text-customB w-[184px] mx-auto ">
              Simply dummy text of the printintypesetting industry.
            </p>
          </div>
          <div className="bg-white w-[257px] pb-5 rounded-4xl  text-center">
            <div className=" px-[81px] pt-[50px]">
              <img src={card} alt="" className="w-[95px] " />
            </div>
            <p className="font-roboto text-main font-extrabold text-[25px] leading-[100%] mt-3.5 mb-3">
              Secured Payment
            </p>
            <p className="font-openSans leading-[165%] text-[18px] text-customB w-[184px] mx-auto ">
              Simply dummy text of the printintypesetting industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
