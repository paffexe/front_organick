import Logo from "../../ui/icons/Logo.svg";
import { Link } from "react-router-dom";
import Dropdown from "../../ui/buttons/DropDown";
import Search from "../../ui/icons/Search";
import Cart from "../../ui/icons/Cart";

const Header = () => {
  return (
    <div className=" w-[1535px] mx-auto my-[69px] flex items-center gap-[130px]">
      <div className=" w-[912px]  -blue-400 flex items-center gap-[150px]">
        <Link to={"/"} className="cursor-pointer">
          <img src={Logo} alt="" />
        </Link>
        <nav className=" text-main font-roboto font-bold text-xl flex items-center gap-8">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Dropdown />
          <Link to={"/shop"}>Shop</Link>
          <Link to={"/"}>Projects</Link>
          <Link to={"/"}>News</Link>
        </nav>
      </div>
      <div className=" w-[553px] flex items-center gap-4.5 ">
        <div className=" bg-customW rounded-[36px] w-[376px] flex items-center justify-between">
          <input
            type="text"
            className="w-[310px] pl-5 outline-0 text-gray-500 text-[18px]"
          />
          <div className="p-1 cursor-pointer">
            <Search />
          </div>
        </div>
        <div className=" border border-gray-300 w-[159px] flex items-center gap-3 text-main font-roboto font-semibold text-[18px] rounded-[33px]">
          <div className="pl-1.5 py-1.5 cursor-pointer">
            <Cart />
          </div>
          <p>Cart (0)</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
