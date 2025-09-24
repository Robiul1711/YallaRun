import { AricleIcon, DashboardIcon, EventIcon, HelpSupportIcon, MyAricleIcon, SettingtIcon, SubscriptionIcon } from "@/components/DashboardIcons/CoachDashboard";
import { CoachesIcon, SaveArticleIcon } from "@/components/DashboardIcons/RunnerDashboardIcons";

import CommonNavbar from "@/pages/admin/CommonNavbar";
import SideBar from "@/pages/admin/SideBar";
import { SettingsIcon } from "lucide-react";

import React, { useEffect, useState } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";

const RunnerLayout = () => {
  const [Open, setOpen] = useState(false);

  const sideBar = [
    {
      id: 1,
      icon: <DashboardIcon className=" hover:text-primaryColor" />,
      text: "RunnerDashboard",
      path: "/runnerdashboard", // main path (optional, if you still want to keep it)
      activePaths: [
        "/runnerdashboard",
        "/runnerdashboard/settings",
        "/runnerdashboard/analytics",
      ], // all paths that should make this item active
      sublink: false,
    },
    {
      id: 2,
      icon: <AricleIcon className=" hover:text-primaryColor" />,
      text: "My Events",
      path: "/runnerdashboard/my-events", // main path (optional, if you still want to keep it)
      activePaths: ["/runnerdashboard/my-events"], // all paths that should make this item active
      sublink: false,
    },
    {
      id: 3,
      icon: <CoachesIcon className=" hover:text-primaryColor" />,
      text: "Coaches ",
      path: "/runnerdashboard/runner-coaches", // main path (optional, if you still want to keep it)
      activePaths: ["/runnerdashboard/runner-coaches"], // all paths that should make this item active
      sublink: false,
    },
    {
      id: 4,
      icon: <SaveArticleIcon className=" hover:text-primaryColor" />,
      text: "Saved Articles",
      path: "/runnerdashboard/runner-save-article", // main path (optional, if you still want to keep it)
      activePaths: ["/runnerdashboard/runner-save-article"], // all paths that should make this item active
      sublink: false,
    },
    {
      id: 5,
      icon: <SubscriptionIcon className=" hover:text-primaryColor" />,
      text: "Subscriptions",
      path: "/runnerdashboard/subscription", // main path (optional, if you still want to keep it)
      activePaths: ["/runnerdashboard/subscription"], // all paths that should make this item active
      sublink: false,
    },
    {
      id: 6,
      icon: <HelpSupportIcon className=" hover:text-primaryColor" />,
      text: "Help & Support",
      path: "/runnerdashboard/help-support", // main path (optional, if you still want to keep it)
      activePaths: ["/runnerdashboard/help-support"], // all paths that should make this item active
      sublink: false,
    },
    {
      id: 7,
      icon: <SettingtIcon className=" hover:text-primaryColor" />,
      text: "Settings",
      path: "/runnerdashboard/setting", // main path (optional, if you still want to keep it)
      activePaths: ["/runnerdashboard/setting"], // all paths that should make this item active
      sublink: false,
    },

  ];
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);
  return (
    <>
      <ScrollRestoration />
      <div className="flex  h-screen min-h-screen w-full">
        <SideBar open={Open} setOpen={setOpen} sidebar={sideBar} />
        <div className="flex-1 bg-dark bg-[#F8F8F8]   flex flex-col overflow-auto custom-scrollbar">
          <div className=" flex flex-col  ">
            <CommonNavbar open={Open} setOpen={setOpen} />
            <div className="p-4 sm:p-6 md:p-9  ">

            <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RunnerLayout;
