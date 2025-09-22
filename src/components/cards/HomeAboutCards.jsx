import React from 'react'
import { Title18, Title24 } from '../common/Title'

const HomeAboutCards = ({ item }) => {
  const Icon = item.icon; // Get the icon component

  return (
    <div className='bg-primaryColor xlg:p-6 p-3.5 flex flex-col xlg:gap-6 gap-3 rounded-[16px] items-start hover:bg-[#8cbf2c] transition-colors duration-300'>
      <span className='bg-white xlg:p-4 p-2 flex items-center justify-center rounded-[12px] shadow-sm group'>
        <Icon className='text-[#9fcc3b]  transition-colors duration-300' size={16} />
      </span>
      <div className='flex flex-col lg:gap-4 gap-2.5'>
        <Title24 className='!text-white !font-semibold'>{item?.title}</Title24>
        <Title18 className='!text-white !font-medium'>{item?.desc}</Title18>
      </div>
    </div>
  )
}

export default HomeAboutCards
