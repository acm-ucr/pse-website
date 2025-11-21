import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogOverlay,
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

  return (
    <Dialog>
      <DialogTrigger
        className="flex cursor-pointer justify-center bg-pse-purple-300 rounded-lg py-0.5 mx-1  text-white hover:opacity-75"
      >
        <span className="pr-1 text-center text-md">
          {hasStartTime &&
            eventStartDate.toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
              timeZone: "America/Los_Angeles",
            })}
        </span>
        <span className="overflow-hidden px-1 pl-1 text-xs text-ellipsis whitespace-nowrap">
          {title}
        </span>
      </DialogTrigger>
      <DialogOverlay className="bg-gray-400/60">
        <DialogContent className="z-50 border-2 border-black p-0 shadow-md overflow-hidden">
          <DialogTitle>
            <div className="flex items-center justify-between bg-pse-purple-300 px-4 py-3 text-xl font-semibold text-white">
              <p className="truncate">{title}</p>
            </div>
          </DialogTitle>

          <div className="bg-white px-4 py-3 text-lg text-black">
            <div className="flex">
              <p className="pr-2 whitespace-nowrap">
                {date.toLocaleString("default", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <div>{hasStartTime && <p>{timeRangeDisplay}</p>}</div>
            </div>
            <p>{location}</p>
            {description && <p className="pt-4 pb-4">{description}</p>}
          </div>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
};

export default CalendarEventPopover;