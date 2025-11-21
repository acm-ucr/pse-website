"use client";

import * as React from "react";
import { RiArrowLeftFill, RiArrowRightFill } from "react-icons/ri";
import { DayPicker } from "react-day-picker";
import { useState } from "react";
import { GoogleEventProps } from "../calendar/calendarcall";
import CalendarDay from "@/components/calendar/month/calendarday";
import CalendarTop from "@/components/calendar/month/calendartop";

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  events: GoogleEventProps[];
};

function Calendar({
  className,
  classNames,
  showOutsideDays = false,
  events,
  ...props
}: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();

  const nextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    newDate.setDate(
      today.getMonth() === newDate.getMonth() &&
        today.getFullYear() === newDate.getFullYear()
        ? today.getDate()
        : 1,
    );
    setCurrentDate(newDate);
  };

  const prevMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    newDate.setDate(
      today.getMonth() === newDate.getMonth() &&
        today.getFullYear() === newDate.getFullYear()
        ? today.getDate()
        : 1,
    );
    setCurrentDate(newDate);
  };

  return (
    <div className="flex flex-col">
      <CalendarTop
        currentDate={currentDate}
        onPrevMonth={prevMonth}
        onNextMonth={nextMonth}
      />
      <DayPicker
        month={currentDate}
        showOutsideDays={showOutsideDays}
        formatters={{
          formatWeekdayName: (date) => {
            const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            return days[date.getDay()];
          },
          formatCaption: () => "",
        }}
        className={`${className} pb-8`}
        classNames={{
          // v9 class names
          months: "",
          month: "",
          month_caption: "",
          caption_label: "",
          nav: "space-x-8",
          button_previous: "hidden",
          button_next: "hidden",
          month_grid: "w-full",
          weekdays:
            "border-2 border-gray-400 bg-pse-purple-150 py-4 w-full rounded-t-xl text-center mt-4 items-center justify-center grid grid-cols-7",
          weekday:
            "text-pse-purple-400 text-md font-normal md:text-3xl py-1 md:py-2",
          weeks: "border-1 border-t-0 border-gray-400 w-full -px-1",
          week: "grid grid-cols-7",
          day: "",
          day_button: "w-full h-full",
          range_end: "",
          selected: "",
          outside: "",
          disabled: "",
          range_middle: "",
          hidden: "",
          ...classNames,
        }}
        components={{
          // v9 uses Chevron instead of IconLeft/IconRight
          Chevron: (props) => {
            if (props.orientation === "left") {
              return (
                <div onClick={prevMonth}>
                  <RiArrowLeftFill />
                </div>
              );
            }
            return (
              <div onClick={nextMonth}>
                <RiArrowRightFill />
              </div>
            );
          },
          // v9: Day component receives { day, modifiers, ... }
          // day.date is the actual Date object
          Day: (props) => {
            const { day } = props;
            
            // In v9, day is a CalendarDay object with a .date property
            const date = day.date;
            const displayMonth = day.displayMonth;

            return (
              <CalendarDay
                date={date}
                displayMonth={displayMonth}
                events={events}
              />
            );
          },
        }}
        {...props}
      />
    </div>
  );
}
Calendar.displayName = "Calendar";

export { Calendar };