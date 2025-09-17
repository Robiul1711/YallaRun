import React from "react";
import { Title20, Title48 } from "../common/Title";
import { SendIcon } from "../icons/CustomIcon";
import JoinImage from "@/assets/images/joinImage.png";



const JoinSection = () => {
  return (
    <div className=" section-padding-x section-padding-y w-full flex h-[600px]  ">
      <div className=" w-[55%] px-12 py-[80px] bg-primaryColor flex flex-col gap-10 rounded-tl-xl rounded-bl-xl">
        <div className=" flex flex-col gap-4">
          <Title48 className={`!text-white font-[800] !leading-[72px]`}>
            Join the UAE’s Largest Running Community Today!
          </Title48>

          <Title20 className={`!text-white !font-medium`}>
            Stay updated on the latest events, inspiring articles, coach tips,
            and exclusive offers delivered straight to your inbox.
          </Title20>
        </div>

        <div className=" max-w-[600px] flex items-center gap-3 ">
          <div className=" w-[90%] px-5 py-4 bg-white rounded-[8px]">
            <input
              type="email"
              placeholder="Enter your email address"
              className=" w-full outline-none border-none"
            />
          </div>
          <button className="  bg-white rounded-[8px] p-4 flex justify-center items-center duration-200 group">
            <span className=" group-hover:rotate-45 duration-200"><SendIcon/></span>
          </button>
        </div>
      </div>

      <div className=" w-[45%] rounded-tr-xl rounded-br-xl">
        <img src={JoinImage} className=" w-full h-full object-cover ounded-tr-xl rounded-br-xl" alt="joinImage" loading/>

      </div>
    </div>
  );
};

export default JoinSection;
