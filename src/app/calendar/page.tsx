"use client";
import TitleComp from "@/components/TitleComp";
import EventPageCard from "@/components/calendar/EventPageCard";
import Calendar from "@/components/calendar/calendarcall";
import UpcomingEvents from "@/components/calendar/upcoming";

const EventPage = () => {
  return (
    <>
      <TitleComp title="Calendar" />
      {/* replace mock data later */}
      <div className="flex w-full flex-col items-center">
        <EventPageCard
          title="Event Name"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id"
          date="JUL 21"
          time="7:00 PM"
          location="HUB 265"
        />
        <EventPageCard
          title="Event Name"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id"
          date="JUL 21"
          time="7:00 PM"
          location="HUB 265"
        />
      </div>
      <UpcomingEvents />
      <Calendar />
    </>
  );
};

export default EventPage;
