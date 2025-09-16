import AuthProvider from "@/components/auth/AuthProvider";
import React from "react";
import A1 from "@/assets/images/a1.png";
import OTPInput from "react-otp-input";
import { useForm } from "react-hook-form";
import AuthBtn from "@/components/common/AuthBtn";
const OTPPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const [otp, setOtp] = React.useState("");

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <AuthProvider
      sectionImage={A1}
      title={`Verify Your Code`}
      text={`Enter the 6-digit code sent to your email.`}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 w-full"
      >
        {/* OTP Input */}
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          inputStyle={{
            width: "3rem",
            height: "3rem",
            margin: "0 0.5rem",
            fontSize: "1.5rem",
            borderRadius: "0.5rem",
            border: "1px solid #4ADE80",
            background: "rgba(255, 255, 255, 0.8)",
            color: "#065F46",
            fontWeight: "500",
            outline: "none",
            transition: "all 0.3s",
          }}
          focusStyle={{
            border: "2px solid #16A34A",
            boxShadow: "0 0 8px rgba(22, 163, 74, 0.5)",
          }}
          containerStyle="flex justify-center"
          renderInput={(props) => <input {...props} />}
        />
         <p className="text-green-900 mt-4 text-base text-center">
          Didn't receive the code?{" "}
          <span className="font-medium underline cursor-pointer hover:text-green-700">
            Resend
          </span>
        </p>

        {/* Submit Button */}
       <AuthBtn name="Verify OTP" />
      </form>
    </AuthProvider>
  );
};

export default OTPPage;
