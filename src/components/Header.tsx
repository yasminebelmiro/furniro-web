import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { TbUserExclamation } from "react-icons/tb";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
 
      <div className="bg-white h-24 fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 l:px-10 xl:px-20">
        <Link to={"/"} className="flex flex-row items-center">
          <img src={logo} alt="Logo Furniro" className="w-10"/>
          <p className="hidden  md:flex font-bold text-2xl">Furniro</p>
        </Link>
        <ul className="hidden md:flex w-1/2 justify-evenly ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>

        <div className="hidden md:flex items-center justify-between w-20 ">
          <span className="text-2xl">
            <TbUserExclamation />
          </span>
          <span className="text-2xl">
            <MdOutlineShoppingCart />
          </span>
        </div>
        <button
          className="text-2xl cursor-pointer  md:hidden "
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          <GiHamburgerMenu />
        </button>
      </div>

      {open && (
        <ul className=" w-full flex flex-col md:hidden pt-25">
          <li className="w-full py-5 hover:bg-gold hover:text-white flex items-center justify-center ">
            <Link to="/">Home</Link>
          </li>
          <li className="w-full py-5 hover:bg-gold hover:text-white flex items-center justify-center ">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="w-full py-5 hover:bg-gold hover:text-white flex items-center justify-center ">
            <Link to="/">About</Link>
          </li>
          <li className="w-full py-5 hover:bg-gold hover:text-white flex items-center justify-center ">
            <Link to="/">Contact</Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default Header;
