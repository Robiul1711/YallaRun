import React from "react";
import { AlertCircle } from "lucide-react"; // lightweight icon

function ErrorComponent({
  title = "Something went wrong",
  message = "An unexpected error occurred. Please try again.",
  onRetry, // optional callback for a retry button
}) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-6 text-center">
      <AlertCircle className="w-12 h-12 text-red-500 mb-3" />
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      <p className="mt-1 text-sm text-gray-600 max-w-md">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-4 px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition-colors"
        >
          Retry
        </button>
      )}
    </div>
  );
}

export default ErrorComponent;
