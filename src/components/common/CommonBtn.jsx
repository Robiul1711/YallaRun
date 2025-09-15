import React from "react";
import { Link } from "react-router-dom";

const CommonBtn = ({ name, path, className }) => {
  return (
    <Link
      to={path}
      className={`
        ${className} 
        px-6 py-3 rounded-full 
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
