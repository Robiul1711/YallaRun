import React from "react";
import { Title24, Title48 } from "./Title";

const CommonBanner = ({ children, bannerImage ,title,text}) => {
  return (
    <div
      className="relative w-full section-padding-x h-[800px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bannerImage})` }} // if using Next.js image imports
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, rgba(1, 1, 1, 0.25) 0%, rgba(1, 1, 1, 0.25) 44.71%, rgba(159, 204, 59, 0.25) 75%, rgba(159, 204, 59, 0.25) 100%)`,
        }}
      />

     <div className=" flex flex-col gap-4 pt-[300px] relative max-w-[768px]">
             <Title24 className={ `!font-medium text-white`}>
                 {title}
             </Title24>
             <Title48 className={`!text-white !font-[800] leading-[72px]`}>
                 {text}
             </Title48>
     
         </div>
    </div>
  );
};

export default CommonBanner;
