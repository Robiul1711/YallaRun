import React, { useEffect, useState } from "react";
import Logo from "@/assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "@/utils/Data";
import CommonBtn from "@/components/common/CommonBtn";
import LanguageArea from "@/components/common/LanguageArea";
import Hamburger from "hamburger-react";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } xl:hidden z-50`}
        onClick={() => setOpen(false)}
      />
      <header
        className={`${
          scrolled ? "fixed top-0 z-[200]" : " lg:px-[80px] md:px-10 px-6  fixed lg:top-10 top-4 z-[200]"
        }  w-full `}
      >
        <div
          className={`w-full xl:px-12 px-6  flex items-center justify-between xl:gap-5 gap-3 transition-all duration-500 ${
            scrolled
              ? "bg-[rgba(56,71,21,0.45)] backdrop-blur-md py-4"
              : "bg-[rgba(56,71,21,0.25)] xlg:py-6 py-3.5 rounded-[120px]"
          }`}
        >
          <Link
            to={`/`}
            className="xl:w-[188px] w-[140px] xl:h-[52px] h-[30px]"
          >
            <img
              src={Logo}
              className=" w-full h-full object-cover"
              alt="logo"
            />
          </Link>

          <nav className=" xlg:flex hidden items-center xl:gap-10 gap-6 ">
            {navLinks?.map((item, index) => (
              <NavLink
                to={item?.path}
                className={
                  ({ isActive }) =>
                    isActive
                      ? "text-primaryColor font-semibold text-lg" // class when active
                      : "text-white font-medium text-lg" // class when not active
                }
              >
                {item?.name}
              </NavLink>
            ))}
          </nav>

          <div className=" flex items-center xl:gap-6 md:gap-3">
            <CommonBtn
              name={`Sign In`}
              path={`/sign-in`}
              className={`xlg:block hidden`}
            />
            <LanguageArea />
            <div className=" xlg:hidden block">
              <Hamburger toggled={isOpen} toggle={setOpen} color="white" size={25}  />
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isOpen} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
