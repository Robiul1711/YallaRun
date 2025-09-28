import React from "react";
import { Title18, Title20, Title24, Title32 } from "../common/Title";
import { whatYouDo } from "@/utils/Data";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../common/Loader";
import ErrorComponent from "../common/ErrorComponent";

const WhatWeDo = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: magazineAllData,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["what-we-do"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/wedos/index`);
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

  return (
    <div className=" flex flex-col xlg:gap-16 md:gap-8 gap-3.5 section-padding-x section-padding-y pb-20 bg-[#F5FAEB]">
      <div className=" flex flex-col gap-6 max-w-[850px]">
        <Title20 className={`text-secondaryColor font-semibold`}>
          What We Do
        </Title20>
        <Title32 className={`text-customBlack font-semibold`}>
          Empowering every runner through content, coaching, events, and
          community.
        </Title32>
      </div>

      <div className=" grid md:grid-cols-3 sm:grid-cols-2 xlg:gap-8 gap-4">
        {magazineAllData?.data?.map((item, index) => (
          <div className="bg-white group  hover:bg-primaryColor lg:p-6 p-4 flex flex-col lg:gap-6 gap-2.5 rounded-[16px] items-start  transition-colors duration-300">
            <img
              src={item?.iconImage}
              alt={item?.title}
              className="w-16 h-16 rounded-xl"
            />

            <div className="flex flex-col gap-4">
              <Title24 className="!text-customBlack group-hover:!text-white !font-semibold">
                {item?.title}
              </Title24>
              <Title18 className="!text-customBlack group-hover:!text-white !font-medium">
                {item?.description}
              </Title18>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
