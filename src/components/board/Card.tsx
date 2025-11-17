import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import linkedinImage from "@/public/aboutus/linkedin.webp";

interface CardProps {
  image: StaticImageData;
  role: string;
  name: string;
  linkedin: string;
}

const Card = ({ image, role, name, linkedin }: CardProps) => {
  return (
    <div className="bg-pse-purple-200 mt-5 flex w-96 flex-col items-center justify-center rounded-lg">
      <div className="relative mt-6 flex h-80 w-80 items-center justify-center">
        <Image src={image} alt="picture" fill className="rounded-lg" />
      </div>
      <p className="font-pse-crimson-text text-pse-purple-400 mt-4 text-center text-4xl font-bold">
        {role}
      </p>
      <p className="font-pse-maitree text-pse-purple-500 text-3xl font-normal">
        {name}
      </p>
      <Link href={linkedin}>
        <Image
          src={linkedinImage}
          alt="linkedin"
          className="mt-6 mb-3 h-[43px] w-[43px]"
        />
      </Link>
    </div>
  );
};

export default Card;
