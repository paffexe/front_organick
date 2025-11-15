import eco_bg from "../../assets/home_pg/eco/eco_bg.png";

const Eco = () => {
  return (
    <div className="bg-white">
      <div className="flex h-[931px]">
        <div
          className="w-1/2 bg-no-repeat bg-left bg-cover"
          style={{ backgroundImage: `url(${eco_bg})` }}
        ></div>

        <div className="w-1/2 flex items-center relative">
          <div className=" w-[789px] rounded-[30px] pl-[89px]  py-[78px] bg-white  absolute top-[10%] right-[25%]">
            <h2 className="font-yellowtail text-submain leading-[100%] text-[36px] mb-2">
              Eco Friendly
            </h2>
            <h3 className="font-roboto text-main font-extrabold leading-[100%] text-[50px] mb-8.5 w-[500px]">
              Econis is a Friendly Organic Store
            </h3>
            <h4 className="font-robot font-medium text-main text-[25px] leading-[100%] mb-1.5">
              Start with Our Company First
            </h4>
            <p className="font-openSans leading-[165%] text-[18px] text-customB w-[635px] mb-8.5">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </p>
            <h4 className="font-robot font-medium text-main text-[25px] leading-[100%] mb-1.5">
              Learn How to Grow Yourself
            </h4>
            <p className="font-openSans leading-[165%] text-[18px] text-customB w-[635px] mb-8.5">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </p>{" "}
            <h4 className="font-robot font-medium text-main text-[25px] leading-[100%] mb-1.5">
              Farming Strategies of Today
            </h4>
            <p className="font-openSans leading-[165%] text-[18px] text-customB w-[635px]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eco;
