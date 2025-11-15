import Hero from "./Hero";
import Offers from "./Offers";
import About from "./About";
import Products from "../../components/sections/products/Products";
import Testemonial from "./Testemonial";
import Deal from "./Deal";
import Eco from "./Eco";
import Category from "./Category";
import News from "./News";

const Home = () => {
  return (
    <div>
      <Hero />
      <Offers />
      <About />
      <Products />
      <Testemonial />
      <Deal />
      <Eco />
      <Category />
      <News />
    </div>
  );
};

export default Home;
