import React, { useState } from "react";
import EventFilter from "./EventFilter";
import { useForm } from "react-hook-form";
import { upcommingMerathon } from "@/utils/Data";
import ListCard from "../cards/ListCard";
import ReactPaginate from "react-paginate";
import Pagination from "../common/Pagination";
import { Title24, Title32 } from "../common/Title";

const EventSection = () => {
  const [filterEvent, setFilterEvent] = useState();
  const [page, setPage] = useState(1);
  return (
    <div className=" flex flex-col xlg:gap-12 gap-5 section-padding-x section-padding-y">
      <EventFilter setFilterEvent={setFilterEvent} />

      <div className=" flex flex-col xlg:gap-16 md:gap-8 gap-4">
        <Title32 className={`max-w-[850px] !text-customBlack`}>Explore expert tips, community stories, and inspiration to fuel your next run.</Title32>
        <div className=" grid md:grid-cols-2 lg:gap-6 gap-3">
          {upcommingMerathon?.map((item, index) => (
            <ListCard item={item} key={index} />
          ))}
        </div>
      </div>

      <div className=" flex justify-center items-center w-full">
        <Pagination page={page} setPage={setPage} totalPage={10} />
      </div>
    </div>
  );
};

export default EventSection;
