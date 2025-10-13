const principles = [
  "Competition",
  "Sincerity",
  "Belief",
  "Character",
  "Ethics",
  "Confidence",
  "Faith",
  "Knowledge",
  "Work",
  "Skill",
  "Wisdom",
  "Honor",
];

const Principles = () => {
  return (
    <div className="flex min-h-screen flex-col items-start justify-center px-20 py-10">
      <img
        src="/home/Our Principles.svg"
        alt="Our Principles"
        className="w-72"
      />

      <div className="grid grid-cols-3 -space-y-12">
        {principles.map((name) => (
          <div
            key={name}
            className="relative flex h-36 w-72 items-center justify-center"
          >
            <img
              src="/home/Rectangle.svg"
              alt="Rectangle Background"
              className="absolute inset-0 h-full w-full"
            />

            <img
              src={`/home/${name}.svg`}
              alt={name}
              className="block scale-75 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Principles;
