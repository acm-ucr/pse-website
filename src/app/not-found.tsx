"use client";
import Button from "@/components/Button";

const NotFound = () => {
  return (
    <div className="font-pse-crimson-text flex min-h-screen flex-col items-center justify-center bg-white text-center font-light">
      <div className="flex flex-col items-center justify-center">
        <p className="text-pse-purple-500 text-[8rem] leading-none font-light md:text-[12rem] lg:text-[15rem]">
          404
        </p>
        <p className="text-pse-purple-250 mt-4 mb-12 text-2xl md:text-3xl lg:text-5xl">
          Page Not Found
        </p>
      </div>
      <Button
        link="/"
        text="Home"
        color="bg-pse-purple-500 hover:bg-pse-purple-600 text-white px-8 py-3 text-xl md:px-10 md:py-4 md:text-2xl lg:px-12 lg:py-5 lg:text-3xl"
      />
    </div>
  );
};

export default NotFound;
