import Image, { StaticImageData } from "next/image";

export interface TestimonialProps {
  name: string;
  classInfo: string;
  quote: string;
  image: StaticImageData;
  reverse?: boolean;
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
      className={`items-justifly flex justify-between gap-10 py-10 ${
        reverse ? "flex-row-reverse" : "text-justify"
      }`}
    >
      <div className="flex-1">
        <h3 className="text-pse-purple-400 font-pse-crimson-text mb-2 text-3xl">
          {name}, {classInfo}
        </h3>
        <p className="text-pse-black-100 font-pse-maitree bg-pse-purple-150 text-lg whitespace-pre-line">
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
