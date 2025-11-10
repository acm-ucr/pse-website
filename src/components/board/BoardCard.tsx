"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ImLinkedin } from "react-icons/im";

type Props = {
  role: string;
  name: string;
  image: string;
  linkedin: string;
};

const BoardCard: React.FC<Props> = ({ role, name, image, linkedin }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        borderColor: "pse-yellow-100",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)",
      }}
      transition={{ duration: 0.2 }}
      className="bg-pse-purple-200 mt-5 flex w-96 flex-col items-center rounded-lg border-6 border-transparent p-4"
    >
      <div className="relative h-80 w-80 overflow-hidden rounded-xl">
        <Image
          src={image || "/default-profile.png"}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      <div className="mt-4 text-center tracking-wide">
        <div
          className={`font-pse-gfs-didot text-pse-purple-400 font-bold ${
            role === "VP of Administration" ? "text-3xl" : "text-4xl"
          }`}
        >
          {role}
        </div>
        <div
          className={`font-pse-maitree text-pse-purple-500 text-3xl font-normal ${
            name === "Samantha Condevillamar" ? "text-[28px]" : "text-2xl"
          }`}
        >
          {name}
        </div>
      </div>

      <a
        href={linkedin || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6"
      >
        <ImLinkedin className="text-pse-purple-300 h-10 w-10" />
      </a>
    </motion.div>
  );
};

export default BoardCard;
