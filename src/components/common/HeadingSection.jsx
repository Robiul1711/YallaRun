import React from "react";
import { Title20, Title32 } from "./Title";
import { Link } from "react-router-dom";

const HeadingSection = ({ title, text, path }) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex w-full justify-between items-center gap-5">
        <Title20 className={`!text-secondaryColor font-semibold`}>
          {text}
        </Title20>

        <Link
          to={path}
          className=" px-5 py-[10px] duration-200 hover:bg-secondaryColor hover:text-white flex justify-center items-center rounded-full border-[1px] border-secondaryColor text-secondaryColor "
        >
          See All
        </Link>
      </div>
      <Title32 className={`!text-customBlack !font-semibold max-w-[843px]`}>
        {title}
      </Title32>
    </div>
  );
};

export default HeadingSection;
