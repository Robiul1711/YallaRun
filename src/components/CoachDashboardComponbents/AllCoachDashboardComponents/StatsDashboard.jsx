import React from 'react';
import { HiOutlineDocumentText, HiOutlineClock, HiOutlineCalendar, HiOutlineCalendarDays } from 'react-icons/hi2';

const StatsDashboard = () => {
  const stats = [
    {
      id: 1,
      title: 'Published Article',
      value: '12',
      icon: HiOutlineDocumentText,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      id: 2,
      title: 'Pending Article',
      value: '02',
      icon: HiOutlineClock,
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600'
    },
    {
      id: 3,
      title: 'Upcoming Events',
      value: '02',
      icon: HiOutlineCalendar,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const IconComponent = stat.icon;
          return (
            <div
              key={stat.id}
              className="bg-white rounded-lg  hover:shadow-lg p-6  transition-shadow duration-200"
            >
              <div className="flex items-center gap-4 justify-between">
                <div className={`${stat.iconBg} ${stat.iconColor} p-3 rounded-lg`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <p className="text-3xl font-bold text-gray-900">
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

export default StatsDashboard;