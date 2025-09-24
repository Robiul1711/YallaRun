import React from "react";
import DashBanner from "./AllCoachDashboardComponents/DashBanner";
import StatsDashboard from "./AllCoachDashboardComponents/StatsDashboard";
import DashRecentArticle from "./AllCoachDashboardComponents/DashRecentArticle";
import DashUpCommingEvent from "./AllCoachDashboardComponents/DashUpCommingEvent";

const Dashboard = () => {
  return (
    <div className="space-y-6 md:space-y-9">
      <DashBanner />
      <StatsDashboard />
      <div className="grid lg:grid-cols-2 xlg:grid-cols-1 xl:grid-cols-2 grid-cols-1  gap-6">
        <DashRecentArticle />
        <DashUpCommingEvent />
      </div>
    </div>
  );
};

export default Dashboard;
