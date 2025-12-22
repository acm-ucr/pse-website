import Image, { StaticImageData } from "next/image";

interface TestimonialProps {
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
  reverse = false,
}: TestimonialProps) => {
  return (
    <div
      className={`flex w-full items-start gap-10 py-12 ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <div className="flex-shrink-0">
        <Image
          src={image}
          alt={`${name} portrait`}
          width={180}
          height={180}
          className="border-pse-purple-200 rounded-full border-4 object-cover"
        />
      </div>

      <div className={`flex-1 ${reverse ? "text-right" : "text-left"}`}>
        <p className="text-pse-purple-400 font-pse-crimson-text mb-2 text-xl">
          {name}, {classInfo}
        </p>

        <p className="font-pse-maitree text-pse-black-100 bg-pse-purple-150 max-w-[80ch] rounded-lg p-6 text-lg leading-relaxed">
          {quote}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
