"use client";

import PSEBanner from "@/components/landing/PSEBanner";
import Principles from "@/components/landing/Principles";
import OurMission from "@/components/landing/ourmission";
import Button from "@/components/landing/Button";

const Home = () => {
  return (
    <div className="flex w-full flex-col items-center justify-start gap-16 pb-10">
      <Button
        link="https://docs.google.com/forms/d/e/1FAIpQLSco0HkuBMDgfyNt2JmmyuYf9OYI5aGxlGIkl4B9omNPD74zWw/viewform"
        text="JOIN US!"
        color="bg-pse-yellow-100"
      />
      <PSEBanner />
      <OurMission />
      <Principles />
    </div>
  );
};

export default Home;
