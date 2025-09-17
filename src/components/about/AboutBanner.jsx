import React from "react";
import CommonBanner from "../common/CommonBanner";
import AboutBannerImage from "@/assets/images/aboutBanner.png";
import { Title24, Title48 } from "../common/Title";
const AboutBanner = () => {
  return <CommonBanner bannerImage={AboutBannerImage}>
    <div className=" flex flex-col gap-4 pt-[300px] relative max-w-[768px]">
        <Title24 className={ `!font-medium text-white`}>
            About YallaRun
        </Title24>
        <Title48 className={`!text-white !font-[800] leading-[72px]`}>
            Inspiring, connecting, and elevating runners across the UAE
        </Title48>

    </div>
  </CommonBanner>;
};

export default AboutBanner;
