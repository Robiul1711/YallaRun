import React from "react";
import { Title16, Title18, Title24 } from "../common/Title";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const CoachCard = ({ item }) => {
  return (
    <Link
    to={`/coach/${item?.id}`}
      className="
        group relative lg:h-[450px] h-[350px] w-full rounded-[24px]
        overflow-hidden cursor-pointer
        transition-transform duration-500 ease-out
        hover:scale-[1.03]
      "
    >
      {/* Background image with smooth zoom on hover */}
      <img
        src={item?.image}
        alt={item?.name || "Coach"}
        className="
          w-full h-full object-fill rounded-[24px]
          transition-transform duration-500 ease-out
          group-hover:scale-105
        "
      />

      {/* Gradient overlay */}
      < div
        className="
          absolute inset-0
          bg-gradient-to-b from-white/0 via-white/0 to-[#005258]
          opacity-90
          pointer-events-none
        "
        style={{
          background:
            "var(--Linear-5, linear-gradient(180deg, rgba(255, 255, 255, 0) 37.11%, #005258 100%))",
        }}
      />

      {/* Text content */}
      <div className="absolute bottom-7 px-5 flex flex-col gap-1">
        <Title24 className="!text-white !font-semibold">
          {item?.name}
        </Title24>

        <Title18 className="!text-white !font-normal">
          {item?.category}
        </Title18>

        <div className="flex items-center gap-2">
          <IoLocationOutline size={20} color="white" />
          <Title16 className="!text-white !font-normal">
            {item?.location}
          </Title16>
        </div>
      </div>
    </Link>
  );
};

export default CoachCard;
