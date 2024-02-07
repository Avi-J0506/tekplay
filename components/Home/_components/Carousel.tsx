import React, { useState, useEffect } from "react";
import LeftArrow from "remixicon-react/ArrowLeftSLineIcon";
import RightArrow from "remixicon-react/ArrowRightSLineIcon";

interface CarouselProps {
  interval?: number;
  children: any;
}

const Carousel: React.FC<CarouselProps> = ({ interval = 3000, children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % children.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + children.length) % children.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlide, interval, children.length]);

  return (
    <div className="relative w-full h-96 mx-auto">
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white z-40"
      >
        <LeftArrow />
      </button>
      {children.map((child: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined, index: React.Key | null | undefined) => (
        <div
          key={index}
          className={`w-full absolute top-0 transform transition-transform ${
            index === currentSlide
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full"
          }`}
        >
          {child}
        </div>
      ))}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white z-40"
      >
        <RightArrow />
      </button>
    </div>
  );
};

export default Carousel;