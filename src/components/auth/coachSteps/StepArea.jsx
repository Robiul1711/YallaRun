import { Title24 } from "@/components/common/Title";
import React from "react";

const StepArea = ({ children, className, name }) => {
  return (
    <div className={`${className} flex flex-col lg:gap-8 gap-4`}>
      <Title24 className={`!text-customBlack !font-medium`}>{name}</Title24>

      {children}
    </div>
  );
};

export default StepArea;
