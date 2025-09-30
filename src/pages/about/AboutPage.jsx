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
    queryKey: ["about-banner"],
    queryFn: async () => {
      const res = await axiosPublic.get("/about-banner");
      return res.data;
    },
  });

  console.log(BannerData?.data);
  return (
    <div>
      <CommonBanner
       loading ={isLoading}
        bannerImage={BannerData?.data?.image || AboutBannerImage}
        title={BannerData?.data?.title || `About YallaRun`}
        text={BannerData?.data?.sub_title || `Your source for running stories, training insights, and community highlights.`}
      ></CommonBanner>
     
      <MissionVision />
      <WhatWeDo />
      <JoinSection />
    </div>
  );
};

export default AboutPage;
