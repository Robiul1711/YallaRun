import React, { useState } from "react";
import { Title32 } from "../common/Title";
import CoachCard from "../cards/CoachCard";
import { coachData } from "@/utils/Data";
import Pagination from "../common/Pagination";

const CoachSection = () => {
  const [page, setPage] = useState(1);
  return (
    <div className=" flex flex-col gap-16">
      <Title32 className={`max-w-[850px] !text-customBlack`}>
        Connect with professional running coaches to improve your performance
        and reach your goals.
      </Title32>

      <div className=" grid grid-cols-4 gap-6">
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
