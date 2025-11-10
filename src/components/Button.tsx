import Link from "next/link";

interface ButtonProps {
  link: string;
  text: string;
  color: string;
}

const Button = ({ link, text, color }: ButtonProps) => {
  return (
    <div className="flex items-center justify-center">
      <Link
        href={link}
        className={
          "font-pse-maitree rounded-xl " +
          color +
          " text-pse-black-100 px-18 py-5 text-3xl tracking-wider"
        }
      >
        {text}
      </Link>
    </div>
  );
};

export default Button;
