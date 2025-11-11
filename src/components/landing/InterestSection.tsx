import Image from "next/image";
import Button from "@/components/landing/Button";

export default function InterestSection() {
  return (
    <div className="mx-auto flex max-w-screen-xl flex-col justify-center gap-14 bg-white px-4 py-12 md:flex-row">
      <div className="flex-1 space-y-9">
        <p className="mt-4 text-lg leading-relaxed text-black">
          We are open to students of all majors who are passionate about
          professional development in marketing, sales, and management. We host
          workshops, competitions, networking events, and social gatherings.
        </p>

        <div className="flex items-center gap-22">
          <p className="text-pse-purple-200 text-4xl font-semibold">
            Interested?
          </p>
          <Button
            link="/get-involved"
            text="Get Involved!"
            color="bg-pse-purple-400 text-white hover:opacity-90"
          />
        </div>
      </div>

      <div className="flex items-center justify-center gap-8 md:w-[45%]">
        <div className="bg-pse-yellow-100 h-58 w-2"></div>
        <Image
          src="/pse-group.webp"
          alt="PSE members at tabling event"
          width={280}
          height={280}
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  );
}
