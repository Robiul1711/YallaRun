import React from "react";
import { Title16, Title20 } from "../common/Title";
import { Link } from "react-router-dom";

const MagazineCard = ({ item }) => {
  return (
    <div className=" border-[1px] border-[#D9E5E6] rounded-[16px]">
      <div className=" lg:h-[320px] h-[250px]">
        <img
          src={item?.image}
          alt={item?.title}
          className=" w-full h-full object-cover"
        />
      </div>
      <div className=" lg:p-4 p-2 flex flex-col gap-2">
        <div className=" flex flex-col gap-1">
          <Title20 className={`!text-customBlack !font-medium`}>
            {item?.title}
          </Title20>

          <Title16 className={`text-[#303030] font-normal`}>
            {item?.created_at}
          </Title16>
        </div>

        <Link
          to={`/magazine/${item?.id}`}
          className="lg:px-6 px-4 lg:py-[14px] py-[6px] bg-primaryColor text-white flex justify-center items-center rounded-full 
             border border-primaryColor transition-all duration-200 
             hover:bg-white hover:text-primaryColor hover:shadow-md"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default MagazineCard;
