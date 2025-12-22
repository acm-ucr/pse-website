"use client";
import BoardCard from "@/components/board/Card";
import { boardMembers } from "@/data/board";

const BoardGrid: React.FC = () => {
  return (
    <div className="flex h-full w-full flex-wrap justify-center gap-x-32 gap-y-20 px-4 py-10">
      {boardMembers.map((member, index) => (
        <BoardCard key={index} {...member} />
      ))}
    </div>
  );
};
export default BoardGrid;
