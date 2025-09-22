import React from 'react'
import PriceCard from '../cards/PriceCard'
import { price } from '@/utils/Data'

const Subscription = () => {
  return (
    <div>
     
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">My Subscription</h1>
        <p className="text-gray-600 text-sm">
          View your current plan and explore other options to upgrade or renew.
        </p>
      </div>

      {/* Subscription Card */}
      <div className="bg-white rounded-lg border border-secondaryColor p-6 relative">
        {/* Current Plan Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondaryColor text-white">
            Current Plan
          </span>
        </div>

        {/* Plan Content */}
        <div className="pt-8">
          <h2 className="text-xl font-semibold text-primaryColor mb-2">Standard Plan</h2>
          <div className="text-gray-900 text-lg font-medium mb-4">$24.99/month</div>
          
          {/* Plan Details */}
          <div className="flex items-center text-sm text-gray-600 space-x-6">
            <div className="flex items-center">
              <span className="font-medium">Start Date:</span>
              <span className="ml-1">5/22/2025</span>
            </div>
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <div className="flex items-center">
              <span className="font-medium">End Date:</span>
              <span className="ml-1">5/22/2025</span>
            </div>
          </div>
        </div>
      </div>
 
       <div className=' grid grid-cols-3 gap-8 place-items-center section-padding-x mt-10'>
            {
                price?.map((item,index)=>(
                    <PriceCard item={item} key={index} />
                ))
            }

        </div>
    </div>
  )
}

export default Subscription