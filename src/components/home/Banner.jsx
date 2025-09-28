import React from "react";
import BannerImage from "@/assets/images/BannerImage.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Title24 } from "../common/Title";
import ArrowButton from "../common/ArrowButton";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Banner = () => {
  const axiosPublic = useAxiosPublic();

  const { data: BannerData, isLoading } = useQuery({
    queryKey: ["banner"],
    queryFn: async () => {
      const res = await axiosPublic.get("/home-banner");
      return res.data;
    },
  });

  return (
    <div className="relative w-full h-[550px] sm:h-[600px] md:h-[720px] xmd:h-[820px] lg:h-[900px] xl:h-[960px] overflow-hidden section-padding-x -mt-3">
      {/* Slider background */}
      <div className="absolute inset-0 z-0 w-full h-full">
        {isLoading ? (
          /* Skeleton for full banner height */
          <Skeleton height="100%" width="100%" baseColor="#f3f3f3"  />
        ) : (
          <Swiper
            pagination={{
              clickable: true,
              el: ".banner-pagination",
              type: "bullets",
            }}
            modules={[Pagination, Autoplay]}
            loop
            autoplay={{ delay: 15000 }}
            className="w-full h-full"
          >
            {BannerData?.data?.images?.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full">
                  <img
                    src={image?.file_path || BannerImage}
                    className="object-cover w-full h-full"
                    loading="eager"
                    alt={`Banner ${index + 1}`}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(1,1,1,0.25) 0%, rgba(1,1,1,0.25) 44.71%, rgba(159,204,59,0.25) 75%, rgba(159,204,59,0.25) 100%)",
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        <div className="banner-pagination absolute bottom-6 sm:bottom-8 md:bottom-10 left-0 right-0 z-20 flex justify-center gap-2" />
      </div>

      {/* Content overlay */}
      <div className="relative flex flex-col items-start gap-6 sm:gap-8 md:gap-10 pt-[140px] sm:pt-[180px] md:pt-[220px] lg:pt-[260px] xl:pt-[290px] max-w-[90%] sm:max-w-[640px] md:max-w-[720px] lg:max-w-[761px]">
        <div className="flex flex-col gap-3 sm:gap-4">
          {/* Subtitle */}
          <Title24 className="!text-white !font-medium text-sm sm:text-base">
            {isLoading ? <Skeleton width={120} /> : BannerData?.data?.sub_title}
          </Title24>

          {/* Title */}
          {isLoading ? (
            <Skeleton height={60} width="80%" />
          ) : (
            <h1 className="text-[28px] xs:text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] leading-[40px] xs:leading-[48px] sm:leading-[60px] md:leading-[70px] lg:leading-[80px] text-white font-extrabold">
              {BannerData?.data?.title}
              <span className="text-primaryColor">Run. Connect. Elevate.</span>
            </h1>
          )}

          {/* Description */}
          {isLoading ? (
            <Skeleton count={3} />
          ) : (
            <div
              className="text-white md:text-[20px] text-base"
              dangerouslySetInnerHTML={{
                __html: BannerData?.data?.description || "",
              }}
            />
          )}
        </div>

        {/* Button */}
        {isLoading ? (
          <Skeleton width={140} height={40} />
        ) : (
          <ArrowButton name="Get Started" path="#" />
        )}
      </div>
    </div>
  );
};

export default Banner;
