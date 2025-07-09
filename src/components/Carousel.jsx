import React, { useState, useEffect } from 'react';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const images = [
    {
      id: 1,
      src: "/images/img_1.jpg",
      title: "",
      alt: ""
    },
    {
      id: 2,
      src: "/images/img_2.jpg",
      title: "",
      alt: ""
    },
    {
      id: 3,
      src: "/images/img_3.jpg",
      title: "",
      alt: ""
    },
    {
      id: 4,
      src: "/images/img_4.jpg",
      title: "",
      alt: ""
    },
    {
      id: 5,
      src: "/images/img_5.jpg",
      title: "",
      alt: ""
    }
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const getPreviousIndex = (offset = 1) => {
    return (currentIndex - offset + images.length) % images.length;
  };

  const getNextIndex = (offset = 1) => {
    return (currentIndex + offset) % images.length;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div id='clienti' className="relative w-full h-screen flex flex-col items-center justify-center bg-transparent overflow-hidden">
      {/* Image Group with proper spacing */}
      <div className="relative w-full h-96 md:h-[500px] flex items-center justify-center px-4">
        <div className="absolute inset-0 flex items-center justify-center gap-x-4 px-4">
          {/* Far Left */}
          <div className="relative w-72 h-60 md:w-[260px] md:h-80 transform scale-75 transition-all duration-500 hover:opacity-60">
            <img
              src={images[getPreviousIndex(2)].src}
              alt={images[getPreviousIndex(2)].alt}
              className="w-full h-full object-cover rounded-lg shadow-2xl"
            />
          </div>

          {/* Left */}
          <div className="relative w-72 h-60 md:w-[260px] md:h-80 transform scale-75 transition-all duration-500 hover:opacity-60">
            <img
              src={images[getPreviousIndex(1)].src}
              alt={images[getPreviousIndex(1)].alt}
              className="w-full h-full object-cover rounded-lg shadow-2xl"
            />
          </div>

          {/* Current Image */}
          <div className="relative z-10 w-80 h-64 md:w-[300px] md:h-96 transition-all duration-500 transform hover:scale-[1.02]">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-full object-cover rounded-xl shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6 rounded-b-xl">
              <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
                {images[currentIndex].title}
              </h3>
              <p className="text-gray-300 text-sm md:text-base opacity-90">
                Image {currentIndex + 1} of {images.length}
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="relative w-72 h-60 md:w-[260px] md:h-80 transform scale-75 transition-all duration-500 hover:opacity-60">
            <img
              src={images[getNextIndex(1)].src}
              alt={images[getNextIndex(1)].alt}
              className="w-full h-full object-cover rounded-lg shadow-2xl"
            />
          </div>

          {/* Far Right */}
          <div className="relative w-72 h-60 md:w-[260px] md:h-80 transform scale-75 transition-all duration-500 hover:opacity-60">
            <img
              src={images[getNextIndex(2)].src}
              alt={images[getNextIndex(2)].alt}
              className="w-full h-full object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          disabled={isAnimating}
          className="absolute left-4 md:left-8 z-20 p-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="text-white text-xl font-bold">‹</span>
        </button>

        <button
          onClick={nextSlide}
          disabled={isAnimating}
          className="absolute right-4 md:right-8 z-20 p-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="text-white text-xl font-bold">›</span>
        </button>
      </div>

      {/* Dots */}
      <div className="flex space-x-2 mt-8 mb-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isAnimating}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-white scale-125 shadow-lg'
                : 'bg-white/40 hover:bg-white/60'
            } disabled:cursor-not-allowed`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
