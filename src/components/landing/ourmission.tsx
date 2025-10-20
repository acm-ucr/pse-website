import Image from "next/image";
import ourmission from "@/public/landing/ourmission.webp";

const OurMission = () => {
  return (
    <div className="mx-auto grid grid-cols-2 gap-[32vh]">
      <div className="relative order-1 h-[65vh] w-full">
        <Image
          src={ourmission}
          alt="ourmission"
          className="absolute z-10 h-[57vh] w-full rounded-2xl object-cover"
        />
        <div className="bg-pse-purple-300 absolute right-[-8vh] bottom-[2vh] z-0 h-[35vh] w-[50vh] rounded-2xl" />
        <div className="bg-pse-purple-200 absolute top-[3vh] right-[-16vh] z-10 h-[11vh] w-[22vh] rounded-2xl" />
      </div>

      <div className="order-1 flex flex-col items-end justify-center text-right">
        <p className="text-pse-purple-400 font-pse-crimson-text text-6xl">
          Our Mission
        </p>
        <p className="text-pse-black-100 font-pse-maitree mt-[3vh] w-[56vh] text-2xl leading-normal">
          Pi Sigma Epsilon is the only{" "}
          <span className="font-semibold">
            national co-ed professional fraternity
          </span>{" "}
          for students and industry professionals in Marketing, Sales, and
          Management. Our mission is to{" "}
          <span className="font-semibold">
            develop the sales and marketing skills of our members
          </span>{" "}
          through experiential learning and professional networking.
        </p>
      </div>
    </div>
  );
};

export default OurMission;
