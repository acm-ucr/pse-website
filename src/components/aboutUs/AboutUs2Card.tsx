import Image, { StaticImageData } from "next/image";

interface AboutUs2CardProps {
  title: string;
  description: string;
  image: StaticImageData;
}

const AboutUs2Card = ({ title, description, image }: AboutUs2CardProps) => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <p className="text-pse-purple-400 font-pse-crimson-text text-4xl">
        {title}
      </p>
      <Image
        src={image}
        alt={title}
        className="mt-[4vh] mb-[4vh] h-[18vh] w-[18vh] object-cover"
      />
      <p className="text-pse-black-100 font-pse-maitree w-[56vh] text-xl">
        {description}
      </p>
    </div>
  );
};

export default AboutUs2Card;
