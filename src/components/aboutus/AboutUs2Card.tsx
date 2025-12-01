import Image, { StaticImageData } from "next/image";

interface AboutUs2CardProps {
  title: string;
  description: string;
  image: StaticImageData;
}

const AboutUs2Card = ({ title, description, image }: AboutUs2CardProps) => {
  return (
    <div className="mx-4 flex h-full flex-col items-center justify-start text-center md:mx-0">
      <p className="text-pse-purple-400 font-pse-crimson-text text-4xl">
        {title}
      </p>
      <Image
        src={image}
        alt={title}
        className="mt-[4vh] mb-[4vh] h-[18vh] w-[18vh] object-cover"
      />
      <p className="text-pse-black-100 font-pse-maitree mx-auto max-w-md text-lg md:text-xl">
        {description}
      </p>
    </div>
  );
};

export default AboutUs2Card;
