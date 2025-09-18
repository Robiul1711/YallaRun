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
    "group inline-flex items-center gap-3 rounded-full bg-primaryColor px-6 py-3 text-lg font-medium text-customBlack transition-colors duration-300 hover:bg-primaryColor/90";

  const arrowCircleClasses =
    "flex h-10 w-10 items-center justify-center rounded-full bg-customBlack text-white transition-all duration-300 group-hover:rotate-45 group-hover:scale-105 group-hover:bg-customBlack/90";

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
