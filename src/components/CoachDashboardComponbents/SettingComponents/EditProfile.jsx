import React from "react";
import { useForm } from "react-hook-form";

const EditProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" space-y-6"
    >
      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-800 border-b pb-3">
        Personal Info
      </h2>

      {/* Profile Image */}
      <div className="flex items-center space-x-4">
        <img
          src="https://via.placeholder.com/80"
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover border"
        />
      </div>

      {/* Two Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            {...register("fullName", { required: true })}
            placeholder="Enter your full name"
            className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          {errors.fullName && (
            <p className="text-xs text-red-500 mt-1">Full name is required</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            {...register("email", { required: true })}
            placeholder="Enter your email"
            type="email"
            className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            {...register("phone")}
            placeholder="(123) 456-7890"
            className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Date of Birth
          </label>
          <input
            type="date"
            {...register("dob")}
            className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Nationality */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nationality
          </label>
          <select
            {...register("nationality")}
            className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="UAE">UAE</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
        </div>

        {/* City of Residence */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            City of Residence
          </label>
          <input
            {...register("city")}
            placeholder="Dubai"
            className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Specialization */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Specialization
          </label>
          <select
            {...register("specialization")}
            className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="Fitness & Endurance">Fitness & Endurance</option>
            <option value="Nutrition">Nutrition</option>
            <option value="Yoga">Yoga</option>
          </select>
        </div>

        {/* Preferred Language */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Preferred Language(s)
          </label>
          <select
            {...register("language")}
            className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="English">English</option>
            <option value="Arabic">Arabic</option>
            <option value="French">French</option>
          </select>
        </div>
      </div>

      {/* Bio */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Bio</label>
        <textarea
          {...register("bio")}
          placeholder="Certified running coach..."
          rows={3}
          className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      {/* Social Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Instagram
          </label>
          <input
            {...register("instagram")}
            placeholder="https://www.instagram.com/username"
            className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">TikTok</label>
          <input
            {...register("tiktok")}
            placeholder="https://www.tiktok.com/@username"
            className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-6 py-2 bg-green-500 text-white rounded-full shadow hover:bg-green-600 transition"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default EditProfile;
