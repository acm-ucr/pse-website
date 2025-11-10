"use client";
import Principles from "@/components/landing/Principles";
import OurMission from "@/components/landing/ourmission";

const Home = () => {
  return (
    <div className="flex w-full flex-col items-center justify-start gap-16 pb-10">
      {/*<JoinUsButton
        link="https://docs.google.com/forms/d/e/1FAIpQLSco0HkuBMDgfyNt2JmmyuYf9OYI5aGxlGIkl4B9omNPD74zWw/viewform"
        text="JOIN US!"
        color="bg-pse-yellow-100"
      />*/}

      <OurMission />
      <Principles />
    </div>
  );
};

export default Home;
