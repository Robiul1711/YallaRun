import React from "react";
import {
  Heart,
  MessageCircle,
  Share,
  Bookmark,
  ThumbsUp,
  Clock,
} from "lucide-react";
import { AiFillTags } from "react-icons/ai";
const ArticleDetailsSection = () => {
  return (
    <div className=" flex flex-col gap-6 mt-36 w-full px-8 max-w-[1258px] mx-auto section-padding-y">
      <header className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <span>Sports</span>
          <span>{`>`}</span>
          <span>Product Profile</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Best Running Shoes for the UAE Terrain
        </h1>

        {/* Hero Image */}
        <div className="relative mb-6">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Runners at starting line showing their running shoes"
            className="w-full h-64 md:h-80 object-cover rounded-lg"
          />
        </div>

        <div className=" flex items-center gap-2 mb-4">
          <span>
            <AiFillTags size={20} />
          </span>
          <p>Training & Tips</p>
        </div>
        <div className="flex items-center gap-10  mb-6">
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=40&q=80"
              alt="Author avatar"
              className="w-10 h-10 rounded-full"
            />
            <div className=" flex-1 flex items-center gap-3">
              <div>
                <div className="font-semibold text-gray-900">Sarah Miller</div>
                <div className="text-sm text-gray-600">20th august, 2023</div>
              </div>
              <button className="px-4 py-1 border-[1px] border-secondaryColor duration-200  text-secondaryColor  text-sm rounded-full hover:bg-secondaryColor hover:text-white ">
                Follow
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 text-gray-500">
            <div className="flex items-center gap-3">
              <div className=" flex items-center gap-2">
                <button className=" transition-colors">
                  <Clock size={18} />
                </button>
                <span className="text-sm">3 min read</span>
              </div>
              <div className=" flex items-center gap-2">
                <button className=" transition-colors">
                  <ThumbsUp size={18} />
                </button>
                <span className="text-sm">24</span>
              </div>
              <div className=" flex items-center gap-2">
                <button className="hover:text-blue-500 transition-colors">
                  <MessageCircle size={18} />
                </button>
                <span className="text-sm">8</span>
              </div>
              <button className="hover:text-yellow-500 transition-colors">
                <Bookmark size={18} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <article className="prose prose-lg max-w-none">
        {/* Introduction */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Meta Title - Best Running Shoes for the UAE | Comfort & Durability
            Guide
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Discover the best running shoes for UAE terrain, from desert sand to
            city pavements. Find durable and breathable footwear designed to
            handle the region's unique conditions.
          </p>
        </div>

        {/* Main Content Sections */}
        <div className="space-y-8">
          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Meta description
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Running in the UAE presents unique challenges due to the extreme
              heat, sand, and varying terrain. From the bustling pavements in
              the skyscrapers of Dubai, the filming heat of Abu Dharna, desert
              trails, and the challenging terrain of Sharjah. Most shoes aren't
              built to handle these conditions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The perfect running shoe should integrate the way you run, keeping
              your feet dry and comfortable no matter what weather. This means
              excellent air circulation for hot climates, including types of
              running shoes like Yeebethe to look for.
            </p>
          </section>

          <section className="my-8">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Runners on track at sunset"
                className="w-full h-48 object-cover rounded-lg"
              />
              <img
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Runners on road at sunset"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Popular Brands and Models
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Athletes across the UAE rely on global brands with a proven record
              of reliability. Models such as Nike Pegasus or the ASICS Gel
              series are perfect for pavements. They are designed with lasting
              materials for durability and proper cushioning.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Long-distance runners should go for Hoka Clifton shoes, which make
              activities like walking and running more comfortable. For the
              desert terrain, Salomon's rugged construction offers supportive
              midsoles for tough trails.
            </p>
          </section>

          <section className="my-12 text-center">
            <blockquote className="text-xl font-medium text-gray-900 mb-4">
              "Consistency beats intensity—run regularly, not just hard."
            </blockquote>
          </section>

           <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Meta description
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Running in the UAE presents unique challenges due to the extreme
              heat, sand, and varying terrain. From the bustling pavements in
              the skyscrapers of Dubai, the filming heat of Abu Dharna, desert
              trails, and the challenging terrain of Sharjah. Most shoes aren't
              built to handle these conditions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The perfect running shoe should integrate the way you run, keeping
              your feet dry and comfortable no matter what weather. This means
              excellent air circulation for hot climates, including types of
              running shoes like Yeebethe to look for.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
};

export default ArticleDetailsSection;
