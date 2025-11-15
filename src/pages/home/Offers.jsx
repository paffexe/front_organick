import leftOffer from "../../assets/home_pg/offer/OfferLeft.png";
import rightOffer from "../../assets/home_pg/offer/OfferRight.png";

const Offers = () => {
  return (
    <div className="container flex items-center justify-evenly  pb-[190px]">
      <div
        className="w-[682px] h-[367px]"
        style={{ backgroundImage: `url(${leftOffer})` }}
      >
        <div className="pl-[54px] pt-[109px] text-white">
          <h3 className="font-yellowtail text-[36px] ">Natural!!</h3>
          <p className="font-roboto font-extrabold text-[40px] w-[270px]">
            Get Garden Fresh Fruits
          </p>
        </div>
      </div>
      <div
        className="w-[682px] h-[367px]"
        style={{ backgroundImage: `url(${rightOffer})` }}
      >
        <div className="pl-[54px] pt-[109px]">
          <h3 className="font-yellowtail text-[36px] text-submain ">Offer!!</h3>
          <p className="font-roboto font-extrabold text-main text-[40px] w-[260px]">
            Get 10% off on Vegetables
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offers;
