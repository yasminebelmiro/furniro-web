import { Link } from "react-router-dom";

import { TbUserExclamation } from "react-icons/tb";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import SlideBarCart from "./SlideBarCart";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <>
      <header className="font-poppins">
        <div className=" bg-white h-24 fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 l:px-10 xl:px-20">
          <Link to={"/"} className="flex flex-row items-center">
            <img src="https://furniro-web-assets-19.s3.us-east-2.amazonaws.com/logo.svg" alt="Logo Furniro" className="w-10" />
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
              <Link to="#about">About</Link>
            </li>
            <li>
              <SignedIn>
                <Link to="/contact">Contact</Link>
              </SignedIn>
              <SignedOut>
                <Link to="/login">Contact</Link>
              </SignedOut>
            </li>
          </ul>

          <div className=" flex items-center justify-between w-20 ">
            <SignedOut>
              <Link to={"/login"} className="text-2xl">
                <TbUserExclamation />
              </Link>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>

            <button
              className="text-2xl cursor-pointer"
              onClick={() => setIsCartOpen(!isCartOpen)}
              aria-label="Abrir carrinho"
            >
              <MdOutlineShoppingCart />
            </button>
          </div>

          <button
            className="text-2xl cursor-pointer  md:hidden "
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menu"
          >
            <GiHamburgerMenu />
          </button>
        </div>

        {isMenuOpen && (
          <ul className="z-30 fixed w-full flex flex-col md:hidden pt-24 bg-white">
            <li className="w-full py-5 hover:bg-gold hover:text-white flex items-center justify-center ">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li className="w-full py-5 hover:bg-gold hover:text-white flex items-center justify-center ">
              <Link to="/shop" onClick={() => setIsMenuOpen(false)}>
                Shop
              </Link>
            </li>
            <li className="w-full py-5 hover:bg-gold hover:text-white flex items-center justify-center ">
              <Link to="#about" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
            </li>
            <li className="w-full py-5 hover:bg-gold hover:text-white flex items-center justify-center ">
              <SignedIn>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
              </SignedIn>
              <SignedOut>
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
              </SignedOut>
            </li>
          </ul>
        )}
      </header>
      <SlideBarCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;
