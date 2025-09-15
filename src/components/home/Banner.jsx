import React from "react";
import BannerImage from "@/assets/images/BannerImage.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Title24 } from "../common/Title";
import ArrowButton from "../common/ArrowButton";

const Banner = () => {
  const BannerImages = [BannerImage, BannerImage, BannerImage];
  return (
    <div className="relative w-full h-[960px] overflow-hidden section-padding-x -mt-3">
      <div className="absolute inset-0 z-0 w-full h-full">
        <Swiper
          pagination={{
            clickable: true,
            el: ".banner-pagination",
            type: "bullets",
          }}
          modules={[Pagination, Autoplay]}
          loop={true}
          autoplay={{ delay: 15000, disableOnInteraction: false }}
          className="w-full h-full"
        >
          {BannerImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <img
                  src={image}
                  className="object-cover w-full h-full"
                  loading="eager"
                  alt={`Banner ${index + 1}`}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(180deg, rgba(1, 1, 1, 0.25) 0%, rgba(1, 1, 1, 0.25) 44.71%, rgba(159, 204, 59, 0.25) 75%, rgba(159, 204, 59, 0.25) 100%)`,
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom pagination container */}
        <div className="banner-pagination absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-2"></div>
      </div>
     
     <div className=" relative pt-[290px] flex flex-col items-start gap-10 max-w-[761px]">
      <div className=" flex flex-col gap-4">
        <Title24 className={`!text-white !font-medium`}>
          Run. Connect. Inspire. Every Step.
        </Title24>

        <h1 className=" text-[56px] text-white leading-[80px] font-[900]">
          The UAE’s Home for Runners <span className="text-primaryColor">Run. Connect. Elevate.</span>
        </h1>

         <Title24 className={`!text-white !font-medium`}>
   Discover events, connect with coaches, read inspiring stories, and get your personalized running experience.
        </Title24>

      </div>
      <ArrowButton name={`Get Started`} path={`#`} />


     </div>
    </div>
  );
};

export default Banner;
