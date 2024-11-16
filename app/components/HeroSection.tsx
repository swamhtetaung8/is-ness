"use client";

import Button from "@/components/is-ness/button";
import ScrollButton from "@/components/is-ness/scrollButton";
import { Carousel, CustomFlowbiteTheme, Flowbite } from "flowbite-react";
import React from "react";

// Modified default styling from https://flowbite-react.com/docs/components/carousel
const customCarouselTheme: CustomFlowbiteTheme = {
  carousel: {
    root: {
      leftControl:
        "absolute left-0 top-0 flex h-full items-center justify-center pl-[16px] md:pl-[64px] lg:pl-[88px] focus:outline-none",
      rightControl:
        "absolute right-0 top-0 flex h-full items-center justify-center pr-[16px] md:pr-[64px] lg:pr-[88px] focus:outline-none",
    },
    indicators: {
      active: {
        off: "bg-isness-darkGrey hover:bg-black",
        on: "bg-black",
      },
      base: "h-3 w-3 rounded-full",
      wrapper:
        "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3 z-20",
    },
    item: {
      base: "absolute left-1/2 top-1/2 block w-full h-full -translate-x-1/2 object-cover object-center -translate-y-1/2",
      wrapper: {
        off: "w-full flex-shrink-0 transform cursor-default snap-center",
        on: "w-full flex-shrink-0 transform cursor-grab snap-center",
      },
    },
    scrollContainer: {
      base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth",
      snap: "snap-x",
    },
    control: {
      base: "relative z-20",
      icon: "h-8 w-8 md:h-12 md:w-12 text-isness-white hover:text-white",
    },
  },
};

const HeroSection = () => {
  return (
    <section>
      <div className="h-[calc(100vh-80px)] relative">
        {/* Slideshow */}
        <Flowbite theme={{ theme: customCarouselTheme }}>
          <Carousel draggable={false} pauseOnHover>
            <img src="/hero/hero-image-1.jpg" alt="Multiple products image" />
            <img src="/hero/hero-image-2.jpg" alt="Product image with a baby" />
            <img
              src="/hero/hero-image-3.jpg"
              alt="Multiple products image with a toy"
            />
          </Carousel>
        </Flowbite>

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-end text-center text-white py-20">
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/70 z-10"></div>

          {/* Hero Section Text and Buttons */}
          <div className="relative z-20 px-[16px] lg:px-0">
            <h1 className="text-[32px] md:text-[48px] lg:text-[64px] mb-4 font-DreamAvenue">
              Welcome to Your Baby's Skin Journey
            </h1>
            <div className="space-x-4">
              <ScrollButton href="#more-information" variant="secondary">
                View More
              </ScrollButton>
              <Button variant="primary">Shop Now</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
