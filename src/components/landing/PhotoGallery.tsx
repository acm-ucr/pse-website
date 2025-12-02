import { EventCarousel } from "@/components/overviews/EventCarousel";
import Group1 from "@/public/gallery/group1.webp";
import Group2 from "@/public/gallery/group2.webp";
import Group3 from "@/public/gallery/group3.webp";
import Group4 from "@/public/gallery/group4.webp";
import Group5 from "@/public/gallery/group5.webp";
import Group6 from "@/public/gallery/group6.webp";
import Group7 from "@/public/gallery/group7.webp";
import Group8 from "@/public/gallery/group8.webp";
import Group9 from "@/public/gallery/group9.webp";
import Group10 from "@/public/gallery/group10.webp";
import Group11 from "@/public/gallery/group11.webp";
import Group12 from "@/public/gallery/group12.webp";
import Group13 from "@/public/gallery/group13.webp";
import Group14 from "@/public/gallery/group14.webp";
import Group15 from "@/public/gallery/group15.webp";
import Group16 from "@/public/gallery/group16.webp";
import Group17 from "@/public/gallery/group17.webp";
import Group18 from "@/public/gallery/group18.webp";
import Group19 from "@/public/gallery/group19.webp";
import Group20 from "@/public/gallery/group20.webp";
import Group21 from "@/public/gallery/group21.webp";
import Group22 from "@/public/gallery/group22.webp";
import Group23 from "@/public/gallery/group23.webp";
import Group24 from "@/public/gallery/group24.webp";
import Group25 from "@/public/gallery/group25.webp";

const images = [
  Group1,
  Group2,
  Group3,
  Group4,
  Group5,
  Group6,
  Group7,
  Group8,
  Group9,
  Group10,
  Group11,
  Group12,
  Group13,
  Group14,
  Group15,
  Group16,
  Group17,
  Group18,
  Group19,
  Group20,
  Group21,
  Group22,
  Group23,
  Group24,
  Group25,
];

const PhotoGallery = () => {
  return (
    <div className="px-8 pb-[14vh] md:px-20">
      <p className="font-pse-crimson-text text-pse-purple-400 mb-12 text-center text-5xl md:text-6xl lg:text-8xl">
        Photo Gallery
      </p>
      <EventCarousel images={images} />
    </div>
  );
};

export default PhotoGallery;
