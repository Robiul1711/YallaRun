import React, { useState } from "react";
import ArticleFilter from "./ArticleFilter";
import { Title32 } from "../common/Title";
import { latestArticles } from "@/utils/Data";
import ArticleCard from "../cards/ArticleCard";
import Pagination from "../common/Pagination";


const ArticleSection = () => {
  const [page, setPage] = useState(1);
  return (
    <div className="flex flex-col lg:gap-8 gap-4 section-padding-x section-padding-y">
      <ArticleFilter />

      <div className=" flex flex-col xlg:gap-16 md:gap-8 gap-4">
        <Title32 className={`max-w-[850px] !text-customBlack`}>
          Explore expert tips, community stories, and inspiration to fuel your
          next run.
        </Title32>

        <div className=" grid lg:grid-cols-3 sm:grid-cols-2 xlg:gap-6 gap-2.5">
          {latestArticles?.map((item, index) => (
            <ArticleCard item={item} key={index} />
          ))}
        </div>
      </div>
      <div className=" flex justify-center items-center w-full">
        <Pagination page={page} setPage={setPage} totalPage={10} />
      </div>
    </div>
  );
};

export default ArticleSection;
