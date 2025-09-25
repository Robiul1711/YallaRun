import React from "react";
import { useForm } from "react-hook-form";
import CommonInputWrapper from "../common/CommonInputWrapper";
import ArrowButton from "../common/ArrowButton";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const RightContactSide = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const axiosPublic = useAxiosPublic();

  const { mutate, isPending } = useMutation({
    mutationFn: async (data) => {
      const response = await axiosPublic.post("/contact-message/send", data);
      return response.data;
    },
    onSuccess: () => {
      toast.success("Message sent successfully");
    },
    onError: (error) => {
      console.log(error);
      toast.error(error?.response?.data?.message || "Something went wrong");
    },
  });

  const onSubmit = (data) => {
    mutate(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" xmd:w-[70%] w-full lg:px-12 px-6 lg:py-16 py-8 rounded-xl bg-[#E6EEEE] flex flex-col gap-5"
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
        <ArrowButton
          loading={isPending}
          name="Send Your Message"
          type="submit"
          className=" w-[270px] h-[60px] flex justify-center items-center"
        />
      </div>
    </form>
  );
};

export default RightContactSide;
