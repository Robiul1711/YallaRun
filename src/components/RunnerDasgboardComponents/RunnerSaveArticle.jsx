import React, { useState } from "react";
import article from "@/assets/images/article1.png";
import { TfiLocationPin } from "react-icons/tfi";
import { Link } from "react-router-dom";
import {
  InstagramIcon,
  TiktokIcon,
} from "../DashboardIcons/RunnerDashboardIcons";
import { latestArticles } from "@/utils/Data";
import ArticleCard from "../cards/ArticleCard";

const RunnerSaveArticle = () => {
  const [searchTerm, setSearchTerm] = useState("");





  return (
    <div className="bg-white rounded-lg shadow-sm p-4 xl:p-6">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h1 className=" text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
        Saved Articles
        </h1>
        <p className="text-gray-600">
        All your favorite reads, saved in one place for quick access.
        </p>
      </div>

      {/* Search */}
      <div className="flex gap-4 mb-6">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search your coaches name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 sm:px-4 py-2 md:py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
          />
        </div>
      </div>

      {/* Coaches List */}
    <div className=" grid lg:grid-cols-3 sm:grid-cols-2 xlg:gap-6 gap-2.5">
        {latestArticles?.map((item, index) => (
          <ArticleCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default RunnerSaveArticle;
