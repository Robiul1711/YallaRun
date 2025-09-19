import { allComments } from "@/utils/Data";
import React, { useState } from "react";

const ArticleComments = () => {
  // ✅ Array of comments

  // show first 2, load more on click
  const [visible, setVisible] = useState(2);

  return (
    <div className=" max-w-[1258px] mx-auto px-4 py-6">
      <h3 className="text-lg font-semibold mb-4">
        {allComments.length} Comments
      </h3>

      <div className="space-y-6">
        {allComments.slice(0, visible).map((comment) => (
          <div key={comment.id} className="flex items-start space-x-3">
            <img
              src={comment.avatar}
              alt={comment.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <div className="flex items-center space-x-2">
                <p className="font-medium">{comment.name}</p>
                <span className="text-sm text-gray-500">{comment.date}</span>
              </div>
              <p className="mt-1 text-gray-700 leading-relaxed">
                {comment.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {visible < allComments.length && (
        <div className="mt-6">
          <button
            onClick={() => setVisible((v) => v + 1)}
            className="px-5 py-2 bg-emerald-700 text-white rounded-full hover:bg-emerald-800 transition-colors"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default ArticleComments;
