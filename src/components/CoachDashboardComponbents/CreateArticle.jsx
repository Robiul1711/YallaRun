import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import ReactDOMServer from "react-dom/server";
import Swal from "sweetalert2";
import { FaClockRotateLeft } from "react-icons/fa6";
const CreateArticle = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // Featured Image (single)
  const [featuredImage, setFeaturedImage] = useState(null);

  // Body Images (multiple)
  const [bodyImages, setBodyImages] = useState([]);

  const handleFeaturedImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFeaturedImage(URL.createObjectURL(file));
      setValue("featuredImage", file);
    }
  };

  const handleBodyImages = (e) => {
    const files = Array.from(e.target.files);
    const newPreviews = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setBodyImages((prev) => [...prev, ...newPreviews]);
    setValue("bodyImages", [...bodyImages.map((img) => img.file), ...files]);
  };

  const removeBodyImage = (index) => {
    const updated = bodyImages.filter((_, i) => i !== index);
    setBodyImages(updated);
    setValue(
      "bodyImages",
      updated.map((img) => img.file)
    );
  };

const onSubmit = (data) => {
  Swal.fire({
    title: "Submit for Admin Approval",
    text: "Your article will be reviewed by YallaRun’s editorial team before publishing.",
    iconHtml: ReactDOMServer.renderToStaticMarkup(
      <FaClockRotateLeft color="#F59E0B" size={50} />
    ),
    showCancelButton: true,
    confirmButtonText: "Submit for Review",
    cancelButtonText: "Cancel",
    customClass: {
      icon: "swal2-icon-no-border",
      confirmButton: "swal2-btn-rounded-full",
      cancelButton: "swal2-btn-rounded-full",
    },
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Submitted!",
        text: "Your article has been submitted for review.",
        iconHtml: ReactDOMServer.renderToStaticMarkup(
          <FaClockRotateLeft color="#F59E0B" size={50} />
        ),
        customClass: {
          icon: "swal2-icon-no-border",
          confirmButton: "swal2-btn-rounded-full",
        },
      });
      console.log("Form Data:", data);
    }
  });
};




  return (
    <>
    <div>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Share Your Expertise </h1>
      <p className="text-sm sm:text-base text-gray-600 mb-4">
       Submit your article draft. It will be reviewed by YallaRun's editorial team before publishing.
      </p>
    </div>
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" bg-white shadow-md rounded-xl p-6 md:p-8 space-y-6"
    >
      {/* Article Title */}
      <div>
        <label className="block text-gray-700 mb-2">Article Title</label>
        <input
          type="text"
          {...register("title", { required: "Title is required" })}
          placeholder="Enter Article Title"
          className="w-full border rounded-lg px-4 py-2 focus:ring focus:ring-primaryColor"
        />
        {errors.title && (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}
      </div>

      {/* Category */}
      <div>
        <label className="block text-gray-700 mb-2">Category</label>
        <select
          {...register("category", { required: "Category is required" })}
          className="w-full border rounded-lg px-4 py-2"
        >
          <option value="">Select Article Category</option>
          <option value="training">Training</option>
          <option value="nutrition">Nutrition</option>
          <option value="events">Events</option>
        </select>
        {errors.category && (
          <p className="text-red-500 text-sm">{errors.category.message}</p>
        )}
      </div>

      {/* Meta Title */}
      <div>
        <label className="block text-gray-700 mb-2">Meta Title</label>
        <input
          type="text"
          {...register("metaTitle")}
          placeholder="Enter Meta Title"
          className="w-full border rounded-lg px-4 py-2"
        />
      </div>

      {/* Meta Description */}
      <div>
        <label className="block text-gray-700 mb-2">Meta Description</label>
        <textarea
          {...register("metaDescription")}
          placeholder="Enter Meta Description"
          className="w-full border rounded-lg px-4 py-2"
        />
      </div>

      {/* Featured Image */}
      <div>
        <label className="block text-gray-700 mb-2">Featured Image</label>
        <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-gray-500">
          <input
            type="file"
            accept="image/*"
            onChange={handleFeaturedImage}
            className="hidden"
            id="featured-upload"
          />
          <label htmlFor="featured-upload" className="cursor-pointer text-center">
       <FaCloudUploadAlt className="mb-2 text-2xl text-center w-full"/>
            Drag and drop your cover image here <br />
            <span className="text-secondaryColor underline">Choose File</span>
          </label>
          {featuredImage && (
            <img
              src={featuredImage}
              alt="Featured Preview"
              className="mt-4 w-32 h-32 object-cover rounded-lg"
            />
          )}
        </div>
      </div>

      {/* Order No */}
      <div>
        <label className="block text-gray-700 mb-2">Order No</label>
        <input
          type="number"
          {...register("orderNo")}
          placeholder="Enter the body order no.."
          className="w-full border rounded-lg px-4 py-2"
        />
      </div>

      {/* Body Description */}
      <div>
        <label className="block text-gray-700 mb-2">Body Description</label>
        <textarea
          {...register("bodyDescription")}
          placeholder="Enter body description"
          className="w-full border rounded-lg px-4 py-2"
        />
      </div>

      {/* Body Images */}
      <div>
        <label className="block text-gray-700 mb-2">Body Images</label>
        <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-gray-500">
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleBodyImages}
            className="hidden"
            id="body-upload"
          />
          <label htmlFor="body-upload" className="cursor-pointer text-center">
               <FaCloudUploadAlt className="mb-2 text-2xl text-center w-full"/>
            Drag and drop your images here (Max 2) <br />
            <span className="text-secondaryColor underline ">Choose File</span>
          </label>
        </div>

        {/* Previews */}
        <div className="flex gap-4 mt-4 flex-wrap">
          {bodyImages.map((img, index) => (
            <div key={index} className="relative w-24 h-24">
              <img
                src={img.preview}
                alt="Preview"
                className="w-full h-full object-cover rounded-lg"
              />
              <button
                type="button"
                onClick={() => removeBodyImage(index)}
                className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full px-1"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Conclusion */}
      <div>
        <label className="block text-gray-700 mb-2">Conclusion</label>
        <textarea
          {...register("conclusion")}
          placeholder="Enter the article conclusion..."
          className="w-full border rounded-lg px-4 py-2"
        />
      </div>

      {/* Submit */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-10 py-2 bg-[#9FCC3B] text-black font-bold rounded-full hover:bg-primaryColor/90"
        >
          Submit
        </button>
      </div>
    </form>
    </>
  );
};

export default CreateArticle;
