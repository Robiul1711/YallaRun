import React, { useState } from "react";
import ImageVision from "@/assets/images/ImageVision.png";
import { RiFocus2Line } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { Title24, Title32 } from "../common/Title";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../common/Loader";
import ErrorComponent from "../common/ErrorComponent";

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

  const axiosPublic = useAxiosPublic();

  const { data, isLoading,isError,refetch } = useQuery({
    queryKey: ["about-mission-vision"],
    queryFn: async () => {
      const res = await axiosPublic.get("/about-hero");
      return res.data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <ErrorComponent
          title="Failed to load magazines"
          message="Please check your connection or try again later."
          onRetry={() => refetch()}
        />
      </div>
    );
  }

  console.log(data?.data);

  

  return (
    <div className="section-padding-x section-padding-y w-full flex flex-col md:flex-row xlg:gap-10 gap-4">
      {/* Left Image */}
      <div className="md:w-1/2 w-full rounded-[32px] overflow-hidden md:h-[680px] h-[400px]">
        <img
          src={data?.data[0]?.image}
          alt="Vision"
          className="w-full h-full object-cover rounded-[32px]"
        />
      </div>

      {/* Right Panels */}
      <div className="md:w-1/2 w-full flex flex-col lg:gap-6 gap-3">
        {data?.data?.map((panel,index) => {
          const isActive = active === index;
          return (
            <div
              key={index}
              onMouseEnter={() => setActive(index)}
              onClick={() => setActive(index)}
              className={`
                rounded-xl md:p-6 p-4 cursor-pointer flex flex-col gap-4
                transition-all duration-500 ease-in-out
                ${
                  isActive
                    ? "flex-grow bg-primaryColor"
                    : "flex-none bg-[#E6EEEE]"
                }
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
                    className={`${
                      isActive ? "text-primaryColor" : "text-white"
                    }`}
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
                  className={`prose prose-invert max-w-none transition-colors duration-300 ${
                    isActive ? "!text-white" : "!text-gray-700"
                  }`}
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: panel.description || "",
                    }}
                  />
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
