import hero from "../../assets/home_pg/hero/Hero.png";
import CustomBtn2 from "../../components/ui/buttons/CustomBtn2";

const Hero = () => {
  return (
    <div className=" bg-bgHero">
      <div
        className="h-[898px]  bg-no-repeat bg-center flex mb-[154px]"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="w-[1535px] mx-auto  mt-[246px] ">
          <h1 className="font-yellowtail text-[36px] text-submain mb-2">
            100% Natural Food
          </h1>
          <h2 className="w-lg font-roboto font-extrabold text-[70px] text-main mb-[23px] leading-[100%]">
            Choose the best healthier way of life
          </h2>
          <CustomBtn2
            widthClass={"w-[220px]"}
            title={"Explore Now"}
            heightClass={"h-[79px]"}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
