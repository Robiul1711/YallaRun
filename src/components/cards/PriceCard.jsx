import React from "react";
import { CiCircleCheck } from "react-icons/ci";

const PriceCard = ({ item }) => {
  return (
    <div className="lg:max-w-sm lg:mx-auto bg-white border border-gray-200 rounded-2xl xlg:p-6 p-3 flex flex-col justify-between shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Plan Name */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">
        {item?.plan_name}
      </h2>

      {/* Price Section */}
      <div className="mb-4">
        <div className="flex items-center gap-3">
          {item?.offer_price ? (
            <>
              <p className="text-3xl font-bold text-gray-900">${item?.offer_price}</p>
              <p className="line-through text-gray-400 text-lg">${item?.price}</p>
            </>
          ) : item?.price === 0 ? (
            <p className="text-3xl font-bold text-gray-900">Free</p>
          ) : (
            <p className="text-3xl font-bold text-gray-900">${item?.price}</p>
          )}
        </div>
        {item?.offer_limit && (
          <p className="text-sm text-green-600 mt-1">{item?.offer_limit}</p>
        )}
      </div>

      {/* Subtext */}
      <p className="text-gray-500 mb-6">{item?.sub_text}</p>

      {/* Advantages */}
      <ul className="space-y-3 mb-6">
        {item?.advantage.map((adv, index) => (
          <li key={index} className="flex items-center gap-2">
            <CiCircleCheck className="text-green-500" size={20} />
            <span className="text-gray-700 text-sm">{adv}</span>
          </li>
        ))}
      </ul>

      {/* Button */}
      <button className="w-full bg-primaryColor text-white font-semibold py-2 rounded-xl hover:bg-primaryColor/90 transition-colors">
        Choose Plan
      </button>
    </div>
  );
};

export default PriceCard;
