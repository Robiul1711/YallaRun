import React from "react";
import { useForm } from "react-hook-form";
import CommonInputWrapper from "../common/CommonInputWrapper";
import ArrowButton from "../common/ArrowButton";

const RightContactSide = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" w-[70%] px-12 py-16 rounded-xl bg-[#E6EEEE] flex flex-col gap-5"
    >
      <CommonInputWrapper
        label="Name"
        register_as="name"
        register={register}
        type="text"
        placeholder="Enter your name"
        errors={errors}
        validationRules={{
          required: "This field is required",
        }}
      />
      <CommonInputWrapper
        label="Email"
        register_as="email"
        register={register}
        type="email"
        placeholder="Enter your email"
        errors={errors}
        validationRules={{
          required: "This field is required",
        }}
      />

      <CommonInputWrapper
        label="Subject"
        register_as="subject"
        register={register}
        type="text"
        placeholder="Enter your subject"
        errors={errors}
        validationRules={{
          required: "This field is required",
        }}
      />
      <CommonInputWrapper
        label="Message"
        register_as="message"
        register={register}
        type="textarea"
        placeholder="Enter your message"
        errors={errors}
        validationRules={{
          required: "This field is required",
        }}
      />

      <div className=" w-full flex justify-end items-end">
        <ArrowButton name="Send Your Message" type="submit" />
      </div>
    </form>
  );
};

export default RightContactSide;
