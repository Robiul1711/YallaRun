import React from "react";
import { Title20, Title40 } from "../common/Title";
import { useForm } from "react-hook-form";
import CommonInputWrapper from "../common/CommonInputWrapper";

const ConnectCoachModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className=" flex flex-col gap-12">
      <div className=" flex flex-col gap-4">
        <Title40 className={`!text-customBlack !font-semibold`}>
          Connect with Coach
        </Title40>
        <Title20 className={`!text-customBlack !font-normal`}>
          Fill in your details and the coach will reach out to you directly.
        </Title20>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-5">
        <CommonInputWrapper
          label="Name"
          type="text"
          register_as="name"
          register={register}
          placeholder="Enter your name"
          errors={errors}
          validationRules={{
            required: "This field is required",
          }}
        />
        <CommonInputWrapper
          label="Email"
          type="email"
          register_as="email"
          register={register}
          placeholder="Enter your email"
          errors={errors}
          validationRules={{
            required: "This field is required",
          }}
        />
        <CommonInputWrapper
          label="Mobile Number"
          type="number"
          register_as="phone"
          register={register}
          placeholder="Enter your Mobile Number"
          errors={errors}
          validationRules={{
            required: "This field is required",
          }}
        />
        <CommonInputWrapper
          label="Message"
          type="textarea"
          register_as="message"
          register={register}
          placeholder="write your message"
          errors={errors}
          validationRules={{
            required: "This field is required",
          }}
        />

        <button
          type="submit"
          className="px-5 py-4 bg-primaryColor text-customBlack text-lg rounded-full  transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ConnectCoachModal;
