import React from "react";
import EventBanner from "@/assets/images/eventBanner.png";
import CommonBanner from "@/components/common/CommonBanner";
import EventSection from "@/components/events/EventSection";

const EventPage = () => {
  return (
    <div>
      <CommonBanner
        bannerImage={EventBanner}
        title={`Upcoming Running Events in UAE`}
        text={`Discover, register, and join exciting runs near you.`}
      ></CommonBanner>
      <EventSection />
    </div>
  );
};

export default EventPage;
