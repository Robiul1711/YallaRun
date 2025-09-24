import React, { useState } from "react";
import { Title32 } from "../common/Title";
import CoachCard from "../cards/CoachCard";
import { coachData } from "@/utils/Data";
import Pagination from "../common/Pagination";

const CoachSection = () => {
  const [page, setPage] = useState(1);
  return (
    <div className=" flex flex-col xlg:gap-16 md:gap-8 gap-3.5">
      <Title32 className={`max-w-[850px] !text-customBlack`}>
        Connect with professional running coaches to improve your performance
        and reach your goals.
      </Title32>

      <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xlg:gap-6 gap-2.5">
        {coachData?.map((item, index) => (
          <CoachCard item={item} key={index} />
        ))}
      </div>

      <div className=" flex justify-center items-center w-full">
        <Pagination page={page} setPage={setPage} totalPage={10} />
      </div>
    </div>
  );
};

export default CoachSection;
