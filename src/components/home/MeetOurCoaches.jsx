import React from "react";
import HeadingSection from "../common/HeadingSection";
import { coachData } from "@/utils/Data";
import CoachCard from "../cards/CoachCard";

const MeetOurCoaches = () => {
  return (
    <div className=" section-padding-x section-padding-y flex flex-col gap-16">
      <HeadingSection
        title={`Connect with professional running coaches to improve your performance and reach your goals.`}
        text={`Meet Our Coachess`}
      />

      <div className=" grid grid-cols-4 gap-6">
        {
            coachData?.map((item,index)=>(
                <CoachCard item={item} key={index} />
            ))
        }

      </div>
    </div>
  );
};

export default MeetOurCoaches;
