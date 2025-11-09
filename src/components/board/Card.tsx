import Image from "next/image";
import Link from "next/link";
import linkedinImage from "@/public/aboutus/linkedin.webp";

interface CardProps {
  image: string;
  role: string;
  name: string;
  linkedin: string;
}

const Card = ({ image, role, name, linkedin }: CardProps) => {
  return (
    <div className="flex flex-col justify-center">
      <Image src={image} alt="picture" width={301} height={264} />
      <p className="font-pse-crimson-text text-center text-[40px]">{role}</p>
      <p className="font-pse-maitree text-center">{name}</p>
      <Link href={linkedin}>
        <Image
          src={linkedinImage}
          alt="linkedin"
          className="h-[43px] w-[43px]"
        />
      </Link>
    </div>
  );
};

export default Card;
