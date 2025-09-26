import AuthProvider from "@/components/auth/AuthProvider";
import React from "react";
import A1 from "@/assets/images/a1.png";
import { useForm } from "react-hook-form";
import CommonInputWrapper from "@/components/common/CommonInputWrapper";
import { EmailIcon, PasswordIcon } from "@/components/icons/CustomIcon";
import { Title18 } from "@/components/common/Title";
import { Link } from "react-router-dom";
import AuthBtn from "@/components/common/AuthBtn";
import { FaApple } from "react-icons/fa";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <AuthProvider
      sectionImage={A1}
      title="Welcome Back, Runner"
      text="Log in to track runs, join events, and explore content."
    >
      <form
        className="flex flex-col xlg:gap-10 gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col xlg:gap-6 gap-3.5 items-start">
          <CommonInputWrapper
            icon={<EmailIcon />}
            type="email"
            label="Email"
            register_as="email"
            register={register}
            placeholder="Enter your email"
            errors={errors}
            validationRules={{ required: "Email is required" }}
          />
          <CommonInputWrapper
            icon={<PasswordIcon />}
            type="password"
            label="Password"
            register_as="password"
            register={register}
            placeholder="Enter your password"
            errors={errors}
            validationRules={{ required: "Password is required" }}
          />

          <div className="w-full flex items-center gap-4 justify-between">
            <div className="flex items-center gap-2">
              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 cursor-pointer"
              />
              <label htmlFor="remember" className="cursor-pointer">
                <Title18 className="!text-customBlack">Remember me</Title18>
              </label>
            </div>
            <Link to="/forgot-password">
              <Title18 className="!text-primaryColor">Forgot Password</Title18>
            </Link>
          </div>
        </div>

        <AuthBtn name="Sign In" />

        {/* Divider */}
        <div className="flex items-center w-full gap-2 my-2">
          <div className="flex-grow border-t border-customBlack"></div>
          <p className="text-center text-customBlack">Or</p>
          <div className="flex-grow border-t border-customBlack"></div>
        </div>

        {/* --- Google & Apple login buttons --- */}
        <div className="flex flex-col xlg:gap-4 gap-3">
          {/* Google login */}
          <button
            type="button"
            className="flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-3 hover:bg-gray-100 transition"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 533.5 544.3"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M533.5 278.4c0-17.4-1.6-34.1-4.6-50.4H272v95.4h147.5c-6.4 34.5-25.9 63.7-55 83.3v68h88.8c52.1-48 80.2-118.7 80.2-196.3z"
                fill="#4285f4"
              />
              <path
                d="M272 544.3c73.8 0 135.6-24.5 180.8-66.6l-88.8-68c-24.7 16.6-56.3 26.4-92 26.4-70.8 0-130.7-47.8-152.1-112.1H28v70.6c45.1 89.1 137.3 149.7 244 149.7z"
                fill="#34a853"
              />
              <path
                d="M119.9 323.9c-10.5-31.4-10.5-65.3 0-96.7V156.6H28c-42.1 83.6-42.1 183.4 0 267l91.9-69.7z"
                fill="#fbbc04"
              />
              <path
                d="M272 107.7c39.9-.6 78.1 14.7 107.3 42.8l80.1-80.1C406.6 24.8 344.8 0 272 0 165.3 0 73.1 60.6 28 149.7l91.9 70.6c21.4-64.3 81.3-112.1 152.1-112.6z"
                fill="#ea4335"
              />
            </svg>
            <span className="text-sm font-medium text-gray-700">
              Continue with Google
            </span>
          </button>

          {/* Apple login */}
          <button
            type="button"
            className="flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-3 hover:bg-gray-100 transition"
          >

            <FaApple size={24} />
          
            <span className="text-sm font-medium text-gray-700">
              Continue with Apple
            </span>
          </button>
        </div>

        {/* Sign-up link */}
        <div className="flex items-center justify-center gap-2 mt-4">
          <Title18 className="!text-[#404040] !font-normal">
            Don’t have an account?
          </Title18>
          <Link to="/choose-role">
            <Title18 className="!text-primaryColor !font-normal">
              Sign Up
            </Title18>
          </Link>
        </div>
      </form>
    </AuthProvider>
  );
};

export default SignIn;
