import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "@/assets/images/logo.png";
import footerLogo from "@/assets/images/footerLogo.png";
import { navLinks } from "@/utils/Data";
import CommonBtn from "@/components/common/CommonBtn";
const MobileMenu = ({ isOpen, setOpen }) => {
  return (
    <div
      className={`fixed top-0 flex px-6 py-10 flex-col lg:gap-8 gap-6 h-screen w-[270px] bg-secondaryColor shadow-lg z-[1000] ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 mobile-nav overflow-y-auto`}
    >
      <Link to={`/`} className="xl:w-[188px] w-[140px] xl:h-[52px] h-[30px]">
        <img
          src={footerLogo}
          className=" w-full h-full object-cover"
          alt="logo"
        />
      </Link>

      <nav className=" flex flex-col gap-4  items-start  ">
        {navLinks?.map((item, index) => (
          <NavLink
            to={item?.path}
            onClick={() => setOpen(false)}
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

      <CommonBtn
        name={`Sign In`}
        path={`/sign-in`}
        className={` w-full !bg-primaryColor !text-customBlack`}
      />
    </div>
  );
};

export default MobileMenu;
