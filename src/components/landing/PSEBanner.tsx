import React from "react";
import PSEBg from "../../public/landing/pse_bg.png";

export default function PSEBanner() {
  return (
    <div
      className={`relative flex h-[459px] w-full flex-col items-center justify-center bg-[center_top_-80px]`}
      style={{ backgroundImage: `url(${PSEBg.src}` }}
    >
      <div className="bg-pse-purple-300/75 absolute inset-0 w-full"></div>
      <h1 className="font-pse-crimson-text z-10 text-center text-[125px] text-white">
        Pi Sigma Epsilon
      </h1>
      <p className="font-pse-gfs-didot z-10 -mt-8 text-center text-[40px] text-white">
        University of California, Riverside Chapter
      </p>
    </div>
  );
}
