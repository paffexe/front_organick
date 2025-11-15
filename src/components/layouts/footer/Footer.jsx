import Fcb from "../../ui/icons/Fcb";
import Inst from "../../ui/icons/Inst";
import logo from "../../ui/icons/Logo.svg";
import Pin from "../../ui/icons/Pin";
import X from "../../ui/icons/X";

const Footer = () => {
  return (
    <div>
      <div className="w-[1293px] mx-auto">
        <div className="h-[492px] bg-white flex gap-[50px]">
          <div className="w-[335px] h-80 pr-[50px] border-r border-brGray">
            <div className="text-right">
              <h3 className="font-roboto text-main font-bold text-[30px] leading-[100%] mb-8">
                Contact Us
              </h3>

              <div className="font-openSans text-customB text-[18px] leading-[165%]">
                <p className="font-bold">Email</p>
                <p className="mb-5 transition-all duration-200 hover:text-main hover:underline cursor-pointer">
                  needhelp@Organia.com
                </p>

                <p className="font-bold">Phone</p>
                <p className="mb-5 transition-all duration-200 hover:text-main hover:underline cursor-pointer">
                  666 888 888
                </p>

                <p className="font-bold">Address</p>
                <p className="transition-all duration-200 hover:text-main hover:underline cursor-pointer">
                  88 road, borklyn street, USA
                </p>
              </div>
            </div>
          </div>

          <div className="w-[543px] mx-auto">
            <div className="flex items-center flex-col justify-center">
              <img
                src={logo}
                alt=""
                className="mb-[23px] transition-transform duration-300 hover:scale-105 cursor-pointer"
              />

              <p className="font-openSans text-[18px] text-center w-[520px] text-customB leading-[165%]">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum simply dummy text of the printing
              </p>

              <div className="flex gap-4 mt-[49px]">
                <span className="cursor-pointer transition-transform duration-300 hover:scale-110 hover:opacity-80">
                  <Inst />
                </span>

                <span className="cursor-pointer transition-transform duration-300 hover:scale-110 hover:opacity-80">
                  <Fcb />
                </span>

                <span className="cursor-pointer transition-transform duration-300 hover:scale-110 hover:opacity-80">
                  <X />
                </span>

                <span className="cursor-pointer transition-transform duration-300 hover:scale-110 hover:opacity-80">
                  <Pin />
                </span>
              </div>
            </div>
          </div>

          <div className="w-[335px] h-80 pl-[50px] border-l border-brGray">
            <div className="text-left">
              <h3 className="font-roboto text-main font-bold text-[30px] leading-[100%] mb-8">
                Utility Pages
              </h3>

              <div className="font-openSans text-customB text-[18px] leading-[273%]">
                <p className="transition-all duration-200 hover:text-main hover:underline hover:translate-x-1 cursor-pointer">
                  Style Guide
                </p>

                <p className="transition-all duration-200 hover:text-main hover:underline hover:translate-x-1 cursor-pointer">
                  404 Not Found
                </p>

                <p className="transition-all duration-200 hover:text-main hover:underline hover:translate-x-1 cursor-pointer">
                  Password Protected
                </p>

                <p className="transition-all duration-200 hover:text-main hover:underline hover:translate-x-1 cursor-pointer">
                  Licences
                </p>

                <p className="transition-all duration-200 hover:text-main hover:underline hover:translate-x-1 cursor-pointer">
                  Changelog
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-brGray">
        <div className="text-center py-[17px] font-openSans text-[18px] leading-[165%] text-customB">
          <p className="transition-all duration-200 hover:text-main">
            Copyright © <span className="font-bold">Organick</span> | Designed
            by <span className="font-bold">VictorFlow</span> Templates - Powered
            by <span className="font-bold">Webflow</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
