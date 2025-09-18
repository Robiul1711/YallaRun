import React, { useState } from "react";
import ArticleFilter from "./ArticleFilter";
import { Title32 } from "../common/Title";
import { latestArticles } from "@/utils/Data";
import ArticleCard from "../cards/ArticleCard";
import Pagination from "../common/Pagination";


const ArticleSection = () => {
  const [page, setPage] = useState(1);
  return (
    <div className="flex flex-col gap-8 section-padding-x section-padding-y">
      <ArticleFilter />

      <div className=" flex flex-col gap-16">
        <Title32 className={`max-w-[850px] !text-customBlack`}>
          Explore expert tips, community stories, and inspiration to fuel your
          next run.
        </Title32>

        <div className=" grid grid-cols-3 gap-6">
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
