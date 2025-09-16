import AuthProvider from "@/components/auth/AuthProvider";
import React from "react";
import A1 from "@/assets/images/a1.png";
import { useForm } from "react-hook-form";
import CommonInputWrapper from "@/components/common/CommonInputWrapper";
import { PasswordIcon } from "@/components/icons/CustomIcon";
import AuthBtn from "@/components/common/AuthBtn";
const PasswordReset = () => {
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
      title={`Set a New Password`}
      text={`Secure your account with a strong password.`}
    >
      <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-10">
        <div className=" flex flex-col gap-6">
          <CommonInputWrapper
            icon={<PasswordIcon />}
            type="password"
            label="New Password"
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
        </div>

        <AuthBtn name={`Reset Password`} />
      </form>
    </AuthProvider>
  );
};

export default PasswordReset;
