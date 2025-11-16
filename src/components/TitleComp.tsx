import Image from "next/image";
import titlecomp from "@/../public/about/titlecomp.webp";

interface TitleProp {
  title: string;
}

const TitleComp = (props: TitleProp) => {
  return (
    <div className="relative flex h-[27vh] w-full items-center justify-center overflow-hidden">
      <Image
        src={titlecomp}
        alt="TitleComp"
        fill
        className="object-cover object-bottom"
      />
      <p className="font-pse-crimson-text relative z-10 text-center text-8xl text-white">
        {props.title}
      </p>
    </div>
  );
};

export default TitleComp;
