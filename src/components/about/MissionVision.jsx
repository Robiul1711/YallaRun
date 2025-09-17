import React, { useState } from "react";
import ImageVision from "@/assets/images/ImageVision.png";
import { RiFocus2Line } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { Title24, Title32 } from "../common/Title";

const MissionVision = () => {
  const [active, setActive] = useState("mission");

  const panels = [
    {
      key: "mission",
      title: "Our Mission",
      text: `YallaRun is a new running platform born in the UAE with a simple
      mission: to inspire, connect, and elevate runners of all levels by
      building the region’s most vibrant running community. We believe
      running is more than fitness—it’s a lifestyle, a social bond, and a
      gateway to better health. `,
    },
    {
      key: "vision",
      title: "Our Vision",
      text: `To become the Middle East’s leading hub for runners—uniting people
      of every age and ability and creating events, resources, and a culture
      that keeps the community inspired year-round. `,
    },
  ];

  return (
    <div className="section-padding-x section-padding-y w-full flex flex-col md:flex-row gap-10">
      {/* Left Image */}
      <div className="md:w-1/2 w-full rounded-[32px] overflow-hidden h-[680px]">
        <img
          src={ImageVision}
          alt="Vision"
          className="w-full h-full object-cover rounded-[32px]"
        />
      </div>

      {/* Right Panels */}
      <div className="md:w-1/2 w-full flex flex-col gap-6">
        {panels.map((panel) => {
          const isActive = active === panel.key;
          return (
            <div
              key={panel.key}
              onMouseEnter={() => setActive(panel.key)}
              onClick={() => setActive(panel.key)}
              className={`
                rounded-xl p-6 cursor-pointer flex flex-col gap-4
                transition-all duration-500 ease-in-out
                ${isActive ? "flex-grow bg-primaryColor" : "flex-none bg-[#E6EEEE]"}
              `}
            >
              {/* Icon + Title */}
              <div className="flex flex-col gap-4">
                <span
                  className={`w-16 h-16 flex justify-center items-center rounded-xl 
                    transition-colors duration-300 
                    ${isActive ? "bg-white" : "bg-secondaryColor"}`}
                >
                  <RiFocus2Line
                    size={24}
                    className={`${isActive ? "text-primaryColor" : "text-white"}`}
                  />
                </span>

                <div className="flex w-full items-center justify-between">
                  <Title24
                    className={`transition-colors duration-300 ${
                      isActive ? "!text-white" : "!text-secondaryColor"
                    }`}
                  >
                    {panel.title}
                  </Title24>
                  <BsArrowRight
                    size={24}
                    className={`transition-transform duration-300 ${
                      isActive ? "text-white rotate-45" : "text-secondaryColor"
                    }`}
                  />
                </div>
              </div>

              {/* Expandable text */}
              <div
                className={`overflow-hidden  duration-500 ease-in-out ${
                  isActive ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <Title32
                  className={`mt-4 transition-colors duration-300 ${
                    isActive ? "!text-white" : "!text-gray-700"
                  }`}
                >
                  {panel.text}
                </Title32>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MissionVision;
