import React from "react";

import bg from "../../assets/services_pg/hero.png";

const Hero = () => {
  return (
    <div className="bg-[#f0eced]">
      <div
        className="  bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="container text-center py-[184px]">
          <h1 className="font-roboto text-main font-extrabold text-[70px] leading-[100%]">
            Services
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
