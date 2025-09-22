import React, { useState } from "react";
import A3 from "@/assets/images/a3.png";
import AuthProvider from "@/components/auth/AuthProvider";
import ProgressBar from "@/components/auth/ProgressBar";
import { FormProvider, useForm } from "react-hook-form";
import Step1 from "@/components/auth/coachSteps/Step1";
import Step2 from "@/components/auth/coachSteps/Step2";
import Step3 from "@/components/auth/coachSteps/Step3";
import Step4 from "@/components/auth/coachSteps/Step4";
import ButtonArea from "@/components/auth/ButtonArea";
import AlertModal from "@/components/auth/AlertModal";

const CoachSignUp = () => {
  const methods = useForm({ mode: "onChange" });
  const [step, setStep] = useState(1); // Start from step 1
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setIsModalOpen(true); // Show success modal
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  return (
    <AuthProvider
      sectionImage={A3}
      title="Create Your Coach Profile"
      text="Provide your details to get started as a coach on YallaRun."
    >
      <div className="flex flex-col lg:gap-8 gap-4">
        <ProgressBar step={step} />
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="flex flex-col lg:gap-8 gap-4"
          >
            <div>
              {step === 1 && <Step1 />}
              {step === 2 && <Step2 />}
              {step === 3 && <Step3 />}
              {step === 4 && <Step4 />}
            </div>

            <ButtonArea step={step} setStep={setStep} methods={methods} />
          </form>
        </FormProvider>

        {/* Success Modal */}
        <AlertModal isModalOpen={isModalOpen} handleOk={handleOk} />
      </div>
    </AuthProvider>
  );
};

export default CoachSignUp;
