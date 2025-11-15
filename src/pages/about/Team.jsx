import person1 from "../../assets/about_pg/about/person1.png";
import person2 from "../../assets/about_pg/about/person2.png";
import person3 from "../../assets/about_pg/about/person3.png";

import Facebook from "../../components/ui/icons/Facebook";
import Instagram from "../../components/ui/icons/Instagram";
import Twitter from "../../components/ui/icons/Twitter";

const Team = () => {
  return (
    <div className="container pt-[177px]  pb-[202px]">
      <div className="text-center mb-11">
        <h3 className="font-yellowtail text-submain leading-[100%] text-[36px]">
          Team
        </h3>
        <p className="font-roboto text-main leading-[100%] font-extrabold text-[50px] mb-4">
          Our Organic Experts
        </p>
        <p className="font-openSans text-customB text-[18px] leading-[165%] w-[853px] mx-auto">
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-[27px]">
        <div className="w-[449px] bg-customW  rounded-[30px] hover:shadow-2xl hover:bg-white cursor-pointer transition-all duration-300 ease-out hover:scale-[1.02]">
          <div className="overflow-hidden rounded-t-[30px]">
            <img
              src={person1}
              alt=""
              className="transition-all duration-300 ease-out hover:scale-105"
            />
          </div>
          <div className="py-[35px] px-7 flex items-center justify-between">
            <div>
              <h3 className="font-roboto text-main font-extrabold leading-[100%] text-[25px] transition-colors duration-300">
                Giovani Bacardo
              </h3>

              <p className="font-yellowtail text-submain leading-[100%] text-[22px] transition-colors duration-300">
                Farmer
              </p>
            </div>
            <div className="flex gap-[17px] items-center">
              <div className="transition-transform duration-300 hover:scale-110">
                <Facebook />
              </div>
              <div className="transition-transform duration-300 hover:scale-110">
                <Twitter />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[449px] bg-customW  rounded-[30px] hover:shadow-2xl hover:bg-white cursor-pointer transition-all duration-300 ease-out hover:scale-[1.02]">
          <div className="overflow-hidden rounded-t-[30px]">
            <img
              src={person2}
              alt=""
              className="transition-all duration-300 ease-out hover:scale-105"
            />
          </div>
          <div className="py-[35px] px-7 flex items-center justify-between">
            <div>
              <h3 className="font-roboto text-main font-extrabold leading-[100%] text-[25px] transition-colors duration-300">
                Marianne Loreno
              </h3>

              <p className="font-yellowtail text-submain leading-[100%] text-[22px] transition-colors duration-300">
                Designer
              </p>
            </div>
            <div className="flex gap-[17px] items-center">
              <div className="transition-transform duration-300 hover:scale-110">
                <Instagram />
              </div>
              <div className="transition-transform duration-300 hover:scale-110">
                <Facebook />
              </div>
              <div className="transition-transform duration-300 hover:scale-110">
                <Twitter />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[449px] bg-customW  rounded-[30px] hover:shadow-2xl hover:bg-white cursor-pointer transition-all duration-300 ease-out hover:scale-[1.02]">
          <div className="overflow-hidden rounded-t-[30px]">
            <img
              src={person3}
              alt=""
              className="transition-all duration-300 ease-out hover:scale-105"
            />
          </div>
          <div className="py-[35px] px-7 flex items-center justify-between">
            <div>
              <h3 className="font-roboto text-main font-extrabold leading-[100%] text-[25px] transition-colors duration-300">
                Riga Pelore
              </h3>

              <p className="font-yellowtail text-submain leading-[100%] text-[22px] transition-colors duration-300">
                Farmer
              </p>
            </div>
            <div className="flex gap-[17px] items-center">
              <div className="transition-transform duration-300 hover:scale-110">
                <Instagram />
              </div>
              <div className="transition-transform duration-300 hover:scale-110">
                <Facebook />
              </div>
              <div className="transition-transform duration-300 hover:scale-110">
                <Twitter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
