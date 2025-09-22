import React from "react";
import HeadingSection from "../common/HeadingSection";
import { latestArticles } from "@/utils/Data";
import ArticleCard from "../cards/ArticleCard";

const LatestArticle = () => {
  return (
    <div className=" flex flex-col xlg:gap-16 sm:gap-8 gap-4 section-padding-x section-padding-y">
      <HeadingSection
        title={`Explore expert tips, community stories, and inspiration to fuel your next run.`}
        text={`Latest Articles`}
      />

      <div className=" grid lg:grid-cols-3 sm:grid-cols-2 xlg:gap-6 gap-2.5">
        {latestArticles?.map((item, index) => (
          <ArticleCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default LatestArticle;
