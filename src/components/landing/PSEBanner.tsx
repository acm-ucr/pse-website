import React from "react";
import PSEBg from "@/public/landing/pse_bg.png";
import Image from "next/image";

const PSEBanner = () => {
  return (
    <div
      className={`relative flex h-[309px] w-full flex-col items-center justify-center overflow-clip transition-transform duration-300 ease-linear sm:h-[359px] md:h-[459px]`}
    >
      <Image
        src={PSEBg}
        alt="PSE Background"
        className="absolute inset-0 top-[15px] -z-10 flex w-full scale-140 object-cover transition-transform duration-300 ease-linear sm:-top-[20px] sm:scale-120"
      />
      <div className="bg-pse-purple-300/75 absolute inset-0 w-full"></div>
      <p className="font-pse-crimson-text scale-50 text-center text-[125px] whitespace-nowrap text-white transition-transform duration-300 ease-linear sm:scale-60 md:scale-75">
        Pi Sigma Epsilon
      </p>
      <p className="font-pse-maitree z-10 -mt-18 scale-50 text-center text-[40px] whitespace-nowrap text-white transition-transform duration-300 ease-linear sm:-mt-16 sm:scale-60 md:-mt-10 md:scale-75">
        University of California, Riverside Chapter
      </p>
    </div>
  );
};

export default PSEBanner;
