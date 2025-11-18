import AWS from "@/public/about/AWS.webp";
import Gartner from "@/public/about/Gartner.webp";
import Meta from "@/public/about/Meta.webp";
import NY from "@/public/about/NY.webp";
import Principal from "@/public/about/Principal.webp";
import UPS from "@/public/about/UPS.webp";
import Image from "next/image";

export default function OurPartners() {
  return (
    <div className="bg-pse-purple-400 flex justify-center px-6 py-8 text-white">
      <div className="flex w-full max-w-6xl flex-col gap-8 md:flex-row md:items-center">
        <div className="text-center md:w-1/2 md:text-left">
          <p className="text-pse-yellow-100 font-pse-gfs-didot mb-4 text-5xl md:text-7xl">
            Our Partners
          </p>
          <p className="font-pse-lato max-w-md text-base leading-relaxed md:text-lg">
            PSE offers direct access to national partners, creating pathways for
            career advancement and opportunities to learn from industry
            professionals. Grow through valuable experiences like guest
            speakers, company tours, and hands-on engagement.
          </p>
        </div>
        <div className="md:w-1/2">
          <div className="grid grid-cols-3 place-items-center gap-x-4 gap-y-8 md:gap-x-16 md:gap-y-10">
            <Image src={UPS} alt="UPS" className="object-contain" />
            <Image src={Gartner} alt="Gartner" className="object-contain" />
            <Image src={Meta} alt="Meta" className="object-contain" />
            <Image src={Principal} alt="Principal" className="object-contain" />
            <Image
              src={NY}
              alt="New York Mets"
              className="w-24 object-contain"
            />
            <Image src={AWS} alt="AWS" className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}
