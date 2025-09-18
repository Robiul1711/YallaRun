import MissionVision from "@/components/about/MissionVision";
import WhatWeDo from "@/components/about/WhatWeDo";
import JoinSection from "@/components/home/JoinSection";
import React from "react";
import AboutBannerImage from "@/assets/images/aboutBanner.png";
import CommonBanner from "@/components/common/CommonBanner";

const AboutPage = () => {
  return (
    <div>
      <CommonBanner
        bannerImage={AboutBannerImage}
        title={`About YallaRun`}
        text={`Inspiring, connecting, and elevating runners across the UAE`}
      ></CommonBanner>
      ;
      <MissionVision />
      <WhatWeDo />
      <JoinSection />
    </div>
  );
};

export default AboutPage;
