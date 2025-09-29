import React from "react";
import { Title24, Title48 } from "./Title";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CommonBanner = ({ children, bannerImage, title, text, loading }) => {
  return (
    <div
      className="relative w-full section-padding-x xl:h-[800px] lg:h-[600px] h-[500px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(1,1,1,0.25) 0%, rgba(1,1,1,0.25) 44.71%, rgba(159,204,59,0.25) 75%, rgba(159,204,59,0.25) 100%)",
        }}
      />

      <div className="flex flex-col gap-4 xl:pt-[300px] pt-[200px] relative max-w-[768px]">
        {loading ? (
          <>
            <Skeleton
              height={24}
              width={160}
              baseColor="rgba(255,255,255,0.3)"
              highlightColor="rgba(255,255,255,0.5)"
              borderRadius={8}
            />
            <Skeleton
              height={48}
              width={300}
              baseColor="rgba(255,255,255,0.3)"
              highlightColor="rgba(255,255,255,0.5)"
              borderRadius={8}
            />
          </>
        ) : (
          <>
            <Title24 className="!font-medium text-white">{title}</Title24>
            <Title48 className="!text-white !font-[800] xlg:leading-[72px]">
              {text}
            </Title48>
          </>
        )}
        {children}
      </div>
    </div>
  );
};

export default CommonBanner;
