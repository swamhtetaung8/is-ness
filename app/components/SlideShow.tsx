"use client";

import Image from "next/image";
import React, { useRef } from "react";

const SlideShow = () => {
  const images = Array.from({ length: 12 }, (_, i) => ({
    src: `/slideshow/image-${i + 1}.jpg`,
    alt: `slideshow-image-${i + 1}`,
  }));

  const containerRef = useRef(null);
  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;

  // Handle mouse and touch events
  const handleStart = (e) => {
    isDragging = true;
    const clientX = e.type === "mousedown" ? e.pageX : e.touches[0].clientX;
    startX = clientX - containerRef.current.offsetLeft;
    scrollLeft = containerRef.current.scrollLeft;
    containerRef.current.style.scrollBehavior = "auto";
  };

  const handleMove = (e) => {
    if (!isDragging) return;
    const clientX = e.type === "mousemove" ? e.pageX : e.touches[0].clientX;
    const x = clientX - containerRef.current.offsetLeft;
    const walk = x - startX;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleEnd = () => {
    isDragging = false;
    containerRef.current.style.scrollBehavior = "smooth";
  };

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden"
      onMouseDown={handleStart}
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={handleStart}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
      style={{
        whiteSpace: "nowrap",
        userSelect: "none",
        touchAction: "pan-y", // Allows vertical scrolling on touch devices
      }}
    >
      <div className="flex">
        {images.map((image, index) => (
          <div
            className="relative flex-shrink-0 w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] pointer-events-none"
            key={index}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlideShow;
