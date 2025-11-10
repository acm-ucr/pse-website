"use client";
import PSEBanner from "@/components/landing/PSEBanner";
import Principles from "@/components/landing/Principles";
import OurMission from "@/components/landing/ourmission";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <PSEBanner />
      <OurMission />
      <Principles />
    </div>
  );
};

export default Home;
