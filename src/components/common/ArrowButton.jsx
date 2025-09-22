import React from "react";
import { Link } from "react-router-dom";
import { ArrowIcon } from "../icons/CustomIcon";

const ArrowButton = ({
  name,
  path = "/",
  className = "",
  type = "link", // 'link' | 'button' | 'submit'
  onClick,
}) => {
  const baseClasses =
    "group inline-flex items-center gap-3 rounded-full bg-primaryColor lg:px-6 px-3.5 lg:py-3 py-2 lg:text-lg text-base font-medium text-customBlack transition-colors duration-300 hover:bg-primaryColor/90";

  const arrowCircleClasses =
    "flex lg:h-10 h-8 lg:w-10 w-8 items-center justify-center rounded-full bg-customBlack text-white transition-all duration-300 group-hover:rotate-45 group-hover:scale-105 group-hover:bg-customBlack/90";

  const content = (
    <>
      <span className="transition-colors duration-300 group-hover:text-customBlack/80">
        {name}
      </span>
      <span className={arrowCircleClasses}>
        <ArrowIcon />
      </span>
    </>
  );

  if (type === "button" || type === "submit") {
    return (
      <button
        type={type} // can be 'button' or 'submit'
        onClick={onClick}
        className={`${baseClasses} ${className}`}
      >
        {content}
      </button>
    );
  }

  // default to Link
  return (
    <Link to={path} className={`${baseClasses} ${className}`}>
      {content}
    </Link>
  );
};

export default ArrowButton;
