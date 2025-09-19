import ArticleComments from "@/components/articleDetails/ArticleComments";
import ArticleDetailsSection from "@/components/articleDetails/ArticleDetailsSection";
import React from "react";

const ArticleDetails = () => {
  return (
    <div className=" flex flex-col gap-10">
      <ArticleDetailsSection />
      
      <ArticleComments />
    </div>
  );
};

export default ArticleDetails;
