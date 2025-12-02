"use client";

import PSEBanner from "@/components/landing/PSEBanner";
import Principles from "@/components/landing/Principles";
import OurMission from "@/components/landing/ourmission";
import PhotoGallery from "@/components/landing/PhotoGallery";

const Home = () => {
  return (
    <>
      <PSEBanner />
      <OurMission />
      <Principles />
      <PhotoGallery />
    </>
  );
};

export default Home;
