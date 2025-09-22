import React from "react";
import { Link } from "react-router-dom";

const CommonBtn = ({ name, path, className }) => {
  return (
    <Link
      to={path}
      className={`
        ${className} 
        xlg:px-6 px-4 xlg:py-3 py-2 rounded-full  whitespace-nowrap
        flex justify-center items-center text-center
        text-white text-lg font-semibold 
        bg-secondaryColor 
        transition-all duration-300 ease-in-out
        hover:bg-white hover:text-secondaryColor
        hover:shadow-lg hover:scale-105
      `}
    >
      {name}
    </Link>
  );
};

export default CommonBtn;
