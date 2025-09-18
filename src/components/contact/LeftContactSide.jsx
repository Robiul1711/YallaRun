import { ContactData } from "@/utils/Data";
import React from "react";
import { Title14, Title16 } from "../common/Title";

const LeftContactSide = () => {
  return (
    <div className=" w-[30%] flex flex-col gap-6 ">
      {ContactData?.map((item, index) => (
        <div
          key={index}
          className=" py-7 px-6  flex items-center gap-4 bg-[#E6EEEE] duration-300 group hover:bg-secondaryColor rounded-[16px]"
        >
          <div className=" w-12 h-12 rounded-full border-[1px]   border-secondaryColor group-hover:border-white aspect-square flex justify-center items-center">
            <span>{<item.icon size={20} className="text-black group-hover:text-white" />}</span>
          </div>
          <div className=" flex flex-col gap-2">
            <Title14 className={`!text-[#4D4D4D] group-hover:!text-white !font-normal`}>
              {item?.label}
            </Title14>
            <Title16 className={`!text-customBlack !font-medium group-hover:!text-white`}>
              {item?.text}
            </Title16>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeftContactSide;
