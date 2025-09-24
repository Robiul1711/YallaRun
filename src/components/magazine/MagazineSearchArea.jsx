import React from "react";
import { Title20 } from "../common/Title";

const MagazineSearchArea = () => {
  return (
    <div className=" flex flex-col lg:gap-6 gap-4 ">
      <Title20 className={`!text-customBlack !font-semibold`}>Magazine</Title20>

      <div className=" w-full flex items-center lg:gap-6 gap-4 sm:flex-row flex-col">
        <div className=" xlg:w-[90%] sm:w-[80%] w-full lg:px-5 px-3.5 lg:py-4 py-2.5 bg-transparent border-[1px] border-[#595959] rounded-[48px] ">
          <input
            type="text"
            placeholder="Enter keywords, topics, or title"
            className=" w-full placeholder-[#595959] text-customBlack outline-none border-none bg-transparent"
          />
        </div>

        <button className=" xlg:w-[10%] sm:w-[20%] w-full duration-200 hover:opacity-90 lg:px-6 px-3.5 lg:py-4 py-2 rounded-full bg-primaryColor flex justify-center items-center text-lg text-customBlack">
          Search
        </button>
      </div>
    </div>
  );
};

export default MagazineSearchArea;
