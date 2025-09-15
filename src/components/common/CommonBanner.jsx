import React from "react";

const CommonBanner = ({ children, bannerImage }) => {
  return (
    <div
      className="relative w-full h-[800px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bannerImage})` }} // if using Next.js image imports
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, rgba(1, 1, 1, 0.25) 0%, rgba(1, 1, 1, 0.25) 44.71%, rgba(159, 204, 59, 0.25) 75%, rgba(159, 204, 59, 0.25) 100%)`,
        }}
      />

      {children}
    </div>
  );
};

export default CommonBanner;
