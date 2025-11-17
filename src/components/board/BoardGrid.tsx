"use client";
import BoardCard from "@/components/board/BoardCard";
import Cassidy from "@/public/board/cassidy.webp";
import Benjamin from "@/public/board/benjamin.webp";
import Timothy from "@/public/board/timothy.webp";
import Leanne from "@/public/board/leanne.webp";
import Clair from "@/public/board/clair.webp";
import Ashley from "@/public/board/ashley.webp";
import Matthew from "@/public/board/matthew.webp";
import Samantha from "@/public/board/samantha.webp";
import Kassidy from "@/public/board/kassidy.webp";
import Noah from "@/public/board/noah.webp";

const boardMembers = [
  {
    role: "President",
    name: "Cassidy Yin",
    image: Cassidy,
    linkedin: "https://www.linkedin.com/in/cassidy-yin-91ab67217",
  },

  {
    role: "Secretary",
    name: "Benjamin Lewis",
    image: Benjamin,
    linkedin: "https://www.linkedin.com/in/benjaminlewis5505",
  },

  {
    role: "VP of HR",
    name: "Timothy Yeon",
    image: Timothy,
    linkedin: "https://www.linkedin.com/in/timothy-yeon",
  },

  {
    role: "VP of HR",
    name: "Leanne Chin",
    image: Leanne,
    linkedin: "https://www.linkedin.com/in/leanne-chin-b276b6335",
  },

  {
    role: "VP of Administration",
    name: "Clair Kang",
    image: Clair,
    linkedin: "https://www.linkedin.com/in/clairckang",
  },

  {
    role: "VP of Finance",
    name: "Ashley Vo",
    image: Ashley,
    linkedin: "https://www.linkedin.com/in/ashleyvo2004",
  },

  {
    role: "VP of Marketing",
    name: "Matthew Rho",
    image: Matthew,
    linkedin: "https://www.linkedin.com/in/matrho",
  },

  {
    role: "VP of Pro. Dev.",
    name: "Samantha Condevillamar",
    image: Samantha,
    linkedin: "https://www.linkedin.com/in/samantha-lei-conde",
  },

  {
    role: "VP of PR",
    name: "Kassidy Quan",
    image: Kassidy,
    linkedin: "https://www.linkedin.com/in/kassidy-quan",
  },

  {
    role: "VP of DEI",
    name: "Noah Castro",
    image: Noah,
    linkedin: "https://www.linkedin.com/in/noah-castro-61525732b",
  },
];

const BoardGrid: React.FC = () => {
  return (
    <div className="grid h-full w-auto grid-cols-1 justify-items-center gap-14 pb-5 sm:grid-cols-2 md:grid-cols-3">
      {boardMembers.map((member, index) => (
        <BoardCard key={index} {...member} />
      ))}
    </div>
  );
};
export default BoardGrid;
