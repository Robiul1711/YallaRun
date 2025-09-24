import { Modal } from "antd";
import React, { useState } from "react";
import ConnectCoachModal from "./ConnectCoachModal";

const CoachInfo = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="section-padding-x  lg:pt-[200px] pt-[150px]  ">
      <div className=" mx-auto  rounded-lg  lg:p-8">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-600 mb-8">
          <span>Coaches</span>
          <span className="mx-2">›</span>
          <span>Coaches Details</span>
        </div>

        {/* Coach Profile Section */}
        <div className="flex sm:flex-row flex-col items-start gap-6 sm:mb-8 mb-4">
          {/* Profile Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face"
              alt="Ahmed Al Mansoori"
              className="w-24 h-24 rounded-full object-cover"
            />
          </div>

          {/* Profile Info */}
          <div className="flex-1">
            <div className="flex items-start lg:gap-10 gap-4 sm:flex-row flex-col mb-2">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900 mb-1">
                  Ahmed Al Mansoori
                </h1>
                <p className="text-gray-600 mb-2">Marathon Trainer</p>
                <div className="flex items-center text-gray-600 text-sm mb-3">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>4525 Saints Alley Plant City, FL 33564</span>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm text-gray-600">2.5 K Followers</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // ✅ prevent parent onClick / Link navigation
                      e.preventDefault(); // ✅ stop default anchor redirect if parent is <a>
                      setModalOpen(true); // open modal
                    }}
                    className="px-4 py-2 border border-secondaryColor text-secondaryColor rounded-[48px] text-sm hover:bg-blue-50 transition-colors"
                  >
                    Connect with Coach
                  </button>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-gradient-to-tr from-purple-400 via-pink-400 to-red-400 rounded-sm flex items-center justify-center mr-2">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">
                    www.instagram.com
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-black rounded-sm flex items-center justify-center mr-2">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">www.tiktok.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className=" max-w-[784px]">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            About Ahmed
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Ahmed is a certified running coach with 10+ years of experience in
            marathon training and trail running. He has helped hundreds of
            runners achieve their goals, from 5K beginners to ultra marathoners.
          </p>
        </div>
      </div>

      <Modal
        width={650}
        centered
        open={modalOpen}
        footer={null}
        // onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
      >
        <ConnectCoachModal />
      </Modal>
    </div>
  );
};

export default CoachInfo;
