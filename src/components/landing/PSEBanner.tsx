import React from "react";
import PSEBg from "@/../public/landing/pse_bg.webp";
import Image from "next/image";
import Button from "@/components/landing/Button";

const PSEBanner = () => {
  return (
    <div
      className={`relative flex h-[309px] w-full flex-col items-center justify-center overflow-clip transition-transform duration-300 ease-out sm:h-[359px] md:h-[409px] lg:h-[459px]`}
    >
      <Image
        src={PSEBg}
        alt="PSE Background"
        className="absolute inset-0 top-[15px] -z-10 flex w-full scale-140 object-cover transition-transform duration-300 ease-out sm:-top-[20px] sm:scale-120"
      />
      <div className="bg-pse-purple-300/75 absolute inset-0 w-full"></div>
      <div className="z-10">
        <p className="font-pse-crimson-text scale-50 pt-10 text-center text-8xl whitespace-nowrap text-white transition-transform duration-300 ease-out sm:scale-75 md:scale-100 lg:scale-150">
          Pi Sigma Epsilon
        </p>
        <p className="font-pse-maitree -mt-4 scale-60 text-center text-2xl whitespace-nowrap text-white transition-transform duration-300 ease-out sm:scale-75 sm:pt-2 md:-mt-0 md:scale-100 lg:scale-150 lg:pt-12">
          University of California, Riverside Chapter
        </p>
      </div>
      <div className="relative z-10 mt-0 scale-80 transition-transform duration-300 ease-out sm:mt-2 sm:scale-90 md:mt-8 md:scale-100 lg:mt-10 lg:scale-110">
        <Button
          link="https://docs.google.com/forms/d/e/1FAIpQLSco0HkuBMDgfyNt2JmmyuYf9OYI5aGxlGIkl4B9omNPD74zWw/viewform"
          text="JOIN US!"
          color="bg-pse-yellow-100"
        />
      </div>
    </div>
  );
};

export default PSEBanner;
