"use client";
import Carousel from "@/components/Carousel";
import words from "@/data/words";

const landingCarousel = () => {
  return <Carousel data={words} />;
};

export default landingCarousel;
