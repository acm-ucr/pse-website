import Link from "next/link";

interface ButtonProps {
  link: string;
  text: string;
  color: string;
}

const Button = ({ link, text, color }: ButtonProps) => {
  return (
    <div className="relative inline-flex justify-center">
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`font-pse-maitree relative h-full w-full rounded-xl ${color} text-pse-black-100 px-13 py-3 text-[30px] tracking-wider transition-transform hover:scale-110`}
      >
        {text}
      </Link>
    </div>
  );
};

export default Button;
