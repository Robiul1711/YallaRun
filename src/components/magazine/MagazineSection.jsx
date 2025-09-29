import React, { useState } from "react";
import MagazineSearchArea from "./MagazineSearchArea";
import { magazineData } from "@/utils/Data";
import MagazineCard from "../cards/MagazineCard";
import Pagination from "../common/Pagination";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import Loader from "../common/Loader";
import ErrorComponent from "../common/ErrorComponent";

const MagazineSection = () => {
  const [search, setSearch] = useState();
  const [page, setPage] = useState(1);
  const axiosPublic = useAxiosPublic();

  const {
    data: magazineAllData,
    isLoading,
    isError,
    refetch
  } = useQuery({
    queryKey: ["magazine", page, search],
    queryFn: async () => {
      const res = await axiosPublic.get(`/magazines/index?page=${page}`);
      return res.data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <ErrorComponent
          title="Failed to load magazines"
          message="Please check your connection or try again later."
          onRetry={() => refetch()}
        />
      </div>
    );
  }
  return (
    <div className=" flex flex-col lg:gap-12 gap-6 section-padding-x section-padding-y">
      <MagazineSearchArea setSearch={setSearch} />

      <div className="grid xlg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
        {magazineAllData?.data?.map((item, index) => (
          <MagazineCard item={item} key={index} />
        ))}
      </div>
      <div className=" flex justify-center items-center w-full">
        <Pagination
          page={page}
          setPage={setPage}
          totalPage={magazineAllData?.meta?.last_page}
        />
      </div>
    </div>
  );
};

export default MagazineSection;
