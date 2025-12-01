import { EventItem } from "@/data/events";
import { EventCarousel } from "./EventCarousel";

type EventSectionProps = EventItem;

export function EventSection({
  title,
  date,
  description,
  images,
}: EventSectionProps) {
  return (
    <div className="mx-auto max-w-7xl space-y-6 text-center md:text-left">
      <div className="flex flex-col gap-4">
        <div className="space-y-2">
          <p className="font-pse-crimson-text text-pse-purple-250 text-3xl font-semibold md:text-5xl">
            {title}
          </p>
          <p className="font-pse-maitree text-pse-black-100 text-base font-semibold">
            {date}
          </p>
        </div>
      </div>
      <p className="text-pse-black-100 text-lg">{description}</p>
      <EventCarousel images={images} />
    </div>
  );
}
