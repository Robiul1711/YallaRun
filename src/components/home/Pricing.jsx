import React from "react";
import { Title20, Title32 } from "../common/Title";
import { price } from "@/utils/Data";
import PriceCard from "../cards/PriceCard";

const Pricing = () => {
  return (
    <div className=" flex flex-col xlg:gap-16 md:gap-8 gap-3.5 section-padding-x section-padding-y">
      <div className="flex flex-col lg:gap-6 gap-2.5 max-w-[630px] mx-auto text-center justify-center items-center">
        <Title20 className={`text-secondaryColor font-semibold`}>
          Choose Your Plan – Run Your Way
        </Title20>
        <Title32 className={`text-customBlack font-semibold`}>
          Flexible monthly plans designed to fuel your running journey.
        </Title32>
      </div>

      <div className=" grid xmd:grid-cols-3 sm:grid-cols-2 xlg:gap-8 gap-3.5 lg:place-items-center section-padding-x">
        {price?.map((item, index) => (
          <PriceCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
