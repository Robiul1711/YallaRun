import MissionVision from "@/components/about/MissionVision";
import WhatWeDo from "@/components/about/WhatWeDo";
import JoinSection from "@/components/home/JoinSection";
import React from "react";
import AboutBannerImage from "@/assets/images/aboutBanner.png";
import CommonBanner from "@/components/common/CommonBanner";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "@/hooks/useAxiosPublic";

const AboutPage = () => {
  const axiosPublic = useAxiosPublic();
  const { data: BannerData, isLoading } = useQuery({
    queryKey: ["banner"],
    queryFn: async () => {
      const res = await axiosPublic.get("/home-banner");
      return res.data;
    },
  });
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
