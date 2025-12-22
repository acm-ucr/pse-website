import Image from "next/image";
import PseGroup from "@/public/pse-group.webp";
import Button from "@/components/landing/Button";

export default function InterestSection() {
  return (
    <div className="mx-auto flex w-[90vw] flex-col justify-center gap-14 bg-white px-4 py-12 text-center md:max-w-screen-xl md:flex-row md:text-left">
      <div className="flex-1 space-y-9">
        <p className="font-pse-maitree mt-4 text-xl text-black md:text-lg">
          We are open to students of all majors who are passionate about
          professional development in marketing, sales, and management. We host
          workshops, competitions, networking events, and social gatherings.
        </p>

        <div className="flex flex-col items-center gap-11 text-center md:flex-row md:gap-22">
          <p className="text-pse-purple-200 font-pse-crimson-text text-5xl font-semibold">
            Interested?
          </p>
          <Button
            link="https://docs.google.com/forms/d/e/1FAIpQLSco0HkuBMDgfyNt2JmmyuYf9OYI5aGxlGIkl4B9omNPD74zWw/viewform"
            text="Get Involved!"
            color="bg-pse-purple-400 text-white hover:opacity-90"
          />
        </div>
      </div>

      <div className="flex items-center justify-center md:w-[45%] md:gap-8">
        <div className="bg-pse-yellow-100 hidden h-58 w-2 md:block"></div>
        <Image
          src={PseGroup}
          alt="PSE members at tabling event"
          width={280}
          height={280}
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  );
}
