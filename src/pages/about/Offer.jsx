import spicy from "../../assets/about_pg/about/spicy.png";
import fruits from "../../assets/about_pg/about/fruits.png";
import nuts from "../../assets/about_pg/about/nuts.png";
import vegetable from "../../assets/about_pg/about/vegetable.png";

const Offer = () => {
  return (
    <div className="bg-main ">
      <div className="container text-center py-[188px] mb-[141px]">
        <h3 className="font-yellowtail text-submain text-[36px] leading-[100%] mb-2">
          About Us
        </h3>
        <p className="font-roboto font-extrabold leading-[100%] text-white text-[50px]">
          What We Offer for You
        </p>
        <div className="grid grid-cols-4 gap-5 mt-[33px] font-roboto font-medium leading-[100%] text-[25px] text-white">
          <div>
            <div
              className="w-[334px] bg-center bg-no-repeat rounded-4xl bg-white h-[367px]"
              style={{ backgroundImage: `url(${spicy})` }}
            ></div>
            <p className="mt-6">Spicy</p>
          </div>

          <div>
            <div
              className="w-[334px] bg-center bg-no-repeat rounded-4xl bg-white h-[367px]"
              style={{ backgroundImage: `url(${nuts})` }}
            ></div>
            <p className="mt-6">Nuts & Feesd</p>
          </div>
          <div>
            <div
              className="w-[334px] bg-center bg-no-repeat rounded-4xl bg-white h-[367px]"
              style={{ backgroundImage: `url(${fruits})` }}
            ></div>
            <p className="mt-6">Fruits</p>
          </div>
          <div>
            <div
              className="w-[334px] bg-center bg-no-repeat rounded-4xl bg-white h-[367px]"
              style={{ backgroundImage: `url(${vegetable})` }}
            ></div>
            <p className="mt-6">Vegetable</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
