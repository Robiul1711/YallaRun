import AuthProvider from "@/components/auth/AuthProvider";
import React from "react";
import A1 from "@/assets/images/a1.png";
import { useForm } from "react-hook-form";
import CommonInputWrapper from "@/components/common/CommonInputWrapper";
import { EmailIcon } from "@/components/icons/CustomIcon";
import { Title18 } from "@/components/common/Title";
import { Link } from "react-router-dom";
import AuthBtn from "@/components/common/AuthBtn";
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
      title={`Welcome Back, Runner`}
      text={`Log in to track runs, join events, and explore content.`}
    >
      <form className=" flex flex-col xlg:gap-10 gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className=" flex flex-col xlg:gap-6 gap-3.5 items-start">
          <CommonInputWrapper
            icon={<EmailIcon />}
            type="email"
            label="Email"
            register_as="email"
            register={register}
            placeholder="Enter your email"
            errors={errors}
            validationRules={{
              required: "Email is required",
            }}
          />
          <CommonInputWrapper
            icon={<EmailIcon />}
            type="password"
            label="Password"
            register_as="password"
            register={register}
            placeholder="Enter your password"
            errors={errors}
            validationRules={{
              required: "Password is required",
            }}
          />

          <div className="  w-full flex items-center gap-4 justify-between">
            <div className=" flex items-center gap-2 ">
              <input
                id="remember"
                type="checkbox"
                className=" w-4 h-4 cursor-pointer"
              />
              <label htmlFor="remember" className=" cursor-pointer">
                <Title18 className={`!text-customBlack`}>Remember me</Title18>
              </label>
            </div>
            <Link to={`/forgot-password`}>
              <Title18 className={`!text-primaryColor`}>
                Forgot Password
              </Title18>
            </Link>
          </div>
        </div>
        <AuthBtn name={`Sign In`} />

        <div className=" flex flex-col xlg:gap-6 gap-3">
          <div className="flex items-center w-full gap-2">
            <div className="flex-grow border-t border-customBlack"></div>
            <p className="text-center text-customBlack">Or</p>
            <div className="flex-grow border-t border-customBlack"></div>
          </div>

          <div className=" flex items-center justify-center gap-3">
            <Title18 className={`!text-[#404040] !font-normal`}>
         Don’t have an account? 
            </Title18>

            <Link to={`/choose-role`} className="">
              <Title18 className={`!text-primaryColor !font-normal`}>
                Sign Up
              </Title18>
            </Link>
          </div>
        </div>
      </form>
    </AuthProvider>
  );
};

export default SignIn;
