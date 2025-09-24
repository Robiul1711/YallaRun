import { useState } from "react";
import { FiEye, FiTrash2, FiChevronDown } from "react-icons/fi";
import article from "@/assets/images/article1.png";
const EventParticipations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Status");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const events = [
    {
      id: 1,
      image: article,
      eventName: "Marathon Championship",
      eventType: "Running",
      location: "New York, USA",
      date: "Sep 25, 2025",
      role: "Participant",
      status: "completed",
    },
    {
      id: 2,
      image: article,
      eventName: "Nutrition Workshop",
      eventType: "Seminar",
      location: "London, UK",
      date: "Oct 5, 2025",
      role: "Speaker",
      status: "upcoming",
    },
    {
      id: 3,
      image: article,
      eventName: "Trail Running Meetup",
      eventType: "Community Event",
      location: "Berlin, Germany",
      date: "Nov 12, 2025",
      role: "Volunteer",
      status: "completed",
    },
    {
      id: 4,
      image: article,
      eventName: "Endurance Nutrition Expo",
      eventType: "Exhibition",
      location: "Tokyo, Japan",
      date: "Dec 1, 2025",
      role: "Organizer",
      status: "completed",
    },
  ];

  const categories = [
    "All Status",
    "Nutrition & Lifestyle",
    "Training",
    "Recovery",
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "upcoming":
        return "bg-green-500 text-white";
      case "completed":
        return "bg-blue-500 text-white";
     
    }
  };

const filteredEvents = events.filter(
  (event) =>
    event.eventName.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === "All Status" || event.status === selectedCategory)
);

  return (
    <div className="">
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl  sm:text-3xl font-bold text-gray-900 mb-2">
          Events Participation
        </h1>
        <p className="text-gray-600">See your upcoming and past event roles.</p>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4 mb-6">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search event by name or location....."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-2 md:px-4 py-2 md:py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 px-2 md:px-4 py-2 md:py-3 bg-white border border-gray-300 rounded-full hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[200px] justify-between"
          >
            <span>{selectedCategory}</span>
            <FiChevronDown
              className={`transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {isDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setIsDropdownOpen(false);
                  }}
                  className="w-full px-4 py-2 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Articles Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-2 md:px-6 md:py-4 text-left text-sm font-medium text-gray-700">
                  Image
                </th>
                <th className="px-4 py-2 md:px-6 md:py-4 text-left text-sm font-medium text-gray-700">
                  Event Name
                </th>
                <th className="px-4 py-2 md:px-6 md:py-4 text-left text-sm font-medium text-gray-700">
                  Event Type
                </th>
                <th className="px-4 py-2 md:px-6 md:py-4 text-left text-sm font-medium text-gray-700">
                  Location
                </th>
                <th className="px-4 py-2 md:px-6 md:py-4 text-left text-sm font-medium text-gray-700">
                  Date
                </th>
                <th className="px-4 py-2 md:px-6 md:py-4 text-left text-sm font-medium text-gray-700">
                  Role
                </th>
                <th className="px-4 py-2 md:px-6 md:py-4 text-left text-sm font-medium text-gray-700">
                  Status
                </th>
                <th className="px-4 py-2 md:px-6 md:py-4 text-left text-sm font-medium text-gray-700">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredEvents.map((event) => (
                <tr key={event.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 md:px-6 md:py-4">
                    <div className="w-12 h-12 rounded-lg overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.eventName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </td>
                  <td className="px-4 py-2 md:px-6 md:py-4 font-medium text-xs sm:text-sm md:text-base text-gray-900">
                    {event.eventName}
                  </td>
                  <td className="px-4 py-2 md:px-6 md:py-4 text-gray-600 text-xs sm:text-sm md:text-base">{event.eventType}</td>
                  <td className="px-4 py-2 md:px-6 md:py-4 text-gray-600 text-xs sm:text-sm md:text-base">{event.location}</td>
                  <td className="px-4 py-2 md:px-6 md:py-4 text-gray-600 text-xs sm:text-sm md:text-base">{event.date}</td>
                  <td className="px-4 py-2 md:px-6 md:py-4 text-gray-600 text-xs sm:text-sm md:text-base">{event.role}</td>
                  <td className="px-4 py-2 md:px-6 md:py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        event.status
                      )}`}
                    >
                      {event.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 md:px-6 md:py-4">
                    <div className="flex items-center gap-2">
                      {event.status === "Published" && (
                        <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                          <FiEye size={16} />
                        </button>
                      )}
                      <button className="p-2 text-red-400 hover:text-red-600 transition-colors">
                        <FiTrash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {events.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">
            No articles found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default EventParticipations;
