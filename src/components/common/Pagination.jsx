import React from 'react'
import ReactPaginate from 'react-paginate'
import { NextIcon, PrevIcon } from '../icons/CustomIcon'

const Pagination = ({page, setPage,totalPage}) => {
  return (
       <ReactPaginate
          breakLabel="..."
          nextLabel={<NextIcon />}
          previousLabel={<PrevIcon/>}
          pageCount={totalPage}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          onPageChange={(event) => setPage(event.selected + 1)}
          containerClassName="flex items-center md:gap-3 gap-1 flex-wrap"
          previousClassName="w-[42px] cursor-pointer h-[42px] bg-[rgba(34,48,62,0.06)] flex justify-center items-center text-black rounded-full"
          nextClassName="w-[42px] cursor-pointer h-[42px] bg-[rgba(34,48,62,0.06)] flex justify-center items-center text-black rounded-full"
          activeLinkClassName="font-[700] bg-primaryColor cursor-pointer rounded-full !text-white border-none"
          disabledClassName="bg-none cursor-not-allowed"
          breakClassName="md:px-4 px-2 py-2 text-sm font-medium text-gray-700"
          pageLinkClassName="w-[42px] cursor-pointer h-[42px] bg-[rgba(34,48,62,0.06)] flex justify-center items-center text-black rounded-full"
          forcePage={page - 1}
        />
  )
}

export default Pagination