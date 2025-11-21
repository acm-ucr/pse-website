"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import EventPageCard from "./EventPageCard";

export type GoogleEventProps = {
  start: {
    dateTime?: string;
    date?: string;
  };
  end: {
    dateTime?: string;
    date?: string;
  };
  location?: string;
  description?: string;
  summary: string;
};

// Helper function to format the date
const formatEventDate = (start: GoogleEventProps["start"]) => {
  const dateStr = start.dateTime || start.date;
  if (!dateStr) return "";

  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
};

const formatEventTime = (
  start: GoogleEventProps["start"],
  end: GoogleEventProps["end"],
) => {
  if (!start.dateTime) return "All Day";

  const startDate = new Date(start.dateTime);
  const startTime = startDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "America/Los_Angeles",
  });

  if (end?.dateTime) {
    const endDate = new Date(end.dateTime);
    const endTime = endDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      timeZone: "America/Los_Angeles",
    });
    return `${startTime} - ${endTime}`;
  }

  return startTime;
};

const UpcomingEvents = () => {
  const { data, isLoading, isError } = useQuery<{
    allEvents: GoogleEventProps[];
    futureEvents: GoogleEventProps[];
  }>({
    queryKey: ["googleCalendarEvents"],
    queryFn: async () => {
      const now = new Date();
      const tenWeeksAgo = new Date(
        now.getTime() - 60 * 60 * 24 * 7 * 10 * 1000,
      ).toISOString();
      const tenWeeksAhead = new Date(
        now.getTime() + 60 * 60 * 24 * 7 * 10 * 1000,
      ).toISOString();

      const response = await fetch(
        `https://www.googleapis.com/calendar/v3/calendars/${
          process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL
        }/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime&timeMin=${tenWeeksAgo}&timeMax=${tenWeeksAhead}`,
      ).then((res) => res.json());

      const allEvents: GoogleEventProps[] = response.items || [];

      const futureEvents = allEvents
        .filter((item) => {
          const startString = item.start?.dateTime || item.start?.date;
          return startString && new Date(startString) >= now;
        })
        .slice(0, 2);

      return { allEvents, futureEvents };
    },
  });

  return (
    <div>
      {isLoading && (
        <p className="mt-6 pb-8 text-center text-2xl text-gray-500">
          Loading events...
        </p>
      )}

      {isError && (
        <p className="mt-6 pb-8 text-center text-2xl text-red-500">
          Error loading events.
        </p>
      )}

      {!isLoading && !isError && data && data.futureEvents.length === 0 && (
        <p className="mt-6 pb-8 text-center text-2xl text-black">
          No upcoming events.
        </p>
      )}

      {!isLoading && !isError && data && data.futureEvents.length > 0 && (
        <div className="flex flex-col items-center">
          {data.futureEvents.map((event, index) => (
            <EventPageCard
              key={index}
              title={event.summary || "(No title)"}
              date={formatEventDate(event.start)}
              time={formatEventTime(event.start, event.end)}
              location={event.location || "TBD"}
              description={event.description || ""}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default UpcomingEvents;
