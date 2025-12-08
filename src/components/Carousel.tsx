"use client";
import { useRef, useState, useEffect } from "react";

interface CarouselItem {
  word: string;
}

interface CarouselProps {
  data: CarouselItem[];
}

const CarouselWords = ({ data }: CarouselProps) => {
  const marqueeReference = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState("25s");

  useEffect(() => {
    if (marqueeReference.current) {
      const carouselLength = marqueeReference.current.scrollWidth;
      const speed = 0.015;
      setDuration(`${carouselLength * speed}s`);
    }
  }, []);

  return (
    <div className="bg-pse-purple-300 font-pse-maitree relative hidden w-full overflow-x-hidden text-xl text-white md:flex">
      <div
        className="animate-marquee flex py-[3vh] whitespace-nowrap"
        style={{ animationDuration: duration }}
        ref={marqueeReference}
      >
        {data.map(({ word }, index) => (
          <span key={index} className="mx-4">
            {word}
          </span>
        ))}
      </div>
      <div
        className="animate-marquee-continuation absolute flex justify-between py-[3vh] whitespace-nowrap"
        style={{ animationDuration: duration }}
      >
        {data.map(({ word }, index) => (
          <span key={index} className="mx-4">
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CarouselWords;
