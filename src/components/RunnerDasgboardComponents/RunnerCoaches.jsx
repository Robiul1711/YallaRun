import React, { useState } from "react";
import article from "@/assets/images/article1.png";
import { TfiLocationPin } from "react-icons/tfi";
import { Link } from "react-router-dom";
import {
  InstagramIcon,
  TiktokIcon,
} from "../DashboardIcons/RunnerDashboardIcons";

const RunnerCoaches = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const articles = [
    {
      id: 1,
      title: "Advanced Marathon Training Techniques",
      degination: "Professional Coach",
      location: "Dubai, UAE",
      status: "Connected",
      followers: "1.2k Followers",
      statusColor: "bg-[#458084]",
      image: article,
      instagram: "https://instagram.com/coach1",
      tiktok: "https://tiktok.com/@coach1",
    },
    {
      id: 2,
      title: "Recovery Techniques After Long Runs",
      degination: "Certified Trainer",
      followers: "980 Followers",
      location: "Abu Dhabi, UAE",
      status: "Connected",
      statusColor: "bg-[#458084]",
      image: article,
      instagram: "https://instagram.com/coach2",
      tiktok: "https://tiktok.com/@coach2",
    },
    {
      id: 3,
      title: "Marathon Training Tips for Beginners",
      degination: "Running Specialist",
      followers: "2.5k Followers",
      location: "Sharjah, UAE",
      status: "Pending",
      statusColor: "bg-yellow-500",
      image: article,
      instagram: "https://instagram.com/coach3",
      tiktok: "https://tiktok.com/@coach3",
    },
    {
      id: 4,
      title: "Nutrition & Hydration Workshop",
      degination: "Sports Nutritionist",
      followers: "3.1k Followers",
      location: "Ajman, UAE",
      status: "Connected",
      statusColor: "bg-[#458084]",
      image: article,
      instagram: "https://instagram.com/coach4",
      tiktok: "https://tiktok.com/@coach4",
    },
    {
      id: 5,
      title: "Speed & Endurance Coaching",
      degination: "Athletics Coach",
      followers: "850 Followers",
      location: "Fujairah, UAE",
      status: "Not Connected",
      statusColor: "bg-red-500",
      image: article,
      instagram: "https://instagram.com/coach5",
      tiktok: "https://tiktok.com/@coach5",
    },
  ];

  // Filtered results
  const filteredArticles = articles.filter((a) =>
    a.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 xl:p-6">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h1 className=" text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          My Coaches
        </h1>
        <p className="text-gray-600">
          Stay connected with the coaches you follow and explore their training
          insights.
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
      <div className="space-y-3 md:space-y-4">
        {filteredArticles.map((article) => (
          <div
            key={article.id}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-6 p-3 sm:p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
          >
            {/* Left side */}
            <div className="flex items-start sm:items-center gap-3 sm:gap-4">
              <div className="w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex-shrink-0 overflow-hidden">
                <img
                  src={article.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-sm sm:text-base md:text-lg font-medium text-gray-900">
                  {article.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  {article.degination}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 flex items-center gap-1">
                  <TfiLocationPin className="text-gray-400" /> {article.location}
                </p>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <p className="text-xs sm:text-sm text-gray-500">
                    {article.followers}
                  </p>
                  <span
                    className={`px-3 py-1 rounded-full text-white text-xs sm:text-sm font-medium ${article.statusColor}`}
                  >
                    {article.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Right side */}
            <div className="flex flex-col sm:items-end gap-2 text-xs sm:text-sm md:text-base">
              <Link
                to={article.instagram}
                className="text-blue-500 flex items-center gap-2 hover:underline"
              >
                <InstagramIcon /> Instagram
              </Link>
              <Link
                to={article.tiktok}
                className="text-blue-500 flex items-center gap-2 hover:underline"
              >
                <TiktokIcon /> TikTok
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RunnerCoaches;
