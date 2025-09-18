import React from "react";
import ArticleBanner from "@/assets/images/articleBanner.png";
import CommonBanner from "@/components/common/CommonBanner";
import ArticleSection from "@/components/article/ArticleSection";

const ArticlePage = () => {
  return (
    <div>
      <CommonBanner
        bannerImage={ArticleBanner}
        title={`Latest Articles & Insights`}
        text={`Stories, tips, and updates from the UAE running community.`}
      ></CommonBanner>

      <ArticleSection />

    </div>
  );
};

export default ArticlePage;
