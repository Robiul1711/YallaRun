import React from "react";
import { Title32 } from "../common/Title";
import CommonInputWrapper from "../common/CommonInputWrapper";
import { useForm } from "react-hook-form";

const LeaveComments = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);      
  }
  return (
    <div className=" w-full max-w-[1258px] mx-auto px-4 section-padding-y flex flex-col lg:gap-8 gap-3">
      <Title32 className={` !text-[#141414] !font-semibold`}>
        Leave a Comment
      </Title32>

      <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-6 items-start ">
        <CommonInputWrapper
          type="textarea"
          placeholder="Enter your comment"
          register_as="comment"
          register={register}
          errors={errors}
          validationRules={{
            required: "This field is required",
          }}
        />

        <button
         type="submit"
          className="px-5 py-2 bg-emerald-700 text-white rounded-full hover:bg-emerald-800 transition-colors"
        >
          Submit Comment
        </button>
      </form>
    </div>
  );
};

export default LeaveComments;
