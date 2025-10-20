import Link from "next/link";

const JoinUsButton = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Link
        href="@/join-us"
        className="font-pse-gfs-didot rounded-xl bg-[#FFC653] px-18 py-5 text-3xl tracking-wider text-[#2A2A2A]"
      >
        JOIN US!
      </Link>
    </div>
  );
};

export default JoinUsButton;
