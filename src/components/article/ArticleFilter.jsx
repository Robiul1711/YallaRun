import React, { useState } from "react";
import { Title20 } from "../common/Title";
import { articleFilters } from "@/utils/Data";

const ArticleFilter = () => {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState("");

  return (
    <div className=" flex flex-col lg:gap-8 gap-4">
      <div className=" flex flex-col gap-4">
        <Title20 className={`!text-customBlack !font-medium`}>
          Article Title
        </Title20>

        <div className=" flex items-center sm:flex-row flex-col gap-6 w-full">
          <div className=" xlg:w-[90%] sm:w-[80%] w-full xlg:p-5 p-3 bg-transparent border-[1px] border-[#595959] rounded-[48px] ">
            <input
              type="text"
              className=" w-full placeholder-[#595959] text-customBlack outline-none border-none bg-transparent"
              placeholder="Search by article title..."
            />
          </div>

          <button className=" xlg:w-[10%] sm:w-[20%] w-full duration-200 hover:opacity-90 xlg:px-6 px-3 xlg:py-5 py-2 rounded-full bg-primaryColor flex justify-center items-center text-lg text-customBlack">
            Search
          </button>
        </div>
      </div>

      <div className=" flex flex-wrap gap-4">
        {articleFilters?.map((item, index) => (
          <button
            key={index}
            className={`xlg:px-6 px-3 xlg:py-3 py-2 rounded-full border-[1px] border-secondaryColor duration-200 hover:bg-secondaryColor hover:text-white ${
              active === item.id ? "bg-secondaryColor text-white" : ""
            }`}
            onClick={() => setActive(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ArticleFilter;
