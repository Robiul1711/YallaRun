import React from "react";
import { Title16, Title24 } from "../common/Title";
import { IoLocationOutline } from "react-icons/io5";
import { MdDirectionsRun } from "react-icons/md";
import { BsCalendar2Event } from "react-icons/bs";
import { AiFillTags } from "react-icons/ai";
import { Link } from "react-router-dom";
const ListCard = ({ item }) => {
  return (
    <Link to={`#`} className="bg-[#E6EEEE] rounded-[32px] p-6 flex gap-6 w-full group duration-200 hover:bg-secondaryColor">
      <div className=" w-1/2 H-[352PX] rounded-xl duration-200 overflow-hidden">
        <img src={item?.image} className=" w-full h-auto block rounded-xl group-hover:scale-105 duration-200" />
      </div>
      <div className="w-1/2 flex flex-col gap-3 justify-between">
      <div className=" flex flex-col gap-4">
        <div className=" flex flex-col gap-2">
            <Title24 className={`!text-customBlack !font-semibold group-hover:!text-white duration-200`}>
              {item?.title}
            </Title24>
            <Title16 className={`!text-customBlack !font-normal group-hover:!text-white duration-200`}>
                {item?.desc}
            </Title16>

        </div>

        <div className=" flex flex-col gap-2">
            <div className=" flex items-center gap-2">
                <span><BsCalendar2Event size={18} className="group-hover:text-white"/></span>
                <Title16 className={`!text-customBlack !font-normal flex-1 group-hover:!text-white`}>
                    {item?.time}
                </Title16>

            </div>
            <div className=" flex items-center gap-2">
                <span><IoLocationOutline size={20} className="group-hover:text-white"/></span>
                <Title16 className={`!text-customBlack !font-normal flex-1 group-hover:!text-white`}>
                    {item?.location}
                </Title16>

            </div>
            <div className=" flex items-center gap-2">
                <span><MdDirectionsRun size={20} className="group-hover:text-white"/></span>
                <Title16 className={`!text-customBlack !font-normal flex-1 group-hover:!text-white`}>
                    {item?.category}
                </Title16>

            </div>
            <div className=" flex items-center gap-2">
                <span><AiFillTags size={20} className="group-hover:text-white"/></span>
                <Title16 className={`!text-customBlack !font-normal flex-1 group-hover:!text-white`}>
                   {item?.cost!==`free` && `AED`} {item?.cost}
                </Title16>

            </div>

        </div>


      </div>

      <Link to={`#`} className=" bg-white h-[52px] rounded-[48px] text-center flex justify-center items-center">
        <Title16 className={`!text-customBlack !font-semibold group-hover:!text-secondaryColor `}>
            Join Now
        </Title16>
      
      </Link>



      </div>
    </Link>
  );
};

export default ListCard;
