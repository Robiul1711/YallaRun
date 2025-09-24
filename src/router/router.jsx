import CreateArticle from "@/components/CoachDashboardComponbents/CreateArticle";
import Dashboard from "@/components/CoachDashboardComponbents/Dashboard";
import EventParticipations from "@/components/CoachDashboardComponbents/EventParticipations";
import HelpSupport from "@/components/CoachDashboardComponbents/HelpAndSupportComponents/HelpSupport";
import MyArticle from "@/components/CoachDashboardComponbents/MyArticle";
import Setting from "@/components/CoachDashboardComponbents/SettingComponents/Setting";
import Subscription from "@/components/CoachDashboardComponbents/Subscription";
import RunnerDashboard from "@/components/RunnerDasgboardComponents/AllDashRunnerCom.jsx/RunnerDashboard";
import RunnerCoaches from "@/components/RunnerDasgboardComponents/RunnerCoaches";
import RunnerDasMyEvents from "@/components/RunnerDasgboardComponents/RunnerDasMyEvents";
import RunnerSaveArticle from "@/components/RunnerDasgboardComponents/RunnerSaveArticle";
import CoachLayout from "@/layout/CoachLayout";
import AdminLayout from "@/layout/CoachLayout";
import Layout from "@/layout/Layout";
import RunnerLayout from "@/layout/RunnerLayout";
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
import CoachDetails from "@/pages/coachDetails/CoachDetails";
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
        path: "/coach/:id",
        element: <CoachDetails/>,
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
  // Coach routes
  {
    path: "/coachdashboard",
    element: <CoachLayout />,
    children: [
      {
        path: "/coachdashboard",
        element: <Dashboard />
      },
      {
        path: "/coachdashboard/create-article",
        element: <CreateArticle />
      },
      {
        path: "/coachdashboard/my-article",
        element: <MyArticle />
      },
          {
        path: "/coachdashboard/save-article",
        element: <RunnerSaveArticle />
      },
      {
        path: "/coachdashboard/event-participations",
        element: <EventParticipations />
      },
      {
        path: "/coachdashboard/subscription",
        element: <Subscription />
      },
      {
        path: "/coachdashboard/help-support",
        element: <HelpSupport />
      },
      {
        path: "/coachdashboard/setting",
        element: <Setting />
      },
    ],
  },
  // Runner routes
  {
    path: "/runnerdashboard",
    element: <RunnerLayout />,
    children: [
      {
        path: "/runnerdashboard",
        element: <RunnerDashboard />
      },
      {
        path: "/runnerdashboard/my-events",
        element: <RunnerDasMyEvents />
      },
      {
        path: "/runnerdashboard/runner-coaches",
        element: <RunnerCoaches />
      },
      {
        path: "/runnerdashboard/runner-save-article",
        element: <RunnerSaveArticle />
      },
      {
        path: "/runnerdashboard/subscription",
        element: <Subscription />
      },
      {
        path: "/runnerdashboard/help-support",
        element: <HelpSupport />
      },
      {
        path: "/runnerdashboard/setting",
        element: <Setting />
      },
    ],
  },
]);

export default router;
