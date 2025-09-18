import React from "react";
import { useForm } from "react-hook-form";
import CommonInputWrapper from "../common/CommonInputWrapper";
import { eventTypes } from "@/utils/Data";
import ArrowButton from "../common/ArrowButton";

const EventFilter = ({ setFilterEvent }) => {
  const { register, handleSubmit, setValue, control } = useForm();
  const onSubmit = (data) => {
    setFilterEvent(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" grid grid-cols-5 gap-6 place-items-center"
    >
      <CommonInputWrapper
        label="Event Name"
        type="text"
        register_as="eventName"
        register={register}
        placeholder="Enter Event Name"
      />
      <CommonInputWrapper
        label="Location"
        type="text"
        register_as="location"
        register={register}
        placeholder="Enter city or area (e.g., Dubai, Sharjah)"
      />
      <CommonInputWrapper
        label="Date"
        type="date"
        control={control}
        setValue={setValue}
        register_as="event_date"
        register={register}
        placeholder="12 sep 2025"
      />
      <CommonInputWrapper
        type="select"
        control={control}
        register={register}
        register_as="event_type"
        setValue={setValue}
        label="Event Type"
        options={eventTypes}
        placeholder="Event Type"
      />

      <ArrowButton className=" mt-7" name="Find Event" type="submit" />
    </form>
  );
};

export default EventFilter;
