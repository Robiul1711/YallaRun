import React, { useState } from "react";
import { Title16, Title24 } from "../common/Title";
import { IoLocationOutline } from "react-icons/io5";
import { MdDirectionsRun } from "react-icons/md";
import { BsCalendar2Event } from "react-icons/bs";
import { AiFillTags } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Button, Modal } from "antd";
import EventRegistration from "../events/EventRegistration";
const ListCard = ({ item }) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Link
        to={`#`}
        className="bg-[#E6EEEE] rounded-[32px] xlg:p-6 p-2.5 flex xlg:flex-row flex-col xlg:gap-6 gap-2.5 w-full group duration-200 hover:bg-secondaryColor"
      >
        <div className=" xlg:w-1/2 w-full h-[352px] rounded-xl duration-200 overflow-hidden">
          <img
            src={item?.image}
            className=" w-full h-full object-cover block rounded-xl group-hover:scale-105 duration-200"
          />
        </div>
        <div className="xlg:w-1/2 w-full flex flex-col gap-3 justify-between">
          <div className=" flex flex-col gap-4">
            <div className=" flex flex-col gap-2">
              <Title24
                className={`!text-customBlack !font-semibold group-hover:!text-white duration-200`}
              >
                {item?.title}
              </Title24>
              <Title16
                className={`!text-customBlack !font-normal group-hover:!text-white duration-200`}
              >
                {item?.desc}
              </Title16>
            </div>

            <div className=" flex flex-col gap-2">
              <div className=" flex items-center gap-2">
                <span>
                  <BsCalendar2Event
                    size={18}
                    className="group-hover:text-white"
                  />
                </span>
                <Title16
                  className={`!text-customBlack !font-normal flex-1 group-hover:!text-white`}
                >
                  {item?.time}
                </Title16>
              </div>
              <div className=" flex items-center gap-2">
                <span>
                  <IoLocationOutline
                    size={20}
                    className="group-hover:text-white"
                  />
                </span>
                <Title16
                  className={`!text-customBlack !font-normal flex-1 group-hover:!text-white`}
                >
                  {item?.location}
                </Title16>
              </div>
              <div className=" flex items-center gap-2">
                <span>
                  <MdDirectionsRun
                    size={20}
                    className="group-hover:text-white"
                  />
                </span>
                <Title16
                  className={`!text-customBlack !font-normal flex-1 group-hover:!text-white`}
                >
                  {item?.category}
                </Title16>
              </div>
              <div className=" flex items-center gap-2">
                <span>
                  <AiFillTags size={20} className="group-hover:text-white" />
                </span>
                <Title16
                  className={`!text-customBlack !font-normal flex-1 group-hover:!text-white`}
                >
                  {item?.cost !== `free` && `AED`} {item?.cost}
                </Title16>
              </div>
            </div>
          </div>

          <div
            onClick={(e) => {
              e.stopPropagation(); // ✅ prevent parent onClick / Link navigation
              e.preventDefault(); // ✅ stop default anchor redirect if parent is <a>
              setModalOpen(true); // open modal
            }}
            className=" bg-white h-[52px] rounded-[48px] text-center flex justify-center items-center"
          >
            <Title16
              className={`!text-customBlack !font-semibold group-hover:!text-secondaryColor `}
            >
              Join Now
            </Title16>
          </div>
        </div>
      </Link>

      <Modal
        width={800}
        centered
        open={modalOpen}
        footer={null}
        // onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
      >
        <EventRegistration />
      </Modal>
    </>
  );
};

export default ListCard;
