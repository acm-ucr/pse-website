import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

interface CalendarEventPopoverProps {
  startDate: {
    dateTime?: string;
    date?: string;
  };
  endDate?: {
    dateTime?: string;
    date?: string;
  };
  title: string;
  date: Date;
  location?: string;
  description?: string;
}

const CalendarEventPopover = ({
  startDate,
  endDate,
  title,
  date,
  location,
  description,
}: CalendarEventPopoverProps) => {
  let eventStartDate = new Date();
  let eventEndDate = new Date();
  let hasStartTime = false;
  let hasEndTime = false;

  if (startDate.dateTime) {
    eventStartDate = new Date(startDate.dateTime);
    hasStartTime = true;
  } else if (startDate.date) {
    eventStartDate = new Date(startDate.date);
  }

  if (endDate?.dateTime) {
    eventEndDate = new Date(endDate.dateTime);
    hasEndTime = true;
  } else if (endDate?.date) {
    eventEndDate = new Date(endDate.date);
  }

  let timeRangeDisplay = "";
  if (hasStartTime) {
    timeRangeDisplay = eventStartDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      timeZone: "America/Los_Angeles",
    });
    if (hasEndTime) {
      timeRangeDisplay +=
        " - " +
        eventEndDate.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          timeZone: "America/Los_Angeles",
        });
    }
  }
  console.log("Event title:", title, "Type:", typeof title);

  return (
    <Dialog>
      <DialogTrigger className="bg-pse-purple-300 w-full cursor-pointer rounded px-1.5 py-0.5 text-white transition-opacity hover:opacity-80 md:px-2 md:py-1">
        <div className="flex items-center justify-center gap-1 text-xs md:text-sm">
          {hasStartTime && (
            <span className="shrink-0 font-medium">
              {eventStartDate.toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit",
                timeZone: "America/Los_Angeles",
              })}
            </span>
          )}
          <span className="truncate">{title}</span>
        </div>
      </DialogTrigger>

      <DialogContent className="overflow-hidden rounded-lg border-0 p-0 shadow-xl sm:max-w-md">
        <div className="bg-pse-purple-300 px-5 py-4">
          <DialogTitle className="text-lg font-semibold text-white md:text-xl">
            {title}
          </DialogTitle>
        </div>
        <div className="space-y-3 bg-white px-5 py-4 text-black">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <p className="font-medium">
              {date.toLocaleString("default", {
                weekday: "short",
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
            {hasStartTime && (
              <p className="text-gray-600">{timeRangeDisplay}</p>
            )}
          </div>
          {location && (
            <div className="flex items-start gap-2">
              <p>{location}</p>
            </div>
          )}
          {description && (
            <div className="border-t border-gray-200 pt-3">
              <p className="text-gray-700">{description}</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CalendarEventPopover;
