import bgImg from "../../assets/home_pg/about/about.png";
import bowl from "../../assets/home_pg/about/bowl.svg";
import mail from "../../assets/home_pg/about/mail.svg";
import CustomBtn1 from "../../components/ui/buttons/CustomBtn1";

const About = () => {
  return (
    <div className="bg-customW">
      <div className="container  flex ">
        <div className="w-[900px] mt-[120px] h-[750px] ">
          <img src={bgImg} alt="img" className="h-full" />
        </div>
        <div className=" w-[702px]">
          <h3 className="font-yellowtail text-[36px] leading-[100%] text-submain pt-[186px] mb-2">
            About Us
          </h3>
          <p className="font-roboto font-extrabold text-main text-[50px]  leading-[100%] mb-3.5">
            We Believe in Working Accredited Farmers
          </p>
          <p className="w-[680px] font-openSans text-[18px] leading-[165%] text-customB mb-[46px]">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <div className="flex gap-[19px] items-center w-[564px] mb-7.5">
            <img src={bowl} alt="" />
            <div>
              <h3 className="text-main font-roboto font-extrabold text-[25px] leading-[100%]">
                Organic Foods Only
              </h3>
              <p className="font-openSans text-customB leading-[165%] text-[18px]">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </p>
            </div>
          </div>
          <div className="flex gap-[19px] items-center w-[564px] mb-[46px]">
            <img src={mail} alt="" />
            <div>
              <h3 className="text-main font-roboto font-extrabold text-[25px] leading-[100%]">
                Quality Standards
              </h3>
              <p className="font-openSans text-customB leading-[165%] text-[18px]">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </p>
            </div>
          </div>
          <div className=" pb-[199px]">
            <CustomBtn1
              widthClass={"w-[220px]"}
              heightClass={"79px"}
              title={"Shop Now"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
