import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

interface CalendarTopProps {
  currentDate: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

const CalendarTop = ({
  currentDate,
  onPrevMonth,
  onNextMonth,
}: CalendarTopProps) => {
  const monthNames = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];

  return (
    <div className="mx-auto mt-20 flex w-10/12 flex-col items-center justify-between md:flex-row">
      <div className="text-pse-purple-500 flex w-full items-center justify-center pb-6 md:justify-start md:space-x-4 md:pb-0">
        <button
          onClick={onPrevMonth}
          className="text-3xl transition hover:-translate-x-1 md:text-5xl"
        >
          <RiArrowLeftSLine />
        </button>
        <button
          onClick={onNextMonth}
          className="text-3xl transition hover:translate-x-1 md:text-5xl"
        >
          <RiArrowRightSLine />
        </button>
        <span className="font-pse-crimson-text w-fit px-4 text-2xl font-semibold md:px-0 md:text-5xl">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </span>
      </div>
    </div>
  );
};

export default CalendarTop;
