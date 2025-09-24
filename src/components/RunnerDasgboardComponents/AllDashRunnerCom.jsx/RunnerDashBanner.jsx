import React from "react";
import dasboardCoach from "@/assets/images/dasboardCoach.png";

const RunnerDashBanner = () => {
  return (
    <div
      className="rounded-2xl flex flex-col md:flex-row justify-between items-center  md:gap-10"
      style={{
        background: "linear-gradient(180deg, rgba(152,197,52,0.05) 0%, #9FCC3B 100%)",
      }}
    >
      {/* Text Section */}
      <div className="w-full md:w-2/3 space-y-4 text-center md:text-left p-8 md:p-12 ">
        <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold text-gray-900">
          Welcome Back, <span className="text-primaryColor">Runner!</span>
        </h1>
        <p className="text-gray-700 leading-relaxed text-sm md:text-base xl:text-2xl">
          A quick glance at your upcoming events, saved articles, and recent coach connections.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full h-full md:w-1/3 flex justify-end">
        <img
          src={dasboardCoach}
          alt="Coach Banner"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default RunnerDashBanner;
