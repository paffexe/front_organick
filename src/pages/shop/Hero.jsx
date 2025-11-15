import bg from "../../assets/shop_pg/shop_hero.png";


const Hero = () => {
  return (
    <div className="bg-[#eef3f7]">
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
