import {
  AricleIcon,
  DashboardIcon,
  EventIcon,
  HelpSupportIcon,
  MyAricleIcon,
  SettingtIcon,
  SubscriptionIcon,
} from "@/components/DashboardIcons/CoachDashboard";
import { SaveArticleIcon } from "@/components/DashboardIcons/RunnerDashboardIcons";

import CommonNavbar from "@/pages/admin/CommonNavbar";
import SideBar from "@/pages/admin/SideBar";
import { SettingsIcon } from "lucide-react";

import React, { useEffect, useState } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";

const CoachLayout = () => {
  const [Open, setOpen] = useState(false);

  const sideBar = [
    {
      id: 1,
      icon: <DashboardIcon className=" hover:text-primaryColor" />,
      text: "Dashboard",
      path: "/coachdashboard", // main path (optional, if you still want to keep it)
      activePaths: ["/coachdashboard"], // all paths that should make this item active
      sublink: false,
    },
    {
      id: 2,
      icon: <AricleIcon className=" hover:text-primaryColor" />,
      text: "Create Article",
      path: "/coachdashboard/create-article", // main path (optional, if you still want to keep it)
      activePaths: ["/coachdashboard/create-article"], // all paths that should make this item active
      sublink: false,
    },
    {
      id: 3,
      icon: <MyAricleIcon className=" hover:text-primaryColor" />,
      text: "My Article",
      path: "/coachdashboard/my-article", // main path (optional, if you still want to keep it)
      activePaths: ["/coachdashboard/my-article"], // all paths that should make this item active
      sublink: false,
    },
    {
      id: 4,
      icon: <SaveArticleIcon className=" hover:text-primaryColor" />,
      text: "Saved Articles",
      path: "/coachdashboard/save-article", // main path (optional, if you still want to keep it)
      activePaths: ["/coachdashboard/save-article"], // all paths that should make this item active
      sublink: false,
    },
    {
      id: 5,
      icon: <EventIcon className=" hover:text-primaryColor" />,
      text: "Event Participations",
      path: "/coachdashboard/event-participations", // main path (optional, if you still want to keep it)
      activePaths: ["/coachdashboard/event-participations"], // all paths that should make this item active
      sublink: false,
    },
    {
      id: 6,
      icon: <SubscriptionIcon className=" hover:text-primaryColor" />,
      text: "Subscriptions",
      path: "/coachdashboard/subscription", // main path (optional, if you still want to keep it)
      activePaths: ["/coachdashboard/subscription"], // all paths that should make this item active
      sublink: false,
    },
    {
      id: 7,
      icon: <HelpSupportIcon className=" hover:text-primaryColor" />,
      text: "Help & Support",
      path: "/coachdashboard/help-support", // main path (optional, if you still want to keep it)
      activePaths: ["/coachdashboard/help-support"], // all paths that should make this item active
      sublink: false,
    },
    {
      id: 8,
      icon: <SettingtIcon className=" hover:text-primaryColor" />,
      text: "Settings",
      path: "/coachdashboard/setting", // main path (optional, if you still want to keep it)
      activePaths: ["/coachdashboard/setting"], // all paths that should make this item active
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

export default CoachLayout;
