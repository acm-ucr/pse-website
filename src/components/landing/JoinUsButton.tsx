import Link from "next/link";

const JoinUsButton = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Link
        href="@/join-us"
        className="font-pse-maitree rounded-xl bg-pse-yellow-100 px-18 py-5 text-3xl tracking-wider text-pse-black-100"
      >
        JOIN US!
      </Link>
    </div>
  );
};

export default JoinUsButton;
