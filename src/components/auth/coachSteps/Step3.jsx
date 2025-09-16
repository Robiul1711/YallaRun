import React, { useState, useEffect } from "react";
import StepArea from "./StepArea";
import { GallaryIcon } from "@/components/icons/CustomIcon";
import { Title20 } from "@/components/common/Title";
import { useFormContext } from "react-hook-form";
import CommonInputWrapper from "@/components/common/CommonInputWrapper";
import { X } from "lucide-react";

const Step3 = () => {
  const {
    register,
    setValue,
    formState: { errors },
    trigger,
    watch,
  } = useFormContext();

  // Watch the stored file from react-hook-form so it persists across steps
  const storedFile = watch("profile_image");
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (storedFile instanceof File) {
      const url = URL.createObjectURL(storedFile);
      setPreview(url);
      return () => URL.revokeObjectURL(url);
    } else {
      setPreview(null);
    }
  }, [storedFile]);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("profile_image", file, { shouldValidate: true });
      trigger("profile_image");
    }
  };

  const handleRemoveImage = () => {
    setValue("profile_image", null, { shouldValidate: true });
  };



  return (
    <StepArea name="Upload your photo and secure your account.">
      <div className="flex flex-col gap-8">
        {/* Upload Photo */}
        <div className="flex flex-col gap-3">
          <Title20 className="!text-customBlack !font-normal">
            Upload Photo
          </Title20>

          {preview ? (
            <div className="relative w-[112px] h-[112px]">
              <img
                src={preview}
                alt="preview"
                className="w-[112px] h-[112px] rounded-full object-cover border border-[#303030]"
              />
              <button
                type="button"
                onClick={handleRemoveImage}
                className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow hover:bg-gray-100"
              >
                <X className="w-4 h-4 text-gray-700" />
              </button>
            </div>
          ) : (
            <label
              htmlFor="upload"
              className="w-[112px] h-[112px] cursor-pointer rounded-full border border-[#303030] flex justify-center items-center"
            >
              <GallaryIcon />
            </label>
          )}

          <input
            type="file"
            id="upload"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />

          {/* Hidden input for react-hook-form validation */}
          <input
            type="hidden"
            {...register("profile_image", { required: "Image is required" })}
          />
          {errors.profile_image && (
            <p className="text-red-500 text-sm">
              {errors.profile_image.message}
            </p>
          )}
        </div>

        {/* Password Fields */}
        <div className="flex flex-col gap-6">
          <CommonInputWrapper
            type="password"
            label="Password"
            register_as="password"
            register={register}
            placeholder="Enter your password"
            errors={errors}
            validationRules={{
              required: "Password is required",
            }}
          />
          <CommonInputWrapper
            type="password"
            label="Confirm Password"
            register_as="password_confirmation"
            register={register}
            placeholder="Enter your password"
            errors={errors}
            validationRules={{
              required: "Confirm Password is required",
              validate: (value) =>
                value === watch("password") || "Passwords must match",
            }}
          />
        </div>
      </div>
    </StepArea>
  );
};

export default Step3;
