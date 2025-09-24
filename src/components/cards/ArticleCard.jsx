import React from "react";
import { Title14, Title16, Title20 } from "../common/Title";
import { AiFillTags } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BiLike } from "react-icons/bi";
import { LiaCommentSolid } from "react-icons/lia";
import { SavedIcon } from "../icons/CustomIcon";

const ArticleCard = ({ item }) => {
  return (
    <div className="relative group overflow-hidden rounded-[24px] transition-transform duration-500 ease-out hover:scale-[1.02]">
      {/* Background Image */}
      <img
        src={item?.image}
        alt={item?.title || "Article image"}
        className="w-full xlg:h-[620px] h-[400px] object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />

      {/* Overlay Box */}
      <div
        className="
          absolute bottom-6 left-1/2 -translate-x-1/2
          bg-[rgba(17,17,17,0.40)] backdrop-blur-xl
          rounded-[24px] xlg:p-5 p-2.5 flex flex-col xlg:gap-5 gap-2.5
          w-[90%] max-w-[900px]
          transition-all duration-300
          group-hover:shadow-lg
        "
      >
        {/* Title & Category */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <Title20 className="!text-white !font-semibold">
              {item?.title}
            </Title20>

            <div className="flex items-center gap-2">
              <AiFillTags size={20} color="white" />
              <Title16 className="!text-white !font-normal flex-1">
                {item?.category}
              </Title16>
            </div>
          </div>

          {/* Author Info */}
          <div className="flex items-center gap-3">
            <img
              src={item?.avatar}
              alt={item?.user_name || "Author avatar"}
              className="w-12 h-12 object-cover rounded-full"
            />
            <div className="flex flex-col">
              <Title20 className="!text-white !font-semibold">
                {item?.user_name}
              </Title20>
              <Title14 className="!text-white !font-normal">
                {item?.date}
              </Title14>
            </div>
          </div>
        </div>

        {/* Buttons and Stats */}
        <div className="flex gap-3 justify-center items-center w-full">
          {/* Read More Button */}
          <Link
            to={`/article/${item?.id || ""}`}
            className="
              xl:py-3 py-1.5 xl:px-6 px-3 whitespace-nowrap text-center text-white
              flex justify-center items-center rounded-[48px]
              border border-white bg-[rgba(255,255,255,0.15)]
              transition duration-200 ease-in-out
              hover:bg-white/20 hover:border-white/80
            "
          >
            Read More
          </Link>

          {/* Likes, Comments, Saved */}
          <div className="flex-1 flex gap-2">
            {[{ icon: BiLike, value: item?.likes }, { icon: LiaCommentSolid, value: item?.comments }, { icon: SavedIcon }].map(
              (btn, idx) => (
                <div
                  key={idx}
                  className="
                    flex items-center gap-2 xl:p-3 p-1.5 rounded-full border border-white
                    bg-[rgba(255,255,255,0.15)] justify-center
                    transition duration-200 ease-in-out
                    hover:bg-white/20 hover:border-white/80
                  "
                >
                  <btn.icon size={20} color="white" />
                  {btn.value !== undefined && (
                    <Title16 className="!text-white !font-normal">{btn.value}</Title16>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
