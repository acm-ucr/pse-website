import Image, { StaticImageData } from "next/image";

export interface TestimonialProps {
  name: string;
  classInfo: string;
  quote: string;
  image: StaticImageData;
  reverse?: boolean; // optional: flip layout for alternating sides
}

const TestimonialCard = ({
  name,
  classInfo,
  quote,
  image,
  reverse,
}: TestimonialProps) => {
  return (
    <div
      className={`flex items-center justify-between gap-10 py-10 ${
        reverse ? "flex-row-reverse text-right" : "text-left"
      }`}
    >
      <div className="flex-1">
        <h3 className="text-pse-purple-400 font-pse-crimson-text mb-2 text-2xl">
          {name}, {classInfo}
        </h3>
        <p className="text-pse-black-100 font-pse-maitree bg-pse-purple-150 max-w-[80ch] text-lg leading-relaxed">
          “{quote}”
        </p>
      </div>

      <div className="flex-shrink-0">
        <Image
          src={image}
          alt={`${name} portrait`}
          width={180}
          height={180}
          className="border-pse-purple-200 rounded-full border-4 object-cover"
        />
      </div>
    </div>
  );
};

export default TestimonialCard;
