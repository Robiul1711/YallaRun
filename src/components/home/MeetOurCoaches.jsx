import React from "react";
import HeadingSection from "../common/HeadingSection";
import { coachData } from "@/utils/Data";
import CoachCard from "../cards/CoachCard";

const MeetOurCoaches = () => {
  return (
    <div className=" section-padding-x section-padding-y flex flex-col xlg:gap-16 md:gap-8 gap-3.5">
      <HeadingSection
        title={`Connect with professional running coaches to improve your performance and reach your goals.`}
        text={`Meet Our Coachess`}
      />

      <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xlg:gap-6 gap-2.5">
        {coachData?.map((item, index) => (
          <CoachCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default MeetOurCoaches;
