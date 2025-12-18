"use client";

import PSEBanner from "@/components/landing/PSEBanner";
import Principles from "@/components/landing/Principles";
import OurMission from "@/components/landing/ourmission";
import PhotoGallery from "@/components/landing/PhotoGallery";
import Carousel from "@/components/landing/Carousel";

const Home = () => {
  return (
    <>
      <PSEBanner />
      <Carousel />
      <OurMission />
      <Principles />
      <PhotoGallery />
    </>
  );
};

export default Home;
