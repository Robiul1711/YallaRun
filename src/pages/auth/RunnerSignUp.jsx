import React from "react";
import A2 from "@/assets/images/a2.png";
import AuthProvider from "@/components/auth/AuthProvider";

const RunnerSignUp = () => {
  return (
    <AuthProvider
      sectionImage={A2}
      title={`Create Your Runner Account`}
      text={`Join the UAE’s most vibrant running community.`}
    >
      
    </AuthProvider>
  );
};

export default RunnerSignUp;
