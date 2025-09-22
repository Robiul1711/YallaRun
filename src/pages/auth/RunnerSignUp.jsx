import React from "react";
import A1 from "@/assets/images/a1.png";
import AuthProvider from "@/components/auth/AuthProvider";
import CommonInputWrapper from "@/components/common/CommonInputWrapper";
import { Avataricon, EmailIcon, PasswordIcon } from "@/components/icons/CustomIcon";
import { useForm } from "react-hook-form";
import { Title18 } from "@/components/common/Title";
import AuthBtn from "@/components/common/AuthBtn";
import { Link } from "react-router-dom";

const RunnerSignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <AuthProvider
      sectionImage={A1}
      title={`Create Your Runner Account`}
      text={`Join the UAE’s most vibrant running community.`}
    >
      <form onSubmit={handleSubmit(onSubmit)}  className=" flex flex-col xlg:gap-10 gap-4">
        <div className=" flex flex-col lg:gap-6 gap-3.5">
          <CommonInputWrapper
            type="text"
            icon={<Avataricon />}
            register={register}
            register_as="name"
            label="Name"
            placeholder="Enter your name"
            validationRules={{ required: "Name is required" }}
            errors={errors}
          />

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
            icon={<PasswordIcon />}
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
          <CommonInputWrapper
            icon={<PasswordIcon />}
            type="password"
            label="Confirm Password"
            register_as="password_confirmation"
            register={register}
            placeholder="Enter your password"
            errors={errors}
            validationRules={{
              required: "Confirm Password is required",
              validate: (value) =>
                value === watch("password") || "Password must match",
            }}
          />

          <div className=" flex items-center gap-2 ">
            <input
              id="remember"
              type="checkbox"
              className=" w-4 h-4 cursor-pointer"
            />
            <label htmlFor="remember" className=" cursor-pointer">
              <Title18 className={`!text-customBlack !font-normal`}>
                I agree to the Terms & Conditions and Privacy Policy
              </Title18>
            </label>
          </div>
        </div>

        <AuthBtn name={`Sign Up`} />

         <div className=" flex items-center justify-center gap-3">
            <Title18 className={`!text-[#404040] !font-normal`}>
              Already have an account?
            </Title18>

            <Link to={`/sign-in`} className="">
              <Title18 className={`!text-primaryColor !font-normal`}>
                Sign In
              </Title18>
            </Link>
          </div>
      </form>
    </AuthProvider>
  );
};

export default RunnerSignUp;
