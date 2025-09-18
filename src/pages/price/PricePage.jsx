import CommonBanner from "@/components/common/CommonBanner";
import React from "react";
import PriceBanner from "@/assets/images/priceBanner.png";
import { Title32 } from "@/components/common/Title";
import Pricing from "@/components/home/Pricing";

const PricePage = () => {
  return (
    <div>
      <CommonBanner
        bannerImage={PriceBanner}
        text={`Flexible options to match your running journey. `}
        title={`Choose Your Plan`}
      ></CommonBanner>

      <div className=" flex flex-col   ">
       
        <Pricing/>
      </div>
    </div>
  );
};

export default PricePage;
