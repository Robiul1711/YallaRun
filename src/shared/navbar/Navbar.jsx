import React, { useEffect, useState } from "react";
import Logo from "@/assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "@/utils/Data";
import CommonBtn from "@/components/common/CommonBtn";
import LanguageArea from "@/components/common/LanguageArea";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
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
    <header className={`${scrolled ?"fixed top-0 z-[200]":"section-padding-x fixed top-10 z-[200]"}  w-full `}>
      <div
        className={`w-full px-12  flex items-center justify-between gap-5 transition-all duration-500 ${
          scrolled
            ? "bg-[rgba(56,71,21,0.45)] backdrop-blur-md py-4"
            : "bg-[rgba(56,71,21,0.25)] py-6 rounded-[120px]"
        }`}
      >
        <Link to={`/`} className="w-[188px] h-[52px]">
          <img src={Logo} className=" w-full h-full object-cover" alt="logo" />
        </Link>

        <nav className=" flex items-center gap-10">
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

        <div className=" flex items-center gap-6">
          <CommonBtn name={`Sign In`} path={`/sign-in`} />
          <LanguageArea />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
