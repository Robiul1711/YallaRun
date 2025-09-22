import ArticleComments from "@/components/articleDetails/ArticleComments";
import ArticleDetailsSection from "@/components/articleDetails/ArticleDetailsSection";
import LeaveComments from "@/components/articleDetails/LeaveComments";
import RelatedArticle from "@/components/articleDetails/RelatedArticle";
import JoinSection from "@/components/home/JoinSection";
import React from "react";

const ArticleDetails = () => {
  return (
    <div className=" flex flex-col gap-10">
      <ArticleDetailsSection />
      <LeaveComments />
      <ArticleComments />
      <RelatedArticle />
      <JoinSection />
    </div>
  );
};

export default ArticleDetails;
