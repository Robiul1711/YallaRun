import React from "react";

const ProgressBar = ({ step }) => {
  const totalSteps = 4;

  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex items-center w-full gap-2">
        {Array.from({ length: totalSteps }, (_, index) => {
          const isActive = index + 1 <= step;
          const isActiveCompleted = index + 1 < step;
          return (
            <div
              key={index}
              className={`h-4 rounded-[48px] flex-1 ${
                isActive
                  ? `${isActiveCompleted ? "bg-primaryColor" : "bg-[#B0C9CB]"}`
                  : "bg-[#E6EEEE]"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
