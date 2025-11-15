import Img from "../../assets/about_pg/about/bg_about.png";

import tractor from "../../assets/about_pg/about/tractor.svg";
import factory from "../../assets/about_pg/about/factory.svg";

import CustomBtn1 from "../../components/ui/buttons/CustomBtn1";

const AboutUs = () => {
  return (
    <div className="container flex">
      <div className="pt-[68px] pb-[70px] ">
        <div className="w-[815px] h-[768px] bg-center bg-no-repeat  relative ">
          <img src={Img} alt="" />
          <div className="absolute w-[671px] left-[101%] top-[5%]">
            <h3 className="font-yellowtail text-submain text-[36px] leading-[100%] mb-2">
              About Us
            </h3>
            <h3 className="font-roboto text-main font-extrabold text-[50px] leading-[100%] w-[450px] mb-3.5">
              We do Creative Things for Success
            </h3>
            <p className="font-openSans text-[18px] leading-[165%] text-customB mb-9">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
            <p className="font-openSans text-[18px] leading-[165%] text-customB mb-12">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
            <div className="flex gap-[65px]">
              <div className="flex items-center gap-2">
                <img src={tractor} alt="" />
                <p className="font-roboto text-main font-medium text-[25px] leading-[100%] w-[226px]">
                  Modern Agriculture Equipment
                </p>
              </div>
              <div className="flex items-center gap-2">
                <img src={factory} alt="" />

                <p className="font-roboto text-main font-medium text-[25px] leading-[100%] w-[226px]">
                  No growth hormones are used
                </p>
              </div>
            </div>
            <div className="mt-[58px]">
              <CustomBtn1 widthClass={"w-[226px]"} title={"Explore More"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
