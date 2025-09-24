import CoachFilter from "@/components/coach/CoachFilter";
import CommonBanner from "@/components/common/CommonBanner";
import React, { useState } from "react";
import CoachBanner from "@/assets/images/coach.png";
import CoachSection from "@/components/coach/CoachSection";

const CoachPage = () => {
  const [coachfilter, setCoachFilter] = useState();
  return (
    <div>
      <CommonBanner
        bannerImage={CoachBanner}
        title={`Meet Our Coaches`}
        text={`Certified trainers ready to guide your running journey.`}
      ></CommonBanner>

      <div className=" section-padding-x section-padding-y flex flex-col lg:gap-12 md:gap-6 gap-4">
        <CoachFilter setCoachFilter={setCoachFilter} />
        <CoachSection/>
      </div>
    </div>
  );
};

export default CoachPage;
