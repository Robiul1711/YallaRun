import React from "react";
import { Title18 } from "./Title";

const AuthBtn = ({ name, className = "", isLoading }) => {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className={`
        ${className}
        w-full px-4 py-4 rounded-[48px] bg-primaryColor flex justify-center items-center
        transition-all duration-300 ease-out
        hover:bg-primaryColor/90 hover:shadow-md
        active:scale-[0.98]
        disabled:opacity-60 disabled:cursor-not-allowed
      `}
    >
      <Title18 className="!text-customBlack !font-medium">
        {isLoading ? "Loading..." : name}
      </Title18>
    </button>
  );
};

export default AuthBtn;
