import Link from "next/link";

interface JoinUsButtonProps {
  link: string;
  text: string;
  color: string;
}

const JoinUsButton = ({ link, text, color }: JoinUsButtonProps) => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
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

export default JoinUsButton;
