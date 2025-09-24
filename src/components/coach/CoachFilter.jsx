import React from "react";
import { set, useForm } from "react-hook-form";
import CommonInputWrapper from "../common/CommonInputWrapper";
import { specializations } from "@/utils/Data";
import ArrowButton from "../common/ArrowButton";

const CoachFilter = ({ setCoachFilter }) => {
  const { register, handleSubmit ,control,setValue } = useForm();

  const onSubmit = (data) => {
    setCoachFilter(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" w-full flex xmd:items-center xmd:flex-row flex-col  gap-2"
    >
      <div className=" xmd:w-[80%] grid md:grid-cols-3 gap-6">
        <CommonInputWrapper
          label="Coach Name"
          register={register}
          register_as="coach_name"
          type="text"
          placeholder="Search by coach name"
        />
        <CommonInputWrapper
          label="Location"
          register={register}
          register_as="coach_name"
          type="text"
          placeholder="Enter city or area (e.g., Dubai, Sharjah)"
        />
        <CommonInputWrapper
          label="Specialization"
          register={register}
          control={control}
          register_as="coach_name"
          setValue={setValue}
          type="select"
          options={specializations}
          placeholder="Marathon Training"
        />
      </div>

      <div className=" xmd:w-[20%] mt-8">
        <ArrowButton className="rounded-xl" name={`Find Coach`} type="submit" />
      </div>
    </form>
  );
};

export default CoachFilter;
