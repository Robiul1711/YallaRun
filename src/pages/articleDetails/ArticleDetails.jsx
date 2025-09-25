import ArticleComments from "@/components/articleDetails/ArticleComments";
import ArticleDetailsSection from "@/components/articleDetails/ArticleDetailsSection";
import LeaveComments from "@/components/articleDetails/LeaveComments";
import RelatedArticle from "@/components/articleDetails/RelatedArticle";
import JoinSection from "@/components/home/JoinSection";
import React from "react";
import { useParams } from "react-router-dom";

const ArticleDetails = () => {
  const {id } =useParams()
  return (
    <div className=" flex flex-col lg:gap-10 gap-4">
      <ArticleDetailsSection id={id} />
      <LeaveComments />
      <ArticleComments />
      <RelatedArticle />
      <JoinSection />
    </div>
  );
};

export default ArticleDetails;
