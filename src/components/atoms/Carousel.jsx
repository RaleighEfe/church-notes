import { useState } from "react";
import CropText from "./CropText";
import Link from "next/link";

const Carousel = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex items-center justify-center w-full">
      <button
        onClick={handlePrev}
        className="text-gray-500 hover:text-gray-700 focus:outline-none"
      >
        Prev
      </button>
      <Link href="">
        <div className="grid grid-rows-2 relative border border-[#374141] rounded-md shadow-lg h-48">
          <div className="">{cards[currentIndex].image}</div>
          <div className="grid grid-rows-[1fr_auto_1fr] items-end p-2 h-16">
            <div className="flex text-xs">
              <div>icon</div>
              <p className="font-light">{cards[currentIndex].type}</p>
            </div>
            <h4 className="font-semibold text-sm">
              <CropText text={cards[currentIndex].title} />
            </h4>
            <p className="text-xs">{cards[currentIndex].author}</p>
          </div>
        </div>
      </Link>
      {/* <div className="mx-4">
        <h2 className="text-lg font-semibold mb-2">
          {cards[currentIndex].title}
        </h2>
        <p className="text-gray-600">{cards[currentIndex].description}</p>
      </div> */}
      <button
        onClick={handleNext}
        className="text-gray-500 hover:text-gray-700 focus:outline-none"
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
