interface EventPageCardProps {
  title: string;
  date: string;
  description: string;
  time: string;
  location: string;
}

const EventPageCard = ({
  title,
  description,
  date,
  location,
  time,
}: EventPageCardProps) => {
  return (
    <div className="bg-pse-purple-100 m-8 flex w-4/5 justify-center rounded-lg p-[5%] shadow-lg drop-shadow-xl">
      <div className="font-pse-crimson-text text-pse-purple-500 flex-col text-center">
        <p className="px-8 text-4xl md:text-6xl lg:text-8xl">{date}</p>
        <p className="mt-1 text-xl md:text-2xl lg:text-4xl">{time}</p>
        <p className="-mt-1 text-xl md:text-2xl lg:text-4xl">{location}</p>
      </div>
      <div className="w-3/4 flex-col">
        <p className="font-pse-crimson-text text-pse-purple-250 text-2xl font-semibold md:text-4xl lg:text-6xl">
          {title}
        </p>
        <p className="text-pse-black-100 font-pse-maitree py-4 text-sm leading-8 lg:text-2xl">
          {description}
        </p>
      </div>
    </div>
  );
};

export default EventPageCard;
