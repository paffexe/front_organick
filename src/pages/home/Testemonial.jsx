import bg_img from "../../assets/home_pg/testemonial/testemonial_bg.png";
import avatar from "../../assets/home_pg/testemonial/avatar.png";
import navigation from "../../assets/home_pg/testemonial/navigation.png";
import Star2 from "../../components/ui/icons/Star2";
import data1 from "../../assets/home_pg/testemonial/data1.png";
import data2 from "../../assets/home_pg/testemonial/data2.png";
import data3 from "../../assets/home_pg/testemonial/data3.png";
import data4 from "../../assets/home_pg/testemonial/data4.png";

const Testemonial = () => {
  return (
    <div className="bg-bgTestemonial">
      <div
        className="bg-no-repeat bg-center  h-[1267px]"
        style={{ backgroundImage: `url(${bg_img})` }}
      >
        <div className=" py-[164px] mx-auto flex flex-col items-center justify-center  w-[1108px] ">
          <div className="text-center w-[780px]">
            <h2 className="font-yellowtail text-submain leading-[100%] text-[36px]">
              Testimonial
            </h2>
            <h3 className="font-roboto text-main leading-[100%] font-extrabold text-[50px] mt-2 mb-[60px]">
              What Our Customer Saying?
            </h3>
            <div className="flex items-center flex-col justify-center ">
              <img src={avatar} alt="" className="w-[115px] mb-5" />
              <div className="flex items-center justify-center gap-1 mb-[25px]">
                <Star2 />
                <Star2 />
                <Star2 />
                <Star2 />
                <Star2 />
              </div>
              <p className="font-openSans text-customB text-[18px] w-[780px] leading-[165%] mb-5">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been.
              </p>
              <p className="font-roboto font-semibold text-[25px] leading-[100%] text-main mb-0">
                Sara Taylor
              </p>
              <p className="font-openSans text-customB text-[15px] mt-0 mb-5">
                Consumer
              </p>
              <img src={navigation} alt="" />
            </div>
          </div>
          <span className="my-[102px]  border-b border-customGr1 w-full"></span>
          <div className="w-[1030px]  flex items-center gap-[62px]">
            <img src={data1} alt="" />
            <img src={data2} alt="" />
            <img src={data3} alt="" />
            <img src={data4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testemonial;
