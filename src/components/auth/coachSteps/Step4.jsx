import React from "react";
import StepArea from "./StepArea";
import { useFormContext } from "react-hook-form";

const Step4 = () => {
  const { watch } = useFormContext();
  const data = watch();

  return (
    <StepArea name="Your profile will be reviewed by admin before approval">
      <div className="flex flex-col gap-6 ">
        {/* Profile Image */}
        {data.profile_image && (
          <div className="flex ">
            <img
              src={URL.createObjectURL(data.profile_image)}
              alt="Profile"
              className="w-[120px] h-[120px] rounded-full object-cover border border-gray-300"
            />
          </div>
        )}

        {/* Basic Info */}
        <div className="flex flex-col gap-2">
          <p>
            <strong>Name:</strong> {data.name}
          </p>
          <p>
            <strong>Email:</strong> {data.email}
          </p>
          <p>
            <strong>Phone:</strong> {data.phone}
          </p>
          <p>
            <strong>Date of Birth:</strong> {data.dob}
          </p>
          <p>
            <strong>City of Residence:</strong> {data.city_residence}
          </p>
          <p>
            <strong>Nationality:</strong> {data.nationality}
          </p>
          <p>
            <strong>Preferred Language:</strong> {data.preferred_language}
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col gap-2">
          <p>
            <strong>Instagram:</strong> {data.instagram_link}
          </p>
          <p>
            <strong>TikTok:</strong> {data.tiktok_link}
          </p>
        </div>

        {/* Specialization */}
        <div className="flex flex-col gap-2">
          <p>
            <strong>Specialization:</strong> {data.specialization}
          </p>
        </div>
      </div>
    </StepArea>
  );
};

export default Step4;
