"use client";

import PSEBanner from "@/components/landing/PSEBanner";
import Principles from "@/components/landing/Principles";
import OurMission from "@/components/landing/ourmission";

const Home = () => {
  return (
    <div className="flex w-full flex-col items-center justify-start gap-16 pb-10">
      <PSEBanner />
      <OurMission />
      <Principles />
    </div>
  );
};

export default Home;
