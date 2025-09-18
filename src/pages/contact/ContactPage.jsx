import CommonBanner from "@/components/common/CommonBanner";
import React from "react";
import ContactBanner from "@/assets/images/contactBanner.png";
import LeftContactSide from "@/components/contact/LeftContactSide";
import RightContactSide from "@/components/contact/RightContactSide";

const ContactPage = () => {
  return (
    <div>
      <CommonBanner
        bannerImage={ContactBanner}
        title={`Get in Touch with YallaRun`}
        text={`We’d love to hear from you whether you’re a runner, coach, or brand partner.`}
      ></CommonBanner>

      <div className=" w-full flex gap-10 section-padding-x section-padding-y">
        <LeftContactSide />
        <RightContactSide />
      </div>
    </div>
  );
};

export default ContactPage;
