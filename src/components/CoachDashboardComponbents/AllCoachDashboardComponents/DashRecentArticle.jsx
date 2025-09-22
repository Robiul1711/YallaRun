import React from "react";
import article from "@/assets/images/article1.png";
const DashRecentArticle = () => {
  const articles = [
    {
      id: 1,
      title: "Advanced Marathon Training Techniques",
      date: "2024-01-15",
      status: "Published",
      statusColor: "bg-green-500",
      image: article,
    },
    {
      id: 2,
      title: "Recovery Techniques After Long Runs Pending",
      date: "2024-01-15",
      status: "Pending",
      statusColor: "bg-orange-500",
      image: article,
    },
    {
      id: 3,
      title: "Marathon Training Tips for Beginners Published",
      date: "2024-01-15",
      status: "Rejected",
      statusColor: "bg-red-500",
      image: article,
    },
    {
      id: 4,
      title: "Marathon Training Tips for Beginners Published",
      date: "2024-01-15",
      status: "Rejected",
      statusColor: "bg-red-500",
      image: article,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">
            Recent Articles
          </h1>
          <p className="text-gray-500 text-sm">
            Your latest article submissions
          </p>
        </div>
        <button className="px-4 py-2 border border-secondaryColor rounded-full text-gray-700 hover:bg-gray-50 transition-colors">
          View All
        </button>
      </div>

      {/* Articles List */}
      <div className="space-y-4">
        {articles.map((article) => (
          <div
            key={article.id}
            className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
          >
            {/* Left side - Image, Title, Date */}
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex-shrink-0 flex items-center justify-center">
                <img src={article.image} alt="" />{" "}
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-1">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500">{article.date}</p>
              </div>
            </div>

            {/* Right side - Status Badge */}
            <div className="flex-shrink-0">
              <span
                className={`px-3 py-1 rounded-full text-white text-sm font-medium ${
                  article.status === "Published"
                    ? "bg-green-500"
                    : article.status === "Pending"
                    ? "bg-orange-500"
                    : "bg-red-500"
                }`}
              >
                {article.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashRecentArticle;
