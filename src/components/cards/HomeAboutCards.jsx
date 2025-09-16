import React from 'react'
import { Title18, Title24 } from '../common/Title'

const HomeAboutCards = ({ item }) => {
  const Icon = item.icon; // Get the icon component

  return (
    <div className='bg-primaryColor p-6 flex flex-col gap-6 rounded-[16px] items-start hover:bg-[#8cbf2c] transition-colors duration-300'>
      <span className='bg-white p-4 flex items-center justify-center rounded-[12px] shadow-sm group'>
        <Icon className='text-[#9fcc3b]  transition-colors duration-300' size={16} />
      </span>
      <div className='flex flex-col gap-4'>
        <Title24 className='!text-white !font-semibold'>{item?.title}</Title24>
        <Title18 className='!text-white !font-medium'>{item?.desc}</Title18>
      </div>
    </div>
  )
}

export default HomeAboutCards
