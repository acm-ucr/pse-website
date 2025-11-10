"use client";

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
    <div className="mx-auto flex min-h-screen flex-col items-start justify-center px-20 py-10">
      <div className="font-pse-crimson-text text-pse-purple-400 mb-12 text-7xl">
        Our Principles
      </div>

      <div className="grid w-full grid-cols-3 gap-8">
        {principles.map((name) => (
          <div
            key={name}
            className="bg-pse-purple-100 font-pse-maitree flex h-[6.5rem] w-[25rem] items-center justify-center rounded-2xl text-4xl font-medium shadow-lg"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Principles;
