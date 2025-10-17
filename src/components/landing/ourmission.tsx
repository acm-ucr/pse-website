import Image from "next/image";
import ourmission from "@/public/landing/ourmission.webp";

const OurMission = () => {
  return (
    <div className="mx-auto grid grid-cols-1 gap-[2vh] pb-[20vh] md:grid-cols-2 md:gap-[32vh] md:pb-[0vh]">
      <div className="relative order-2 h-[25vh] w-full scale-75 md:order-1 md:h-[65vh] md:scale-100">
        <Image
          src={ourmission}
          alt="ourmission"
          className="absolute right-[8vh] z-10 h-[57vh] w-full rounded-2xl object-cover"
        />
        <div className="bg-pse-purple-300 absolute right-[-0vh] bottom-[-38vh] z-0 h-[35vh] w-[50vh] rounded-2xl md:bottom-[2vh]" />
        <div className="bg-pse-purple-200 absolute top-[3vh] -right-[8vh] z-10 h-[11vh] w-[22vh] rounded-2xl" />
      </div>

      <div className="order-1 flex flex-col items-center justify-center text-center md:items-end md:text-right">
        <p className="text-pse-purple-400 font-pse-crimson-text text-6xl">
          Our Mission
        </p>
        <p className="text-pse-black-100 font-pse-maitree mt-[3vh] w-[56vh] text-xl leading-normal md:text-2xl">
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
