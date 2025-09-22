import CommonInputWrapper from "@/components/common/CommonInputWrapper";
import { Title18, Title24 } from "@/components/common/Title";
import { nationalities, specializations } from "@/utils/Data";
import React from "react";
import { useFormContext } from "react-hook-form";
import { Link } from "react-router-dom";
import StepArea from "./StepArea";

const Step1 = () => {
  const {
    register,
    setValue,
    trigger,
    control,
    watch,
    formState: { errors },
  } = useFormContext();


  return (
    <StepArea name={`Tell Us About Yourself`}>
      <div className=" flex flex-col lg:gap-6 gap-3">
        <CommonInputWrapper
          type="text"
          label="Name"
          register={register}
          register_as="name"
          trigger={trigger}
          errors={errors}
          placeholder="Enter your name"
          validationRules={{
            required: "Name is required",
          }}
        />

        <CommonInputWrapper
          type="select"
          register={register}
          register_as="specialization"
          validationRules={{
            required: "This field is required",
          }}
          setValue={setValue}
          trigger={trigger}
          label="Specialization"
          options={specializations}
          placeholder="Select your coaching specialization"
          errors={errors}
        />
        <CommonInputWrapper
          label="Select Date"
          labelStar="*"
          register_as="dob"
          register={register}
          control={control}
          type="date"
          placeholder="Select your date of birth"
          setValue={setValue}
          validationRules={{
            required: "This field is required",
          }}
          errors={errors}
        />

        <CommonInputWrapper
          type="select"
          register={register}
          register_as="nationality"
          validationRules={{
            required: "This field is required",
          }}
          setValue={setValue}
          trigger={trigger}
          label="Nationality"
          options={nationalities}
          placeholder="Choose your nationality"
          errors={errors}
        />

        <CommonInputWrapper
          type="text"
          label="City of Residence"
          register={register}
          register_as="city_residence"
          errors={errors}
          placeholder="Enter your city of residence"
          validationRules={{
            required: "Name is required",
          }}
        />
      </div>
      <div className=" flex flex-col gap-6">
        <div className="flex items-center w-full gap-2">
          <div className="flex-grow border-t border-customBlack"></div>
          <p className="text-center text-customBlack">Or</p>
          <div className="flex-grow border-t border-customBlack"></div>
        </div>

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
      </div>
    </StepArea>
  );
};

export default Step1;
