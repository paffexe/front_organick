import CustomBtn2 from "../../components/ui/buttons/CustomBtn2";
import { Link } from "react-router-dom";
import data from "../../data/products";
import ProudctCard from "../../components/sections/products/ProudctCard";

const Deal = () => {
  const vegetables = data.filter((item) => item.category === "vegetable");
  return (
    <div className="bg-main">
      <div className="container py-[200px] mx-auto ">
        <div className="mb-[50px]  flex items-center justify-between">
          <div>
            <h2 className="font-yellowtail text-[36px] leading-[100%] text-submain mb-3">
              Offer
            </h2>
            <h3 className="font-roboto font-extrabold text-[50px] leading-[100%] text-white">
              We Offer Organic For You
            </h3>
          </div>
          <Link to={"/shop"}>
            <CustomBtn2 widthClass={"w-[256px]"} title={"View All Product"} />
          </Link>
        </div>
        <div className="grid  grid-cols-[repeat(4,335px)] justify-center gap-5">
          {vegetables?.map((item) => (
            <ProudctCard
              key={item.id}
              category={item.category}
              title={item.title}
              price={item.price}
              img={item.img}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deal;
