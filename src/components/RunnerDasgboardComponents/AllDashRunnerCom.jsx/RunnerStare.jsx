import React from 'react';
import { HiOutlineCalendar, HiOutlineCalendarDays } from 'react-icons/hi2';
import { FiFileText } from "react-icons/fi";
import { FaUsers } from "react-icons/fa6";
const RunnerStare = () => {
  const stats = [
    {
      id: 1,
      title: 'Saved Articles',
      value: '12',
      icon: FiFileText,
      iconBg: 'bg-[#9FCC3B1A]',
    iconColor: 'text-[#9FCC3B]'
    },
    {
      id: 2,
      title: 'Connected Coaches',
      value: '02',
      icon: FaUsers,
     iconBg: 'bg-[#9FCC3B1A]',
      iconColor: 'text-[#9FCC3B]'
    },
    {
      id: 3,
      title: 'Upcoming Events',
      value: '02',
      icon: HiOutlineCalendar,
      iconBg: 'bg-[#9FCC3B1A]',
     iconColor: 'text-[#9FCC3B]'
    },
    {
      id: 4,
      title: 'Past Events',
      value: '10',
      icon: HiOutlineCalendarDays,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    }
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4 xl:gap-6">
        {stats.map((stat) => {
          const IconComponent = stat.icon;
          return (
            <div
              key={stat.id}
              className="bg-white rounded-lg  hover:shadow-lg p-4 sm:p-6  transition-shadow duration-200"
            >
              <div className="flex items-center gap-4 justify-between">
                <div className={`${stat.iconBg} ${stat.iconColor} p-1 sm:p-2 md:p-3 rounded-lg`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <p className="text-2xl  md:text-3xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base md:text-lg font-medium mb-2">
                    {stat.title}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RunnerStare;