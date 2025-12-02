import { events } from "@/data/events";
import { EventSection } from "./EventSection";

export function EventSections() {
  return (
    <main className="space-y-16 md:px-4 md:py-10 py-6">
      {events.map((event, index) => (
        <EventSection key={index} {...event} />
      ))}
    </main>
  );
}
