import React from "react";
import { Title18, Title24, Title32, Title40 } from "../common/Title";
import CommonInputWrapper from "../common/CommonInputWrapper";
import { useForm } from "react-hook-form";
import { areasOfExpertise, availabilityOptions, eventPreferences, tShirtSizes } from "@/utils/Data";
import CommonBtn from "../common/CommonBtn";
import AuthBtn from "../common/AuthBtn";

const EventRegistration = () => {
  const {
    register,
    setValue,
    handleSubmit,
    control,
    formState: { errors },
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className=" flex flex-col gap-12">
      <div className=" flex flex-col gap-6">
        <Title32 className={`!text-customBlack !font-semibold`}>
          Event Registration
        </Title32>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <CommonInputWrapper
          type="radio"
          label="Role"
          register_as="role"
          register={register}
          setValue={setValue}
          errors={errors}
          validationRules={{ required: "Please select a language" }}
          options={[
            { label: "Runner", value: "runner" },
            { label: "Coach", value: "coach" },
          ]}
        />

        <div className=" grid grid-cols-2 gap-6">
          <CommonInputWrapper
            label="Name"
            type="text"
            register_as="Name"
            register={register}
            errors={errors}
            validationRules={{ required: "This field is required" }}
            placeholder="Enter your name"
          />
          <CommonInputWrapper
            label="Email"
            type="email"
            register_as="Email"
            register={register}
            errors={errors}
            validationRules={{ required: "This field is required" }}
            placeholder="Enter your email"
          />
        </div>
        <div className=" grid grid-cols-2 gap-6">
          <CommonInputWrapper
            label="Phone"
            type="number"
            register_as="phone"
            register={register}
            errors={errors}
            validationRules={{ required: "This field is required" }}
            placeholder="Enter your phone"
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
        </div>

        <div className=" flex flex-col gap-6">
          <Title18 className={`!text-customBlack font-semibold`}>
            Emergency Contact
          </Title18>

          <div className=" grid grid-cols-2 gap-6">
            <CommonInputWrapper
              label="Contact Name"
              type="text"
              register_as="contact_name"
              register={register}
              errors={errors}
              validationRules={{ required: "This field is required" }}
              placeholder="Enter your contact name"
            />
            <CommonInputWrapper
              label="Contact Number"
              type="number"
              register_as="contact_number"
              register={register}
              errors={errors}
              validationRules={{ required: "This field is required" }}
              placeholder="Enter your contact number"
            />
          </div>
        </div>

        <div className=" flex flex-col gap-6">
          <Title18 className={`!text-customBlack font-semibold`}>
            Event Preferences
          </Title18>

          <div className=" grid grid-cols-2 gap-6">
            <CommonInputWrapper
              type="select"
              register={register}
              control={control}
              register_as="preferred_distance"
              validationRules={{
                required: "This field is required",
              }}
              setValue={setValue}
              trigger={trigger}
              label="Preferred Distance"
              options={eventPreferences}
              placeholder="Select your Preferred Distance"
              errors={errors}
            />
            <CommonInputWrapper
              type="select"
              register={register}
              control={control}
              register_as="size"
              validationRules={{
                required: "This field is required",
              }}
              setValue={setValue}
              trigger={trigger}
              label="T-Shirt Size"
              options={tShirtSizes}
              placeholder="Select your T-Shirt Size"
              errors={errors}
            />
          </div>
        </div>

        <div className=" flex flex-col gap-6">
          <Title18 className={`!text-customBlack font-semibold`}>
            Coach’s Specialization
          </Title18>

          <div className=" grid grid-cols-2 gap-6">
            <CommonInputWrapper
              type="select"
              register={register}
              control={control}
              register_as="area_of_expertise"
              validationRules={{
                required: "This field is required",
              }}
              setValue={setValue}
              trigger={trigger}
              label="Area of Expertise"
              options={areasOfExpertise}
              placeholder="Select your Area of Expertise"
              errors={errors}
            />
            <CommonInputWrapper
              type="select"
              register={register}
              control={control}
              register_as="size"
              validationRules={{
                required: "This field is required",
              }}
              setValue={setValue}
              trigger={trigger}
              label="Availability"
              options={availabilityOptions}
              placeholder="Select your Availability"
              errors={errors}
            />
          </div>
        </div>

        <div className=" flex flex-col gap-4">
            <div className="flex items-center gap-2">
            <input {...register("terms",{required:"This field is required"})} type="checkbox" className=" w-4 h-4"/>
            <label>I agree to the terms and conditions</label>

        </div>

        {errors.terms && <span className=" text-red-500">{errors.terms.message}</span>}

        </div>

       <AuthBtn name={"Submit Registration"} />
      </form>
    </div>
  );
};

export default EventRegistration;
