import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

function Loader({ size = 50, color = "#4F46E5", label }) {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen p-4">
      <ClipLoader size={size} color={color} />
      {label && (
        <span className="mt-3 text-sm text-gray-600 font-medium">{label}</span>
      )}
    </div>
  );
}

export default Loader;
