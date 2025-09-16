import React from "react";
import HeadingSection from "../common/HeadingSection";
import { upcommingMerathon } from "@/utils/Data";
import ListCard from "../cards/ListCard";

const RunningEvent = () => {
  return (
    <div className=" flex flex-col gap-12 section-padding-x section-padding-y">
      <HeadingSection
        text={`Find Your Next Running Event`}
        title={`Explore upcoming marathons, half-marathons, fun runs, and trail events across the UAE.`}
      />

      <div className=" grid grid-cols-2 gap-6">
        {upcommingMerathon?.map((item, index) => (
          <ListCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default RunningEvent;
