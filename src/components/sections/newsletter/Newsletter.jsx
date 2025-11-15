import newsletter_bg from "../../../assets/newsletter/newsletter.png";
import CustomBtn1 from "../../ui/buttons/CustomBtn1";

const Newsletter = () => {
  return (
    <div
      className="container bg-center bg-cover bg-no-repeat py-[105px] rounded-4xl mb-[117px]"
      style={{ backgroundImage: `url(${newsletter_bg})` }}
    >
      <div className="px-[71px] flex items-center justify-between">
        <p className="w-[357px] font-roboto font-extrabold text-[50px] leading-[100%] text-white">
          Subscribe to our Newsletter
        </p>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Your Email Address"
            className="bg-white pt-7 pb-[31px] pl-[23px] pr-5 w-[349px] rounded-2xl font-roboto italic outline-0 text-customB"
          />
          <CustomBtn1 widthClass={"w-[220px]"} title={"Subscribe"} />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
