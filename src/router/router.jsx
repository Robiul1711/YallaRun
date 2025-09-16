import Dashboard from "@/components/admin/Dashboard";
import AdminLayout from "@/layout/AdminLayout";
import Layout from "@/layout/Layout";
import ChooseRole from "@/pages/auth/ChooseRole";
import CoachSignUp from "@/pages/auth/CoachSignUp";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import OTPPage from "@/pages/auth/OTPPage";
import PasswordReset from "@/pages/auth/PasswordReset";
import RunnerSignUp from "@/pages/auth/RunnerSignUp";
import SignIn from "@/pages/auth/SignIn";
import Home from "@/pages/home/Home";


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
        path: "/sign-in",
        element: <SignIn/>,
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
