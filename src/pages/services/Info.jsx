import img from "../../assets/services_pg/banner.png";

import milk from "../../assets/services_pg/milk.svg";
import store from "../../assets/services_pg/store.svg";
import truck from "../../assets/services_pg/truck.svg";
import plant from "../../assets/services_pg/plant.svg";
import potato from "../../assets/services_pg/potato.svg";
import radish from "../../assets/services_pg/radish.svg";

import CustomBtn1 from "../../components/ui/buttons/CustomBtn1";

const Info = () => {
  return (
    <div className=" py-[200px]">
      <div className="container  flex flex-col justify-center">
        <div className="mx-auto text-center">
          <h2 className="font-yellowtail text-submain leading-[100%] text-4xl">
            What we Grow
          </h2>
          <h3 className="font-roboto text-main font-extrabold text-[50px] w-[482px]">
            Better Agriculture for Better Future
          </h3>
        </div>
        <div className="flex items-center justify-center ">
          <div className="w-[396px] text-right">
            <div className="items-end flex flex-col mb-[39px] ">
              <img src={milk} alt="" />
              <h2 className="font-roboto text-main font-medium text-[25px] leading-[100%] my-1">
                Dairy Products
              </h2>
              <p className="font-openSans leading-[165%] text-[18px] text-customB w-[390px]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremqlaudantium. Sed ut perspiciatis
              </p>
            </div>
            <div className="items-end flex flex-col mb-[39px]">
              <img src={store} alt="" />
              <h2 className="font-roboto text-main font-medium text-[25px] leading-[100%] my-1">
                Store Services
              </h2>
              <p className="font-openSans leading-[165%] text-[18px] text-customB w-[390px]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremqlaudantium. Sed ut perspiciatis
              </p>
            </div>
            <div className="items-end flex flex-col ">
              <img src={truck} alt="" />
              <h2 className="font-roboto text-main font-medium text-[25px] leading-[100%] my-1">
                Delivery Services
              </h2>
              <p className="font-openSans leading-[165%] text-[18px] text-customB w-[390px]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremqlaudantium. Sed ut perspiciatis
              </p>
            </div>
          </div>
          <div>
            <img src={img} alt="" />
          </div>
          <div className="w-[396px] text-left">
            <div className="items-start flex flex-col mb-[39px] ">
              <img src={plant} alt="" />
              <h2 className="font-roboto text-main font-medium text-[25px] leading-[100%] my-1">
                Agricultural Services
              </h2>
              <p className="font-openSans leading-[165%] text-[18px] text-customB w-[390px]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremqlaudantium. Sed ut perspiciatis
              </p>
            </div>
            <div className="items-start flex flex-col mb-[39px]">
              <img src={potato} alt="" />
              <h2 className="font-roboto text-main font-medium text-[25px] leading-[100%] my-1">
                Organic Products
              </h2>
              <p className="font-openSans leading-[165%] text-[18px] text-customB w-[390px]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremqlaudantium. Sed ut perspiciatis
              </p>
            </div>
            <div className="items-start flex flex-col ">
              <img src={radish} alt="" />
              <h2 className="font-roboto text-main font-medium text-[25px] leading-[100%] my-1">
                Fresh Vegetables
              </h2>
              <p className="font-openSans leading-[165%] text-[18px] text-customB w-[390px]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremqlaudantium. Sed ut perspiciatis
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <CustomBtn1 widthClass={"w-[220px]"} title={"Explore More"} />
        </div>
      </div>
    </div>
  );
};

export default Info;
