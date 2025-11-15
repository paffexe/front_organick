import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../data/products";
import Hero from "./Hero";
import Star from "../../components/ui/icons/Star.jsx";
import CustomBtn1 from "../../components/ui/buttons/CustomBtn1.jsx";

import RemoveBtn from "../../components/ui/buttons/RemoveBtn.jsx";
import ProudctCard from "../../components/sections/products/ProudctCard.jsx";

const ShopSingle = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [num, setNum] = useState(0);

  useEffect(() => {
    const foundItem = data.find((item) => item.id === Number(id));
    if (foundItem) {
      setItem(foundItem);
    }
  }, [id]);

  return (
    <div>
      <Hero />

      {item?.id ? (
        <div className="pt-[133px] container">
          <div className="mb-[90px] flex items-center gap-[81px]">
            <div
              className="bg-white shadow-xl w-[591px] h-[563px] rounded-4xl bg-center bg-no-repeat 
                   pt-[57px] pl-[39px] transition-all duration-300 
                   hover:shadow-2xl hover:scale-[1.02]"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <p
                className="capitalize text-center rounded-2xl w-[75px] font-openSans font-semibold 
                      leading-[100%] text-[15px] bg-main py-1.5 px-3 text-white
                      transition-all duration-300 hover:scale-105"
              >
                {item.category}
              </p>
            </div>

            <div className="w-[658px]">
              <h3
                className="font-roboto text-main font-semibold text-[40px] leading-[100%] mb-2.5
                      transition-all duration-300 hover:underline hover:text-submain hover:-translate-y-0.5"
              >
                {item.title}
              </h3>

              <div className="flex items-center gap-1">
                <span className="transition-transform duration-200 hover:scale-110">
                  <Star />
                </span>
                <span className="transition-transform duration-200 hover:scale-110">
                  <Star />
                </span>
                <span className="transition-transform duration-200 hover:scale-110">
                  <Star />
                </span>
                <span className="transition-transform duration-200 hover:scale-110">
                  <Star />
                </span>
                <span className="transition-transform duration-200 hover:scale-110">
                  <Star />
                </span>
              </div>

              <div className="mt-2.5 flex items-center  gap-2 mb-[27px]">
                <p className="line-through font-openSans text-customGr1 font-semibold text-[20px] leading-[100%]">
                  $ 20.00
                </p>

                <strong
                  className="font-openSans text-2xl leading-[100%] text-main
                            transition-colors duration-300 hover:text-submain"
                >
                  ${item.price}
                </strong>
              </div>

              <p className="font-openSans leading-[165%] text[18px] w-[530px] text-customB mb-8.5">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
              </p>

              <div className="flex items-center gap-5">
                <p className="font-roboto text-main text-[20px] leading-[100%] font-bold">
                  Quantity:
                </p>

                <p
                  className="py-7 px-6 bg-white border-2 border-main rounded-2xl text-[20px] 
                        font-roboto text-main font-bold transition-all duration-300
                        hover:bg-main hover:text-white hover:shadow-lg"
                >
                  {num}
                </p>

                <div className="transition-all duration-300 hover:scale-105">
                  <CustomBtn1
                    widthClass={"w-[213px]"}
                    title={"Add to Cart"}
                    foo={() => setNum(num + 1)}
                  />
                </div>

                {num > 0 ? (
                  <div className="transition-all duration-300 hover:scale-105">
                    <RemoveBtn foo={() => setNum(0)} title={"Remove"} />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full flex justify-center py-28">
          <div
            className="bg-white border-2 border-customW rounded-3xl shadow-lg px-12 py-10 
                  text-center transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
          >
            <p className="text-main font-roboto text-[30px] font-bold mb-3">
              🚫 Product Not Found
            </p>
            <p className="text-customB font-openSans text-[18px]">
              The item you're looking for doesn’t exist or may have been
              removed.
            </p>
          </div>
        </div>
      )}

      <div className="container flex items-center flex-col justify-center pt-[90px]">
        <div className="flex gap-5 items-center mb-[27px]">
          <div className="bg-main text-white py-[23px] px-[57px] rounded-2xl font-openSans text-[25px] leading-[100%]">
            Product Description
          </div>
          <div className="font-openSans text-main font-bold leading-[100%] text-2xl py-[23px] px-[61px] bg-customGr rounded-2xl">
            Additional Info
          </div>
        </div>
        <p className="font-openSans text-[18px] leading-[165%] text-customB w-[1100px] text-center mb-[140px]">
          Welcome to the world of natural and organic. Here you can discover the
          bounty of nature. We have grown on the principles of health, ecology,
          and care. We aim to give our customers a healthy chemical-free meal
          for perfect nutrition. It offers about 8-10% carbs. Simple sugars —
          such as glucose and fructose — make up 70% and 80% of the carbs in
          raw.
        </p>
      </div>

      <div className="container flex flex-col justify-center">
        <h3 className="font-roboto leading-[100%] text-center text-[50px] text-main font-extrabold mb-10">
          Related Products
        </h3>
        <div className="grid  grid-cols-[repeat(4,335px)] justify-center gap-5 mb-[140px]">
          {data?.slice(0, 4).map((item) => (
            <ProudctCard
              key={item.id}
              id={item.id}
              title={item.title}
              img={item.img}
              category={item.category}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopSingle;
