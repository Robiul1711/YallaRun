import React, { useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Title32, Title40 } from "@/components/common/Title";

const MagazineDetails = () => {
  const flipBook = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  const images = [
    "https://picsum.photos/id/1015/300/500",
    "https://picsum.photos/id/1016/300/500",
    "https://picsum.photos/id/1018/300/500",
    "https://picsum.photos/id/1020/300/500",
  ];

  const repeatedImages = Array.from(
    { length: 14 },
    (_, i) => images[i % images.length]
  );

  const totalPages = repeatedImages.length;

  // Navigation handlers
  const handlePrev = () => {
    flipBook.current?.pageFlip().flipPrev();
  };

  const handleNext = () => {
    flipBook.current?.pageFlip().flipNext();
  };

  return (
    <div className="section-padding-x   pt-[200px] flex justify-center items-center flex-col mb-10 gap-9 overflow-hidden">

        <Title32>
            Magazien One 
        </Title32>

       
      {/* Navigation Arrows */}
      <div className="flex items-center gap-4 ">
        <button
          onClick={handlePrev}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          disabled={currentPage === 0}
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={handleNext}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          disabled={currentPage === totalPages - 1}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* FlipBook */}
      <HTMLFlipBook
        width={600}
        height={600}
        ref={flipBook}
        onFlip={() =>
          setCurrentPage(flipBook.current?.pageFlip().getCurrentPageIndex() || 0)
        }
      >
        {repeatedImages.map((img, index) => (
          <div key={index} className="demoPage">
            <img
              src={img}
              alt={`Page ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </HTMLFlipBook>

      {/* Page Counter */}
      {/* <p className="mt-4 text-gray-600">
        Page {currentPage + 1} / {totalPages}
      </p> */}
    </div>
  );
};

export default MagazineDetails;
