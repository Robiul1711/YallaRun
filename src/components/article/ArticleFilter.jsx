import React, { useState } from "react";
import { Title20 } from "../common/Title";
import { articleFilters } from "@/utils/Data";

const ArticleFilter = () => {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState("");

  return (
    <div className=" flex flex-col gap-8">
      <div className=" flex flex-col gap-4">
        <Title20 className={`!text-customBlack !font-medium`}>
          Article Title
        </Title20>

        <div className=" flex items-center gap-6 w-full">
          <div className=" w-[90%] p-5 bg-transparent border-[1px] border-[#595959] rounded-[48px] ">
            <input
              type="text"
              className=" w-full placeholder-[#595959] text-customBlack outline-none border-none bg-transparent"
              placeholder="Search by article title..."
            />
          </div>

          <button className=" w-[10%] duration-200 hover:opacity-90 px-6 py-5 rounded-full bg-primaryColor flex justify-center items-center text-lg text-customBlack">
            Search
          </button>
        </div>
      </div>

      <div className=" flex flex-wrap gap-4">
        {articleFilters?.map((item, index) => (
          <button
            key={index}
            className={`px-6 py-2 rounded-full border-[1px] border-secondaryColor duration-200 hover:bg-secondaryColor hover:text-white ${
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
