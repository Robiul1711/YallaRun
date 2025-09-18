import React, { useState } from "react";
import MagazineSearchArea from "./MagazineSearchArea";
import { magazineData } from "@/utils/Data";
import MagazineCard from "../cards/MagazineCard";
import Pagination from "../common/Pagination";

const MagazineSection = () => {
  const [search, setSearch] = useState();
  const [page, setPage] = useState(1);
  return (
    <div className=" flex flex-col gap-12 section-padding-x section-padding-y">
      <MagazineSearchArea setSearch={setSearch} />

      <div className="grid grid-cols-4 gap-6">
        {magazineData?.map((item, index) => (
          <MagazineCard item={item} key={index} />
        ))}
      </div>
      <div className=" flex justify-center items-center w-full">
        <Pagination page={page} setPage={setPage} totalPage={10} />
      </div>
    </div>
  );
};

export default MagazineSection;
