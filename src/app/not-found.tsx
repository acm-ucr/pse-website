"use client";
import Button from "@/components/Button";

const NotFound = () => {
  return (
    <div className="font-pse-crimson-text flex min-h-screen flex-col items-center justify-center space-y-4 bg-white text-center font-light">
      <div className="flex flex-col items-center justify-center space-y-2">
        <p className="text-pse-purple-500 text-[15rem] leading-none font-light">
          404
        </p>
        <p className="text-pse-purple-200 text-5xl font-medium">
          Page Not Found
        </p>
      </div>
      <div className="relative h-auto w-auto overflow-hidden">
        <Button
          link="/"
          text="Home"
          color="bg-pse-purple-500 hover:bg-pse-purple-600 text-white"
        />
      </div>
    </div>
  );
};

export default NotFound;
