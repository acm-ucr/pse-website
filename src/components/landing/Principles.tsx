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
    <div className="flex min-h-screen flex-col items-start justify-center px-8 py-10 lg:px-20">
      <div className="font-pse-crimson-text text-pse-purple-400 mb-12 text-5xl md:text-6xl lg:text-8xl">
        Our Principles
      </div>

      <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:gap-8">
        {principles.map((name) => (
          <div
            key={name}
            className="bg-pse-purple-100 font-pse-maitree flex h-[6.5rem] items-center justify-center rounded-3xl text-2xl font-medium font-semibold shadow-lg sm:text-3xl md:text-3xl lg:text-4xl"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Principles;
