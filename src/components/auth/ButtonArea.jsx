import React from "react";

const ButtonArea = ({ step, setStep, methods }) => {
  const handleNext = async () => {
    const isValid = await methods.trigger();
    if (isValid && step < 4) {
      setStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    setStep((prev) => prev - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className=" mb-4">
      {step === 1 ? (
        <button
          type="button"
          onClick={handleNext}
          className=" w-full lg:px-4 px-2.5 lg:py-4 py-2.5 lg:rounded-[48px] rounded-xl bg-primaryColor flex justify-center items-center
        transition-all duration-300 ease-out
        hover:bg-primaryColor/90 hover:shadow-md
        active:scale-[0.98]
        disabled:opacity-60 disabled:cursor-not-allowed text-customBlack !font-medium"
        >
          Next
        </button>
      ) : (
        <div className=" w-full justify-between items-center gap-2 flex">
          <button
            type="button"
            onClick={handlePrev}
            className=" lg:px-8 px-4 lg:py-3 py-2.5 flex justify-center items-center font-medium lg:rounded-[48px] rounded-xl text-secondaryColor border-[1px] border-secondaryColor"
          >
            Back
          </button>
          {step === 4 && (
            <button
              type="submit" // Changed to type="submit" to trigger form submission
              className=" lg:px-8 px-4 lg:py-3 py-2.5 flex justify-center items-center font-medium lg:rounded-[48px] rounded-xl text-customBlack bg-primaryColor"
            >
              Submit for Review
            </button>
          )}
          {step < 4 && (
            <button
              type="button"
              onClick={handleNext}
              className=" lg:px-8 px-4 lg:py-3 py-2.5 flex justify-center items-center font-medium lg:rounded-[48px] rounded-xl text-customBlack bg-primaryColor"
            >
              Next
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ButtonArea;
