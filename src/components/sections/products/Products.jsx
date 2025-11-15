import { useState } from "react";
import data from "../../../data/products";
import ProudctCard from "./ProudctCard";
import CustomBtn1 from "../../ui/buttons/CustomBtn1";

const Products = () => {
  const [fool, setFool] = useState(true);
  const [num, setNum] = useState(8);

  const handleLoadMore = () => {
    if (fool) {
      setNum(num + 4);
    } else {
      setNum(num - 4);
    }

    setFool(!fool);
  };

  return (
    <div className="container pt-44 pb-[200px]">
      <div className="flex items-center flex-col ">
        <h3 className="font-yellowtail text-submain leading-[100%] text-[36px] ">
          Categories
        </h3>
        <h3 className="font-roboto text-main font-extrabold text-[50px] leading-[100%] mb-10">
          Our Products
        </h3>
      </div>
      <div className="grid  grid-cols-[repeat(4,335px)] justify-center gap-5">
        {data?.slice(0, num).map((item) => (
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
      <div className="flex items-center justify-center mt-[122px] ">
        <CustomBtn1
          widthClass={"w-[220px]"}
          title={fool ? "Load More" : "See Less"}
          foo={handleLoadMore}
        />
      </div>
    </div>
  );
};

export default Products;
