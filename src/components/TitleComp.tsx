import Image from "next/image";
import titlecomp from "@/../public/about/titlecomp.webp";

interface TitleProp {
  title: string;
}

const TitleComp = (props: TitleProp) => {
  return (
    <div className="relative flex h-[20vh] w-full items-center justify-center overflow-hidden md:h-[27vh]">
      <Image
        src={titlecomp}
        alt="TitleComp"
        fill
        className="object-cover object-bottom"
      />
      <p className="font-pse-crimson-text relative z-10 mx-4 text-center text-6xl text-white md:text-8xl">
        {props.title}
      </p>
    </div>
  );
};

export default TitleComp;
