"use client";
import BoardCard from "@/components/board/BoardCard";

const boardMembers = [
  {
    role: "President",
    name: "Cassidy Yin",
    image: "/board/cassidy.jpg",
    linkedin: "https://www.linkedin.com/in/cassidy-yin-91ab67217",
  },

  {
    role: "Secretary",
    name: "Benjamin Lewis",
    image: "/board/benjamin.jpg",
    linkedin: "https://www.linkedin.com/in/benjaminlewis5505",
  },

  {
    role: "VP of HR",
    name: "Timothy Yeon",
    image: "/board/timothy.jpg",
    linkedin: "https://www.linkedin.com/in/timothy-yeon",
  },

  {
    role: "VP of HR",
    name: "Leanne Chin",
    image: "/board/leanne.jpg",
    linkedin: "https://www.linkedin.com/in/leanne-chin-b276b6335",
  },

  {
    role: "VP of Administration",
    name: "Clair Kang",
    image: "/board/clair.jpg",
    linkedin: "https://www.linkedin.com/in/clairckang",
  },

  {
    role: "VP of Finance",
    name: "Ashley Vo",
    image: "/board/ashley.jpg",
    linkedin: "https://www.linkedin.com/in/ashleyvo2004",
  },

  {
    role: "VP of Marketing",
    name: "Matthew Rho",
    image: "/board/matthew.jpg",
    linkedin: "https://www.linkedin.com/in/matrho",
  },

  {
    role: "VP of Pro. Dev.",
    name: "Samantha Condevillamar",
    image: "/board/samantha.jpg",
    linkedin: "https://www.linkedin.com/in/samantha-lei-conde",
  },

  {
    role: "VP of PR",
    name: "Kassidy Quan",
    image: "/board/kassidy.jpg",
    linkedin: "https://www.linkedin.com/in/kassidy-quan",
  },

  {
    role: "VP of DEI",
    name: "Noah Castro",
    image: "/board/noah.jpg",
    linkedin: "https://www.linkedin.com/in/noah-castro-61525732b",
  },
];

const BoardGrid: React.FC = () => {
  return (
    <div className="grid h-full w-auto grid-cols-1 justify-items-center gap-14 pb-10 sm:grid-cols-2 md:grid-cols-3">
      {boardMembers.map((member, index) => (
        <BoardCard key={index} {...member} />
      ))}
    </div>
  );
};
export default BoardGrid;
