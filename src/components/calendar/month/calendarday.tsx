import { GoogleEventProps } from "@/components/calendar/calendarcall";
import { useState, useEffect } from "react";
import CalendarEventPopover from "./calendareventpopover";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DayProps {
  date: Date;
  displayMonth: Date;
  events: GoogleEventProps[];
}

const CalendarDay = ({ date, events }: DayProps) => {
  const today = new Date();
  const isPastDay = date < new Date(new Date().setHours(0, 0, 0, 0));

  const isToday =
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();

  const filteredEvents = events.filter((event) => {
    let eventStartDate: Date | null = null;
    let eventEndDate: Date | null = null;

    if (event.start?.dateTime) {
      eventStartDate = new Date(event.start.dateTime);
    } else if (event.start?.date) {
      eventStartDate = new Date(event.start.date);
    }

    if (event.end?.dateTime) {
      eventEndDate = new Date(event.end.dateTime);
    } else if (event.end?.date) {
      eventEndDate = new Date(event.end.date);
    }

    eventStartDate?.setHours(0, 0, 0, 0);
    eventEndDate?.setHours(23, 59, 59, 999);

    return (
      eventStartDate &&
      eventEndDate &&
      date >= eventStartDate &&
      date <= eventEndDate
    );
  });

  const [visibleEventCount, setVisibleEventCount] = useState(2);
  const displayEventCount =
    filteredEvents.length > visibleEventCount
      ? visibleEventCount - 1
      : visibleEventCount;

  useEffect(() => {
    const updateVisibleEventCount = () => {
      if (window.innerHeight > 1440) {
        setVisibleEventCount(4);
      } else if (window.innerHeight > 1080) {
        setVisibleEventCount(3);
      } else {
        setVisibleEventCount(2);
      }
    };

    updateVisibleEventCount();
    window.addEventListener("resize", updateVisibleEventCount);
    return () => window.removeEventListener("resize", updateVisibleEventCount);
  }, []);

  return (
    <div
      className={`flex aspect-square h-full w-full flex-col border border-gray-300 p-1 md:p-2 ${
        isToday ? "bg-pse-purple-200" : isPastDay ? "bg-gray-100" : "bg-white"
      }`}
    >
      <p
        className={`text-pse-purple-400 text-sm font-medium md:text-2xl lg:text-3xl ${
          isPastDay ? "text-gray-400" : ""
        }`}
      >
        {date.getDate()}
      </p>
      <div className="mt-1 flex flex-col gap-1 overflow-hidden">
        {filteredEvents
          .slice(0, displayEventCount)
          .map(({ start, summary, end, description, location }, index) => (
            <CalendarEventPopover
              key={index}
              startDate={start}
              endDate={end}
              title={summary}
              description={description}
              date={date}
              location={location || "TBD"}
            />
          ))}

        {filteredEvents.length > visibleEventCount && (
          <Popover>
            <PopoverTrigger className="mt-0.5 w-full cursor-pointer text-center hover:opacity-75">
              <p className="text-pse-purple-400 text-xs font-semibold md:text-sm">
                +{filteredEvents.length - displayEventCount} more
              </p>
            </PopoverTrigger>
            <PopoverContent className="w-64 p-2">
              <div className="flex flex-col gap-2">
                {filteredEvents
                  .slice(displayEventCount)
                  .map(
                    ({ summary, start, end, location, description }, idx) => (
                      <CalendarEventPopover
                        key={idx}
                        startDate={start}
                        endDate={end}
                        title={summary}
                        date={date}
                        description={description}
                        location={location || "TBD"}
                      />
                    ),
                  )}
              </div>
            </PopoverContent>
          </Popover>
        )}
      </div>
    </div>
  );
};

export default CalendarDay;
