"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image, { StaticImageData } from "next/image";

type EventCarouselProps = {
  images: StaticImageData[];
};

export function EventCarousel({ images }: EventCarouselProps) {
  const items =
    images.length === 1
      ? [...images, ...images, ...images, ...images, ...images]
      : images;

  return (
    <Carousel
      className="mx-auto w-full"
      opts={{
        loop: true,
        align: "start",
      }}
    >
      <CarouselContent>
        {items.map((img, idx) => (
          <CarouselItem key={idx} className="basis-full md:basis-1/3">
            <div className="p-2">
              <Card className="overflow-hidden p-0">
                <CardContent className="p-0">
                  <div className="relative h-[300px] w-full">
                    <Image
                      src={img}
                      alt={`Event image ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="cursor-pointer" />
      <CarouselNext className="cursor-pointer" />
    </Carousel>
  );
}
