import React from "react";
import AuthLogo from "@/assets/images/authLogo.png";
import { Title18, Title20, Title40 } from "../common/Title";
import { Link } from "react-router-dom";
const AuthProvider = ({ className, children, sectionImage, title, text }) => {
  return (
    <div className={` ${className} h-auto flex w-full`}>
      <div className=" w-1/2 xlg:flex hidden   ">
        <img src={sectionImage} className="  " />
      </div>

      <div className=" xlg:w-1/2 w-full mt-8 flex justify-center items-center h-full section-padding-x">
        <div className=" flex flex-col xlg:gap-10 gap-4 w-[700px] ">
          <Link to={`/`}>
            <img src={AuthLogo} className=" w-[188px] h-auto block" />
          </Link>
          <div className=" flex flex-col gap-3">
            <Title40>{title}</Title40>
            <Title20 className={`!text-[#262626] !font-normal`}>{text}</Title20>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthProvider;
