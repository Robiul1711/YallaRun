import React from 'react'
import { Title20, Title32 } from '../common/Title'
import { price } from '@/utils/Data'
import PriceCard from '../cards/PriceCard'

const Pricing = () => {
  return (
    <div className=' flex flex-col gap-16 section-padding-x section-padding-y'>
        <div className='flex flex-col gap-6 max-w-[630px] mx-auto text-center justify-center items-center'>
            <Title20 className={`text-secondaryColor font-semibold`}>
                Choose Your Plan – Run Your Way
            </Title20>
            <Title32 className={`text-customBlack font-semibold`}>
                Flexible monthly plans designed to fuel your running journey.
            </Title32>


        </div>

        <div className=' grid grid-cols-3 gap-8 place-items-center section-padding-x'>
            {
                price?.map((item,index)=>(
                    <PriceCard item={item} key={index} />
                ))
            }

        </div>

    </div>
  )
}

export default Pricing