import AuthProvider from "@/components/auth/AuthProvider";
import React from "react";
import A1 from "@/assets/images/a1.png";
import { useForm } from "react-hook-form";
import CommonInputWrapper from "@/components/common/CommonInputWrapper";
import { EmailIcon } from "@/components/icons/CustomIcon";
import AuthBtn from "@/components/common/AuthBtn";
import { Title18 } from "@/components/common/Title";
import { Link } from "react-router-dom";
const ForgotPassword = () => {
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
      title={`Forgot Password`}
      text={`Enter your registered email to reset your password..`}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex flex-col gap-10
        "
      >
        <CommonInputWrapper
          icon={<EmailIcon />}
          type="email"
          label="Registered Email"
          register_as="email"
          register={register}
          placeholder="Enter your email"
          errors={errors}
          validationRules={{
            required: "Email is required",
          }}
        />

        <div className=" flex items-center justify-end -mt-4">
          <Link to={`/sign-in`} className="text-lg text-primaryColor font-normal">Go back to Sign In</Link>
        </div>

        <AuthBtn name="Send  OTP" />
      </form>
    </AuthProvider>
  );
};

export default ForgotPassword;
