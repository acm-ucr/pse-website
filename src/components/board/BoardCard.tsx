"use client";

import Image from "next/image";
import { motion } from "motion/react";

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
        borderColor: "#ffc653",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)",
      }}
      transition={{ duration: 0.2 }}
      className="mt-5 flex flex-col items-center rounded-lg border-6 border-transparent bg-[#EDE1FF] p-4"
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
          className={`font-pse-gfs-didot font-bold text-[#9F7BDE] ${
            role === "VP of Administration" ? "text-3xl" : "text-4xl"
          }`}
        >
          {role}
        </div>
        <div
          className={`font-pse-maitree text-3xl font-light text-[#3D2C59] ${
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
        <Image
          src="/board/LinkedIn.webp"
          width={40}
          height={40}
          alt="LinkedIn"
        />
      </a>
    </motion.div>
  );
};

export default BoardCard;
