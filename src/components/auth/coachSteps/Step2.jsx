import React from "react";
import StepArea from "./StepArea";
import CommonInputWrapper from "@/components/common/CommonInputWrapper";
import { EmailIcon } from "@/components/icons/CustomIcon";
import {  useFormContext } from "react-hook-form";
import { Title20 } from "@/components/common/Title";

const Step2 = () => {
  const {
    register,
    setValue,
    formState: { errors },
    trigger
  } = useFormContext();
  return (
    <StepArea name={`Add your contact details and social profiles.`}>
      <div className=" flex flex-col lg:gap-6 gap-3">
        <CommonInputWrapper
          type="email"
          label="Email"
          register_as="email"
          register={register}
          trigger={trigger}
          placeholder="Enter your email"
          errors={errors}
          validationRules={{
            required: "This field is required",
          }}
        />
        <CommonInputWrapper
          type="number"
          label="Phone"
          register_as="phone"
          register={register}
          placeholder="Enter your Phone Number"
          errors={errors}
          validationRules={{
            required: "This field is required",
          }}
        />
        <CommonInputWrapper
          type="text"
          label="Instagram"
          register_as="instagram_link"
          register={register}
          placeholder="Enter your Instagram Link"
          errors={errors}
          validationRules={{
            required: "This field is required",
          }}
        />
        <CommonInputWrapper
          type="text"
          label="TikTok"
          register_as="tiktok_link"
          register={register}
          placeholder="Enter your TikTok Link"
          errors={errors}
          validationRules={{
            required: "This field is required",
          }}
        />

       
        <CommonInputWrapper
          type="radio"
          label="Preferred Language"
          register_as="preferred_language"
          register={register}
          setValue={setValue}
          errors={errors}
          validationRules={{ required: "Please select a language" }}
          options={[
            { label: "English", value: "english" },
            { label: "Arabic", value: "arabic" },
          ]}
        />
      </div>
    </StepArea>
  );
};

export default Step2;
