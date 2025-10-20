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
      <div className="font-pse-crimson-text text-pse-purple-300 mb-8 text-5xl">
        Our Principles
      </div>

      <div className="grid grid-cols-3 gap-8">
        {principles.map((name) => (
          <div
            key={name}
            className="bg-pse-purple-100 font-pse-gfs-didot flex h-14 w-56 items-center justify-center rounded-2xl text-xl shadow-md"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Principles;
