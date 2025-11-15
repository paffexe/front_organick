import ProudctCard from "../../components/sections/products/ProudctCard";
import data from "../../data/products";
import Hero from "./Hero";

const Shop = () => {
  return (
    <div>
      <Hero />

      <div className="grid  grid-cols-[repeat(4,335px)] pt-[90px] pb-[140px] justify-center gap-5">
        {data?.slice(0, 12).map((item) => (
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
  );
};

export default Shop;
