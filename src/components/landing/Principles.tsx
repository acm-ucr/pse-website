"use client";

import Heading from "@/components/ui/heading";

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
      <Heading title="Our Principles" className="mx-auto mb-12 md:mx-0" />

      <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:gap-8">
        {principles.map((name, index) => (
          <div
            key={index}
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
