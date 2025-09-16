import React from "react";
import AboutImage from "@/assets/images/aboutHome.png";
import RunnerIcon from "@/assets/images/runnerIcon.png";
import { Title20, Title32 } from "../common/Title";
import { aboutHomeData } from "@/utils/Data";
import HomeAboutCards from "../cards/HomeAboutCards";

const About = () => {
  return (
    <div className=" section-padding-x section-padding-y w-full flex gap-8">
      <div className=" w-[45%] ">
        <img src={AboutImage} className=" w-full h-full object-cover" />
      </div>
      <div className="  w-[55%] flex flex-col gap-8">
        <div className=" flex items-center gap-2">
          <img src={RunnerIcon} className=" w-6 h-6 object-cover" />
          <Title20 className={`!text-secondaryColor !font-semibold`}>
            About Us
          </Title20>
        </div>

        <Title32 className={`!text-customBlack !font-medium`}>
          <p>
            At YallaRun, we inspire, connect, and elevate runners of all levels.{" "}
            <span className="!text-blackGray">
              Together with our coaches, members, and partners, we are shaping
              the future of running in the UAE and beyond.
            </span>
          </p>
        </Title32>

        <div className=" grid grid-cols-2 gap-6">
          {aboutHomeData?.map((item, index) => (
            <HomeAboutCards item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
