import React from "react";
import article from "@/assets/images/article1.png";
import { TfiLocationPin } from "react-icons/tfi";
import { FaCalendarDays } from "react-icons/fa6";

const RunnerUpcommingEvent = () => {
  const articles = [
    {
      id: 1,
      title: "Advanced Marathon Training Techniques",
      date: "2024-11-10",
      location: "Dubai, UAE",
     status: "Upcomming",
      statusColor: "bg-[#9FCC3B]",
      image: article,
    },
    {
      id: 2,
      title: "Recovery Techniques After Long Runs",
      date: "2024-12-02",
      location: "Abu Dhabi, UAE",
     status: "Upcomming",
    statusColor: "bg-[#9FCC3B]",
      image: article,
    },
    {
      id: 3,
      title: "Marathon Training Tips for Beginners",
      date: "2025-01-15",
      location: "Sharjah, UAE",
     status: "Upcomming",
      statusColor: "bg-[#9FCC3B]",
      image: article,
    },
    {
      id: 4,
      title: "Nutrition & Hydration Workshop",
      date: "2025-02-20",
      location: "Ajman, UAE",
      status: "Upcomming",
      statusColor: "bg-[#9FCC3B]",
      image: article,
    },

  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 xl:p-6">
       {/* Header */}
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-6">
  <div>
    <h1 className="text-lg sm:text-2xl font-bold text-gray-900 mb-1">
      Upcoming Events
    </h1>
    <p className="text-gray-500 text-sm sm:text-base">
      Discover and register for exciting races, marathons.
    </p>
  </div>
  <button className="w-full sm:w-auto px-4 py-2 border text-sm sm:text-base border-secondaryColor rounded-full text-gray-700 hover:bg-gray-50 transition-colors">
    View All
  </button>
</div>


 
       {/* Articles List */}
       <div className="md:space-y-4 space-y-2">
         {articles.map((article) => (
           <div
             key={article.id}
             className="flex items-center justify-between sm:p-4 sm:border sm:border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
           >
             {/* Left side - Image, Title, Date */}
             <div className="flex items-center space-x-4">
               <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
                 <img
                   src={article.image}
                   alt=""
                   className="w-full h-full object-cover"
                 />
               </div>
 
               <div className="flex flex-col gap-1">
                 <h3 className="text-sm sm:text-base font-medium text-gray-900">
                   {article.title}
                 </h3>
                 <p className="text-xs sm:text-sm text-gray-500 flex items-center gap-1">
                   <TfiLocationPin /> {article.location}
                 </p>
                 <div className="flex items-center gap-3">
                   <p className="text-xs sm:text-sm text-gray-500 flex items-center gap-1">
                     <FaCalendarDays /> {article.date}
                   </p>
                   <p className="text-xs sm:text-sm text-gray-500 flex items-center gap-1">
                     <span
                       className={`inline-block w-2 h-2 rounded-full ${article.statusColor}`}
                     ></span>
                     {article.status}
                   </p>
                 </div>
               </div>
             </div>
 
             {/* Right side - Status Badge */}
             <div className="flex-shrink-0">
               <span
                 className={`px-3 py-1 rounded-full text-white text-xs sm:text-sm font-medium ${article.statusColor}`}
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

export default RunnerUpcommingEvent;
