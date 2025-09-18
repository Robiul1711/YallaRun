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
      className=" w-full flex items-center j gap-2"
    >
      <div className=" w-[80%] grid grid-cols-3 gap-6">
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

      <div className=" w-[20%] mt-8">
        <ArrowButton name={`Find Coach`} type="submit" />
      </div>
    </form>
  );
};

export default CoachFilter;
