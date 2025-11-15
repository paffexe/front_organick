import bg from "../../assets/shops_pg/shops_hero.png";

const Hero = () => {
  return (
    <div className="bg-[#f3f2f7]">
      <div
        className="  bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="container text-center py-[184px]">
          <h1 className="font-roboto text-main font-extrabold text-[70px] leading-[100%]">
            Shop
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
