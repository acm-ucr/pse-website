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
      <div className="font-pse-crimson-text text-pse-purple-400 mb-8 text-5xl">
        Our Principles
      </div>

      <div className="grid grid-cols-3 gap-8">
        {principles.map((name) => (
          <div
            key={name}
            className="bg-pse-purple-100 font-pse-maitree flex h-16 w-60 items-center justify-center rounded-xl text-xl font-semibold shadow-lg"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Principles;
