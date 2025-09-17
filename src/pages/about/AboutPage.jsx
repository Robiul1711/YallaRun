import AboutBanner from "@/components/about/AboutBanner";
import MissionVision from "@/components/about/MissionVision";
import WhatWeDo from "@/components/about/WhatWeDo";
import JoinSection from "@/components/home/JoinSection";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <AboutBanner />
      <MissionVision />
      <WhatWeDo />
      <JoinSection />
    </div>
  );
};

export default AboutPage;
