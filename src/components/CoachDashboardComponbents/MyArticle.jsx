import { useState } from 'react';
import { FiEye, FiTrash2, FiChevronDown } from 'react-icons/fi';
import article from "@/assets/images/article1.png";
const MyArticle = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const articles = [
    {
      id: 1,
      title: 'Advanced Marathon Training Techniques',
      date: 'Sep 5, 2025',
      likes: 20,
      comments: 20,
      category: 'Nutrition & Lifestyle',
      status: 'Published',
      image: article
    },
    {
      id: 2,
      title: 'Mental Preparation for Race Day',
      date: 'Sep 5, 2025',
      likes: 20,
      comments: 20,
      category: 'Nutrition & Lifestyle',
      status: 'Pending',
      image: article
    },
    {
      id: 3,
      title: 'Recovery Techniques After Long Runs',
      date: 'Sep 5, 2025',
      likes: 20,
      comments: 20,
      category: 'Nutrition & Lifestyle',
      status: 'Published',
      image: article
    },
    {
      id: 4,
      title: 'Nutrition Guide for Endurance Athletes',
      date: 'Sep 5, 2025',
      likes: 20,
      comments: 20,
      category: 'Nutrition & Lifestyle',
      status: 'Rejected',
      image:article
    },
    {
      id: 5,
      title: 'Recovery Techniques After Long Runs',
      date: 'Sep 5, 2025',
      likes: 20,
      comments: 20,
      category: 'Nutrition & Lifestyle',
      status: 'Published',
      image: article
    }
  ];

  const categories = ['All Categories', 'Nutrition & Lifestyle', 'Training', 'Recovery'];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'published':
        return 'bg-green-500 text-white';
      case 'pending':
        return 'bg-orange-400 text-white';
      case 'rejected':
        return 'bg-red-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'All Categories' || article.category === selectedCategory)
  );

  return (
    <div className="">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h1 className=" text-2xl sm:text-3xl font-bold text-gray-900 mb-2">My Articles</h1>
        <p className="text-gray-600">Manage your drafts and published work.</p>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4 mb-6">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search by article title or categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-2 sm:px-4 py-2 md:py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 px-2 sm:px-4 py-2 md:py-3 bg-white border border-gray-300 rounded-full hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[200px] justify-between"
          >
            <span>{selectedCategory}</span>
            <FiChevronDown className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
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
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Image</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Title</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Date</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Like</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Comment</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Category</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Status</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredArticles.map((article) => (
                <tr key={article.id} className="hover:bg-gray-50">
                  <td className="px-4 md:px-6 py-2 md:py-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg flex items-center justify-center">
             <img src={article.image} alt="" />
                    </div>
                  </td>
                  <td className="px-4 md:px-6 py-2 md:py-4">
                    <div className="font-medium text-xs sm:text-sm md:text-base text-gray-900">{article.title}</div>
                  </td>
                  <td className="px-4 md:px-6 py-2 md:py-4">
                    <span className="text-gray-600 text-xs sm:text-sm md:text-base">{article.date}</span>
                  </td>
                  <td className="px-4 md:px-6 py-2 md:py-4">
                    <span className="text-gray-600 text-xs sm:text-sm md:text-base">{article.likes}</span>
                  </td>
                  <td className="px-4 md:px-6 py-2 md:py-4">
                    <span className="text-gray-600 text-xs sm:text-sm md:text-base">{article.comments}</span>
                  </td>
                  <td className="px-4 md:px-6 py-2 md:py-4">
                    <span className="text-gray-600 text-xs sm:text-sm md:text-base">{article.category}</span>
                  </td>
                  <td className="px-4 md:px-6 py-2 md:py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(article.status)}`}>
                      {article.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {article.status === 'Published' && (
                        <button className="p-2 text-gray-400  hover:text-gray-600 transition-colors">
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

      {filteredArticles.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No articles found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default MyArticle;