import React from "react";
import MagazineBanner from "@/assets/images/magazineBanner.png";
import CommonBanner from "@/components/common/CommonBanner";
import MagazineSection from "@/components/magazine/MagazineSection";
const MagazinePage = () => {
  return (
    <div>
      <CommonBanner
        bannerImage={MagazineBanner}
        title={`YallaRun Magazine`}
        text={`Your source for running stories, training insights, and community highlights.`}
      ></CommonBanner>

      <MagazineSection />
    </div>
  );
};

export default MagazinePage;
