import CreateArticle from "@/components/CoachDashboardComponbents/CreateArticle";
import Dashboard from "@/components/CoachDashboardComponbents/Dashboard";
import EventParticipations from "@/components/CoachDashboardComponbents/EventParticipations";
import HelpSupport from "@/components/CoachDashboardComponbents/HelpAndSupportComponents/HelpSupport";
import MyArticle from "@/components/CoachDashboardComponbents/MyArticle";
import Setting from "@/components/CoachDashboardComponbents/SettingComponents/Setting";
import Subscription from "@/components/CoachDashboardComponbents/Subscription";
import CoachLayout from "@/layout/CoachLayout";
import AdminLayout from "@/layout/CoachLayout";
import Layout from "@/layout/Layout";
import AboutPage from "@/pages/about/AboutPage";
import ArticlePage from "@/pages/article/ArticlePage";
import ArticleDetails from "@/pages/articleDetails/ArticleDetails";
import ChooseRole from "@/pages/auth/ChooseRole";
import CoachSignUp from "@/pages/auth/CoachSignUp";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import OTPPage from "@/pages/auth/OTPPage";
import PasswordReset from "@/pages/auth/PasswordReset";
import RunnerSignUp from "@/pages/auth/RunnerSignUp";
import SignIn from "@/pages/auth/SignIn";
import CoachPage from "@/pages/coaches/CoachPage";
import ContactPage from "@/pages/contact/ContactPage";

import EventPage from "@/pages/events/EventPage";
import Home from "@/pages/home/Home";
import MagazinePage from "@/pages/magazine/MagazinePage";
import MagazineDetails from "@/pages/magazineDetails/MagazineDetails";
import PricePage from "@/pages/price/PricePage";


import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/sign-in",
        element: <SignIn/>,
      },
      {
        path: "/events",
        element: <EventPage/>,
      },
      {
        path: "/articles",
        element: <ArticlePage/>,
      },
      {
        path: "/article/:id",
        element: <ArticleDetails/>,
      },
      {
        path: "/coaches",
        element: <CoachPage/>,
      },
      {
        path: "/pricing",
        element: <PricePage/>,
      },
      {
        path: "/contact",
        element: <ContactPage/>,
      },
      {
        path: "/magazine",
        element: <MagazinePage/>,
      },
      {
        path: "/magazine/:id",
        element: <MagazineDetails/>,
      },
      {
        path: "/choose-role",
        element: <ChooseRole/>,
      },
      {
        path: "/runner-sign-up",
        element: <RunnerSignUp/>,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword/>,
      },
      {
        path: "/otp-page",
        element: <OTPPage/>,
      },
      {
        path: "/password-reset",
        element: <PasswordReset/>,
      },
      {
        path: "/coach-sign-up",
        element: <CoachSignUp/>,
      },

    ],
  },
  // Admin routes
  {
    path: "/dashboard",
    element: <CoachLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/dashboard/create-article",
        element: <CreateArticle />
      },
      {
        path: "/dashboard/my-article",
        element: <MyArticle />
      },
      {
        path: "/dashboard/event-participations",
        element: <EventParticipations />
      },
      {
        path: "/dashboard/subscription",
        element: <Subscription />
      },
      {
        path: "/dashboard/help-support",
        element: <HelpSupport />
      },
      {
        path: "/dashboard/setting",
        element: <Setting />
      },
    ],
  },
]);

export default router;
