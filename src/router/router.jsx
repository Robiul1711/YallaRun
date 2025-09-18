import Dashboard from "@/components/admin/Dashboard";
import AdminLayout from "@/layout/AdminLayout";
import Layout from "@/layout/Layout";
import AboutPage from "@/pages/about/AboutPage";
import ArticlePage from "@/pages/article/ArticlePage";
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
    element: <AdminLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />, // ✅ Fixed typo
      },
    ],
  },
]);

export default router;
