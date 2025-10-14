import React from "react";
import PSEBg from "@/public/landing/pse_bg.png";
import Image from "next/image";

const PSEBanner = () => {
  return (
    <div
      className={`relative flex h-[459px] w-full flex-col items-center justify-center overflow-clip`}
    >
      <Image
        src={PSEBg}
        alt="PSE Background"
        className="center absolute inset-0 -top-[20px] -z-10 flex w-full scale-120 object-cover"
      />
      <div className="bg-pse-purple-300/75 absolute inset-0 w-full"></div>
      <p className="font-pse-crimson-text z-10 text-center text-[125px] text-white">
        Pi Sigma Epsilon
      </p>
      ``
      <p className="font-pse-gfs-didot z-10 -mt-8 text-center text-[40px] text-white">
        University of California, Riverside Chapter
      </p>
    </div>
  );
};

export default PSEBanner;
