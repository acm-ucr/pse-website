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
    <div className="bg-pse-purple-100 m-8 flex w-2xl justify-center rounded-lg p-8 shadow-lg drop-shadow-xl">
      <div className="font-pse-crimson-text text-pse-purple-500 flex-col px-8 text-center">
        <p className="text-5xl">{date}</p>
        <p className="mt-1 text-3xl">{time}</p>
        <p className="-mt-1 text-2xl">{location}</p>
      </div>
      <div className="w-3/4 flex-col">
        <p className="font-pse-crimson-text text-pse-purple-250 text-4xl font-semibold">
          {title}
        </p>
        <p className="text-pse-black-100 font-pse-maitree py-4 leading-8">
          {description}
        </p>
      </div>
    </div>
  );
};

export default EventPageCard;
